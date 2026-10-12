"use client";

import { useState } from "react";
import { m, type Variants } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const circleAt = (isRtl: boolean) =>
  isRtl ? "calc(100% - 50px)" : "50px";

const variants = (isRtl: boolean): Variants => ({
  open: {
    clipPath: `circle(1200px at ${circleAt(isRtl)} 50px)`,
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: `circle(30px at ${circleAt(isRtl)} 50px)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
});

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const isRtl = lang === "ar";

  return (
    <m.div
      className="flex flex-col items-center justify-center bg-white text-black"
      animate={open ? "open" : "closed"}
    >
      <m.div
        className={`fixed inset-y-0 ${
          isRtl ? "right-0" : "left-0"
        } z-[999] w-[400px] bg-white mobile:w-[200px]`}
        variants={variants(isRtl)}
      >
        <Links onNavigate={() => setOpen(false)} />
      </m.div>
      <ToggleButton setOpen={setOpen} isRtl={isRtl} />
    </m.div>
  );
};

export default Sidebar;
