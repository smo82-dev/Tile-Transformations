import { motion } from "framer-motion";
import { assetPath } from "@/lib/asset-path";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background graphic elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-foreground/20 rotate-45" />
        <div className="absolute -bottom-20 right-20 w-96 h-96 border border-foreground/20 rotate-12" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <img 
              src={assetPath("assets/logo-icon.png")} 
              alt="Tiling Services Ltd Logo Mark" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight tracking-tight mb-6"
          >
            Precision in every edge. <br />
            <span className="text-primary italic font-light">Warmth in the detail.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-10"
          >
            Owner-operated tiling services in Tauranga. Expert craftsmanship that transforms homes and commercial spaces with immaculate finishing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a 
              href="#contact" 
              className="px-8 py-4 bg-foreground text-background font-semibold tracking-wide uppercase hover:bg-primary transition-colors duration-300 w-full sm:w-auto"
            >
              Request a Quote
            </a>
            <a 
              href="#before-after" 
              className="px-8 py-4 bg-transparent border border-border text-foreground font-semibold tracking-wide uppercase hover:bg-accent transition-colors duration-300 w-full sm:w-auto"
            >
              See the Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
