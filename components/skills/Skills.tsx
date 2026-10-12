"use client";

import { m } from "framer-motion";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { translations } from "@/data/translations";

type Skill = { name: string; logo: string };

const bars: { labelKey: "frontend" | "backend" | "tools"; reverse: boolean; speed: string; skills: Skill[] }[] = [
  {
    labelKey: "frontend",
    reverse: false,
    speed: "35s",
    skills: [
      { name: "React", logo: "react" },
      { name: "Next.js", logo: "nextjs" },
      { name: "TypeScript", logo: "typescript" },
      { name: "JavaScript", logo: "javascript" },
      { name: "HTML5", logo: "html5" },
      { name: "CSS3", logo: "css" },
      { name: "Sass", logo: "sass" },
      { name: "Tailwind CSS", logo: "tailwind" },
      { name: "Bootstrap", logo: "bootstrap" },
      { name: "jQuery", logo: "jquery" },
      { name: "Framer Motion", logo: "framer" },
    ],
  },
  {
    labelKey: "backend",
    reverse: true,
    speed: "40s",
    skills: [
      { name: "Java", logo: "java" },
      { name: "Spring Boot", logo: "spring" },
      { name: "Python", logo: "python" },
      { name: "FastAPI", logo: "fastapi" },
      { name: "Thymeleaf", logo: "thymeleaf" },
      { name: "MySQL", logo: "mysql" },
      { name: "PostgreSQL", logo: "postgres" },
      { name: "JWT", logo: "jwt" },
      { name: "WebSockets", logo: "websockets" },
      { name: "Firebase", logo: "firebase" },
      { name: "Pusher", logo: "pusher" },
    ],
  },
  {
    labelKey: "tools",
    reverse: false,
    speed: "30s",
    skills: [
      { name: "Git", logo: "git" },
      { name: "GitHub", logo: "github" },
      { name: "Docker", logo: "docker" },
      { name: "Postman", logo: "postman" },
      { name: "VS Code", logo: "vscode" },
      { name: "IntelliJ IDEA", logo: "intellij" },
      { name: "Cursor", logo: "cursor" },
      { name: "Claude", logo: "claude" },
      { name: "Codex", logo: "codex" },
    ],
  },
];

const Chip = ({ skill }: { skill: Skill }) => (
  <div className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3">
    <svg className="h-7 w-7" aria-hidden="true">
      <use href={`/skills/sprite.svg#${skill.logo}`} />
    </svg>
    <span className="whitespace-nowrap text-lg font-light">{skill.name}</span>
  </div>
);

const Skills = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="flex w-full flex-col gap-[80px] overflow-hidden py-[80px] mobile:py-[40px]">
      <m.div
        className="px-5 text-center"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[64px] font-thin mobile:text-4xl">{t.skills.heading}</h1>
        <p className="text-xl text-gray-400">{t.skills.sub}</p>
      </m.div>

      <div className="flex flex-col gap-[50px]">
        {bars.map((bar) => (
          <div key={bar.labelKey} className="ticker group flex flex-col gap-4">
            <span className="ps-[60px] text-sm font-bold uppercase tracking-[4px] text-orange-500 mobile:ps-5">
              {t.skills[bar.labelKey]}
            </span>
            <div
              className={`marquee-track ${bar.reverse ? "marquee-right" : "marquee-left"} w-max gap-6`}
              style={{ animationDuration: bar.speed }}
            >
              {[...bar.skills, ...bar.skills].map((skill, i) => (
                <Chip key={`${skill.name}-${i}`} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
