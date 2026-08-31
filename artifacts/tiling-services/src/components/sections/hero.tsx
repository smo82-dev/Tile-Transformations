import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { assetPath } from "@/lib/asset-path";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-end lg:justify-start overflow-hidden bg-background">

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-background/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
        <video
          ref={videoRef}
          src={assetPath("assets/hero-tiling.mp4")}
          poster={assetPath("assets/after-bathroom.png")}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 pb-24 pt-48 lg:pt-[clamp(8rem,18vh,12rem)]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 max-w-7xl mx-auto">
          
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-bold text-foreground leading-[1.05] mb-6 uppercase">
                Exact edges. <br />
                <span className="text-primary block mt-2">Enduring craft.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed max-w-xl mb-12"
            >
              Owner-operated tiling in Tauranga. We treat every surface as a canvas, delivering architectural precision that transforms spaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a
                href="#contact"
                className="px-10 py-5 bg-primary text-primary-foreground font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto text-center text-sm"
              >
                Request a Quote
              </a>
              <a
                href="#before-after"
                className="px-10 py-5 bg-transparent border border-white/20 text-foreground font-semibold tracking-widest uppercase hover:bg-white/10 transition-colors duration-500 w-full sm:w-auto text-center text-sm"
              >
                View Our Work
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex flex-col items-end text-right"
          >
            <div className="w-16 h-[1px] bg-primary mb-6" />
            <p className="text-primary font-display tracking-widest uppercase text-sm mb-2">Tauranga & Surrounds</p>
            <p className="text-muted-foreground font-light text-sm max-w-[200px]">Commercial & Residential Tile Specialists</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
