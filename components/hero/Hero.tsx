"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { translations } from "@/data/translations";

const textVariants = (dir: number) => ({
  initial: {
    x: -500 * dir,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
});
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration: 20,
    },
  },
};

const Hero = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const variants = textVariants(lang === "ar" ? -1 : 1);

  return (
    <div className="relative h-screen overflow-hidden bg-[linear-gradient(180deg,#0c0c1d,#111132)]">
      <div className="mx-auto h-full max-w-[1366px]">
        <m.div
          className="flex h-full w-1/2 flex-col justify-center gap-10 mobile:h-full mobile:w-full mobile:items-center mobile:justify-start mobile:gap-4 mobile:pt-[110px] mobile:pb-[46vh] mobile:text-center"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <m.h2
            variants={variants}
            className="text-[30px] tracking-[10px] text-[rebeccapurple]"
          >
            {t.hero.name}
          </m.h2>
          <m.h1 variants={variants} className="text-[88px] mobile:text-4xl">
            {t.hero.title}
          </m.h1>
          <m.p
            variants={variants}
            className="max-w-[600px] text-xl font-light leading-relaxed text-gray-300 mobile:px-5 mobile:text-base"
          >
            {t.hero.desc}
          </m.p>
          <m.div variants={variants} className="flex flex-wrap gap-5">
            <m.div variants={variants}>
              <button
                onClick={() =>
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-block cursor-pointer rounded-[10px] border border-white bg-transparent p-5 font-light text-white transition-colors duration-300 hover:border-orange-500 hover:text-orange-500 mobile:p-3 mobile:text-sm"
              >
                {t.hero.latestWorks}
              </button>
            </m.div>
            <m.div variants={variants}>
              <a
                href="https://drive.google.com/file/d/1wcWpH1ewdd51rtf9qoRFuiFya2j3O9oA/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-block cursor-pointer rounded-[10px] border border-white bg-transparent p-5 font-light text-white transition-colors duration-300 hover:border-orange-500 hover:text-orange-500 mobile:p-3 mobile:text-sm"
              >
                {t.hero.viewCv}
              </a>
            </m.div>
          </m.div>
          <m.div variants={variants} animate="scrollButton">
            <Image src="/scroll.png" alt="" width={50} height={50} />
          </m.div>
        </m.div>
      </div>
      <m.div
        className="pointer-events-none absolute bottom-[-120px] w-1/2 whitespace-nowrap text-[50vh] font-bold text-[#ffffff09]"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {t.hero.slider}
      </m.div>
      <div className="pointer-events-none absolute end-0 top-[100px] bottom-0 w-1/2 mobile:top-auto mobile:bottom-0 mobile:h-[46vh] mobile:w-full">
        <Image
          src="/Modern_profile.png"
          alt="Mostafa Maher"
          fill
          sizes="(max-width: 738px) 100vw, 50vw"
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
