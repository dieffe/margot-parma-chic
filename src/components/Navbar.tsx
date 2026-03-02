import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/margot76-logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "L'Appartamento", href: "#features" },
  { label: "Scopri Parma", href: "#discover" },
  { label: "Contatti", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Margot76" className="h-28 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-body font-bold tracking-wide hover:opacity-90 transition-opacity"
          >
            Prenota Ora
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 font-body text-foreground/80 hover:text-primary transition-colors border-b border-border/50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mt-3 bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-body font-bold tracking-wide text-center"
          >
            Prenota Ora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
