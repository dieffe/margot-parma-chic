import apartmentImage from "@/assets/apartment-interior.jpg";

const attractions = [
  { name: "Cattedrale di Parma", time: "15 minuti", distance: "1.1 km" },
  { name: "Pilotta", time: "10 minuti", distance: "800 mt" },
  { name: "Teatro Regio", time: "10 minuti", distance: "850 mt" },
  { name: "Stazione", time: "20 minuti", distance: "1.5 km" },
  { name: "Stadio", time: "20 minuti", distance: "1.6 km" },
];

const DiscoverSection = () => {
  return (
    <section id="discover" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={apartmentImage}
                alt="Interno dell'appartamento Margot76"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Attrazioni Vicine
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Parma, capoluogo dell'omonima provincia in Emilia-Romagna, è una città ricca di storia,
              cultura e gastronomia. Conosciuta in tutto il mondo per il Parmigiano-Reggiano e il
              Prosciutto di Parma, offre un'autentica esperienza italiana.
            </p>

            <ul className="space-y-4 mb-10">
              {attractions.map((a) => (
                <li key={a.name} className="flex items-center gap-3 font-body text-foreground/80">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="font-medium">{a.name}</span>
                  <span className="text-muted-foreground text-sm ml-auto whitespace-nowrap">
                    {a.time} — {a.distance}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
              Prenota il Tuo Soggiorno da Margot76
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:Margotbixio76@gmail.com"
                className="bg-primary text-primary-foreground px-8 py-3 rounded font-body font-bold tracking-wide hover:opacity-90 transition-opacity text-base text-center"
              >
                Prenota il Tuo Soggiorno
              </a>
              <a
                href="mailto:Margotbixio76@gmail.com"
                className="border border-primary text-primary px-8 py-3 rounded font-body font-bold tracking-wide hover:bg-primary/5 transition-colors text-base text-center"
              >
                Contattaci
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
