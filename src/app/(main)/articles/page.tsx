import ArticlesPage from "@/components/features/articles/ArticlesPage";
import PageBanner from "@/components/sections/PageBanner";

const page = () => {
  return (
    <div>
      <PageBanner
        title="DIGITAL"
        highlight="THOUGHTS"
        tag="Writing Systems • Design Thinking"
        subtitle="Exploring engineering, UI systems, motion design, and scalable web experiences."
      />
      <ArticlesPage />
    </div>
  );
};

export default page;
