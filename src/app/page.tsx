"use client";
import AboutSection from "@/Components/home/AboutSection";
import Hero from "@/Components/home/Hero";
import Skills from "@/Components/home/SkillsSection";

const page = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Skills />
    </div>
  );
};

export default page;
