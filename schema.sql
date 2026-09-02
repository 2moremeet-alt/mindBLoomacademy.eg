-- MindBloom Cloud — Supabase schema + RLS
-- شغّلي الملف مرة واحدة من: Supabase Dashboard > SQL Editor

create extension if not exists pgcrypto;

-- حسابات الإدارة المسموح لها بفتح لوحة التحكم.
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- نسخة واحدة مركزية من إعدادات الموقع.
create table if not exists public.site_config (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- بيانات الاستمارات. الـ PDF نفسه محفوظ في bucket خاص، وهنا يُحفظ مساره فقط.
create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('تقييم مجاني', 'تسجيل طفل', 'استبيان رضا')),
  name text not null default '',
  phone text not null default '',
  source text not null default '',
  payload jsonb not null default '{}'::jsonb,
  pdf_path text,
  pdf_name text,
  status text not null default 'جديد' check (status in ('جديد', 'تم التواصل', 'مكتمل', 'ملغي')),
  created_at timestamptz not null default now()
);

create index if not exists submissions_created_at_idx on public.submissions (created_at desc);
create index if not exists submissions_status_idx on public.submissions (status);

insert into public.site_config (id, data)
values ('main', '{}'::jsonb)
on conflict (id) do nothing;

-- دالة صلاحية الإدارة. SECURITY DEFINER يمنع التحايل على جدول المديرين.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admin_users
    where user_id = auth.uid() and active = true
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

alter table public.admin_users enable row level security;
alter table public.site_config enable row level security;
alter table public.submissions enable row level security;

-- إعادة تشغيل الملف بأمان: احذف السياسات المسماة ثم أنشئها من جديد.
drop policy if exists "admin can view own admin row" on public.admin_users;
create policy "admin can view own admin row"
on public.admin_users for select to authenticated
using (user_id = auth.uid() and active = true);

drop policy if exists "public can read site config" on public.site_config;
create policy "public can read site config"
on public.site_config for select to anon, authenticated
using (true);

drop policy if exists "admin can insert site config" on public.site_config;
create policy "admin can insert site config"
on public.site_config for insert to authenticated
with check (public.is_admin());

drop policy if exists "admin can update site config" on public.site_config;
create policy "admin can update site config"
on public.site_config for update to authenticated
using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admin can delete site config" on public.site_config;
create policy "admin can delete site config"
on public.site_config for delete to authenticated
using (public.is_admin());

-- لا توجد أي سياسة anon على submissions: الزائر لا يستطيع قراءة بيانات أي طفل.
drop policy if exists "admin can read submissions" on public.submissions;
create policy "admin can read submissions"
on public.submissions for select to authenticated
using (public.is_admin());

drop policy if exists "admin can update submissions" on public.submissions;
create policy "admin can update submissions"
on public.submissions for update to authenticated
using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admin can delete submissions" on public.submissions;
create policy "admin can delete submissions"
on public.submissions for delete to authenticated
using (public.is_admin());

-- صلاحيات PostgREST (RLS يظل هو الحاجز الفعلي).
grant select on public.site_config to anon, authenticated;
grant insert, update, delete on public.site_config to authenticated;
grant select, update, delete on public.submissions to authenticated;
grant select on public.admin_users to authenticated;

-- Buckets: صور الموقع عامة، وملفات الاستمارات خاصة.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'site-media', 'site-media', true, 8388608,
  array['image/jpeg','image/png','image/webp','image/gif']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'submission-pdfs', 'submission-pdfs', false, 12582912,
  array['application/pdf']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- صور الموقع: قراءة عامة، والكتابة للمدير فقط.
drop policy if exists "public can read site media" on storage.objects;
create policy "public can read site media"
on storage.objects for select to anon, authenticated
using (bucket_id = 'site-media');

drop policy if exists "admin can insert site media" on storage.objects;
create policy "admin can insert site media"
on storage.objects for insert to authenticated
with check (bucket_id = 'site-media' and public.is_admin());

drop policy if exists "admin can update site media" on storage.objects;
create policy "admin can update site media"
on storage.objects for update to authenticated
using (bucket_id = 'site-media' and public.is_admin())
with check (bucket_id = 'site-media' and public.is_admin());

drop policy if exists "admin can delete site media" on storage.objects;
create policy "admin can delete site media"
on storage.objects for delete to authenticated
using (bucket_id = 'site-media' and public.is_admin());

-- PDFs: لا قراءة عامة إطلاقًا. المدير يحصل على رابط موقّع مؤقت.
drop policy if exists "admin can read submission pdfs" on storage.objects;
create policy "admin can read submission pdfs"
on storage.objects for select to authenticated
using (bucket_id = 'submission-pdfs' and public.is_admin());

drop policy if exists "admin can delete submission pdfs" on storage.objects;
create policy "admin can delete submission pdfs"
on storage.objects for delete to authenticated
using (bucket_id = 'submission-pdfs' and public.is_admin());

-- بعد إنشاء مستخدم الإدارة من Authentication > Users، شغّلي السطرين التاليين
-- بعد استبدال البريد ببريدك الحقيقي:
-- insert into public.admin_users (user_id, email)
-- select id, email from auth.users where lower(email) = lower('ADMIN_EMAIL_HERE')
-- on conflict (user_id) do update set active = true, email = excluded.email;
