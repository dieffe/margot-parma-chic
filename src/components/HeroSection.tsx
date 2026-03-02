import heroImage from "@/assets/hero-parma.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Centro storico di Parma al tramonto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
          Margot<span className="text-gradient-gold">76</span>
        </h1>
        <p className="font-display text-xl md:text-3xl text-primary-foreground/90 mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Il Tuo Rifugio nel Cuore di Parma
        </p>
        <p className="font-body text-primary-foreground/75 text-base md:text-lg max-w-xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Un elegante appartamento nel centro storico, dove il fascino della tradizione incontra il comfort moderno.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded font-body font-bold tracking-wide hover:opacity-90 transition-opacity text-base"
          >
            Prenota Ora
          </a>
          <a
            href="#features"
            className="border border-primary-foreground/40 text-primary-foreground px-8 py-3 rounded font-body tracking-wide hover:bg-primary-foreground/10 transition-colors text-base"
          >
            Scopri di Più
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-foreground/60">
          <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
