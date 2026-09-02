// MindBloom Cloud — public form intake Edge Function (Supabase 2026 API keys)
// config.toml sets verify_jwt=false; @supabase/server validates the Publishable key on `apikey`.
import { withSupabase } from 'npm:@supabase/server';

const TURNSTILE_SECRET = Deno.env.get('TURNSTILE_SECRET_KEY') || '';
const ALLOWED_ORIGINS = (Deno.env.get('ALLOWED_ORIGINS') || '')
  .split(',').map((x) => x.trim()).filter(Boolean);

function cors(req: Request) {
  const origin = req.headers.get('origin') || '';
  const allowed = !ALLOWED_ORIGINS.length || ALLOWED_ORIGINS.includes(origin);
  return {
    allowed,
    headers: {
      'Access-Control-Allow-Origin': allowed ? (origin || '*') : 'null',
      'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Vary': 'Origin',
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
}

function reply(req: Request, body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: cors(req).headers });
}

function cleanText(value: unknown, max = 300) {
  return String(value ?? '').trim().slice(0, max);
}

function safeFilename(value: unknown) {
  const base = cleanText(value, 180)
    .replace(/[\\/:*?"<>|\u0000-\u001f]/g, '-')
    .replace(/\s+/g, ' ')
    .replace(/\.+$/g, '') || 'MindBloom-submission.pdf';
  return base.toLowerCase().endsWith('.pdf') ? base : `${base}.pdf`;
}

async function verifyTurnstile(token: string, ip: string) {
  if (!TURNSTILE_SECRET) return true;
  if (!token) return false;
  const form = new FormData();
  form.set('secret', TURNSTILE_SECRET);
  form.set('response', token);
  if (ip) form.set('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST', body: form
  });
  const out = await res.json().catch(() => ({}));
  return out.success === true;
}

const submit = withSupabase({ auth: 'publishable' }, async (req, ctx) => {
  const c = cors(req);
  if (!c.allowed) return reply(req, { ok: false, error: 'Origin not allowed' }, 403);
  if (req.method !== 'POST') return reply(req, { ok: false, error: 'Method not allowed' }, 405);

  try {
    const body = await req.json();

    // Honeypot: legitimate pages always send an empty value.
    if (body.website) return reply(req, { ok: true }, 200);

    const submission = body.submission || {};
    const type = cleanText(submission.type, 40);
    const allowedTypes = new Set(['تقييم مجاني', 'تسجيل طفل', 'استبيان رضا']);
    if (!allowedTypes.has(type)) return reply(req, { ok: false, error: 'نوع الاستمارة غير صالح' }, 400);

    const payload = submission.data && typeof submission.data === 'object' ? submission.data : {};
    if (JSON.stringify(payload).length > 120000) {
      return reply(req, { ok: false, error: 'بيانات الاستمارة أكبر من المسموح' }, 413);
    }

    const rawBase64 = String(body.pdfBase64 ?? '').trim().replace(/^data:application\/pdf;base64,/, '');
    if (!rawBase64 || rawBase64.length > 16_000_000) {
      return reply(req, { ok: false, error: 'ملف PDF مفقود أو أكبر من المسموح' }, 413);
    }

    const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim();
    if (!await verifyTurnstile(cleanText(body.turnstileToken, 3000), ip)) {
      return reply(req, { ok: false, error: 'تعذر التحقق من أنك مستخدم حقيقي؛ أعيدي المحاولة' }, 400);
    }

    let bytes: Uint8Array;
    try {
      const decoded = atob(rawBase64);
      bytes = Uint8Array.from(decoded, (ch) => ch.charCodeAt(0));
    } catch {
      return reply(req, { ok: false, error: 'ترميز ملف PDF غير صالح' }, 400);
    }
    if (bytes.length < 5 || new TextDecoder().decode(bytes.slice(0, 5)) !== '%PDF-') {
      return reply(req, { ok: false, error: 'الملف المرسل ليس PDF صالحًا' }, 400);
    }

    const admin = ctx.supabaseAdmin;
    const id = crypto.randomUUID();
    const folder = type === 'تسجيل طفل' ? 'registration' : type === 'تقييم مجاني' ? 'evaluation' : 'survey';
    const day = new Date().toISOString().slice(0, 10);
    const pdfPath = `${folder}/${day}/${id}.pdf`;
    const pdfName = safeFilename(body.pdfName);

    const { error: uploadError } = await admin.storage
      .from('submission-pdfs')
      .upload(pdfPath, bytes, {
        contentType: 'application/pdf', cacheControl: '0', upsert: false
      });
    if (uploadError) throw uploadError;

    const { error: insertError } = await admin.from('submissions').insert({
      id,
      type,
      name: cleanText(submission.name, 200),
      phone: cleanText(submission.phone, 40),
      source: cleanText(submission.source, 120),
      payload,
      pdf_path: pdfPath,
      pdf_name: pdfName,
      status: 'جديد'
    });

    if (insertError) {
      await admin.storage.from('submission-pdfs').remove([pdfPath]);
      throw insertError;
    }

    return reply(req, { ok: true, id, receivedAt: new Date().toISOString() }, 201);
  } catch (error) {
    console.error('submit-form:', error);
    return reply(req, { ok: false, error: 'حدث خطأ أثناء الحفظ؛ حاولي مرة أخرى' }, 500);
  }
});

export default {
  fetch(req: Request) {
    if (req.method === 'OPTIONS') return new Response('ok', { headers: cors(req).headers });
    return submit(req);
  }
};
