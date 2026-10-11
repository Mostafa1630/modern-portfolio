export const experiences = [
  {
    id: "freelance",
    period: { ar: "نوفمبر 2024 — حتى الآن", en: "November 2024 — Present" },
    role: { ar: "مطوّر ويب متكامل مستقل", en: "Freelance Full-Stack Developer" },
    company: { ar: "عمل حر", en: "Independent" },
    kind: "work",
    points: {
      ar: [
        "بناء مواقع ولوحات تحكم متكاملة من الصفر بـ React وNext.js.",
        "تصميم واجهات برمجية RESTful احترافية وتسليم مشاريع متعددة للواجهة الأمامية.",
        "تعلّق Java Spring Boot وبناء تطبيقات ويب بنمط MVC مع Thymeleaf.",
        "إدارة المشاريع وتشغيلها عبر Docker لبيئات تطوير ونشر متسقة.",
        "توظيف أدوات الذكاء الاصطناعي لتسريع التطوير مع التزام بالتعلّم المستمر.",
      ],
      en: [
        "Built complete websites and dashboards from scratch with React and Next.js.",
        "Designed professional RESTful APIs and delivered multiple front-end projects.",
        "Learned Java Spring Boot and built MVC web applications with Thymeleaf.",
        "Managed and ran projects using Docker for consistent dev and deployment environments.",
        "Leveraged AI-powered development tools to accelerate delivery while continuously learning.",
      ],
    },
  },
  {
    id: "drcode",
    period: { ar: "يناير 2024 — نوفمبر 2024", en: "January 2024 — November 2024" },
    role: { ar: "مطوّر واجهات أمامية", en: "Frontend Developer" },
    company: { ar: "Dr.Code", en: "Dr.Code" },
    kind: "work",
    points: {
      ar: [
        "العمل على مشاريع الواجهة الأمامية باستخدام React وNext.js ضمن فريق Dr.Code.",
        "المشاركة في بناء منصة سوق إلكتروني متعدّد البائعين.",
        "تنفيذ تصفّح المنتجات حسب التصنيفات ونظام دردشة فوري بين البائعين والعملاء.",
      ],
      en: [
        "Worked on front-end projects using React and Next.js within the Dr.Code team.",
        "Contributed to the frontend of a multi-vendor marketplace platform.",
        "Implemented category-based product browsing and a real-time merchant-customer chat system.",
      ],
    },
  },
  {
    id: "iti",
    period: { ar: "2022", en: "2022" },
    role: { ar: "شهادات معتمدة — ITI", en: "Certifications — ITI" },
    company: {
      ar: "معهد تكنولوجيا المعلومات، وزارة الاتصالات",
      en: "Information Technology Institute, MCIT",
    },
    kind: "cert",
    points: {
      ar: [
        "تطوير React (150 ساعة): HTML وCSS وJavaScript وES6 وBootstrap وReact ومشروع تخرّج.",
        "مقدمة في تطوير الويب (60 ساعة): أساسيات HTML وCSS وJavaScript.",
      ],
      en: [
        "React Development (150 hrs): HTML & CSS, JavaScript, ES6, Bootstrap, React and a capstone project.",
        "Introduction to Web Development (60 hrs): HTML, CSS and JavaScript foundations.",
      ],
    },
  },
  {
    id: "education",
    period: { ar: "2024", en: "2024" },
    role: { ar: "بكالوريوس حاسبات ومعلومات", en: "B.Sc. in Computer & Information Sciences" },
    company: { ar: "جامعة المنوفية", en: "Menoufia University" },
    kind: "edu",
    points: {
      ar: ["كلية الحاسبات والمعلومات — مصر."],
      en: ["Faculty of Computer & Information Sciences — Egypt."],
    },
  },
] as const;

export type Experience = (typeof experiences)[number];
