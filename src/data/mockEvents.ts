export interface EventItem {
  id: string;
  title: string;
  organizer: string;
  location: string;
  locationArea: string; // Specific area in Fayoum
  dateArabic: string;   // e.g. "15 نوفمبر 2025"
  timeArabic: string;   // e.g. "04:00 مساءً"
  category: 'workshop' | 'course' | 'event';
  categoryLabel: string;
  coverImage: string;
  description: string;
  highlights: string[];
  seatsTotal: number;
  seatsLeft: number;
  isFree: boolean;
  status: 'published';
}

export const MOCK_EVENTS: EventItem[] = [
  {
    id: 'ev-01',
    title: 'ملتقى ريادة الأعمال والابتكار لشباب الفيوم',
    organizer: 'حاضنة أعمال جامعة الفيوم',
    location: 'قصر ثقافة الفيوم - القاعة الكبرى',
    locationArea: 'مدينة الفيوم',
    dateArabic: '15 نوفمبر 2025',
    timeArabic: '10:00 صباحاً - 04:00 مساءً',
    category: 'event',
    categoryLabel: 'فعالية',
    coverImage: '/src/assets/images/fayoum_tech_creativa_1794396730013.jpg',
    description: 'يوم حافل يجمع رواد الأعمال وأصحاب المشاريع الناشئة والشباب الطموح في الفيوم، يتضمن جلسات حوارية، واستشارات مجانية لأفكار المشاريع، وعرض قصص نجاح ملهمة لشباب المحافظة.',
    highlights: [
      'جلسات إرشاد وتوجيه مع مستثمرين وخبراء أعمال',
      'معرض للمشاريع الشبابية الناشئة في الفيوم',
      'شهادات حضور وفرص تمويل للمشاريع المتميزة'
    ],
    seatsTotal: 150,
    seatsLeft: 28,
    isFree: true,
    status: 'published',
  },
  {
    id: 'ev-02',
    title: 'ورشة صناعة الفخار والخزف اليدوي المعاصر',
    organizer: 'مدرسة ومؤسسة الخزف بقرية تونس',
    location: 'مركز الخزف التراثي - قرية تونس',
    locationArea: 'يوسف الصديق',
    dateArabic: '20 نوفمبر 2025',
    timeArabic: '11:00 صباحاً - 03:00 مساءً',
    category: 'workshop',
    categoryLabel: 'ورشة',
    coverImage: '/src/assets/images/fayoum_pottery_tunis_1794396727989.jpg',
    description: 'ورشة تدريبية عملية وتطبيقية على دواليب الخزف التقليدية مع أشهر فناني قرية تونس. ستتعلم تشكيل الطين، والزخرفة اليدوية بالحرق، وصناعة قطعتك الفنية الأولى المستوحاة من طبيعة الفيوم.',
    highlights: [
      'توفير كافة خامات الطين والألوان مجاناً للمشاركين',
      'تدريب فردي عملي على دولاب الخزف',
      'أخذ القطعة الفنية بعد الحرق كتذكار دائم'
    ],
    seatsTotal: 25,
    seatsLeft: 6,
    isFree: true,
    status: 'published',
  },
  {
    id: 'ev-03',
    title: 'معسكر تدريبي: مهارات البرمجة والذكاء الاصطناعي التوليدي',
    organizer: 'مركز إبداع مصر الرقمية (Creativa Fayoum)',
    location: 'مجمع كليات جامعة الفيوم - مبنى كرياتيفا',
    locationArea: 'جامعة الفيوم',
    dateArabic: '25 نوفمبر 2025',
    timeArabic: '01:00 ظهراً - 05:00 مساءً',
    category: 'course',
    categoryLabel: 'دورة',
    coverImage: '/src/assets/images/fayoum_tech_creativa_1794396730013.jpg',
    description: 'دورة تدريبية مكثفة تستهدف خريجي وطلاب جامعات ومدارس الفيوم للتعرف على أدوات الذكاء الاصطناعي الحديثة، وتطبيقات الويب، وكيفية بناء نماذج أولية سريعة تفتح آفاق العمل الحر والتوظيف.',
    highlights: [
      'تطبيق عملي لمشاريع حقيقية من الصفر',
      'توجيه مهني خاص بكيفية العمل على منصات الفريلانس',
      'شهادة معتمدة من وزارة الاتصالات وإبداع مصر الرقمية'
    ],
    seatsTotal: 40,
    seatsLeft: 11,
    isFree: true,
    status: 'published',
  },
  {
    id: 'ev-04',
    title: 'ورشة تصوير الطبيعة والحياة البرية في وادي الريان',
    organizer: 'نادي مصوري الفيوم ومحميات الفيوم',
    location: 'محمية وادي الريان - شلالات والبحيرة السحرية',
    locationArea: 'وادي الريان',
    dateArabic: '02 ديسمبر 2025',
    timeArabic: '07:00 صباحاً - 04:00 مساءً',
    category: 'workshop',
    categoryLabel: 'ورشة',
    coverImage: '/src/assets/images/fayoum_nature_ecotour_1794396729704.jpg',
    description: 'رحلة وورشة ميدانية متكاملة لتعلم فنون تصوير المناظر الطبيعية والحياة البرية والطيور المهاجرة في صحراء وبحيرات الفيوم. يشرف عليها مدربون محترفون في التصوير الوثائقي والبيئي.',
    highlights: [
      'انتقالات ذهاب وعودة من مدينة الفيوم شاملة تصاريح المحمية',
      'تطبيقات عملية على تصوير الغروب وانعكاسات المياه',
      'مسابقة لأفضل لقطة مع جوائز للمراكز الثلاثة الأولى'
    ],
    seatsTotal: 30,
    seatsLeft: 4,
    isFree: true,
    status: 'published',
  },
  {
    id: 'ev-05',
    title: 'دورة التسويق الرقمي وبناء الهوية للمشاريع المحلية',
    organizer: 'أكاديمية رواد الغد للتنمية بالفيوم',
    location: 'قاعة المؤتمرات - الغرفة التجارية بالفيوم',
    locationArea: 'وسط البلد، الفيوم',
    dateArabic: '08 ديسمبر 2025',
    timeArabic: '05:00 مساءً - 08:30 مساءً',
    category: 'course',
    categoryLabel: 'دورة',
    coverImage: '/src/assets/images/fayoum_hero_landscape_1794396727741.jpg',
    description: 'دورة تطبيقية مدتها 4 أيام تركز على إعداد الحملات الإعلانية الناجحة عبر السوشيال ميديا، وكيفية تصوير المنتجات وتسويق الحرف اليدوية والخدمات لأهالي الفيوم والمحافظات المجاورة.',
    highlights: [
      'إدارة حملات ترويجية فعلية بميزانيات تجريبية',
      'كتابة المحتوى الإعلاني الموجه للجمهور المصري',
      'جلسة استشارية خاصة لكل مشارك لمشروعه الخاص'
    ],
    seatsTotal: 50,
    seatsLeft: 19,
    isFree: true,
    status: 'published',
  },
  {
    id: 'ev-06',
    title: 'هاكاثون الفيوم للحلول البيئية والسياحة المستدامة',
    organizer: 'مبادرة شباب الفيوم الرقمي بالتعاون مع جهاز المحميات',
    location: 'منتجع بحيرة قارون السياحي - فندق هلنان أوبرج',
    locationArea: 'ساحل بحيرة قارون',
    dateArabic: '15 ديسمبر 2025',
    timeArabic: '09:00 صباحاً - 06:00 مساءً',
    category: 'event',
    categoryLabel: 'فعالية',
    coverImage: '/src/assets/images/fayoum_hero_landscape_1794396727741.jpg',
    description: 'تحدٍ برمجى وابتكاري يمتد على مدار يومين لتطوير حلول ذكية تدعم السياحة البيئية، وترشيد المياه، وتسليط الضوء على معالم الفيوم الطبيعية والتاريخية بمشاركة فرق شبابية من مختلف جامعات الصعيد.',
    highlights: [
      'جوائز نقدية وتكريم للفرق الثلاثة الفائزة',
      'إرشاد تقني وبيئي من خبراء المحميات وشركات البرمجيات',
      'فرصة لاحتضان الحل الفائز وتطبيقه على أرض الواقع'
    ],
    seatsTotal: 80,
    seatsLeft: 14,
    isFree: true,
    status: 'published',
  },
];
