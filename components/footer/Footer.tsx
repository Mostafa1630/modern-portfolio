"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { translations } from "@/data/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="border-t border-white/10 bg-[#0a0a18] py-8">
      <div className="mx-auto flex max-w-[1366px] flex-row items-center justify-between gap-2 px-5 mobile:flex-col mobile:text-center mobile:px-[10px]">
        <p className="text-sm text-gray-400">
          Mostafa Maher — {t.footer.role}
        </p>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
