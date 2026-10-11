"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxProps = {
  type: "services" | "portfolio";
};

const Parallax = ({ type }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1
        style={{ y: yText }}
        className="text-[100px] mobile:text-center mobile:text-7xl"
      >
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div
        className="absolute z-[3] h-full w-full bg-[url('/mountains.png')] bg-cover bg-bottom mobile:bg-contain mobile:bg-no-repeat"
      ></motion.div>
      <motion.div
        className="absolute z-[2] h-full w-full bg-cover bg-bottom mobile:bg-contain mobile:bg-no-repeat"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`,
        }}
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className="absolute z-[1] h-full w-full bg-[url('/stars.png')] bg-cover bg-bottom"
      ></motion.div>
    </div>
  );
};

export default Parallax;
