import { Train, Car, Plane, Hospital, GraduationCap, ShoppingBag, Utensils, Info } from "lucide-react";
import Layout from "@/components/Layout";

const transportInfo = [
  {
    icon: Train,
    title: "Stazione Ferroviaria",
    description: "La stazione di Parma si trova a 1.5 km (20 minuti a piedi) da Margot76. Treni frequenti per Milano, Bologna, Roma e tutte le principali città italiane.",
  },
  {
    icon: Plane,
    title: "Aeroporto",
    description: "L'aeroporto Giuseppe Verdi di Parma è raggiungibile con i mezzi pubblici. In alternativa, gli aeroporti di Bologna e Milano Linate offrono più collegamenti internazionali.",
  },
  {
    icon: Car,
    title: "In Auto",
    description: "Parma è servita dall'autostrada A1 (Milano-Bologna). Uscita Parma Centro. Possibilità di parcheggio nelle vicinanze dell'appartamento.",
  },
  {
    icon: Hospital,
    title: "Ospedale",
    description: "L'Ospedale Maggiore di Parma è raggiungibile con i mezzi pubblici dalla fermata più vicina a Margot76.",
  },
  {
    icon: GraduationCap,
    title: "Campus Universitario",
    description: "L'Università di Parma e i suoi campus sono comodamente raggiungibili con i mezzi pubblici.",
  },
];

const localTips = [
  {
    icon: Utensils,
    title: "Gastronomia",
    description: "Parma è la patria del Parmigiano-Reggiano, del Prosciutto di Parma e della pasta fresca. Non perdere i ristoranti e le trattorie nel centro storico.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping",
    description: "Via Farini, Via Mazzini e Via della Repubblica offrono boutique eleganti e negozi caratteristici. Parma è stata definita 'la Piccola Parigi d'Italia'.",
  },
  {
    icon: Info,
    title: "Informazioni turistiche",
    description: "L'Ufficio Informazioni Turistiche si trova in Piazza Garibaldi, nel cuore del centro storico, a pochi minuti a piedi da Margot76.",
  },
];

const InformazioniUtili = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Informazioni Utili
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Tutto quello che ti serve sapere per organizzare al meglio il tuo soggiorno a Parma
            </p>
          </div>

          {/* Trasporti */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Come Raggiungerci
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {transportInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-card rounded-lg p-8 border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-terracotta-light mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{info.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Consigli locali */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Vivere Parma
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {localTips.map((tip) => (
                <div
                  key={tip.title}
                  className="bg-card rounded-lg p-8 border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-olive-light mb-4">
                    <tip.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{tip.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mezzi Pubblici */}
          <div className="bg-card rounded-lg p-8 md:p-12 border border-border">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4 text-center">
              Mezzi Pubblici
            </h2>
            <p className="font-body text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Da Margot76 puoi raggiungere facilmente con i mezzi pubblici: aeroporto, stazione ferroviaria,
              ospedale, campus universitario e Fiere di Parma. Le fermate degli autobus TEP si trovano
              a breve distanza dall'appartamento.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InformazioniUtili;
