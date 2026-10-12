import type { Metadata, Viewport } from "next";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mostafa Maher — Full-Stack Developer",
  description:
    "Portfolio of Mostafa Maher, a full-stack developer (React, Next.js, Spring Boot). Projects, services and contact.",
  keywords: [
    "Mostafa Maher",
    "full-stack developer",
    "React developer",
    "Next.js",
    "Spring Boot",
    "front-end developer Egypt",
  ],
  authors: [{ name: "Mostafa Maher", url: siteUrl }],
  creator: "Mostafa Maher",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Mostafa Maher — Full-Stack Developer",
    title: "Mostafa Maher — Full-Stack Developer",
    description:
      "75+ delivered projects. Production-grade web applications with SEO and performance up to 100/100.",
    locale: "en_US",
    alternateLocale: "ar_EG",
    images: ["/Modern_profile.png"],
  },
  twitter: {
    card: "summary",
    title: "Mostafa Maher — Full-Stack Developer",
    description: "Portfolio of Mostafa Maher, a full-stack developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c1d",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mostafa Maher",
  jobTitle: "Full-Stack Developer",
  url: siteUrl,
  email: "mstfyabwsdyt@gmail.com",
  telephone: "+201015949752",
  address: { "@type": "PostalAddress", addressLocality: "El-Behira", addressCountry: "EG" },
  workLocation: "El-Behira, Egypt",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Java",
    "Spring Boot",
    "FastAPI",
    "Docker",
  ],
  sameAs: [
    "https://github.com/Mostafa1630",
    "https://linkedin.com/in/mostafa-mahera71695240",
    "https://drive.google.com/file/d/1wcWpH1ewdd51rtf9qoRFuiFya2j3O9oA/view?usp=sharing",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" data-scroll-behavior="smooth">
      <body
        className={`${dmSans.variable} ${cairo.variable} font-sans`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NODE_ENV === "production" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `if("serviceWorker" in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js");});}`,
            }}
          />
        )}
        <LanguageProvider>
          <PageTransition>
            <Cursor />
            <Sidebar />
            <Navbar />
            <ScrollTop />
            <ContactFab />
            {children}
          </PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
