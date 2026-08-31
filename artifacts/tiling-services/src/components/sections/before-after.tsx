import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { assetPath } from "@/lib/asset-path";

export function BeforeAfterSection() {
  return (
    <section id="before-after" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                The Transformation
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display uppercase tracking-tight text-foreground"
            >
              From tired to <span className="text-white/40">timeless</span>.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base font-light leading-relaxed max-w-sm"
          >
            A perfect tile job is more than just laying materials—it's completely redefining the feel of a space. Drag the slider to see the difference precision makes.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative"
        >
          {/* Decorative frame elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-white/20" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-white/20" />

          <BeforeAfterSlider 
            beforeImage={assetPath("assets/before-bathroom.png")}
            afterImage={assetPath("assets/after-bathroom.png")}
          />
        </motion.div>
      </div>
    </section>
  );
}
