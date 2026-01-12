import { Target, Eye, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Proporcionar um ambiente de treino completo e motivador, ajudando cada aluno a alcançar seus objetivos de saúde e bem-estar com excelência no atendimento."
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser reconhecida como a melhor rede de academias de São Paulo, referência em qualidade de serviço, inovação em equipamentos e resultados transformadores."
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Comprometimento com resultados, respeito à individualidade, excelência no atendimento, inovação constante e paixão pelo fitness."
  }
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=600&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quem <span className="text-primary">Somos</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça a história da Arena Fitness e nossa paixão por transformar vidas
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Nossa <span className="text-primary">História</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Arena Fitness nasceu em 2014 com um sonho: criar espaços de treino que 
                  fossem muito mais do que simples academias. Queríamos construir comunidades 
                  de pessoas motivadas, comprometidas com sua saúde e bem-estar.
                </p>
                <p>
                  Começamos com uma única unidade no Centro de São Paulo e, ao longo dos anos, 
                  expandimos para 10 unidades estrategicamente localizadas na cidade. Cada nova 
                  unidade mantém nosso compromisso com qualidade, tecnologia e excelência no atendimento.
                </p>
                <p>
                  Hoje, somos orgulhosamente uma das redes de academias mais respeitadas de São Paulo, 
                  com milhares de alunos ativos que confiam em nós para alcançar seus objetivos fitness.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&h=600&fit=crop"
                  alt="Arena Fitness História"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Nossos <span className="text-primary">Pilares</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-secondary border-border text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">10</p>
              <p className="text-muted-foreground">Unidades</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</p>
              <p className="text-muted-foreground">Anos de experiência</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">15k+</p>
              <p className="text-muted-foreground">Alunos ativos</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</p>
              <p className="text-muted-foreground">Profissionais</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
