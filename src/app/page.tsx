import Hero from "@/components/sections/home/Hero";
import BrandStatement from "@/components/sections/home/BrandStatement";
import Impact from "@/components/sections/home/Impact";
import Services from "@/components/sections/home/Services";
import SelectedProjects from "@/components/sections/home/SelectedProjects";
import WhyBrlant from "@/components/sections/home/WhyBrlant";
import Clients from "@/components/sections/home/Clients";
import FinalCTA from "@/components/sections/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandStatement />
      <Impact />
      <Services />
      <SelectedProjects />
      <WhyBrlant />
      <Clients />
      <FinalCTA />
    </main>
  );
}