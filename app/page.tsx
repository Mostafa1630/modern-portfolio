import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div id="home" className="scroll-mt-[100px]">
        <Hero />
      </div>
      <div id="services" className="min-h-screen scroll-mt-[100px] pt-[100px] mobile:pt-[80px]">
        <Services />
      </div>
      <div id="experience" className="scroll-mt-[100px] bg-[linear-gradient(180deg,#111132,#0c0c1d)] pt-[100px] mobile:pt-[80px]">
        <Experience />
      </div>
      <div id="skills" className="scroll-mt-[100px]">
        <Skills />
      </div>
      <div id="portfolio" className="scroll-mt-[100px]">
        <Portfolio />
      </div>
      <div
        id="contact"
        className="flex min-h-screen scroll-mt-[100px] items-center bg-[linear-gradient(180deg,#111132,#0c0c1d)] pt-[100px]"
      >
        <Contact />
      </div>
    </main>
  );
}
