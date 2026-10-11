"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";

const Single = ({ item }: { item: PortfolioItem }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <div className="mx-auto flex h-full max-w-[1366px] items-center justify-center gap-[50px] mobile:flex-col">
          <div
            className="relative h-1/2 flex-1 mobile:h-auto mobile:max-h-[300px] mobile:w-full"
            ref={ref}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover mobile:object-contain"
            />
          </div>
          <motion.div
            className="flex flex-1 flex-col gap-[30px] mobile:!transform-none mobile:items-center mobile:p-[10px] mobile:text-center"
            style={{ y }}
          >
            <h2 className="text-7xl mobile:text-4xl">{item.title}</h2>
            <p className="text-xl text-gray-400 mobile:text-base">{item.desc}</p>
            <button className="w-[200px] cursor-pointer rounded-[10px] border-none bg-orange-500 p-[10px]">
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative" ref={ref}>
      <div className="sticky left-0 top-[100px] z-30 pt-[50px] text-center text-4xl text-orange-500 mobile:pt-[calc(100vh-200px)] mobile:text-2xl">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="h-[10px] bg-white" />
      </div>
      {portfolioItems.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
