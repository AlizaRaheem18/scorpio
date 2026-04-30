import Image from "next/image";
import Hero from "./Component/Hero";
import AboutUs from "./about/page";
import Project from "./Component/Project";
import Pricing from "./pricing/page";
import Contact from "./Component/Contact";
import FaqSection from "./Component/FaqSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Pricing />
      <Project />
      <FaqSection />
      <AboutUs />
      <Contact />
    </div>
  );
}
