import HeroSection from "@/components/sections/HeroSection";
import CareerSection from "@/components/sections/CareerSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogSection from "@/components/sections/BlogSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CareerSection />
      <ProjectsSection />
      <BlogSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
