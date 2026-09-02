/*
 * MindBloom Cloud — public browser configuration
 * هذه القيم ليست أسرارًا: Supabase Project URL وPublishable key مصممان للاستخدام في المتصفح.
 * الحماية الحقيقية موجودة في RLS وسياسات Storage وEdge Function.
 * ممنوع وضع Secret key أو service_role key في هذا الملف أو في GitHub.
 */
window.MB_CLOUD = Object.freeze({
  supabaseUrl: 'https://ignfopsdmbdeokkshiyg.supabase.co',
  publishableKey: 'sb_publishable__pQtgKQx_v7rHHY6B4wJpw_sQ7O_OTj',
  functionName: 'submit-form',
  siteConfigId: 'main',

  /* اختياري لكن موصى به قبل الإطلاق العام لمقاومة الرسائل الآلية. */
  turnstileSiteKey: ''
});
