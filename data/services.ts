export const services = [
  {
    id: "frontend",
    title: { ar: "الواجهات الأمامية", en: "Front-End" },
    desc: {
      ar: "بناء واجهات مستخدم سريعة ومتجاوبة ومتحرّكة باستخدام React وNext.js وTypeScript وTailwind CSS وSass وFramer Motion.",
      en: "Building fast, responsive and animated user interfaces with React, Next.js, TypeScript, Tailwind CSS, Sass and Framer Motion.",
    },
  },
  {
    id: "backend",
    title: { ar: "الواجهات الخلفية", en: "Back-End" },
    desc: {
      ar: "تطوير واجهات برمجية RESTful باستخدام Java Spring Boot وFastAPI: مصادقة JWT، وصلاحيات وصول حسب الدور، وقواعد بيانات MySQL وPostgreSQL مع تحسين الاستعلامات.",
      en: "Developing RESTful APIs with Java Spring Boot and FastAPI: JWT authentication, role-based access control, MySQL and PostgreSQL with query optimization.",
    },
  },
  {
    id: "fullstack",
    title: { ar: "التطوير المتكامل", en: "Full-Stack" },
    desc: {
      ar: "تطبيقات ويب متكاملة من قاعدة البيانات حتى النشر: استخدام Docker، وميزات فورية عبر WebSockets وFirebase وPusher، وتحسين محركات البحث SEO.",
      en: "End-to-end web applications from database to deployment: Docker, real-time features with WebSockets, Firebase and Pusher, and SEO optimization.",
    },
  },
] as const;

export type Service = (typeof services)[number];
