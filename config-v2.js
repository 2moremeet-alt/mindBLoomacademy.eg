/* ═══════════════════════════════════════════════════════════════
   MindBloom Cloud — إعدادات مركزية عبر Supabase
   مصدر الحقيقة: PostgreSQL. localStorage غير مستخدم للإعدادات أو الطلبات.
   ═══════════════════════════════════════════════════════════════ */
const MB = {

  defaults: {
    banner: {
      interval: 8,
      messages: [
        "🎈 أسبوع الافتتاح: هدية لأول ٢٠ زيارة — زوري المكان بنفسك",
        "🎁 التقييم المجاني: أول سبت من كل شهر لأول ٥ أطفال — بموعد مسبق يتم تحديده من الإدارة",
        "💛 باقة الاطمئنان: الشهر الأول بنص السعر لسكان المنطقة",
        "🗣️ التخاطب + تعديل السلوك + صعوبات التعلم… في مكان واحد بالإبراهيمية"
      ]
    },

    texts: {
      heroChip: "🎈 في الإبراهيمية — الإسكندرية",
      heroTitle: 'نرعى طفلك اليوم…<br>و<em>نبني شخصيته</em> للمستقبل 🌸',
      heroSub: "منظومة متكاملة تحت سقف واحد: حضانة وبيبي زون، تأسيس أكاديمي، مركز تأهيل (تخاطب · تعديل سلوك · صعوبات تعلم · دمج)، كورسات وتحفيظ قرآن — بإشراف أخصائيين مرخصين وشراكة حقيقية مع أسرتك.",
      heroCta1: "🎁 احجزي موعد تقييم مجاني",
      deptsTag: "أقسام الأكاديمية",
      deptsTitle: "٤ أقسام… تحت سقف واحد 🏠",
      deptsSub: "بدل ما تروحي أماكن مختلفة، كل ما طفلك محتاجه في مكان واحد — وفريق واحد بيتابعه من أول سنة لحد ما يدخل مدرسته بثقة.",
      programsSub: "كل طفل في وقته وله وظيفته — من أول مشية لحد إنترفيو المدرسة.",
      stepsTitle: "نظامنا واضح وشفاف 🤝",
      stepsSub: "عارفة دايمًا: إحنا وصلنا لإيه؟ وإيه اللي بيتعمل؟ والخطوة الجاية إيه؟",
      whySub: "٦ أسباب بتفرق بين \"حضانة\" و\"منظومة تحت سقف واحد\"",
      quizSub: "اختاري الإجابة اللي بتشبه طفلك — وهنقولك القسم اللي يوافق عليه + الخطوة الجاية.",
      galTitle: "شوفي المكان بعينك 📸",
      galSub: "كل ركن فيه هدف — والراحة والأمان في كل خطوة.",
      teamTitle: "فريقنا الأكاديمي 🌟",
      teamSub: "وجوه حارة، مؤهلات واضحة، وترخيص مزاولة — لأن أطفالكم في أيدٍ بتفهمهم.",
      testiTitle: "قصص من قلب MindBloom 🥹",
      testiSub: "كل قصة بتتحول لنصيحة — وبننشرها بإذن الأهالي.",
      offersTitle: "عروضنا 💛",
      offersSub: "ابدئي بتقييم مجاني بموعد مسبق… وبعدين اختاري اللي يناسب عيلتك.",
      faqTitle: "أسئلة بتوصلنا كتير ❓",
      faqSub: "وأي سؤال مش لقيتيه — راسلينا واتساب وهنرد عليكم في أقرب وقت.",
      contactTitle: "تواصلي معانا 💌",
      contactSub: "أي سؤال = رد في أقرب وقت. والاستفسار الجاد بيتتبع معاه حتى لو بعد أيام.",
      footerAbout: "نرعى طفلك اليوم ونبني شخصيته للمستقبل"
    },

    contact: {
      addr: "١٤ شارع الأحقاف — الإبراهيمية — الإسكندرية",
      area: "قرب [أقرب معلومة — ضيفيها من لوحة التحكم]",
      day: "السبت – الخميس",
      open1: "صباحًا: ٨ ص – ٣ م",
      open2: "مساءً (كورسات): ٤ – ٩ م",
      sat: "أول سبت من كل شهر — ١٠ ص – ٢ م (بموعد مسبق)",
      wa: "٠١٠٢٧٠٥٢٣٩٧",
      waLink: "https://wa.me/201027052397",
      tel: "٠٣-٥٩٣٠٧٨٠",
      telLink: "tel:+2035930780",
      map: "https://maps.google.com/?q=14+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D8%A3%D8%AD%D9%82%D8%A7%D9%81+%D8%A7%D9%84%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85%D9%8A%D8%A9+%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9",
      fb: "https://www.facebook.com/MindBloom14Alex",
      ig: "https://www.instagram.com/mindbloom14alex/",
      tt: "https://www.tiktok.com/@mindbloom14alex"
    },

    quick: [
      { icon: "🎁", title: "تقييم مجاني", sub: "أول سبت من كل شهر — بموعد مسبق", cta: "احجزي مكانك", href: "evaluation.html" },
      { icon: "📝", title: "تسجيل طفل", sub: "افتحي ملف طفلك في ٥ دقايق", cta: "ابدئي التسجيل", href: "register.html" },
      { icon: "🎨", title: "الكورسات وقرآن", sub: "إنجليزي · ماث · روبوتكس · فنون", cta: "شوفي البرامج", href: "#programs" },
      { icon: "📍", title: "العنوان والمواعيد", sub: "الإبراهيمية — الإسكندرية", cta: "كيف توصليلنا", href: "#contact" }
    ],

    depts: [
      { cls: "d1", icon: "👶", title: "الحضانة والبيبي زون", age: "من سنة كاملة",
        items: ["روتين يومي دافي: أغاني · حركة · قصة · أكل صحي", "أنشطة مونتيسوري تنمي الحواس والمهارات", "تقرير شهري + رسالة واتساب لمتابعة التطور", "تجهيز KG وبرامج تنمية مهارات"] },
      { cls: "d2", icon: "📚", title: "القسم الأكاديمي", age: "٢.٥ – ٦ سنين",
        items: ["تأسيس عربي (قراءة/كتابة) + ماث بالخامات + فونكس إنجليزي", "تأهيل لدخول المدارس + تقارير جاهزية", "تدريب إنترفيوهات (حكومي/إنترناشونال) بمحاكاة كاملة", "دعم صعوبات التعلم من سن ٥ سنوات"] },
      { cls: "d3", icon: "🧠", title: "مركز التأهيل", age: "من سنتين",
        items: ["🗣️ تخاطب: تأخر الكلام · مخارج الأصوات · الطلاقة (من سنتين)", "🧠 تعديل سلوك: عناد · عصبية · فرط حركة · خوف (من ٣ سنين)", "✏️ صعوبات تعلم: قراءة · كتابة · حساب · انتباه (من ٥ سنين)", "💙 ذوي الهمم: خطة تأهيل فردية + دمج تدريجي حسب الجاهزية"] },
      { cls: "d4", icon: "🎨", title: "السنتر التعليمي", age: "٣ – ١٢ سنة",
        items: ["إنجليزي · فرنساوي · ماث (يوسي ماس/سوروبان)", "روبوتكس وبرمجة · فنون وخط عربي · موسيقى", "📿 تحفيظ قرآن: براعم / حافظ / متقنين + نظام \"نجوم MindBloom\"", "حلقات مسائية لأطفال المنطقة — حتى لو مش في حضانتنا"] }
    ],

    programs: [
      { stage: "🌱 التودلر", age: "سنة – ٢.٥", prog: "لغة وحكي · حركة دقيقة وكبيرة · تنمية اجتماعية", goal: "استقلالية أولى + كلام وتفاعل" },
      { stage: "🎨 KG1", age: "٢.٥ – ٤", prog: "فونكس مبسط · أرقام وألوان · مونتيسوري · فنون", goal: "جاهزية المدرسة" },
      { stage: "✏️ KG2 / تأسيس", age: "٤ – ٦", prog: "قراءة وكتابة عربي · فونكس كامل · ماث بالخامات", goal: "دخول المدرسة بثقة وتميّز" },
      { stage: "🎓 تأهيل للمدارس", age: "٤ – ٦", prog: "محاكاة إنترفيوهات + تدريب على الأسئلة + تقرير جاهزية", goal: "نجاح الإنترفيو من أول مرة" },
      { stage: "🗣️ تخاطب", age: "من سنتين", prog: "تقييم لغوي ونطقي + جلسات فردية + برنامج منزلي", goal: "نطق سليم وتواصل طبيعي" },
      { stage: "🧠 تعديل سلوك", age: "من ٣ سنين", prog: "تقييم سلوكي + خطة فردية + تدريب الأهل", goal: "سلوكيات بديلة صحية" },
      { stage: "📖 صعوبات تعلم", age: "من ٥ سنين", prog: "تقييم تشخيصي أولي + خطة علاجية + تقارير للمدرسة", goal: "سد الفجوة الدراسية" },
      { stage: "💙 ذوي الهمم", age: "من ٢.٥ سنة", prog: "تقييم شامل + خطة فردية + دمج تدريجي + دعم أسر", goal: "استقلالية ومشاركة" },
      { stage: "📿 تحفيظ قرآن", age: "من ٣ سنين", prog: "مستويات الحفظ + أحكام مبسطة + قصص وتربية", goal: "حفظ + أخلاق + ثقة" },
      { stage: "🎨 السنتر التعليمي", age: "٣ – ١٢ سنة", prog: "لغات · ماث · روبوتكس · فنون · موسيقى", goal: "مهارات إضافية + مواعيد مسائية" }
    ],

    steps: [
      { title: "تقييم شامل", sub: "نسمعنا ونلاحظ طفلك بلعب وحوار — بدون أي التزام" },
      { title: "خطة فردية", sub: "أهداف واضحة وقابلة للقياس" },
      { title: "جلسات منتظمة", sub: "تحت إشراف أخصائيين مرخصين + تدريب عملي للأهل" },
      { title: "متابعة مستمرة", sub: "لقاء دوري + تقرير مكتوب + رسالة واتساب" }
    ],

    why: [
      { icon: "🏠", title: "تحت سقف واحد — تكامل مش تشتت", sub: "حضانة + أكاديمي + تأهيل + كورسات في مكان واحد وبفريق واحد — مش ٣ أماكن و٣ مواعيد و٣ طرق." },
      { icon: "🩺", title: "أخصائيون مرخصون — خطة \"على مقاس الطفل\"", sub: "مش جلسات عامة: تقييم دقيق + أهداف محددة + تدخل حسب الاحتياج مش العمر. الشهادات والتراخيص معروضة." },
      { icon: "🔍", title: "اكتشاف مبكر للتأخر", sub: "المربية بتلاحظ → الأخصائي بيتابع → الخطة بتبدأ في نفس المكان. كل شهر اكتشاف = شهور معالجة بتتوفر." },
      { icon: "🤝", title: "شراكة حقيقية مع الأسرة", sub: "إرشاد + تدريب عملي بسيط بيتطبق في البيت — لأن ده أسرع طريق لنتيجة ثابتة. والأهل مش عميل… ده شريك." },
      { icon: "💙", title: "دمج تدريجي باحترام القدرات", sub: "لأطفالنا ذوي الهمم: بنجهز مهاراتهم خطوة بخطوة وندمجهم حسب جاهزيتهم — بدون ضغط وبدون استعجال." },
      { icon: "💛", title: "الذكاء العاطفي والقيم في قلب المنهج", sub: "مش مجرد \"إضافة\": تسمية المشاعر، القصص، اللعب التمثيلي — نبني طفل فاهم نفسه من أول سنة." }
    ],

    quiz: {
      questions: [
        { q: "طفلك في أي عمر تقريبًا؟", opts: [
          { t: "سنة – ٣ سنين", d: "nursery" }, { t: "٣ – ٥ سنين", d: "kg" },
          { t: "٥ – ٦ سنين", d: "school" }, { t: "أكبر من ٦", d: "center" } ] },
        { q: "إيه أكتر حاجة بتلاحظيها في طفلك؟", opts: [
          { t: "الكلام والنطق 🗣️", d: "speech" }, { t: "السلوك والنوبات 🧠", d: "behavior" },
          { t: "التعلم والانتباه ✏️", d: "learning" }, { t: "مفيش — بس عايزة مكان آمن وجميل 🌸", d: "nursery" } ] },
        { q: "طفلك محتاج…", opts: [
          { t: "رعاية يومية (حضانة)", d: "nursery" }, { t: "تأسيس ليدخل المدرسة", d: "school" },
          { t: "جلسات مع أخصائي", d: "special" }, { t: "كورسات وأنشطة + قرآن", d: "center" } ] },
        { q: "أقرب وصف لشخصية طفلك:", opts: [
          { t: "نشيط وفضولي — محتاج إخراج طاقتة 🏃", d: "center" }, { t: "هادئ — محتاج بيئة آمنة تنميه 🌱", d: "nursery" },
          { t: "حساس وبيلاحظ تفاصيل كتير 💛", d: "special" }, { t: "مجتهد بس محتاج طريقة شرح تناسبه 📚", d: "school" } ] }
      ],
      results: {
        nursery: { big: "👶", t: "قسم الحضانة والبيبي زون", p: "المرحلة المثالية: روتين دافي + مونتيسوري + متابعة شهرية. ولو ظهر أي ملاحظة لغوية أو سلوكية، الأخصائي بيتابعها فورًا جوه نفس المكان." },
        kg: { big: "🎨", t: "قسم KG والتأسيس المبكر", p: "من ٢.٥ سنين: فونكس مبسط + أرقام + مونتيسوري + فنون — جاهزية مدرسة كاملة من غير ضغط." },
        school: { big: "🎓", t: "القسم الأكاديمي + تأهيل المدارس", p: "تأسيس عربي/ماث/إنجليزي + تدريب إنترفيوهات بمحاكاة كاملة + تقرير جاهزية لكل مدرسة. ولو في صعوبة تعلم: خطة فردية من سن ٥." },
        center: { big: "🎨", t: "السنتر التعليمي + قرآن", p: "كورسات مسائية (إنجليزي/ماث/روبوتكس/فنون) + حلقات قرآن بمستويات — حتى لو ابنك مش في حضانتنا." },
        special: { big: "🩺", t: "مركز التأهيل", p: "تقييم شامل ← خطة فردية بأهداف قابلة للقياس ← جلسات بأخصائي مرخص ← متابعة + تقرير مكتوب. ولو احتاج دمج: خطة تدريجية حسب جاهزيته." },
        speech: { big: "🗣️", t: "قسم التخاطب", p: "تقييم لغوي ونطقي + جلسات فردية + برنامج منزلي بسيط + متابعة. ومفيش (اشري باقة) — لو مفيش حاجة، هنقولك." },
        behavior: { big: "🧠", t: "قسم تعديل السلوك", p: "تقييم سلوكي + خطة فردية + جلسات مع الطفل + تدريب عملي ليكِ في كل جلسة — لأن التغيير الحقيقي بيحصل في البيت." },
        learning: { big: "✏️", t: "قسم صعوبات التعلم", p: "تقييم تشخيصي أولي + خطة علاجية (قراءة/كتابة/حساب/انتباه) + تقارير للمدرسة (بإذنك) — الطفل بيحس إنه بيحل مش بيدرس." }
      }
    },

    gallery: [
      { src: "images/in-1-reception.jpg", cap: "الاستقبال — كل طفل له اسمه على الباب" },
      { src: "images/in-2-nursery.jpg", cap: "فصول الحضانة — مونتيسوري" },
      { src: "images/in-3-baby.jpg", cap: "البيبي زون — راحة وأمان من أول يوم" },
      { src: "images/in-4-speech.jpg", cap: "غرفة التخاطب — التقييم بلعب وحوار" },
      { src: "images/in-5-activity.jpg", cap: "غرفة الأنشطة والفنون — إبداع بلا حدود" },
      { src: "images/in-6-quran.jpg", cap: "زاوية القرآن — حفظ وهدوء وتربية" }
    ],

    team: [
      { name: "[اسم المديرة]", role: "مديرة الأكاديمية — مشرفة تربوية", quals: "مؤهل تربوي + خبرة [X] سنوات في الحضانات + دورة تدريبية معتمدة", img: "", lic: "" },
      { name: "[اسم أخصائية التخاطب]", role: "أخصائية علاج التخاطب واللغة", quals: "بكالوريوس علاج التخاطب — [الجامعة] · [X] سنوات خبرة", img: "", lic: "مرخّصة مزاولة" },
      { name: "[اسم أخصائي السلوك]", role: "أخصائي تعديل سلوك", quals: "مؤهل [..] + تدريب معتمد في تعديل السلوك", img: "", lic: "تدريب معتمد" },
      { name: "[اسم محفظة القرآن]", role: "محفظة قرآن كريم", quals: "إجازة في التجويد + خبرة [X] سنوات مع الأطفال", img: "", lic: "" }
    ],

    testi: [
      { stars: 5, text: "كان ابن ٣ سنين بيعبر عن كل حاجة بالبكاء. بعد ٦ أسابيع من خطة تعديل السلوك + تدريب لي في البيت، النوبات قلت بوضوح. أجملة جملة قلتها: \"أنا بقيت فاهمة إيه اللي بيضايقه\".", who: "أم [الاسم — بإذن]", serv: "تعديل سلوك" },
      { stars: 5, text: "أول مرة أشوف مكان فيه كل حاجة في مكان واحد: حضانة وتخاطب وجلسات. مش محتاجة أمشي ٣ أماكن، والفريق كله عارف كل حاجة عن طفلي.", who: "أم [الاسم — بإذن]", serv: "حضانة + تخاطب" },
      { stars: 5, text: "التقرير الدوري غيّر عندي طريقة المتابعة في البيت. مش بس أدفع على جلسات — ده أفهم التقدّم بالظبط بالصور والكتابة.", who: "أم [الاسم — بإذن]", serv: "صعوبات تعلم" }
    ],

    offers: [
      { icon: "🎁", title: "تقييم أولي مجاني", sub: "أول سبت من كل شهر لأول ٥ أطفال مسجلين — **بموعد مسبق يتم تحديده من إدارة الأكاديمية**. ولو النتيجة \"مفيش مشكلة\" مش هتدفعي جنيه.", price: "مجاني 100%" },
      { icon: "💛", title: "باقة الاطمئنان", sub: "شهر أول تجريبي بنص السعر لسكان المنطقة — جرّبي قبل ما تكملي، واختاري براحتك.", price: "نص السعر الشهر الأول" },
      { icon: "🤝", title: "باقات العيلة", sub: "خصم تصاعدي للإخوات + باقة \"التوأمة\" (حضانة + إنجليزي + قرآن) بخصم ١٥٪.", price: "سألي على واتساب" }
    ],

    faq: [
      { q: "من سن كام بتستقبلوا الأطفال؟", a: "الحضانة من سنة كاملة (١٢ شهر) وبنقسمهم لجروبات حسب السن. البيبي زون (من ٩ شهور) هيفتح كمرحلة تانية بعد ٣–٦ شهور من الافتتاح. وجلسات التخاطب من سنتين، وتعديل السلوك من ٣، وصعوبات التعلم من ٥." },
      { q: "التقييم المجاني بيحصل فيه إيه بالظبط؟", a: "لقاء مع الأهل (٢٠ دقيقة) + ملاحظة الطفل بلعب وحوار (٣٠–٤٠ دقيقة) + نتيجة واضحة + تقرير مكتوب. ولو الطفل محتاج خطة: هتوصفيكم بالأهداف وعدد الجلسات — من غير أي التزام. والحجز **بموعد مسبق يتم تحديده من إدارة الأكاديمية**." },
      { q: "هل الأخصائيون مرخصون؟", a: "نعم. خدمات التخاطب وتعديل السلوك بتتم بإشراف أخصائيين مرخصين (ترخيص مزاولة مهنة)، وملفات الشهادات معروضة في الأكاديمية. وده مش اختيار مننا… ده اشتراط قانوني بنلتزم بيه بالكامل." },
      { q: "إزاي بيتشارك الأهل في الخطة؟", a: "الأهل جزء أساسي من الخطة: كل جلسة فيها ١٠ دقايق تدريب عملي للأم، + تقرير مكتوب دوري، + رسالة واتساب بتقولك \"اتعلم إيه جديد\"، + \"ساعة ولي الأمر\" الأسبوعية المفتوحة لأي استفسار." },
      { q: "ابني من ذوي الهمم — هل ممكن يتدمج؟", a: "نعم — بنظام الدمج التدريجي: تقييم شامل → تجهيز فردي → دمج مصاحب بالساعة أولًا وبعدين اليوم كامل حسب الجاهزية. وبنختار \"رفيق صف\" لكل طفل. القرار النهائي بيتخدع مع الأهل وبعد التقييم — ومفيش دمج قبل الجاهزية." },
      { q: "إيه مواعيد العمل؟", a: "السبت إلى الخميس: الفترة الصباحية ٨ ص – ٣ م (حضانة وأكاديمي وجلسات)، والمسائية ٤ – ٩ م (كورسات وحلقات قرآن). الجمعة إجازة — ويوم التقييم المجاني بيتعلن في الصفحة وبموعد مسبق." },
      { q: "إزاي أحجز تقييم أو تسجيل؟", a: "ثلاث طرق: (١) استمارة التقييم المجاني من الموقع — بتوصلنا فورًا على واتساب. (٢) رسالة واتساب على ٠١٠٢٧٠٥٢٣٩٧. (٣) زوري المكان بنفسك — إحنا في ١٤ شارع الأحقاف، الإبراهيمية، الإسكندرية. **التقييم بموعد مسبق يتم تحديده من إدارة الأكاديمية** وهنأكد معاكِ عليه." },
      { q: "هل في مواصلات؟", a: "نعم، متوفرة لأحياء المنطقة (الإبراهيمية / سيدي بشر / المنتزه) — استفسري على واتساب عن المسارات المتاحة وأسعارها." }
    ],

    site: {
      logo: 'images/logo-final.png',
      navTitle: 'MindBloom Academy',
      navSub: 'نرعى طفلك اليوم ونبني شخصيته للمستقبل',
      navCta: 'احجزي موعد تقييم 🎁',
      wa: '01027052397',
      heroWaLink: 'https://wa.me/201027052397?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%AC%D8%AF%D8%A7%D9%8B%D8%8C%20%D8%A8%D8%AF%D8%A7%20%D8%A3%D8%B3%D8%A3%D9%84%D9%8A%20%D8%B9%D9%86%20MindBloom',
      navItems: [
        { l: 'الرئيسية', h: 'home' }, { l: 'الأقسام', h: 'depts' }, { l: 'البرامج', h: 'programs' },
        { l: 'ليه MindBloom', h: 'why' }, { l: 'اعرفي قسمك', h: 'quiz' }, { l: 'المكان', h: 'gallery' },
        { l: 'فريقنا', h: 'team' }, { l: 'أسئلة شائعة', h: 'faq' }, { l: 'تواصلي', h: 'contact' }
      ],
      trust: ['🩺 أخصائيون مرخصون', '📊 تقارير ومتابعة', '🤝 شراكة حقيقية مع الأهل', '💙 دمج تدريجي باحترام'],
      programsTitle: 'البرامج حسب المرحلة العمرية 🌱',
      quizTitle: 'اعرفي قسمك المناسب في ٤ أسئلة 💡',
      offersCta: '💬 استفسري على العروض',
      galleryNote: '* صور استرشادية للتعريف بالأركان — هتتحدث دائمًا بصور حقيقية من قلب المكان بإذن الأهالي (تتعديل من لوحة التحكم).',
      mbarWa: '💬 واتساب',
      mbarEv: '🎁 تقييم بموعد',
      heroImg: 'images/in-1-reception.jpg',
      heroBadge1: '🏆 مركز تأهيل مدمج',
      heroBadge2: '👶 من سنة كاملة',
      fabWaLink: 'https://wa.me/201027052397?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%AC%D8%AF%D8%A7%D9%8B%D8%8C%20%D8%A8%D8%AF%D8%A7%20%D8%A3%D8%B3%D8%A3%D9%84%D9%8A%20%D8%B9%D9%86%20MindBloom',
      mbarWaLink: 'https://wa.me/201027052397?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%AC%D8%AF%D8%A7%D9%8B%D8%8C%20%D8%A8%D8%AF%D8%A7%20%D8%A3%D8%B3%D8%A3%D9%84%D9%8A%20%D8%B9%D9%86%20MindBloom',
      footerAddr: '📍 ١٤ شارع الأحقاف — الإبراهيمية — الإسكندرية',
      footerWa: '📱 واتساب: ٠١٠٢٧٠٥٢٣٩٧',
      footerTel: '☎️ تليفون: ٠٣-٥٩٣٠٧٨٠',
      footerCredit: 'صنع بكل حب من ♡Memaa388♡'
    },

    forms: {
      evalTitle: '🎁 احجزي موعد تقييم أولي مجاني',
      evalSub: 'أول سبت من كل شهر لأول ٥ أطفال',
      evalBookNote: '📅 الحجز بموعد مسبق يتم تحديده من إدارة الأكاديمية — وهنأكد معاكِ عليه',
      regTitle: '📝 نموذج التسجيل وفتح ملف طفل',
      regSub: '٥ دقايق… وطفلك عنده ملف كامل عندنا — البيانات سرية وتُحفظ في ملف الطفل',
      surTitle: '⭐ استبيان رضا أولياء الأمور',
      surSub: 'صوتكم يصنع فرقًا 💛 — ٥ دقايق من وقتكم تساعدنا نطوّر خدمتنا لأطفالكم. الرد سري تمامًا.'
    },

  },

  state: null,
  cloudError: '',
  AUTH_KEY: 'mb_admin_session_v2',

  _cloud() {
    return (typeof window !== 'undefined' && window.MB_CLOUD) || {};
  },

  _apiKey() {
    const c = this._cloud();
    return c.publishableKey || c.anonKey || '';
  },

  isConfigured() {
    const c = this._cloud(), key = this._apiKey();
    return /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(c.supabaseUrl || '') &&
      !!key && !String(key).includes('YOUR_');
  },

  _clone(v) { return JSON.parse(JSON.stringify(v)); },

  _merge(base, override) {
    if (!override || typeof override !== 'object') return base;
    for (const [k, v] of Object.entries(override)) {
      if (v && typeof v === 'object' && !Array.isArray(v) && base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])) {
        this._merge(base[k], v);
      } else {
        base[k] = this._clone(v);
      }
    }
    return base;
  },

  _headers(token, json = true) {
    const h = { apikey: this._apiKey() };
    /* Publishable keys تُرسل في apikey فقط؛ Authorization مخصص لجلسة المستخدم JWT. */
    if (token) h.Authorization = 'Bearer ' + token;
    if (json) h['Content-Type'] = 'application/json';
    return h;
  },

  async _result(res, fallback) {
    const text = await res.text();
    let body = null;
    try { body = text ? JSON.parse(text) : null; } catch (_) { body = text; }
    if (!res.ok) {
      const msg = body && (body.message || body.msg || body.error_description || body.error) || fallback || ('HTTP ' + res.status);
      throw new Error(msg);
    }
    return body;
  },

  async load() {
    this.state = this._clone(this.defaults);
    this.cloudError = '';
    if (!this.isConfigured()) {
      this.cloudError = 'بيانات Supabase غير مضبوطة في supabase-config.js';
      return this.state;
    }
    const c = this._cloud();
    try {
      const id = encodeURIComponent(c.siteConfigId || 'main');
      const res = await fetch(`${c.supabaseUrl}/rest/v1/site_config?id=eq.${id}&select=data`, {
        headers: this._headers(), cache: 'no-store'
      });
      const rows = await this._result(res, 'تعذر تحميل إعدادات الموقع');
      if (rows && rows[0] && rows[0].data) this.state = this._merge(this._clone(this.defaults), rows[0].data);
    } catch (e) {
      this.cloudError = e.message || 'تعذر الاتصال بقاعدة البيانات';
      console.error('MindBloom config:', e);
    }
    return this.state;
  },

  get() {
    return this.state || this._clone(this.defaults);
  },

  async set(cfg) {
    if (!this.isConfigured()) throw new Error('اضبطي بيانات Supabase أولًا');
    const token = await this._ensureToken();
    const c = this._cloud();
    const clean = this._clone(cfg);
    const res = await fetch(`${c.supabaseUrl}/rest/v1/site_config?on_conflict=id`, {
      method: 'POST',
      headers: { ...this._headers(token), Prefer: 'resolution=merge-duplicates,return=minimal' },
      body: JSON.stringify({ id: c.siteConfigId || 'main', data: clean, updated_at: new Date().toISOString() })
    });
    await this._result(res, 'لم يتم حفظ الإعدادات');
    this.state = this._merge(this._clone(this.defaults), clean);
    return this.state;
  },

  async reset() { return this.set(this._clone(this.defaults)); },
  exportJSON() { return JSON.stringify(this.get(), null, 2); },
  async importJSON(str) {
    const obj = JSON.parse(str);
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) throw new Error('ملف غير صالح');
    return this.set(obj);
  },

  /* ===== دخول الإدارة عبر Supabase Auth ===== */
  _session() {
    try { return JSON.parse(sessionStorage.getItem(this.AUTH_KEY) || 'null'); } catch (_) { return null; }
  },
  _storeSession(s) {
    const out = { ...s, expires_at_ms: Date.now() + Math.max(60, Number(s.expires_in || 3600)) * 1000 };
    sessionStorage.setItem(this.AUTH_KEY, JSON.stringify(out));
    this.user = out.user || null;
    return out;
  },
  hasSession() { return !!this._session(); },
  async login(email, password) {
    if (!this.isConfigured()) throw new Error('اضبطي supabase-config.js أولًا');
    const c = this._cloud();
    const res = await fetch(`${c.supabaseUrl}/auth/v1/token?grant_type=password`, {
      method: 'POST', headers: { apikey: this._apiKey(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: String(email || '').trim(), password })
    });
    const s = await this._result(res, 'بيانات الدخول غير صحيحة');
    this._storeSession(s);
    const admin = await this._checkAdmin(s.access_token);
    if (!admin) {
      sessionStorage.removeItem(this.AUTH_KEY);
      throw new Error('هذا الحساب ليس ضمن مديري الموقع');
    }
    return s.user;
  },
  async _refresh(s) {
    const c = this._cloud();
    const res = await fetch(`${c.supabaseUrl}/auth/v1/token?grant_type=refresh_token`, {
      method: 'POST', headers: { apikey: this._apiKey(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: s.refresh_token })
    });
    return this._storeSession(await this._result(res, 'انتهت جلسة الإدارة؛ سجّلي الدخول من جديد'));
  },
  async _ensureToken() {
    let s = this._session();
    if (!s) throw new Error('سجّلي الدخول أولًا');
    if (!s.access_token || Date.now() > Number(s.expires_at_ms || 0) - 60000) s = await this._refresh(s);
    return s.access_token;
  },
  async _checkAdmin(token) {
    const c = this._cloud();
    const res = await fetch(`${c.supabaseUrl}/rest/v1/rpc/is_admin`, {
      method: 'POST', headers: this._headers(token), body: '{}'
    });
    const out = await this._result(res, 'تعذر التحقق من صلاحية الإدارة');
    return out === true;
  },
  async validateSession() {
    try {
      const token = await this._ensureToken();
      const c = this._cloud();
      const res = await fetch(`${c.supabaseUrl}/auth/v1/user`, { headers: this._headers(token, false) });
      const user = await this._result(res, 'انتهت الجلسة');
      if (!await this._checkAdmin(token)) throw new Error('لا توجد صلاحية إدارة');
      this.user = user;
      return true;
    } catch (e) {
      sessionStorage.removeItem(this.AUTH_KEY);
      return false;
    }
  },
  async logout() {
    const s = this._session();
    sessionStorage.removeItem(this.AUTH_KEY);
    this.user = null;
    if (!s || !s.access_token || !this.isConfigured()) return;
    const c = this._cloud();
    try { await fetch(`${c.supabaseUrl}/auth/v1/logout`, { method: 'POST', headers: this._headers(s.access_token, false) }); } catch (_) {}
  },

  /* ===== الطلبات المركزية + ملفات PDF الخاصة ===== */
  async addSub(submission, pdfBase64, pdfName, turnstileToken = '') {
    if (!this.isConfigured()) throw new Error('خدمة الحفظ المركزي غير مضبوطة');
    if (!pdfBase64) throw new Error('تعذر تجهيز ملف PDF');
    const c = this._cloud();
    const res = await fetch(`${c.supabaseUrl}/functions/v1/${encodeURIComponent(c.functionName || 'submit-form')}`, {
      method: 'POST',
      headers: this._headers(),
      body: JSON.stringify({ submission, pdfBase64, pdfName, turnstileToken, website: '' })
    });
    return this._result(res, 'لم يتم حفظ الطلب؛ حاولي مرة أخرى');
  },
  async getSubs() {
    const token = await this._ensureToken();
    const c = this._cloud();
    const q = 'select=id,type,name,phone,source,payload,pdf_path,pdf_name,status,created_at&order=created_at.desc&limit=500';
    const res = await fetch(`${c.supabaseUrl}/rest/v1/submissions?${q}`, { headers: this._headers(token), cache: 'no-store' });
    const rows = await this._result(res, 'تعذر تحميل الطلبات');
    return (rows || []).map(r => ({
      id: r.id, type: r.type, name: r.name, phone: r.phone, source: r.source,
      data: r.payload || {}, pdfPath: r.pdf_path, pdfName: r.pdf_name,
      status: r.status, date: r.created_at
    }));
  },
  async setSubmissionStatus(id, status) {
    const token = await this._ensureToken();
    const c = this._cloud();
    const allowed = ['جديد', 'تم التواصل', 'مكتمل', 'ملغي'];
    if (!allowed.includes(status)) throw new Error('حالة غير صالحة');
    const res = await fetch(`${c.supabaseUrl}/rest/v1/submissions?id=eq.${encodeURIComponent(id)}`, {
      method: 'PATCH', headers: { ...this._headers(token), Prefer: 'return=minimal' }, body: JSON.stringify({ status })
    });
    await this._result(res, 'تعذر تحديث الحالة');
  },
  async deleteSub(id, pdfPath) {
    const token = await this._ensureToken();
    const c = this._cloud();
    if (pdfPath) {
      const r0 = await fetch(`${c.supabaseUrl}/storage/v1/object/submission-pdfs`, {
        method: 'DELETE', headers: this._headers(token), body: JSON.stringify({ prefixes: [pdfPath] })
      });
      await this._result(r0, 'تعذر حذف ملف PDF');
    }
    const res = await fetch(`${c.supabaseUrl}/rest/v1/submissions?id=eq.${encodeURIComponent(id)}`, {
      method: 'DELETE', headers: { ...this._headers(token), Prefer: 'return=minimal' }
    });
    await this._result(res, 'تعذر حذف الطلب');
  },
  async deleteAllSubs() {
    const token = await this._ensureToken();
    const c = this._cloud();
    const all = await this.getSubs();
    const paths = all.map(x => x.pdfPath).filter(Boolean);
    if (paths.length) {
      const r0 = await fetch(`${c.supabaseUrl}/storage/v1/object/submission-pdfs`, {
        method: 'DELETE', headers: this._headers(token), body: JSON.stringify({ prefixes: paths })
      });
      await this._result(r0, 'تعذر حذف ملفات الطلبات');
    }
    const res = await fetch(`${c.supabaseUrl}/rest/v1/submissions?id=not.is.null`, {
      method: 'DELETE', headers: { ...this._headers(token), Prefer: 'return=minimal' }
    });
    await this._result(res, 'تعذر حذف الطلبات');
  },
  async getPdfUrl(path) {
    if (!path) throw new Error('لا يوجد ملف PDF لهذا الطلب');
    const token = await this._ensureToken();
    const c = this._cloud();
    const encoded = String(path).split('/').map(encodeURIComponent).join('/');
    const res = await fetch(`${c.supabaseUrl}/storage/v1/object/sign/submission-pdfs/${encoded}`, {
      method: 'POST', headers: this._headers(token), body: JSON.stringify({ expiresIn: 600 })
    });
    const out = await this._result(res, 'تعذر فتح ملف PDF');
    const signed = out.signedURL || out.signedUrl;
    if (!signed) throw new Error('لم يرجع رابط صالح للملف');
    return /^https?:/i.test(signed) ? signed : `${c.supabaseUrl}/storage/v1${signed}`;
  },

  /* ===== صور الموقع العامة ===== */
  async uploadMedia(file) {
    if (!file || !String(file.type || '').startsWith('image/')) throw new Error('اختاري ملف صورة صالحًا');
    if (file.size > 8 * 1024 * 1024) throw new Error('حجم الصورة أكبر من 8MB');
    const token = await this._ensureToken();
    const c = this._cloud();
    const ext0 = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '');
    const ext = ['jpg','jpeg','png','webp','gif'].includes(ext0) ? ext0 : 'jpg';
    const uid = (crypto.randomUUID ? crypto.randomUUID() : Date.now() + '-' + Math.random().toString(16).slice(2));
    const path = `site/${new Date().toISOString().slice(0,10)}/${uid}.${ext}`;
    const encoded = path.split('/').map(encodeURIComponent).join('/');
    const res = await fetch(`${c.supabaseUrl}/storage/v1/object/site-media/${encoded}`, {
      method: 'POST',
      headers: { ...this._headers(token, false), 'Content-Type': file.type || 'application/octet-stream', 'x-upsert': 'false' },
      body: file
    });
    await this._result(res, 'تعذر رفع الصورة');
    return `${c.supabaseUrl}/storage/v1/object/public/site-media/${encoded}`;
  },

  /* ===== Cloudflare Turnstile (اختياري لمقاومة السبام) ===== */
  async initTurnstile(containerId) {
    const key = this._cloud().turnstileSiteKey || '';
    const box = document.getElementById(containerId);
    if (!box || !key) { if (box) box.style.display = 'none'; return null; }
    box.style.display = 'flex';
    if (!window.turnstile) {
      if (!window.__mbTurnstilePromise) {
        window.__mbTurnstilePromise = new Promise((resolve, reject) => {
          const sc = document.createElement('script');
          sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
          sc.async = true; sc.defer = true;
          sc.onload = resolve;
          sc.onerror = () => reject(new Error('تعذر تحميل التحقق الأمني'));
          document.head.appendChild(sc);
        });
      }
      await window.__mbTurnstilePromise;
    }
    this.turnstileWidgets = this.turnstileWidgets || {};
    if (this.turnstileWidgets[containerId] !== undefined) return this.turnstileWidgets[containerId];
    this.turnstileWidgets[containerId] = window.turnstile.render(box, { sitekey: key, theme: 'light', language: 'ar' });
    return this.turnstileWidgets[containerId];
  },
  turnstileToken(containerId) {
    const id = this.turnstileWidgets && this.turnstileWidgets[containerId];
    return id === undefined || !window.turnstile ? '' : window.turnstile.getResponse(id);
  },
  resetTurnstile(containerId) {
    const id = this.turnstileWidgets && this.turnstileWidgets[containerId];
    if (id !== undefined && window.turnstile) window.turnstile.reset(id);
  },

  waNumber() {
    let n = String((this.get().site || {}).wa || '').replace(/\D/g, '');
    if (n.startsWith('00')) n = n.slice(2);
    if (n.startsWith('0')) n = '20' + n.slice(1);
    return n || '201027052397';
  }
};

MB.ready = MB.load();

/* ===== تطبيق الإعدادات على الموقع (index.html) ===== */
MB.init = function () {
  const c = this.get();
  const $ = id => document.getElementById(id);

  /* نصوص ثابتة */
  const t = c.texts, ct = c.contact;
  if ($('heroChip')) $('heroChip').innerHTML = t.heroChip;
  if ($('heroTitle')) $('heroTitle').innerHTML = t.heroTitle;
  if ($('heroSub')) $('heroSub').textContent = t.heroSub;
  if ($('heroCta1')) $('heroCta1').textContent = t.heroCta1;
  const map = {
    deptsTag: t.deptsTag, deptsTitle: t.deptsTitle, deptsSub: t.deptsSub,
    programsSub: t.programsSub, stepsTitle: t.stepsTitle, stepsSub: t.stepsSub,
    whySub: t.whySub, quizSub: t.quizSub, galTitle: t.galTitle, galSub: t.galSub,
    teamTitle: t.teamTitle, teamSub: t.teamSub, testiTitle: t.testiTitle, testiSub: t.testiSub,
    offersTitle: t.offersTitle, offersSub: t.offersSub, faqTitle: t.faqTitle, faqSub: t.faqSub,
    contactTitle: t.contactTitle, contactSub: t.contactSub, footerAbout: t.footerAbout
  };
  for (const k in map) { const el = $(k); if (el) el.textContent = map[k]; }

  /* هوية الموقع + العناصر الثابتة */
  const s = c.site;
  const logoEl = document.getElementById('siteLogo'); if (logoEl) logoEl.src = s.logo;
  if (s.navTitle) { const nt = $('navTitle'); if (nt) nt.textContent = s.navTitle; }
  if (s.navSub) { const ns = $('navSub'); if (ns) ns.textContent = s.navSub; }
  const navCtaEl = document.getElementById('navCta'); if (navCtaEl) navCtaEl.textContent = s.navCta;
  const menuEl = document.getElementById('menu');
  if (menuEl && s.navItems && s.navItems.length) menuEl.innerHTML = s.navItems.map(it => `<a href="#${it.h}">${it.l}</a>`).join('');
  const trustEl = document.getElementById('trustGrid');
  if (trustEl && s.trust) trustEl.innerHTML = s.trust.map(t => `<div>${t}</div>`).join('');
  const setTxt = (id, t) => { const el = document.getElementById(id); if (el && t) el.textContent = t; };
  setTxt('programsTitle', s.programsTitle);
  setTxt('quizTitle', s.quizTitle);
  const oc = document.getElementById('offersCta'); if (oc && s.offersCta) oc.textContent = s.offersCta;
  setTxt('galleryNote', s.galleryNote);
  const hwl = document.getElementById('heroWaLink'); if (hwl && s.heroWaLink) hwl.href = s.heroWaLink;
  setTxt('mbarWa', s.mbarWa);
  setTxt('mbarEv', s.mbarEv);
  const hi = document.getElementById('heroImg'); if (hi && s.heroImg) hi.src = s.heroImg;
  const hb1 = document.getElementById('heroBadge1'); if (hb1){ hb1.textContent = s.heroBadge1 || ''; hb1.style.display = s.heroBadge1 ? '' : 'none'; }
  const hb2 = document.getElementById('heroBadge2'); if (hb2){ hb2.textContent = s.heroBadge2 || ''; hb2.style.display = s.heroBadge2 ? '' : 'none'; }
  const fwl = document.getElementById('fabWa'); if (fwl && s.fabWaLink) fwl.href = s.fabWaLink;
  const mwl = document.getElementById('mbarWa'); if (mwl && s.mbarWaLink) mwl.href = s.mbarWaLink;
  setTxt('fAddr', s.footerAddr);
  setTxt('fWa', s.footerWa);
  setTxt('fTel', s.footerTel);
  setTxt('footerCredit', s.footerCredit);

  /* التواصل */
  if ($('cAddr')) $('cAddr').textContent = ct.addr;
  if ($('cArea')) $('cArea').textContent = ct.area;
  if ($('cDay')) $('cDay').textContent = ct.day;
  if ($('cOpen1')) $('cOpen1').textContent = ct.open1;
  if ($('cOpen2')) $('cOpen2').textContent = ct.open2;
  if ($('cSat')) $('cSat').textContent = ct.sat;
  if ($('cWa')) $('cWa').textContent = ct.wa;
  if ($('cTel')) $('cTel').textContent = ct.tel;
  if ($('cWaLink')) $('cWaLink').href = ct.waLink;
  if ($('cTelLink')) $('cTelLink').href = ct.telLink;
  if ($('cMap')) $('cMap').href = ct.map;
  const soc = { cFb: ct.fb, cIg: ct.ig, cTt: ct.tt };
  for (const k in soc) { const el = $(k); if (el) { el.href = soc[k] || '#'; el.style.display = soc[k] ? '' : 'none'; } }

  /* البنر المتحرك */
  MB.bannerIdx = 0;
  MB.showBanner = function () {
    const el = $('mbBanner'); if (!el) return;
    const msgs = c.banner.messages.filter(m => m && m.trim());
    if (!msgs.length) { el.style.display = 'none'; return; }
    el.style.display = '';
    const track = $('bannerTrack');
    const msg = msgs[MB.bannerIdx % msgs.length];
    track.textContent = msg;
    track.style.animation = 'none';
    void track.offsetWidth;
    track.style.animation = 'mbmarquee ' + Math.max(14, msg.length * 0.45) + 's linear infinite';
  };
  if ($('mbBanner')) {
    MB.showBanner();
    setInterval(() => { MB.bannerIdx++; MB.showBanner(); }, Math.max(4, c.banner.interval) * 1000);
  }

  /* الأقسام السريعة */
  const qColors = [
    ['var(--turq)', 'rgba(46,196,182,.14)'],
    ['var(--amber)', 'rgba(255,183,3,.18)'],
    ['var(--purple)', 'rgba(123,92,214,.14)'],
    ['var(--pink)', 'rgba(239,71,111,.14)']
  ];
  const qg = $('quickGrid');
  if (qg) qg.innerHTML = c.quick.map((q, i) => {
    const [qc, qcbg] = qColors[i % 4];
    return `
    <a class="qcard rv in" href="${q.href}" style="text-decoration:none;--qc:${qc};--qcbg:${qcbg}">
      <div class="ic">${q.icon}</div><b>${q.title}</b><small>${q.sub}</small><span class="cta">${q.cta}</span>
    </a>`;
  }).join('');

  /* الأقسام الأربعة */
  const dg = $('deptGrid');
  if (dg) dg.innerHTML = c.depts.map((d, i) => `
    <div class="dept ${d.cls || 'd' + ((i % 4) + 1)} rv">
      <div class="ic">${d.icon}</div><h3>${d.title}</h3><span class="age">${d.age}</span>
      <ul>${(d.items || []).map(it => `<li>${it}</li>`).join('')}</ul>
    </div>`).join('');

  /* البرامج حسب العمر */
  const pt = $('progBody');
  if (pt) pt.innerHTML = c.programs.map(p => `
    <tr><td>${p.stage}</td><td>${p.age}</td><td>${p.prog}</td><td class="goal">${p.goal}</td></tr>`).join('');

  /* الخطوات */
  const sg = $('stepsGrid');
  if (sg) sg.innerHTML = c.steps.map((s, i) => `
    <div class="step rv"><span class="n">${['١', '٢', '٣', '٤'][i] || i + 1}</span><b>${s.title}</b><small>${s.sub}</small></div>`).join('');

  /* ليه MindBloom */
  const wg = $('whyGrid');
  if (wg) wg.innerHTML = c.why.map(w => `
    <div class="wcard rv"><div class="ic">${w.icon}</div><b>${w.title}</b><small>${w.sub}</small></div>`).join('');

  /* الجاليري */
  const gl = $('galGrid');
  if (gl) gl.innerHTML = c.gallery.map(g => `
    <figure class="rv" onclick="openLb(this)"><img src="${g.src}" alt="${g.cap}"><figcaption>${g.cap}</figcaption></figure>`).join('');

  /* الفريق */
  const tg = $('teamGrid');
  if (tg) tg.innerHTML = c.team.map(m => {
    const ini = m.name.replace(/[\[\]]/g, '').split(' ').slice(0, 2).map(w => w[0] || '').join('');
    return `<div class="tcard rv">
      <div class="tavatar">${m.img ? `<img src="${m.img}" alt="${m.name}">` : (ini || '🌸')}</div>
      <b>${m.name}</b><div class="role">${m.role}</div><div class="quals">${m.quals}</div>
      ${m.lic ? `<span class="lic">✔ ${m.lic}</span>` : ''}
    </div>`;
  }).join('');

  /* الشهادات */
  const te = $('testiGrid');
  if (te) te.innerHTML = c.testi.map(x => `
    <div class="tquote rv"><div class="tstar">${'★'.repeat(x.stars || 5)}</div><p>${x.text}</p>
    <div class="who">${x.who}</div><div class="serv">${x.serv}</div></div>`).join('');

  /* العروض */
  const og = $('offGrid');
  if (og) og.innerHTML = c.offers.map(o => `
    <div class="off rv"><div class="ic">${o.icon}</div><h3>${o.title}</h3><p>${o.sub.replace(/\*\*/g, '')}</p><span class="price">${o.price}</span></div>`).join('');

  /* الأسئلة الشائعة */
  const fb = $('faqBox');
  if (fb) {
    fb.innerHTML = c.faq.map(f => `
      <div class="faq-item"><button class="faq-q">${f.q} <span class="pl">+</span></button>
      <div class="faq-a"><p>${f.a.replace(/\*\*/g, '')}</p></div></div>`).join('');
    MB.bindFaq();
  }

  MB.bindReveal();
};

MB.bindFaq = function () {
  document.querySelectorAll('.faq-q').forEach(b => b.addEventListener('click', () => {
    const it = b.parentElement, a = it.querySelector('.faq-a'), open = it.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-a').style.maxHeight = null; });
    if (!open) { it.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
  }));
};

MB.bindReveal = function () {
  if (!MB.io) MB.io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); MB.io.unobserve(e.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.rv:not(.in)').forEach(el => MB.io.observe(el));
};
