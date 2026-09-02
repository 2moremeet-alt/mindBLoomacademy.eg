# MindBloom Cloud — نسخة Supabase + GitHub Pages

هذه النسخة تحوّل الموقع من تخزين داخل المتصفح إلى نظام مركزي:

- إعدادات الموقع محفوظة في **Supabase PostgreSQL** وتظهر لكل الزوار.
- دخول لوحة الإدارة عبر **Supabase Auth**، وليس بكلمة مرور موجودة في JavaScript.
- الطلبات والاستمارات محفوظة مركزيًا ولا يستطيع الزائر قراءتها.
- ملفات PDF محفوظة في **Storage خاص**، وتُفتح للمدير برابط موقّع صالح لمدة 10 دقائق فقط.
- صور الموقع التي ترفع من لوحة التحكم محفوظة في **Storage عام** وتظهر على كل الأجهزة.
- `localStorage` غير مستخدم لحفظ الإعدادات أو الطلبات. يُستخدم `sessionStorage` فقط مؤقتًا لجلسة دخول المدير وينتهي بإغلاق التبويب أو تسجيل الخروج.

> مهم: لا تضعي أبدًا `Secret key` أو `service_role` داخل ملفات الموقع أو GitHub. الملف `supabase-config.js` يأخذ **Publishable key** فقط، وهو مفتاح مخصص للواجهة العامة؛ الحماية الفعلية تتم عبر RLS.

---

## 1) إنشاء مشروع Supabase

1. أنشئي مشروعًا جديدًا في Supabase.
2. من **SQL Editor** افتحي الملف:
   `supabase/schema.sql`
3. شغّلي الملف كاملًا مرة واحدة.

سينشئ:

- `site_config`
- `submissions`
- `admin_users`
- bucket عام باسم `site-media`
- bucket خاص باسم `submission-pdfs`
- سياسات RLS التي تمنع الزوار من قراءة الطلبات وملفات الأطفال.

---

## 2) إنشاء حساب المدير

1. من **Authentication → Users → Add user** أنشئي مستخدمًا بالبريد وكلمة مرور قوية، وفعّلي **Auto Confirm User**.
2. عودي إلى SQL Editor وشغّلي هذا الاستعلام بعد استبدال البريد:

```sql
insert into public.admin_users (user_id, email)
select id, email
from auth.users
where lower(email) = lower('YOUR_ADMIN_EMAIL@example.com')
on conflict (user_id)
do update set active = true, email = excluded.email;
```

أي مستخدم Auth غير موجود في `admin_users` لن يستطيع فتح لوحة الإدارة أو قراءة الطلبات.

---

## 3) ربط ملفات الموقع بالمشروع

من نافذة **Connect** أو **Settings → API Keys** انسخي:

- Project URL
- Publishable key بالشكل `sb_publishable_...`

ثم عدّلي `supabase-config.js`:

```js
window.MB_CLOUD = Object.freeze({
  supabaseUrl: 'https://PROJECT_REF.supabase.co',
  publishableKey: 'sb_publishable_...',
  functionName: 'submit-form',
  siteConfigId: 'main',
  turnstileSiteKey: ''
});
```

الـPublishable key مسموح بوجوده في المتصفح. **لا تستخدمي Secret key هنا.**

---

## 4) نشر Edge Function الخاصة بالاستمارات

من جهازك، داخل مجلد المشروع `mindbloom-cloud`:

```bash
npx supabase@latest login
npx supabase@latest link --project-ref YOUR_PROJECT_REF
npx supabase@latest functions deploy submit-form --no-verify-jwt
```

الخيار `--no-verify-jwt` مطلوب لأن الدالة تستخدم نظام المفاتيح الجديد، ثم يتحقق `@supabase/server` داخل الدالة من الـPublishable key المرسل في `apikey`.

بعد معرفة رابط GitHub Pages، قيدي المصادر المسموح لها باستدعاء الدالة. مثال:

```bash
npx supabase@latest secrets set \
  ALLOWED_ORIGINS="https://YOUR_USERNAME.github.io,https://www.YOUR_DOMAIN.com"
```

اكتبي **origin فقط** بدون مسار المستودع. مثلًا إذا كان الرابط:
`https://name.github.io/mindbloom/` فالقيمة هي `https://name.github.io`.

---

## 5) حماية النماذج من السبام — موصى بها قبل الإطلاق

الدالة تدعم Cloudflare Turnstile بالفعل:

1. أنشئي Turnstile widget وأضيفي hostname الخاص بالموقع.
2. ضعي **Site key** في `turnstileSiteKey` داخل `supabase-config.js`.
3. خزّني **Secret key** داخل Supabase فقط:

```bash
npx supabase@latest secrets set TURNSTILE_SECRET_KEY="YOUR_TURNSTILE_SECRET"
```

يجب ضبط المفتاحين معًا. أثناء التجربة فقط يمكنك ترك `turnstileSiteKey` فارغًا وعدم إنشاء السر.

---

## 6) النشر على GitHub Pages

1. أنشئي مستودع GitHub.
2. ارفعي **محتويات** مجلد `mindbloom-cloud` إلى جذر المستودع، وليس المجلد الخارجي نفسه.
3. من **Settings → Pages** اختاري النشر من فرع `main` ومجلد `/root`.
4. افتحي `index.html` من رابط Pages.
5. لوحة الإدارة على: `admin.html`.

كل الروابط والمسارات نسبية، لذلك تعمل سواء كان الموقع على نطاق رئيسي أو داخل مسار مستودع GitHub Pages.

---

## 7) أول اختبار بعد الربط

نفّذي بالترتيب:

1. افتحي `admin.html` وسجلي بحساب المدير.
2. عدّلي رسالة في البنر واضغطي **نشر التعديلات لكل الزوار**.
3. افتحي الموقع من نافذة خاصة/Incognito أو هاتف آخر؛ يجب أن يظهر التعديل.
4. املئي استمارة تقييم تجريبية.
5. افتحي تبويب **الطلبات المركزية** في لوحة الإدارة.
6. تأكدي من ظهور الطلب، وغيّري حالته، واضغطي **فتح آمن** لملف PDF.
7. جرّبي رفع صورة من لوحة التحكم ثم نشر التعديلات.

---

## نقل تعديلات النسخة القديمة

إذا كانت لديك تعديلات محفوظة في متصفح النسخة القديمة:

1. افتحي لوحة النسخة القديمة من نفس المتصفح.
2. صدّري نسخة JSON.
3. افتحي لوحة النسخة الجديدة.
4. من **الطلبات المركزية → نسخة احتياطية** اختاري **استيراد JSON ونشره**.

بعدها تصبح Supabase هي مصدر الحقيقة، ولن تحتاجي نقل الملف بين الأجهزة مرة أخرى.

---

## ما تم إصلاحه في الكود

- إزالة `MB.PWD` وكلمة المرور المكشوفة من ملفات الموقع.
- إزالة حفظ الإعدادات والطلبات في `localStorage`.
- جعل تحميل إعدادات الموقع غير متزامنًا من Supabase قبل بناء المحتوى.
- منع الإرسال المكرر الذي كان يحدث مرة من `MB.addSub()` ومرة ثانية من صفحة النموذج.
- تصحيح رفع PDF: النسخة القديمة كانت ترسل صورة PNG Base64 وتسمّيها PDF؛ النسخة الحالية ترفع bytes لملف PDF حقيقي وتتحقق من ترويسة `%PDF-` على الخادم.
- حفظ **كل بيانات** الاستمارات، وليس الملخص فقط.
- توحيد رقم واتساب المصري من `01...` إلى `20...` عند إنشاء رابط `wa.me`.
- إضافة رفع مركزي للصور من لوحة التحكم.
- إضافة حالات للطلبات وتصدير CSV وفتح PDF بروابط مؤقتة.
- إضافة تحديد المصادر المسموح بها ودعم Turnstile.

---

## ملاحظات أمان وخصوصية

- بيانات التسجيل تتضمن بيانات طفل ومعلومات صحية؛ راجعي سياسة الاحتفاظ والخصوصية مع مختص قانوني مناسب قبل الإطلاق.
- لا تجعلي bucket `submission-pdfs` عامًا.
- لا تضيفي سياسة `SELECT` لدور `anon` على جدول `submissions`.
- احتفظي بحساب مدير واحد أو حسابات محدودة، وفعّلي MFA إن كان متاحًا لحسابات الإدارة.
- غيّري فورًا كلمة المرور القديمة التي كانت موجودة في النسخة المنشورة، واحذفي النسخة القديمة من الاستضافة.
- خذي نسخة احتياطية دورية من قاعدة البيانات وفق احتياج العمل.
