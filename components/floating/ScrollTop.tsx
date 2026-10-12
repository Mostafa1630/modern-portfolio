"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-[25px] start-[25px] z-[900] flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-none bg-white text-black shadow-lg transition-colors hover:bg-orange-500 hover:text-white mobile:bottom-4 mobile:start-4"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </m.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollTop;
