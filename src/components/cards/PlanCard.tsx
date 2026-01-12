import { Check, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plan } from "@/data/units";

interface PlanCardProps {
  plan: Plan;
}

const PlanCard = ({ plan }: PlanCardProps) => {
  return (
    <Card 
      className={`relative overflow-hidden transition-all duration-300 ${
        plan.highlight 
          ? "border-primary bg-card shadow-lg shadow-primary/10" 
          : "border-border bg-card hover:border-primary/50"
      }`}
    >
      {plan.highlight && (
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          Mais Popular
        </Badge>
      )}
      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
        <div className="flex items-baseline gap-1 mt-2">
          <span className="text-3xl font-bold text-primary">
            R$ {plan.price.toFixed(2).replace(".", ",")}
          </span>
          <span className="text-muted-foreground text-sm">{plan.period}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-foreground">
              <Check size={16} className="text-primary flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <a href={plan.externalUrl} target="_blank" rel="noopener noreferrer">
          <Button 
            className={`w-full ${
              plan.highlight 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            Contratar Agora
            <ExternalLink size={16} className="ml-2" />
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};

export default PlanCard;
