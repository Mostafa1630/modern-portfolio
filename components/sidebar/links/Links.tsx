"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks } from "@/data/navLinks";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ onNavigate }: { onNavigate: () => void }) => {
  const pathname = usePathname();

  return (
    <motion.div
      className="absolute flex h-full w-full flex-col items-center justify-center gap-5"
      variants={variants}
    >
      {navLinks.map((link) => (
        <motion.div key={link.href} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={link.href}
            onClick={onNavigate}
            className={`text-[40px] mobile:text-xl ${pathname === link.href ? "font-bold text-orange-500" : ""}`}
          >
            {link.label}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
