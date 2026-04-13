import AboutSection from "@/Components/home/AboutSection";
import Hero from "@/Components/home/Hero";
import Skills from "@/Components/home/SkillsSection";
import ProjectSection from "@/Components/home/ProjectSection";
import ArticleSection from "@/Components/home/ArticleSection";

const page = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Skills />
      <ProjectSection />
      <ArticleSection />
    </div>
  );
};

export default page;
