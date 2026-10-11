"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { translations } from "@/data/translations";

const variants = {
  initial: { y: 80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.1 },
  },
};

const kindLabel = {
  work: { ar: "خبرة عملية", en: "Experience" },
  cert: { ar: "شهادة", en: "Certification" },
  edu: { ar: "تعليم", en: "Education" },
} as const;

const Experience = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="mx-auto flex min-h-[calc(100vh-100px)] w-full max-w-[1366px] flex-col justify-center gap-[60px] px-5 py-[80px] mobile:py-[40px]">
      <motion.div
        className="text-center"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h1 className="text-[64px] font-thin mobile:text-4xl">{t.experience.heading}</h1>
        <p className="text-xl text-gray-400">{t.experience.sub}</p>
      </motion.div>

      <div className="relative flex flex-col gap-[50px] before:absolute before:inset-y-0 before:left-1/2 before:w-[2px] before:-translate-x-1/2 before:bg-orange-500/30 mobile:before:hidden">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            className="relative"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="absolute left-1/2 top-8 hidden h-[24px] w-[24px] -translate-x-1/2 rounded-full border-4 border-[#0c0c1d] bg-orange-500 mobile:hidden" />
            <div
              className={`w-full max-w-[calc(50%-50px)] mobile:max-w-full ${
                i % 2 === 0 ? "me-auto" : "ms-auto"
              }`}
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-[30px] backdrop-blur-sm">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-orange-500 px-4 py-1 text-sm font-bold text-white">
                    {kindLabel[exp.kind][lang]}
                  </span>
                  <span className="text-sm text-gray-400">{exp.period[lang]}</span>
                </div>
                <h2 className="text-3xl font-light mobile:text-xl">{exp.role[lang]}</h2>
                <h3 className="mb-4 text-xl text-orange-400">{exp.company[lang]}</h3>
                <ul className="flex list-none flex-col gap-2">
                  {exp.points[lang].map((point) => (
                    <li key={point} className="flex gap-3 text-gray-300">
                      <span className="text-orange-500">&#9670;</span>
                      <span className="font-light leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
