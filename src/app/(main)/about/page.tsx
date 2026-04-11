import PageBanner from "@/Components/sections/PageBanner";
import AboutSection from "@/Components/sections/AboutSection";

const about = () => {
  return (
    <div>
      <PageBanner
        title="ABOUT"
        highlight="ME"
        tag="System Architect • UI Engineer • Experience Designer"
        subtitle="I design and engineer high-performance digital systems where motion, structure, and interaction merge into one seamless experience."
        chips={[
          "System Thinking",
          "Motion Design",
          "UI Architecture",
          "Performance Focus",
        ]}
      />
      <AboutSection />
    </div>
  );
};

export default about;
