"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { services } from "@/data/services";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { translations } from "@/data/translations";

const variants = (dir: number) => ({
  initial: {
    x: -500 * dir,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
});

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const t = translations[lang];
  const motionVariants = variants(lang === "ar" ? -1 : 1);

  useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="flex min-h-[calc(100vh-100px)] flex-col justify-between bg-[linear-gradient(180deg,#0c0c1d,#111132)] mobile:min-h-[calc(100vh-80px)]"
      variants={motionVariants}
      initial="initial"
      ref={ref}
      animate="animate"
    >
      <motion.div
        className="flex flex-1 items-center justify-end gap-5 px-5 mobile:flex-col mobile:items-center mobile:justify-center mobile:text-center"
        variants={motionVariants}
      >
        <p className="text-right text-xl font-thin text-gray-400">{t.services.focus}</p>
        <hr className="w-[500px] max-w-full border-none border-t-[0.5px] border-t-gray-400 mobile:w-[300px]" />
      </motion.div>
      <motion.div
        className="flex flex-[2] flex-col items-center mobile:w-full"
        variants={motionVariants}
      >
        <div className="flex items-center gap-[50px] mobile:flex-col mobile:gap-5 mobile:text-center">
          <Image
            src="/people.webp"
            alt=""
            width={300}
            height={100}
            className="h-[100px] w-[300px] rounded-[50px] object-cover mobile:h-[50px] mobile:w-[200px]"
          />
          <h1 className="text-[96px] font-thin mobile:text-4xl">
            <motion.b whileHover={{ color: "orange" }}>{t.services.unique}</motion.b>
          </h1>
        </div>
        <div className="flex items-center gap-[50px] mobile:flex-col mobile:gap-5 mobile:text-center">
          <h1 className="text-[96px] font-thin mobile:text-4xl">
            <motion.b whileHover={{ color: "orange" }}>{t.services.forBusiness}</motion.b>
          </h1>
          <button
            onClick={() =>
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
            }
            className="h-[100px] w-[300px] cursor-pointer rounded-[50px] border-none bg-orange-500 text-2xl text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] mobile:h-[50px] mobile:w-[150px] mobile:text-base"
          >
            {t.services.whatWeDo}
          </button>
        </div>
      </motion.div>
      <motion.div
        className="mx-auto mb-[60px] flex w-full max-w-[1366px] flex-[2] gap-[20px] px-5 mobile:w-full mobile:flex-col mobile:px-[10px]"
        variants={motionVariants}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="flex flex-1 flex-col justify-between gap-5 rounded-[15px] border-[0.5px] border-gray-400 p-[50px] mobile:items-center mobile:p-[15px]"
            whileHover={{
              y: -12,
              backgroundColor: "rgba(249, 115, 22, 0.12)",
              borderColor: "#f97316",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2>{service.title[lang]}</h2>
            <p className="mobile:hidden">{service.desc[lang]}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
