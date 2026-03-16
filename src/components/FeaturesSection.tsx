import { MapPin, Bus, Building2, Landmark } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "La 'Piccola Parigi' d'Italia",
    description: "Definita la 'Piccola Parigi' d'Italia, Parma affascina con i suoi bistrot, le boutique eleganti e quell'atmosfera raffinata tipica dei quartieri storici.",
  },
  {
    icon: MapPin,
    title: "Posizione",
    description: "5 minuti a piedi dal centro e da tutte le principali attrazioni della città.",
  },
  {
    icon: Bus,
    title: "Mezzi Pubblici",
    description: "Mezzi pubblici per raggiungere aeroporto, stazione, ospedale, campus universitario e Fiere di Parma.",
  },
  {
    icon: Landmark,
    title: "Curiosità",
    description: "La zona è famosa per essere stata teatro della resistenza durante le Barricate del 1922.",
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
          <p className="font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nel centro storico di Parma, un raffinato appartamento ricavato in un antico monastero:
            fascino autentico tra archi e mattoni a vista, con un'ospitalità che ti farà sentire
            subito a casa. Qui la vacanza inizia appena varchi la porta.
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
