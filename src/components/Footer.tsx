import logo from "@/assets/margot76-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Margot76" className="h-24 w-auto" />
          </div>
          <div className="font-body text-sm text-muted-foreground text-center">
            <p>Appartamento nel Centro Storico di Parma</p>
            <p className="mt-1">© {new Date().getFullYear()} Margot76. Tutti i diritti riservati.</p>
          </div>
          <div className="flex gap-6">
            <a href="#home" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#features" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">L'Appartamento</a>
            <a href="#contact" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Contatti</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
