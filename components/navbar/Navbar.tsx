"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-40 h-[100px] bg-[#0c0c1d]/70 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1366px] items-center justify-between mobile:justify-end mobile:p-5">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold mobile:hidden"
        >
          <Link href="/">Harvey Tyler</Link>
        </motion.span>
        <div className="flex gap-5">
          <a href="#">
            <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
          </a>
          <a href="#">
            <Image src="/instagram.png" alt="Instagram" width={18} height={18} />
          </a>
          <a href="#">
            <Image src="/youtube.png" alt="Youtube" width={18} height={18} />
          </a>
          <a href="#">
            <Image src="/dribbble.png" alt="Dribbble" width={18} height={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
