import { motion } from "framer-motion";
import { assetPath } from "@/lib/asset-path";

export function ShowcaseSection() {
  const images = [
    { src: assetPath("assets/extra-white-bathroom.png"), alt: "Crisp white tiled bathroom", span: "md:col-span-2 md:row-span-2" },
    { src: assetPath("assets/extra-black-bathroom.png"), alt: "Dark moody tiled shower", span: "md:col-span-1 md:row-span-1" },
    { src: assetPath("assets/commercial.jpg"), alt: "Commercial tiling", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section id="showcase" className="bg-secondary py-32 border-t border-white/5">
      <div className="container mx-auto px-6">

        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
              Gallery
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display uppercase tracking-tight text-foreground"
          >
            The standard <br className="md:hidden" />
            <span className="text-white/40">of finish.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className={`group relative overflow-hidden bg-background aspect-square md:aspect-auto ${img.span}`}
            >
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover filter grayscale-[15%] contrast-[1.1] transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
