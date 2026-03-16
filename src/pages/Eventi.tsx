import { Calendar, Music, Trophy, Theater, MapPin, Train } from "lucide-react";
import Layout from "@/components/Layout";

const fiereParma = [
  { nome: "Mercante in Fiera — Primavera", date: "7 - 15 Marzo 2026" },
  { nome: "Parma Bagarre", date: "9 - 10 Maggio 2026" },
  { nome: "Salone del Camper", date: "12 - 20 Settembre 2026" },
  { nome: "Mercante in Fiera — Autunno", date: "3 - 11 Ottobre 2026" },
  { nome: "Cibus Tec", date: "27 - 30 Ottobre 2026" },
];

const concerti = [
  { artista: "Metallica", luogo: "Bologna — Stadio Dall'Ara", data: "3 Giugno 2026" },
  { artista: "Cesare Cremonini", luogo: "Milano — Ippodromo Snai La Maura", data: "10 Giugno 2026" },
  { artista: "Tiziano Ferro", luogo: "Bologna — Stadio Dall'Ara", data: "14 Giugno 2026" },
  { artista: "Achille Lauro", luogo: "Milano — San Siro", data: "15 Giugno 2026" },
  { artista: "Maroon 5", luogo: "Milano — San Siro", data: "25 Giugno 2026" },
  { artista: "Max Pezzali", luogo: "Bologna — Stadio Dall'Ara", data: "27 - 28 Giugno 2026" },
  { artista: "Iron Maiden", luogo: "Milano", data: "Data da definire" },
];

const hellwattFestival = [
  { data: "4 Luglio 2026", lineup: "Line-up da annunciare" },
  { data: "5 Luglio 2026", lineup: "The Chainsmokers, Rita Ora, Ozuna, Nicky Jam, Afrojack, Dimitri Vegas & Like Mike, DJ Snake" },
  { data: "11 Luglio 2026", lineup: "Swedish House Mafia, Martin Garrix, Alok, Benny Benassi, Clean Bandit" },
  { data: "17 Luglio 2026", lineup: "Travis Scott" },
  { data: "18 Luglio 2026", lineup: "Kanye West" },
];

const Eventi = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Eventi
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Parma e dintorni: fiere, festival, concerti e sport. Tanti motivi per visitare la nostra città.
            </p>
          </div>

          {/* Fiere di Parma */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-terracotta-light">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Fiere di Parma
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fiereParma.map((fiera) => (
                <div
                  key={fiera.nome}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{fiera.nome}</h3>
                  <p className="font-body text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {fiera.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Parma Calcio & Festival Verdi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-terracotta-light">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Parma Calcio</h2>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                Segui le partite del Parma Calcio allo Stadio Ennio Tardini, a soli 20 minuti a piedi da Margot76.
                Vivi l'emozione del calcio italiano nel cuore dell'Emilia.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-terracotta-light">
                  <Theater className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Festival Verdi</h2>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-2">
                Il celebre Festival dedicato a Giuseppe Verdi, con opere, concerti e spettacoli nei teatri storici di Parma.
              </p>
              <p className="font-body text-sm text-primary font-semibold flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                1 - 25 Ottobre 2026
              </p>
            </div>
          </div>

          {/* Concerti raggiungibili in treno */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-terracotta-light">
                <Music className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Concerti da Raggiungere in Treno
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {concerti.map((concerto) => (
                <div
                  key={concerto.artista + concerto.data}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{concerto.artista}</h3>
                  <p className="font-body text-sm text-muted-foreground flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    {concerto.luogo}
                  </p>
                  <p className="font-body text-sm text-primary font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    {concerto.data}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hellwatt Festival */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-terracotta-light">
                <Music className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Hellwatt Festival 2026 — Campovolo
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {hellwattFestival.map((date) => (
                <div
                  key={date.data}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <p className="font-body text-sm text-primary font-semibold flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4" />
                    {date.data}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">{date.lineup}</p>
                </div>
              ))}
            </div>
            <div className="bg-olive-light rounded-lg p-6 border border-border">
              <p className="font-body text-sm text-foreground/80 flex items-start gap-3">
                <Train className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Nota per i viaggiatori da Parma:</strong> La RCF Arena è situata a pochi minuti dalla stazione
                  di Reggio Emilia (circa 15-20 minuti di treno regionale da Parma). Per i grandi eventi sono solitamente
                  previsti treni speciali e navette di collegamento dalla stazione all'arena.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Eventi;
