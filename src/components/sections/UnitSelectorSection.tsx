import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { units } from "@/data/units";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import unitLocationIcon from "@/assets/unit-location-icon.png";

const UnitSelectorSection = () => {
  const [selectedUnit, setSelectedUnit] = useState<string>("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (selectedUnit) {
      navigate(`/unidade/${selectedUnit}`);
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={unitLocationIcon}
              alt="Encontre sua unidade"
              className="w-64 h-64 md:w-80 md:h-80 object-contain"
            />
          </div>

          {/* Right - Content */}
          <div className="text-center lg:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Saiba qual a unidade{" "}
              <span className="text-primary">mais próxima</span> de você
            </h2>

            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              <Select value={selectedUnit} onValueChange={setSelectedUnit}>
                <SelectTrigger className="w-full h-14 text-lg bg-background border-border">
                  <SelectValue placeholder="Selecione uma unidade" />
                </SelectTrigger>
                <SelectContent>
                  {units.map((unit) => (
                    <SelectItem key={unit.id} value={unit.id}>
                      {unit.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                onClick={handleNavigate}
                disabled={!selectedUnit}
                size="lg"
                className="w-full h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                Conhecer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitSelectorSection;
