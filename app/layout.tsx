import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cairo, DM_Sans } from "next/font/google";
import Cursor from "@/components/cursor/Cursor";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import ScrollTop from "@/components/floating/ScrollTop";
import ContactFab from "@/components/floating/ContactFab";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import PageTransition from "@/components/i18n/PageTransition";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Mostafa Maher — Full-Stack Developer",
  description:
    "Portfolio of Mostafa Maher, a full-stack developer (React, Next.js, Spring Boot). Projects, services and contact.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" data-scroll-behavior="smooth">
      <body className={`${dmSans.variable} ${cairo.variable} font-sans`}>
        <LanguageProvider>
          <Cursor />
          <Sidebar />
          <Navbar />
          <ScrollTop />
          <ContactFab />
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
