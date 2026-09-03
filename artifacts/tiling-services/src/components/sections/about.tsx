import { motion } from "framer-motion";
import { assetPath } from "@/lib/asset-path";

export function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-16 md:py-20 bg-secondary relative overflow-hidden border-t border-white/5">

      <div className="absolute -left-[10%] top-0 w-[40%] h-full bg-background transform -skew-x-12 opacity-50 z-0 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 xl:col-span-7 max-w-2xl lg:ml-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                About the Craftsman
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display uppercase tracking-tight text-white/40 mb-6">
              <span className="block">The eye of a <span className="text-white">finisher.</span></span>
              <span className="block">The care of an <span className="text-white">owner.</span></span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-sm md:text-base">
              <p>
                I'm <strong className="text-foreground font-medium">Josh van Baarle</strong>, the founder and owner-operator of Tiling Services Ltd. When you hire us, you don't get a corporate fleet or a rotating cast of sub-contractors—you get me.
              </p>
              <p>
                With over 5 years of industry experience and full qualifications, I've built this business on a simple philosophy: "Here to Serve". That means reliable communication, immense attention to detail, and work that stands the test of time.
              </p>
              <p>
                Whether it's a small repair, an intricate residential bathroom, or a large-scale commercial fit-out in the Tauranga region, I treat every edge, every grout line, and every surface with the exact same standard of excellence.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-6">
              <div>
                <h4 className="text-3xl font-display text-primary mb-1">5+</h4>
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">Years Exp</span>
              </div>
              <div>
                <h4 className="text-3xl font-display text-primary mb-1">100%</h4>
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">Owner-Operated</span>
              </div>
              <div>
                <h4 className="text-3xl font-display text-primary mb-1">✓</h4>
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">Fully Qualified</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[18rem] sm:max-w-xs">
              <div className="aspect-[3/4] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  src={assetPath("assets/owner-portrait.png")}
                  alt="Josh van Baarle, Owner-Operator"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover filter sepia-[18%] saturate-[1.1] contrast-125 transition-transform duration-1000 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-primary/50 pointer-events-none hidden md:block" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-primary/50 pointer-events-none hidden md:block" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
