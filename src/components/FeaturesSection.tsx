import { MapPin, Car, Building2, Star } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Nel Centro Storico",
    description: "Un appartamento elegante nel cuore di Parma, circondato da storia e cultura",
  },
  {
    icon: MapPin,
    title: "Posizione Strategica",
    description: "A pochi passi da Piazza Duomo, Via Farini e i principali monumenti della città",
  },
  {
    icon: Star,
    title: "Comfort & Stile",
    description: "Arredamento curato nei dettagli che unisce il fascino storico al comfort moderno",
  },
  {
    icon: Car,
    title: "Facile da Raggiungere",
    description: "Ben collegato e comodo da raggiungere da stazione e autostrada",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perché Scegliere Margot76?
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Scopri cosa rende il nostro appartamento la scelta perfetta per il tuo soggiorno a Parma
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-lg p-8 text-center border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terracotta-light mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
