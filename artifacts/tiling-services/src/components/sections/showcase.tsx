import { motion } from "framer-motion";

export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            The standard of finish.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[3/4] overflow-hidden group"
          >
            <img 
              src="/assets/extra-white-bathroom.png" 
              alt="Crisp white tiled bathroom" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-[3/4] overflow-hidden group mt-12 md:mt-24"
          >
            <img 
              src="/assets/extra-black-bathroom.png" 
              alt="Dramatic black tile feature wall" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
