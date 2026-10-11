export type Lang = "ar" | "en";

export const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      experience: "الخبرة",
      skills: "المهارات",
      portfolio: "الأعمال",
      contact: "تواصل",
    },
    hero: {
      name: "مصطفى ماهر",
      title: "مطوّر ويب متكامل",
      desc: "أكثر من 75 مشروعًا منجَزًا. أبني تطبيقات إنتاجية بأعلى كفاءة، وأصل بنتائج تحسين محركات البحث والأداء إلى 100/100.",
      latestWorks: "اطّلع على أحدث الأعمال",
      viewCv: "عرض السيرة الذاتية",
      slider: "واجهات أمامية • خوادم خلفية • تطوير متكامل",
    },
    services: {
      focus: "أركّز على مساعدة علامتك التجارية على النمو والتقدّم",
      unique: "أفكار مميزة",
      forBusiness: "لأعمالك.",
      whatWeDo: "ماذا نقدّم؟",
    },
    experience: {
      heading: "مسيرتي المهنية",
      sub: "من العمل المؤسسي إلى المشاريع المستقلة",
    },
    skills: {
      heading: "صندوق الأدوات",
      sub: "التقنيات التي أتقنها وأعمل بها يوميًا",
      frontend: "الواجهات الأمامية",
      backend: "الواجهات الخلفية",
      tools: "الأدوات والذكاء الاصطناعي",
    },
    portfolio: {
      featured: "أعمال مختارة",
      seeDemo: "مشاهدة النموذج",
      api: "واجهات برمجية",
    },
    contact: {
      heading: "لنعمل معًا",
      mail: "البريد الإلكتروني",
      address: "العنوان",
      phone: "الهاتف",
      namePlaceholder: "الاسم",
      emailPlaceholder: "البريد الإلكتروني",
      messagePlaceholder: "الرسالة",
      submit: "إرسال",
      error: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      success: "تم إرسال الرسالة بنجاح!",
    },
  },
  en: {
    nav: {
      home: "Homepage",
      services: "Services",
      experience: "Experience",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      name: "MOSTAFA MAHER",
      title: "Full-Stack Developer",
      desc: "75+ delivered projects. I build production-grade applications with peak efficiency — pushing SEO and performance scores up to 100/100.",
      latestWorks: "See the Latest Works",
      viewCv: "View CV",
      slider: "Front-End • Back-End • Full-Stack",
    },
    services: {
      focus: "I focus on helping your brand grow and move forward",
      unique: "Unique Ideas",
      forBusiness: "For Your Business.",
      whatWeDo: "WHAT WE DO?",
    },
    experience: {
      heading: "My Professional Journey",
      sub: "From team-based work to independent delivery",
    },
    skills: {
      heading: "The Toolbox",
      sub: "Technologies I master and use every day",
      frontend: "Front-End",
      backend: "Back-End",
      tools: "Tools & AI",
    },
    portfolio: {
      featured: "Featured Works",
      seeDemo: "See Demo",
      api: "API",
    },
    contact: {
      heading: "Let's work together",
      mail: "Mail",
      address: "Address",
      phone: "Phone",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      submit: "Submit",
      error: "Something went wrong. Please try again.",
      success: "Message sent successfully!",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];
