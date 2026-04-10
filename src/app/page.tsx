"use client";
import AboutSection from "@/Components/home/AboutSection";
import Hero from "@/Components/home/Hero";
import Skills from "@/Components/home/SkillsSection";
import ProjectSection from "@/Components/home/ProjectSection";


const page = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Skills />
      <ProjectSection />
    </div>
  );
};

export default page;
