import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  const scrollToUnits = () => {
    const element = document.getElementById("unidades");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Transforme sua vida.
          <br />
          <span className="text-primary">Supere seus limites.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A Arena Fitness oferece a melhor estrutura para você alcançar seus objetivos. 
          10 unidades em São Paulo com os melhores equipamentos e profissionais.
        </p>
        <Button 
          onClick={scrollToUnits}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
        >
          Encontre sua unidade
          <ArrowDown size={20} className="ml-2 animate-bounce" />
        </Button>
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroBanner;
