const products = [
    { id: 1, name: "بانادول", price: 50, image: "../src/assets/panadol.jpg", category: "مسكنات الألم",
    description:
      "كتافاست هو مسكن فعال يستخدم لعلاج الصداع وآلام الأسنان والعضلات، ويعمل كمضاد للالتهابات.",
    features: [
      "يخفف الألم بسرعة خلال دقائق",
      "يعمل كمضاد للالتهابات",
      "يستخدم لعلاج آلام الأسنان والصداع",
      "يحتوي على 9 أكياس فوارة",
    ],
    uses: [
      "تخفيف الصداع وآلام الرأس",
      "علاج آلام الأسنان الحادة",
      "تخفيف آلام العضلات والمفاصل",
    ],   sideEffects: [
        "الشعور بالغثيان والقيء",
        "الدوخة والصداع",
        "إسهال",
        "عسر الهضم والانتفاخ",
        "ألم بالمعدة",
        "فقدان الشهية",
        "الطفح الجلدي",
        "تغير في نتائج تحليل وظائف الكبد"
      ] },
    { id: 2, name: "بروفين", price: 45, image: "../src/assets/panadol.jpg", category: "مسكنات الألم",     description:
      "كتافاست هو مسكن فعال يستخدم لعلاج الصداع وآلام الأسنان والعضلات، ويعمل كمضاد للالتهابات.",
    features: [
      "يخفف الألم بسرعة خلال دقائق",
      "يعمل كمضاد للالتهابات",
      "يستخدم لعلاج آلام nkjnjالأسنان والصداع",
      "يحتوي على 9 أكياس فوارة",
    ],
    uses: [
      "تخفيف الصداع وآلام الرأس",
      "علاج آلام الأسنان الحادة",
      "تخفيف آلام العضلات والمفاصل",
    ], },
    { id: 3, name: "فولتارين", price: 55, image: "../src/assets/panadol.jpg", category: "مسكنات الألم",     description:
      "كتافاست هو مسكن فعال يستخدم لعلاج الصداع وآلام الأسنان والعضلات، ويعمل كمضاد للالتهابات.",
    features: [
      "يخفف الألم بسرعة خلال دقائق",
      "يعمل كمضاد للالتهابات",
      "يستخدم لعلاج آلام الأسنان والصداع",
      "يحتوي على 9 أكياس فوارة",
    ],
    uses: [
      "تخفيف الصداع وآلام الرأس",
      "علاج آلام الأسنان الحادة",
      "تخفيف آلام العضلات والمفاصل",
    ], },
    { id: 4, name: "أدفيل", price: 60, image: "../src/assets/panadol.jpg", category: "مسكنات الألم",     description:
      "كتافاست هو مسكن فعال يستخدم لعلاج الصداع وآلام الأسنان والعضلات، ويعمل كمضاد للالتهابات.",
    features: [
      "يخفف الألم بسرعة خلال دقائق",
      "يعمل كمضاد للالتهابات",
      "يستخدم لعلاج آلام الأسنان والصداع",
      "يحتوي على 9 أكياس فوارة",
    ],
    uses: [
      "تخفيف الصداع وآلام الرأس",
      "علاج آلام الأسنان الحادة",
      "تخفيف آلام العضلات والمفاصل",
    ], },
    { id: 5, name: "باراسيتامول", price: 30, image: "../src/assets/panadol.jpg", category: "مسكنات الألم",     description:
      "كتافاست هو مسكن فعال يستخدم لعلاج الصداع وآلام الأسنان والعضلات، ويعمل كمضاد للالتهابات.",
    features: [
      "يخفف الألم بسرعة خلال دقائق",
      "يعمل كمضاد للالتهابات",
      "يستخدم لعلاج آلام الأسنان والصداع",
      "يحتوي على 9 أكياس فوارة",
    ],
    uses: [
      "تخفيف الصداع وآلام الرأس",
      "علاج آلام الأسنان الحادة",
      "تخفيف آلام العضلات والمفاصل",
    ], },

    { id: 6, name: "أوميبرازول", price: 70, image: "../src/assets/panadol.jpg", category: "أدوية المعدة" },
    { id: 7, name: "رانيتيدين", price: 65, image: "../src/assets/panadol.jpg", category: "أدوية المعدة" },
    { id: 8, name: "مالوكس", price: 40, image: "../src/assets/panadol.jpg", category: "أدوية المعدة" },
    { id: 9, name: "جافيسكون", price: 55, image: "../src/assets/panadol.jpg", category: "أدوية المعدة" },
    { id: 10, name: "إيزوميبرازول", price: 75, image: "../src/assets/panadol.jpg", category: "أدوية المعدة" },

    { id: 11, name: "سيتريزين", price: 35, image: "../src/assets/panadol.jpg", category: "أدوية الحساسية" },
    { id: 12, name: "لوراتادين", price: 30, image: "../src/assets/panadol.jpg", category: "أدوية الحساسية" },
    { id: 13, name: "فيكسوفينادين", price: 45, image: "../src/assets/panadol.jpg", category: "أدوية الحساسية" },
    { id: 14, name: "كلورفينيرامين", price: 25, image: "../src/assets/panadol.jpg", category: "أدوية الحساسية" },
    { id: 15, name: "ديفينهيدرامين", price: 50, image: "../src/assets/panadol.jpg", category: "أدوية الحساسية" },

    { id: 16, name: "أسبرين", price: 20, image: "../src/assets/panadol.jpg", category: "صحة القلب" },
    { id: 17, name: "أتورفاستاتين", price: 90, image: "../src/assets/panadol.jpg", category: "صحة القلب" },
    { id: 18, name: "كلوبيدوجريل", price: 85, image: "../src/assets/panadol.jpg", category: "صحة القلب" },
    { id: 19, name: "لوسارتان", price: 60, image: "../src/assets/panadol.jpg", category: "صحة القلب" },
    { id: 20, name: "ميتوبرولول", price: 70, image: "../src/assets/panadol.jpg", category: "صحة القلب" },

    { id: 21, name: "ميتفورمين", price: 50, image: "../src/assets/panadol.jpg", category: "علاج السكري" },
    { id: 22, name: "إنسولين", price: 100, image: "../src/assets/panadol.jpg", category: "علاج السكري" },
    { id: 23, name: "جليبيزيد", price: 40, image: "../src/assets/panadol.jpg", category: "علاج السكري" },
    { id: 24, name: "سيتاجليبتين", price: 85, image: "../src/assets/panadol.jpg", category: "علاج السكري" },
    { id: 25, name: "داباغليفلوزين", price: 90, image: "../src/assets/panadol.jpg", category: "علاج السكري" },

    { id: 26, name: "فيتامين C", price: 30, image: "../src/assets/panadol.jpg", category: "الفيتامينات" },
    { id: 27, name: "فيتامين D", price: 40, image: "../src/assets/panadol.jpg", category: "الفيتامينات" },
    { id: 28, name: "الزنك", price: 35, image: "../src/assets/panadol.jpg", category: "الفيتامينات" },
    { id: 29, name: "مكمل الحديد", price: 45, image: "../src/assets/panadol.jpg", category: "الفيتامينات" },
    { id: 30, name: "المغنيسيوم", price: 50, image: "../src/assets/panadol.jpg", category: "الفيتامينات" },

    { id: 31, name: "أوميجا 3", price: 90, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 32, name: "الكالسيوم مع فيتامين D", price: 75, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 33, name: "فيتامين B12", price: 55, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 34, name: "حمض الفوليك", price: 40, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 35, name: "مكمل البروتين", price: 130, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
  
    { id: 36, name: "ملتي فيتامين", price: 110, image: "../src/assets/panadol.jpg", category: "الفيتامينات" },
    { id: 37, name: "مكمل الكولاجين", price: 140, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 38, name: "كرياتين مونوهيدرات", price: 95, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 39, name: "زيت السمك", price: 85, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 40, name: "بيوتين للشعر", price: 60, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 361, name: "ملتي فيتامين", price: 110, image: "../src/assets/panadol.jpg", category: "الفيتامينات" },
    { id: 371, name: "مكمل الكولاجين", price: 140, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 381, name: "كرياتين مونوهيدرات", price: 95, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 391, name: "زيت السمك", price: 85, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 401, name: "بيوتين للشعر", price: 60, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 3611, name: "ملتي فيتامين", price: 110, image: "../src/assets/panadol.jpg", category: "الفيتامينات" },
    { id: 3711, name: "مكمل الكولاجين", price: 140, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 3811, name: "كرياتين مونوهيدرات", price: 95, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 3911, name: "زيت السمك", price: 85, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
    { id: 4011, name: "بيوتين للشعر", price: 60, image: "../src/assets/panadol.jpg", category: "المكملات الغذائية" },
];

export default products;
