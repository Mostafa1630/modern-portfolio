import type { Metadata } from "next";
import Parallax from "@/components/parallax/Parallax";
import Portfolio from "@/components/portfolio/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio — Harvey Tyler",
  description: "A selection of featured work: React, Next.js and vanilla JS projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <section>
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
    </>
  );
}
