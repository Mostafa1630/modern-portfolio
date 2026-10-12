"use client";

import { useEffect } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 32, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 400, damping: 32, mass: 0.6 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      x.set(e.clientX + 10);
      y.set(e.clientY + 10);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [x, y]);

  return (
    <m.div
      className="pointer-events-none fixed z-[999] h-[50px] w-[50px] rounded-full border border-white mobile:hidden"
      style={{ x: sx, y: sy }}
    ></m.div>
  );
};

export default Cursor;
