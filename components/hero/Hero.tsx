"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
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
};
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
  return (
    <div className="relative h-screen overflow-hidden bg-[linear-gradient(180deg,#0c0c1d,#111132)]">
      <div className="mx-auto h-full max-w-[1366px]">
        <motion.div
          className="flex h-full w-1/2 flex-col justify-center gap-10 mobile:h-1/2 mobile:w-full mobile:items-center mobile:gap-5 mobile:text-center"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariants}
            className="text-[30px] tracking-[10px] text-[rebeccapurple]"
          >
            HARVEY TYLER
          </motion.h2>
          <motion.h1 variants={textVariants} className="text-[88px] mobile:text-4xl">
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="flex flex-wrap gap-5">
            <motion.div variants={textVariants}>
              <Link
                href="/portfolio"
                className="inline-block cursor-pointer rounded-[10px] border border-white bg-transparent p-5 font-light text-white"
              >
                See the Latest Works
              </Link>
            </motion.div>
            <motion.div variants={textVariants}>
              <Link
                href="/contact"
                className="inline-block cursor-pointer rounded-[10px] border border-white bg-transparent p-5 font-light text-white"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
          <motion.div variants={textVariants} animate="scrollButton">
            <Image src="/scroll.png" alt="" width={50} height={50} />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-[-120px] w-1/2 whitespace-nowrap text-[50vh] font-bold text-[#ffffff09]"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="absolute right-0 top-0 h-full w-1/2 mobile:top-auto mobile:bottom-0 mobile:h-1/2 mobile:w-full">
        <Image
          src="/hero.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
