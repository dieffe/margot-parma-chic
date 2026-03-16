import { MapPin, Phone, Mail } from "lucide-react";
import Layout from "@/components/Layout";

const Contatti = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contatti
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Prenota il tuo soggiorno o contattaci per qualsiasi informazione
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-terracotta-light flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">Indirizzo</h3>
                    <p className="font-body text-muted-foreground">
                      Via Bixio 76, 43125 Parma, Italy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-terracotta-light flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">Telefono</h3>
                    <a
                      href="tel:+393534827028"
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      +39 353 4827028
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-terracotta-light flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:Margotbixio76@gmail.com"
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      Margotbixio76@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Prenota il Tuo Soggiorno
                </h3>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  Contattaci via email o telefono per verificare la disponibilità e prenotare
                  il tuo soggiorno a Margot76. Saremo felici di accoglierti nel cuore di Parma.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:Margotbixio76@gmail.com"
                    className="bg-primary text-primary-foreground px-8 py-3 rounded font-body font-bold tracking-wide hover:opacity-90 transition-opacity text-center"
                  >
                    Prenota Ora
                  </a>
                  <a
                    href="tel:+393534827028"
                    className="border border-primary text-primary px-8 py-3 rounded font-body font-bold tracking-wide hover:bg-primary/5 transition-colors text-center"
                  >
                    Chiamaci
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg border border-border h-[400px] lg:h-full min-h-[400px]">
              <iframe
                title="Margot76 - Via Bixio 76, Parma"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.5!2d10.326!3d44.801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ4JzAzLjYiTiAxMMKwMTknMzMuNiJF!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
