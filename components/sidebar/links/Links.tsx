"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { translations } from "@/data/translations";

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

const links = [
  { id: "home", labelKey: "home" },
  { id: "services", labelKey: "services" },
  { id: "experience", labelKey: "experience" },
  { id: "skills", labelKey: "skills" },
  { id: "portfolio", labelKey: "portfolio" },
  { id: "contact", labelKey: "contact" },
] as const;

const Links = ({ onNavigate }: { onNavigate: () => void }) => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setActive(id);
    onNavigate();
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <motion.div
      className="absolute flex h-full w-full flex-col items-center justify-center gap-5"
      variants={variants}
    >
      {links.map((link) => (
        <motion.div key={link.id} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <button
            onClick={() => handleClick(link.id)}
            className={`cursor-pointer bg-transparent text-[40px] mobile:text-xl ${
              active === link.id ? "font-bold text-orange-500" : "text-black"
            }`}
          >
            {t.nav[link.labelKey]}
          </button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
