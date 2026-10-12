import type { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <LanguageProvider>{children}</LanguageProvider>
    </LazyMotion>
  );
}
