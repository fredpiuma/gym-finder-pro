import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/quem-somos", label: "Quem Somos" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">ARENA</span>
            <span className="text-2xl font-light text-foreground">FITNESS</span>
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-foreground hover:text-primary hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </header>

      {/* Slide-in Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        />
        
        {/* Menu Panel */}
        <nav
          className={`absolute top-0 right-0 h-full w-80 max-w-[80vw] bg-card border-l border-border transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={toggleMenu}
                    className="block text-xl font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                Encontre a unidade mais próxima de você
              </p>
              <Link
                to="/#unidades"
                onClick={toggleMenu}
                className="inline-block mt-4"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Ver Unidades
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
