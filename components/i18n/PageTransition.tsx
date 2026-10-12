"use client";

import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import type { ReactNode } from "react";
import { useLanguage } from "./LanguageProvider";

// LazyMotion (requested as part of the JS-size reduction) loads only the DOM
// animation features, shrinking the framer-motion bundle.
const PageTransition = ({ children }: { children: ReactNode }) => {
  const { lang } = useLanguage();

  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={lang}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
};

export default PageTransition;
