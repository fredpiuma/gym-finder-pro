import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/sections/HeroBanner";
import UnitsSection from "@/components/sections/UnitsSection";
import AboutSection from "@/components/sections/AboutSection";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <UnitsSection />
      <AboutSection />
    </Layout>
  );
};

export default Index;
