import { Handshake } from "lucide-react";
import Layout from "@/components/Layout";

const partners = [
  {
    name: "Ristorante Parizzi",
    category: "Ristorazione",
    description: "Cucina parmigiana d'eccellenza nel cuore del centro storico.",
  },
  {
    name: "Prosciutteria Parma",
    category: "Gastronomia",
    description: "Il meglio dei salumi e formaggi del territorio parmense.",
  },
  {
    name: "Parma City Tour",
    category: "Esperienze",
    description: "Tour guidati alla scoperta dei tesori artistici e culturali di Parma.",
  },
  {
    name: "NCC Parma",
    category: "Trasporti",
    description: "Servizio di noleggio con conducente per trasferimenti e spostamenti.",
  },
];

const Partner = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Partner
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              I nostri partner selezionati per rendere il tuo soggiorno a Parma un'esperienza indimenticabile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-card rounded-lg p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-terracotta-light flex-shrink-0">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="font-body text-xs uppercase tracking-wider text-primary font-bold">
                      {partner.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">
                      {partner.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-card rounded-lg p-8 md:p-12 border border-border">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Vuoi diventare partner?
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto mb-6">
              Se hai un'attività a Parma e vuoi collaborare con Margot76, contattaci per scoprire le opportunità di partnership.
            </p>
            <a
              href="mailto:Margotbixio76@gmail.com"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded font-body font-bold tracking-wide hover:opacity-90 transition-opacity"
            >
              Contattaci
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partner;
