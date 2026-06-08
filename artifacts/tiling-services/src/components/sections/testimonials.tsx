import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none hidden lg:block">
        <img src="/assets/logo-icon.png" alt="" className="w-full h-full object-cover object-left" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 aspect-[4/5] relative"
          >
            <img 
              src="/assets/testimonial-bathroom.jpg" 
              alt="Finished bathroom tiling" 
              className="w-full h-full object-cover shadow-2xl"
            />
            <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-accent -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12 relative"
          >
            <Quote className="absolute -top-10 -left-6 w-24 h-24 text-primary/10 -z-10 rotate-180" />
            
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-8 block">
              Client Experience
            </span>
            
            <blockquote className="text-2xl md:text-4xl font-serif text-foreground leading-snug mb-10">
              "Josh did a fabulous job tiling both our family bathroom and ensuite. He is very thorough and paid close attention to the details. He is very easy to deal with - reliable and great communication. And just a good guy, happy to recommend."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-primary" />
              <div>
                <p className="font-semibold text-foreground uppercase tracking-wide">Tessa</p>
                <p className="text-muted-foreground font-light text-sm">Kelson Resident</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
