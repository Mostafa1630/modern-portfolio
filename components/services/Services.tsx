"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { services } from "@/data/services";

const variants = {
  initial: {
    x: -500,
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
};

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);

  useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="flex h-full flex-col justify-between bg-[linear-gradient(180deg,#0c0c1d,#111132)]"
      variants={variants}
      initial="initial"
      ref={ref}
      animate="animate"
    >
      <motion.div
        className="flex flex-1 items-center justify-end gap-5 mobile:flex-col mobile:items-center mobile:justify-center mobile:text-center"
        variants={variants}
      >
        <p className="text-right text-xl font-thin text-gray-400">
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr className="w-[500px] border-none border-t-[0.5px] border-t-gray-400 mobile:w-[300px]" />
      </motion.div>
      <motion.div
        className="flex flex-[2] flex-col items-center mobile:w-full"
        variants={variants}
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
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="flex items-center gap-[50px] mobile:flex-col mobile:gap-5 mobile:text-center">
          <h1 className="text-[96px] font-thin mobile:text-4xl">
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <button className="h-[100px] w-[300px] cursor-pointer rounded-[50px] border-none bg-orange-500 text-2xl mobile:h-[50px] mobile:w-[150px] mobile:text-base">
            WHAT WE DO?
          </button>
        </div>
      </motion.div>
      <motion.div
        className="mx-auto flex max-w-[1366px] flex-[2] mobile:w-full mobile:flex-col"
        variants={variants}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="flex flex-col justify-between border-[0.5px] border-gray-400 p-[50px] mobile:items-center mobile:gap-5 mobile:border-none mobile:p-[10px]"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>{service.title}</h2>
            <p className="mobile:hidden">{service.desc}</p>
            <button className="cursor-pointer border-none bg-orange-500 p-[10px] mobile:w-1/2 mobile:rounded-[5px] mobile:border mobile:border-orange-500 mobile:bg-transparent mobile:p-[5px] mobile:text-orange-500">
              Go
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
