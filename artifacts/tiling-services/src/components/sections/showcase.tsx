import { motion } from "framer-motion";
import { assetPath } from "@/lib/asset-path";

type GalleryMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

export function ShowcaseSection() {
  const media: GalleryMedia[] = [
    {
      type: "image",
      src: assetPath("assets/gallery-karaka.png"),
      alt: "Finished bathroom with patterned feature wall tiling",
    },
    {
      type: "image",
      src: assetPath("assets/gallery-bathroom.png"),
      alt: "Finished bathroom with detailed wall and floor tiling",
    },
    {
      type: "video",
      src: assetPath("assets/gallery-conservatory-floor.mp4"),
      alt: "Conservatory floor tiling project",
    },
    {
      type: "video",
      src: assetPath("assets/gallery-mosaic-timelapse.mp4"),
      alt: "Mosaic tiling installation timelapse",
    },
  ];

  return (
    <section id="showcase" className="bg-secondary py-20 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-6">

        <div className="flex flex-col items-center text-center mb-12 md:mb-14">
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
            className="text-3xl md:text-5xl font-display uppercase tracking-tight text-foreground"
          >
            The standard <br className="md:hidden" />
            <span className="text-white/40">of finish.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {media.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group relative overflow-hidden bg-background aspect-video"
            >
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
              {item.type === "video" ? (
                <video
                  src={item.src}
                  aria-label={item.alt}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain filter grayscale-[15%] contrast-[1.1] transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain filter grayscale-[15%] contrast-[1.1] transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
