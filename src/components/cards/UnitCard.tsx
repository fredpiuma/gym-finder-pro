import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Unit } from "@/data/units";

interface UnitCardProps {
  unit: Unit;
}

const UnitCard = ({ unit }: UnitCardProps) => {
  return (
    <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={unit.image}
          alt={unit.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <p className="text-primary font-semibold text-sm flex items-center gap-1">
            <MapPin size={14} />
            {unit.neighborhood}
          </p>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">{unit.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-1">{unit.address}</p>
        <Link to={`/unidade/${unit.id}`}>
          <Button 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group-hover:bg-primary"
          >
            Ver Planos
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default UnitCard;
