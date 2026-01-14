import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/sections/HeroBanner";
import UnitSelectorSection from "@/components/sections/UnitSelectorSection";
import UnitsSection from "@/components/sections/UnitsSection";
import AboutSection from "@/components/sections/AboutSection";
import AppSection from "@/components/sections/AppSection";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <UnitSelectorSection />
      <UnitsSection />
      <AboutSection />
      <AppSection />
    </Layout>
  );
};

export default Index;
