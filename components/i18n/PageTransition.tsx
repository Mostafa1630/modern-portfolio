"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { useLanguage } from "./LanguageProvider";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const { lang } = useLanguage();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={lang}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
