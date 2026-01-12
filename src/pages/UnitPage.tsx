import { useParams, Link } from "react-router-dom";
import { ChevronRight, Phone, Mail, Clock, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PlanCard from "@/components/cards/PlanCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUnitById } from "@/data/units";

const UnitPage = () => {
  const { id } = useParams<{ id: string }>();
  const unit = id ? getUnitById(id) : undefined;

  if (!unit) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Unidade não encontrada</h1>
          <Link to="/" className="text-primary hover:underline">
            Voltar para o início
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${unit.image}')` }}
        >
          <div className="absolute inset-0 bg-background/85" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            <ChevronRight size={14} />
            <span className="text-foreground">{unit.name}</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {unit.name}
          </h1>
          <p className="text-muted-foreground text-lg flex items-center gap-2">
            <MapPin size={18} className="text-primary" />
            {unit.address}
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Planos <span className="text-primary">Disponíveis</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {unit.plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Unit Info Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Informações da <span className="text-primary">Unidade</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact Card */}
            <Card className="bg-secondary border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Phone size={20} className="text-primary" />
                  Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-muted-foreground" />
                  <span className="text-foreground">{unit.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="text-foreground">{unit.whatsapp}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-muted-foreground" />
                  <span className="text-foreground">{unit.email}</span>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="bg-secondary border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda a Sexta</span>
                  <span className="text-foreground font-medium">{unit.hours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado</span>
                  <span className="text-foreground font-medium">{unit.hours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingo</span>
                  <span className="text-foreground font-medium">{unit.hours.sunday}</span>
                </div>
              </CardContent>
            </Card>

            {/* Map Card */}
            <Card className="bg-secondary border-border lg:row-span-1">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <MapPin size={20} className="text-primary" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src={unit.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa ${unit.name}`}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UnitPage;
