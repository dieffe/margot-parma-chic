import apartmentImage from "@/assets/apartment-interior.jpg";

const attractions = [
  { name: "Cattedrale di Parma", distance: "2 minuti a piedi" },
  { name: "Battistero di Parma", distance: "3 minuti a piedi" },
  { name: "Palazzo della Pilotta", distance: "5 minuti a piedi" },
  { name: "Teatro Regio", distance: "10 minuti a piedi" },
];

const DiscoverSection = () => {
  return (
    <section id="discover" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Scopri Parma
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Parma, capoluogo dell'omonima provincia in Emilia-Romagna, è una città ricca di storia, 
              cultura e gastronomia. Conosciuta in tutto il mondo per il Parmigiano-Reggiano e il 
              Prosciutto di Parma, offre un'autentica esperienza italiana.
            </p>

            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Attrazioni Vicine
            </h3>
            <ul className="space-y-3">
              {attractions.map((a) => (
                <li key={a.name} className="flex items-center gap-3 font-body text-foreground/80">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="font-medium">{a.name}</span>
                  <span className="text-muted-foreground text-sm ml-auto">— {a.distance}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={apartmentImage}
                alt="Interno dell'appartamento Margot76"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
