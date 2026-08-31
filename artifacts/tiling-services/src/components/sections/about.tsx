import { motion } from "framer-motion";
import { assetPath } from "@/lib/asset-path";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-48 md:w-56">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={assetPath("assets/owner.jpg")} 
                  alt="Josh van Baarle, Owner-Operator" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary z-[-1] hidden md:block" />
              <div className="absolute top-4 -left-4 w-10 h-10 border border-background/20 z-[-1] hidden md:block" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
              About the Craftsman
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-background">
              The eye of a finisher. The care of an owner.
            </h2>
            
            <div className="space-y-6 text-background/80 font-light leading-relaxed text-lg">
              <p>
                I'm Josh van Baarle, the founder and owner-operator of Tiling Services Ltd. When you hire us, you don't get a corporate fleet or a rotating cast of sub-contractors—you get me.
              </p>
              <p>
                With over 5 years of industry experience and full qualifications, I've built this business on a simple philosophy: "Here to Serve". That means reliable communication, immense attention to detail, and work that stands the test of time.
              </p>
              <p>
                Whether it's a small repair, an intricate residential bathroom, or a large-scale commercial fit-out in the Tauranga region, I treat every edge, every grout line, and every surface with the exact same standard of excellence.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-background/10 flex flex-wrap gap-8">
              <div>
                <h4 className="text-3xl font-serif text-primary mb-1">5+</h4>
                <span className="text-xs uppercase tracking-widest text-background/60 font-semibold">Years Exp</span>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-primary mb-1">100%</h4>
                <span className="text-xs uppercase tracking-widest text-background/60 font-semibold">Owner-Operated</span>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-primary mb-1">✓</h4>
                <span className="text-xs uppercase tracking-widest text-background/60 font-semibold">Fully Qualified</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
