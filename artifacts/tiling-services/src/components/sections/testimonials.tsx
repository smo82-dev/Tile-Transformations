import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { assetPath } from "@/lib/asset-path";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 bg-background border-t border-white/5 relative overflow-hidden">

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12 aspect-[4/5] relative"
          >
            <div className="absolute inset-0 border border-white/10 z-10 pointer-events-none translate-x-4 translate-y-4" />
            <img 
              src={assetPath("assets/testimonial-bathroom.jpg")} 
              alt="Finished bathroom tiling" 
              className="w-full h-full object-cover filter grayscale-[20%] contrast-125"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-7/12 relative lg:pl-12"
          >
            <Quote className="absolute -top-12 -left-2 w-32 h-32 text-white/[0.03] -z-10 rotate-180" />
            
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                Client Experience
              </span>
            </div>
            
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-display text-foreground leading-[1.2] mb-12 uppercase tracking-tight">
              "Josh did a fabulous job. He is very thorough and paid <span className="text-primary">close attention to the details.</span> Reliable and great communication."
            </blockquote>
            
            <div className="flex items-center gap-6">
              <div className="w-12 h-[2px] bg-white/20" />
              <div>
                <p className="font-display font-bold text-foreground uppercase tracking-[0.15em]">Tessa</p>
                <p className="text-muted-foreground font-light text-xs tracking-widest uppercase mt-1">Kelson Resident</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
