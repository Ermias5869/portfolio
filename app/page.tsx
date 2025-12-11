import HeroSection from "@/app/components/ui/HeroSection";
import AboutSection from "@/app/components/ui/AboutSection";
import ProjectsSection from "@/app/components/ui/ProjectsSection";
import SkillsSection from "@/app/components/ui/SkillsSection";
import ContactSection from "@/app/components/ui/ContactSection";
import StatsSection from "@/app/components/ui/StatsSection";
import CertificatesSection from "./components/ui/CertificatesSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section id="home">
        <HeroSection />
      </section>

      <StatsSection />

      <section id="about">
        <AboutSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>
      <section id="certificate">
        <CertificatesSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
