import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://placehold.co/800x600/d4a574/fff?text=Margot76+%23${String(i + 1).padStart(2, "0")}`,
  alt: `Margot76 - Foto ${String(i + 1).padStart(2, "0")}`,
}));

const Galleria = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Galleria
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Scopri gli ambienti di Margot76: un raffinato appartamento ricavato in un antico monastero nel cuore di Parma
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-warm-dark/0 group-hover:bg-warm-dark/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors"
          >
            <ChevronRight size={40} />
          </button>

          <div className="absolute bottom-6 text-white/60 font-body text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Galleria;
