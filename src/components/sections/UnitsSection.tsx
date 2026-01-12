import { units } from "@/data/units";
import UnitCard from "@/components/cards/UnitCard";

const UnitsSection = () => {
  return (
    <section id="unidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossas <span className="text-primary">Unidades</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha a unidade mais próxima de você e comece sua transformação. 
            Todas equipadas com o que há de mais moderno em fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnitsSection;
