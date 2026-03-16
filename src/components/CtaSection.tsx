const CtaSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Prenota il Tuo Soggiorno da Margot76
        </h2>
        <p className="font-body text-muted-foreground max-w-xl mx-auto mb-10">
          Prenota il tuo soggiorno a Margot76 e scopri la magia di Parma dal cuore del suo centro storico.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:Margotbixio76@gmail.com"
            className="bg-primary text-primary-foreground px-8 py-3 rounded font-body font-bold tracking-wide hover:opacity-90 transition-opacity text-base"
          >
            Prenota il Tuo Soggiorno
          </a>
          <a
            href="mailto:Margotbixio76@gmail.com"
            className="border border-primary text-primary px-8 py-3 rounded font-body font-bold tracking-wide hover:bg-primary/5 transition-colors text-base"
          >
            Contattaci
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
