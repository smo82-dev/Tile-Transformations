import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { assetPath } from "@/lib/asset-path";

export function BeforeAfterSection() {
  return (
    <section id="before-after" className="py-24 bg-accent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            The Transformation
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-6"
          >
            From tired to timeless.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg font-light leading-relaxed"
          >
            A perfect tile job is more than just laying materials—it's completely redefining the feel of a space. Drag the slider to see the difference precision makes.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <BeforeAfterSlider 
            beforeImage={assetPath("assets/before-bathroom.png")}
            afterImage={assetPath("assets/after-bathroom.png")}
          />
        </motion.div>
      </div>
    </section>
  );
}
