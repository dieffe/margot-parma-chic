import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/margot76-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Galleria", href: "/galleria" },
  { label: "Eventi", href: "/eventi" },
  { label: "Informazioni Utili", href: "/informazioni-utili" },
  { label: "Partner", href: "/partner" },
  { label: "Contatti", href: "/contatti" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-1 px-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Margot76" className="h-40 w-auto -my-4" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`font-body text-sm tracking-wide transition-colors ${
                location.pathname === item.href
                  ? "text-primary font-bold"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contatti"
            className="bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-body font-bold tracking-wide hover:opacity-90 transition-opacity"
          >
            Prenota Ora
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 font-body transition-colors border-b border-border/50 ${
                location.pathname === item.href
                  ? "text-primary font-bold"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contatti"
            onClick={() => setIsOpen(false)}
            className="block mt-3 bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-body font-bold tracking-wide text-center"
          >
            Prenota Ora
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
