const products = [
  // ======== مسكنات الألم (Pain Relievers) ========
  {
    id: 1,
    name: "بانادول",
    price: 50,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "مسكنات الألم",
    description: "مسكن لآلام الرأس والعضلات وخافض للحرارة.",
    features: [
      "المادة الفعالة: باراسيتامول",
      "آمن على المعدة",
      "بدون وصفة طبية"
    ],
    uses: ["الصداع", "آلام الأسنان", "الحمى"],
    sideEffects: ["نادرًا - حساسية جلدية"]
  },
  {
    id: 2,
    name: "بروفين",
    price: 45,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "مسكنات الألم",
    description: "مضاد التهاب غير ستيرويدي لآلام المفاصل.",
    features: [
      "المادة الفعالة: أيبوبروفين",
      "يقلل التورم",
      "تأثير سريع"
    ],
    uses: ["آلام الظهر", "التهاب المفاصل", "الدورة الشهرية"],
    sideEffects: ["حرقة معدية", "غثيان"]
  },
  {
    id: 3,
    name: "فولتارين",
    price: 55,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "مسكنات الألم",
    description: "علاج موضعي لآلام العضلات والمفاصل.",
    features: [
      "المادة الفعالة: ديكلوفيناك",
      "جل موضعي",
      "بدون وصفة"
    ],
    uses: ["التواء المفاصل", "آلام الرقبة", "التهاب الأوتار"],
    sideEffects: ["حكة موضعية", "احمرار الجلد"]
  },
  {
    id: 4,
    name: "أدفيل",
    price: 60,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "مسكنات الألم",
    description: "مسكن قوي للآلام الشديدة.",
    features: [
      "تركيز عالي من الأيبوبروفين",
      "تأثير طويل المدى"
    ],
    uses: ["الصداع النصفي", "آلام ما بعد الجراحة"],
    sideEffects: ["دوار", "طنين الأذن"]
  },
  {
    id: 5,
    name: "باراسيتامول",
    price: 30,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "مسكنات الألم",
    description: "مسكن أساسي للآلام الخفيفة.",
    features: [
      "مناسب للأطفال",
      "شراب وأقراص"
    ],
    uses: ["نزلات البرد", "الحمى"],
    sideEffects: ["جرعات زائدة تضر الكبد"]
  },

  // ======== أدوية المعدة (Stomach Medications) ========
  {
    id: 6,
    name: "أوميبرازول",
    price: 70,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "أدوية المعدة",
    description: "علاج لحموضة المعدة والقرحة.",
    features: [
      "المادة الفعالة: أوميبرازول",
      "تأثير طويل المدى"
    ],
    uses: ["الارتجاع المريئي", "قرحة المعدة"],
    sideEffects: ["صداع", "إسهال"]
  },
  {
    id: 7,
    name: "رانيتيدين",
    price: 65,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "أدوية المعدة",
    description: "مضاد للحموضة سريع المفعول.",
    features: [
      "يبدأ العمل خلال 30 دقيقة",
      "بدون وصفة"
    ],
    uses: ["حرقة المعدة", "عسر الهضم"],
    sideEffects: ["تعب خفيف"]
  },
  {
    id: 8,
    name: "مالوكس",
    price: 40,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "أدوية المعدة",
    description: "علاج فوري للحموضة.",
    features: [
      "شراب بنكهة النعناع",
      "تأثير فوري"
    ],
    uses: ["الحموضة العرضية"],
    sideEffects: ["إمساك (مع الإفراط)"]
  },
  {
    id: 9,
    name: "جافيسكون",
    price: 55,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "أدوية المعدة",
    description: "يُشكل حاجزًا واقيًا في المعدة.",
    features: [
      "يحتوي على الألجينات",
      "نكهة الفواكه"
    ],
    uses: ["الارتجاع الحمضي"],
    sideEffects: ["انتفاخ بسيط"]
  },
  {
    id: 10,
    name: "إيزوميبرازول",
    price: 75,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "أدوية المعدة",
    description: "جيل جديد من مثبطات الحموضة.",
    features: [
      "تأثير يصل إلى 24 ساعة",
      "وصفة طبية"
    ],
    uses: ["قرحة الاثني عشر"],
    sideEffects: ["غثيان"]
  },

  // ======== أدوية الحساسية (Allergy Medications) ========
  {
    id: 11,
    name: "سيتريزين",
    price: 35,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "أدوية الحساسية",
    description: "مضاد هيستامين للاستخدام اليومي.",
    features: [
      "لا يسبب النعاس عادةً",
      "قرص واحد يوميًا"
    ],
    uses: ["حساسية الأنف", "الشرى الجلدي"],
    sideEffects: ["جفاف الفم"]
  },
  {
    id: 12,
    name: "لوراتادين",
    price: 30,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "أدوية الحساسية",
    description: "مناسب للأطفال والكبار.",
    features: [
      "بدون نعاس",
      "متوفر كشراب"
    ],
    uses: ["حساسية العين", "العطس الموسمي"],
    sideEffects: ["نادرًا - صداع"]
  },
  {
    id: 13,
    name: "فيكسوفينادين",
    price: 45,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "أدوية الحساسية",
    description: "للحساسية الشديدة.",
    features: [
      "لا يتفاعل مع الطعام",
      "تأثير 24 ساعة"
    ],
    uses: ["حساسية الجلد المزمنة"],
    sideEffects: ["دوخة خفيفة"]
  },
  {
    id: 14,
    name: "كلورفينيرامين",
    price: 25,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "أدوية الحساسية",
    description: "للسعال التحسسي.",
    features: [
      "يسبب النعاس",
      "سريع المفعول"
    ],
    uses: ["الحساسية الليلية"],
    sideEffects: ["نعاس شديد"]
  },
  {
    id: 15,
    name: "ديفينهيدرامين",
    price: 50,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "أدوية الحساسية",
    description: "للحساسية والأرق.",
    features: [
      "يستخدم أيضًا كمنوم",
      "تأثير مهدئ"
    ],
    uses: ["الأرق التحسسي"],
    sideEffects: ["تشوش الرؤية"]
  },

  // ======== صحة القلب (Heart Health) ========
  {
    id: 16,
    name: "أسبرين",
    price: 20,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "صحة القلب",
    description: "مميع دم للوقاية من الجلطات.",
    features: [
      "جرعة 81 مجم للقلب",
      "يقلل خطر السكتة"
    ],
    uses: ["الوقاية من النوبات القلبية"],
    sideEffects: ["نزيف معوي (نادر)"]
  },
  {
    id: 17,
    name: "أتورفاستاتين",
    price: 90,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "صحة القلب",
    description: "خافض للكوليسترول.",
    features: [
      "يقلل LDL",
      "يؤخذ مساءً"
    ],
    uses: ["فرط الكوليسترول العائلي"],
    sideEffects: ["آلام عضلية"]
  },
  {
    id: 18,
    name: "كلوبيدوجريل",
    price: 85,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "صحة القلب",
    description: "بديل للأسبرين لبعض المرضى.",
    features: [
      "يقلل تجلط الدم",
      "يستخدم بعد الجلطات"
    ],
    uses: ["الوقاية من السكتات"],
    sideEffects: ["نزيف اللثة"]
  },
  {
    id: 19,
    name: "لوسارتان",
    price: 60,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "صحة القلب",
    description: "خافض للضغط.",
    features: [
      "يحمي الكلى لمرضى السكري",
      "جرعة يومية واحدة"
    ],
    uses: ["ارتفاع ضغط الدم"],
    sideEffects: ["دوخة"]
  },
  {
    id: 20,
    name: "ميتوبرولول",
    price: 70,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "صحة القلب",
    description: "حاصر بيتا لتنظيم ضربات القلب.",
    features: [
      "يقلل إجهاد القلب",
      "يجب التوقف التدريجي"
    ],
    uses: ["عدم انتظام ضربات القلب"],
    sideEffects: ["برودة الأطراف"]
  },

  // ======== علاج السكري (Diabetes Medications) ========
  {
    id: 21,
    name: "ميتفورمين",
    price: 50,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "علاج السكري",
    description: "علاج الخط الأول لمرضى السكري النوع الثاني.",
    features: [
      "يقلل مقاومة الأنسولين",
      "قد يساعد في إنقاص الوزن"
    ],
    uses: ["السكري النوع 2"],
    sideEffects: ["اضطرابات هضمية"]
  },
  {
    id: 22,
    name: "إنسولين",
    price: 100,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "علاج السكري",
    description: "هرمون لتنظيم سكر الدم.",
    features: [
      "حقن تحت الجلد",
      "أنواع مختلفة (سريع/طويل المفعول)"
    ],
    uses: ["السكري النوع 1"],
    sideEffects: ["هبوط سكر الدم"]
  },
  {
    id: 23,
    name: "جليبيزيد",
    price: 40,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "علاج السكري",
    description: "يحفز إفراز الأنسولين.",
    features: [
      "يؤخذ قبل الوجبات",
      "غير مناسب للحوامل"
    ],
    uses: ["السكري المتقدم"],
    sideEffects: ["زيادة الوزن"]
  },
  {
    id: 24,
    name: "سيتاجليبتين",
    price: 85,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "علاج السكري",
    description: "مثبط DPP-4 لتنظيم السكر.",
    features: [
      "جرعة واحدة يوميًا",
      "آمن للكلى"
    ],
    uses: ["السكري مع الفشل الكلوي"],
    sideEffects: ["التهاب الحلق"]
  },
  {
    id: 25,
    name: "داباغليفلوزين",
    price: 90,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "علاج السكري",
    description: "يطرح الجلوكوز عبر البول.",
    features: [
      "يقلل وزن الجسم",
      "يحمي القلب"
    ],
    uses: ["السكري مع أمراض القلب"],
    sideEffects: ["التهابات بولية"]
  },

  // ======== الفيتامينات (Vitamins) ========
  {
    id: 26,
    name: "فيتامين C",
    price: 30,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "الفيتامينات",
    description: "مضاد أكسدة لدعم المناعة.",
    features: [
      "أقراص قابلة للمضغ",
      "نكهة البرتقال"
    ],
    uses: ["نزلات البرد", "صحة الجلد"],
    sideEffects: ["إسهال (بجرعات عالية)"]
  },
  {
    id: 27,
    name: "فيتامين D",
    price: 40,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "الفيتامينات",
    description: "لصحة العظام والمناعة.",
    features: [
      "جرعات (1000-5000 وحدة)",
      "زيتي القاعدة للامتصاص"
    ],
    uses: ["نقص فيتامين د", "هشاشة العظام"],
    sideEffects: ["فرط الكالسيوم (نادر)"]
  },
  {
    id: 28,
    name: "الزنك",
    price: 35,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "الفيتامينات",
    description: "يدعم المناعة والخصوبة.",
    features: [
      "أقراص أو شراب",
      "يسرع التئام الجروح"
    ],
    uses: ["نقص الزنك", "تعافي نزلات البرد"],
    sideEffects: ["غثيان"]
  },
  {
    id: 29,
    name: "مكمل الحديد",
    price: 45,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "الفيتامينات",
    description: "علاج فقر الدم الناتج عن نقص الحديد.",
    features: [
      "مع فيتامين C لتحسين الامتصاص",
      "يؤخذ على معدة فارغة"
    ],
    uses: ["الأنيميا", "الحمل"],
    sideEffects: ["إمساك", "براز داكن"]
  },
  {
    id: 30,
    name: "المغنيسيوم",
    price: 50,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "الفيتامينات",
    description: "لصحة العضلات والأعصاب.",
    features: [
      "يقلل تشنجات العضلات",
      "يحسن النوم"
    ],
    uses: ["الإجهاد", "اضطرابات النوم"],
    sideEffects: ["إسهال"]
  },

  // ======== المكملات الغذائية (Supplements) ========
  {
    id: 31,
    name: "أوميجا 3",
    price: 90,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "المكملات الغذائية",
    description: "دهون صحية للقلب والدماغ.",
    features: [
      "مصدر من زيت السمك",
      "1000 مجم لكل كبسولة"
    ],
    uses: ["صحة القلب", "التركيز"],
    sideEffects: ["طعم مريب في الفم"]
  },
  {
    id: 32,
    name: "الكالسيوم مع فيتامين D",
    price: 75,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "المكملات الغذائية",
    description: "لبناء العظام والأسنان.",
    features: [
      "نسبة مثالية للامتصاص",
      "خالي من السكر"
    ],
    uses: ["هشاشة العظام", "الحمل"],
    sideEffects: ["انتفاخ"]
  },
  {
    id: 33,
    name: "فيتامين B12",
    price: 55,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "المكملات الغذائية",
    description: "للطاقة ووظائف الأعصاب.",
    features: [
      "ميثيل كوبالامين (صيغة نشطة)",
      "تحت اللسان لامتصاص أفضل"
    ],
    uses: ["فقر الدم الخبيث", "التعب المزمن"],
    sideEffects: ["حكة خفيفة"]
  },
  {
    id: 34,
    name: "حمض الفوليك",
    price: 40,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "المكملات الغذائية",
    description: "ضروري للحوامل وصحة الدم.",
    features: [
      "400 ميكروجرام للنساء",
      "يمنع تشوهات الأجنة"
    ],
    uses: ["قبل الحمل", "الأنيميا"],
    sideEffects: ["نادر - طفح جلدي"]
  },
  {
    id: 35,
    name: "مكمل البروتين",
    price: 130,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    category: "المكملات الغذائية",
    description: "لبناء العضلات والتعافي.",
    features: [
      "بروتين مصل اللبن",
      "نكهات متعددة"
    ],
    uses: ["الرياضيون", "نقص البروتين"],
    sideEffects: ["غازات (بالإفراط)"]
  },

  // ... (Continue similarly for remaining products up to ID 40)
];

export default products;