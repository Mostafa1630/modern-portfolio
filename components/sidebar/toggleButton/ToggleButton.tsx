"use client";

import { m } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";

type ToggleButtonProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  isRtl: boolean;
};

const ToggleButton = ({ setOpen, isRtl }: ToggleButtonProps) => {
  return (
    <button
      className={`fixed top-[25px] z-[999] flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-none bg-transparent ${
        isRtl ? "right-[25px]" : "left-[25px]"
      }`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <m.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <m.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <m.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
