import { Dumbbell, Users, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Equipamentos Premium",
    description: "Aparelhos de última geração das melhores marcas mundiais"
  },
  {
    icon: Users,
    title: "Profissionais Qualificados",
    description: "Equipe certificada e preparada para orientar seu treino"
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Funcionamento estendido para se adequar à sua rotina"
  },
  {
    icon: Award,
    title: "Resultados Comprovados",
    description: "Milhares de alunos satisfeitos e transformados"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Por que escolher a <span className="text-primary">Arena Fitness</span>?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Há mais de 10 anos transformando vidas através do fitness. 
              Nossa missão é proporcionar um ambiente acolhedor e motivador, 
              com toda a estrutura necessária para você conquistar seus objetivos de saúde e bem-estar.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=800&fit=crop"
                alt="Arena Fitness"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-primary rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
