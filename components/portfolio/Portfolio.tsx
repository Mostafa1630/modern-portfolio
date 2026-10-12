"use client";

import { useEffect } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import projects from "@/data/projects.json";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { translations } from "@/data/translations";

// Set after the first paint so a language-switch remount renders cards
// already visible instead of waiting on the in-view observer again.
let treeMounted = false;

type PortfolioItem = (typeof projects)[number];

const Single = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const desc = lang === "ar" ? item.descAr : item.desc;

  const hasPair = Boolean(item.imgWeb && item.imgMobile);
  const fallbackImg = item.img || item.imgWeb || item.imgMobile;

  const fromLeft = index % 2 === 0;
  // Mirror the slide-in side in RTL, and keep the physical off-screen direction
  const startX = (fromLeft ? -300 : 300) * (lang === "ar" ? -1 : 1);
  const firstLoad = !treeMounted;

  return (
    <section className="relative min-h-fit py-[30px] mobile:py-[10px]">
      {/* Ghost number */}
      <span
        className={`pointer-events-none absolute top-[30px] select-none text-[160px] font-black leading-none text-white/5 mobile:hidden ${
          fromLeft ? "left-[30px]" : "right-[30px]"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <m.div
          className={`mx-auto flex h-full w-full max-w-[1366px] items-center justify-center gap-[50px] px-[50px] mobile:flex-col mobile:px-[10px] ${
            !fromLeft ? "lg:flex-row-reverse" : ""
          }`}
          initial={firstLoad ? { x: startX, opacity: 0 } : { x: 0, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Visual */}
          <div className="group relative flex min-h-[420px] min-w-0 flex-1 items-center justify-center mobile:min-h-[260px] mobile:w-full">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(123,44,191,0.25),transparent_65%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
            {hasPair ? (
              <div className="w-full max-w-[620px] transition-transform duration-500 ease-out group-hover:scale-[1.03] mobile:max-w-[420px]">
                {/* Laptop screen */}
                <div className="rounded-t-[18px] border-x-[6px] border-t-[6px] border-[#2b2b3a] bg-[#16161f] p-2 pb-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-shadow duration-500 group-hover:shadow-[0_0_60px_rgba(249,115,22,0.18)]">
                  <div className="flex h-[320px] gap-2 mobile:h-[170px]">
                    <div className="relative flex-[2.4] overflow-hidden rounded-lg">
                      <Image
                        src={item.imgWeb}
                        alt={`${item.title} — web`}
                        fill
                        sizes="(max-width: 738px) 55vw, 430px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="relative flex-1 overflow-hidden rounded-lg">
                      <Image
                        src={item.imgMobile}
                        alt={`${item.title} — mobile`}
                        fill
                        sizes="(max-width: 738px) 25vw, 180px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                {/* Hinge */}
                <div className="mx-auto h-2 w-[40%] rounded-b-md bg-[#2b2b3a]" />
                {/* Keyboard base */}
                <div className="relative h-3.5 rounded-b-[14px] bg-gradient-to-b from-[#4a4a5a] to-[#23232f] shadow-[0_15px_25px_rgba(0,0,0,0.5)]">
                  <div className="absolute left-1/2 top-0 h-2 w-24 -translate-x-1/2 rounded-b-lg bg-[#31313e]" />
                </div>
              </div>
            ) : (
              <>
                {item.type === "api" && (
                  <span className="absolute end-10 top-3 z-10 rounded-lg bg-orange-500 px-10 py-1 text-lg font-bold text-white mobile:end-2 mobile:top-2 mobile:px-4 mobile:py-0.5 mobile:text-sm">
                    {t.portfolio.api}
                  </span>
                )}
                {fallbackImg && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-orange-500/40">
                    <Image
                      src={fallbackImg}
                      alt={item.title}
                      fill
                      sizes="(max-width: 738px) 100vw, 600px"
                      className="object-cover mobile:object-contain"
                    />
                  </div>
                )}
              </>
            )}
          </div>

          {/* Text */}
          <m.div className="flex min-w-0 flex-1 flex-col gap-[25px] mobile:items-center mobile:p-[10px] mobile:text-center">
            <h2 className="text-7xl font-thin mobile:text-4xl">
              {item.title}
              <span className="mt-3 block h-[3px] w-[80px] rounded-full bg-orange-500 mobile:mx-auto" />
            </h2>
            <p className="text-xl leading-relaxed text-gray-400 mobile:text-base">
              {desc}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm text-orange-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-5 mobile:justify-center">
              {item.demo && (
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-[200px] items-center justify-center gap-2 rounded-[10px] border-none bg-orange-500 p-[10px] text-center font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(249,115,22,0.45)] mobile:w-[150px]"
                >
                  {t.portfolio.seeDemo}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              )}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-[200px] items-center justify-center gap-2 rounded-[10px] border border-white/60 bg-transparent p-[10px] text-center text-white transition-all duration-300 hover:scale-105 hover:border-orange-500 hover:text-orange-500 mobile:w-[150px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    treeMounted = true;
  }, []);

  return (
    <div className="relative">
      <div className="sticky left-0 top-[100px] z-30 flex justify-center pt-[50px] mobile:pt-[16px]">
        <h1 className="rounded-full border border-orange-500/30 bg-[#0c0c1d]/80 px-8 py-3 text-2xl font-light tracking-[3px] text-orange-500 backdrop-blur-md mobile:text-lg">
          {t.portfolio.featured}
        </h1>
      </div>
      {projects.map((item, i) => (
        <Single item={item} index={i} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
