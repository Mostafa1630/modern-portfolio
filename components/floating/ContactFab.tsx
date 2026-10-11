"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const contacts = [
  {
    label: "WhatsApp",
    href: "https://wa.me/201015949752",
    icon: "/icons/whatsapp.svg",
    bg: "#25D366",
  },
  {
    label: "Gmail",
    href: "mailto:mstfyabwsdyt@gmail.com",
    icon: "/icons/gmail.svg",
    bg: "#EA4335",
  },
];

const ContactFab = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-[25px] end-[25px] z-[900] flex flex-col items-center gap-3 mobile:bottom-4 mobile:end-4">
      <AnimatePresence>
        {open &&
          contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              aria-label={c.label}
              initial={{ opacity: 0, y: 20, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.3 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 20 }}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
              style={{ backgroundColor: c.bg }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.icon} alt="" className="h-6 w-6" />
            </motion.a>
          ))}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open contact options"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border-none bg-orange-500 text-white shadow-lg transition-colors hover:bg-orange-600"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-3v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
        </svg>
      </motion.button>
    </div>
  );
};

export default ContactFab;
