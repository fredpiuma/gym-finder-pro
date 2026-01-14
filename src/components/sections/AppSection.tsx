import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.png";

const AppSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <img
              src={appMockup}
              alt="Arena Fitness App"
              className="w-64 md:w-80 h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right - Content */}
          <div className="text-center lg:text-left space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Seu plano na{" "}
              <span className="text-primary">palma da sua mão</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
              Com o app Arena Fitness, você tem acesso completo ao seu plano, 
              acompanha seus treinos, agenda aulas e muito mais. Tudo isso 
              de forma rápida e prática, direto no seu celular.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-6 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Apple size={24} className="mr-2" />
                  App Store
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-6 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Play size={24} className="mr-2" />
                  Google Play
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
