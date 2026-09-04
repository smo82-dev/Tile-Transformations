import { motion } from "framer-motion";
import { assetPath } from "@/lib/asset-path";

const services = [
  {
    num: "01",
    title: "Residential",
    description: "Elevating homes with pristine finishes.",
    features: [
      "Floor & wall tiling",
      "SPC flooring",
      "Waterproofing",
      "Underfloor heating",
      "Floor levelling compound"
    ],
    image: assetPath("assets/residential.jpg")
  },
  {
    num: "02",
    title: "Commercial",
    description: "Robust solutions for high-traffic environments.",
    features: [
      "Floor & wall tiling",
      "Laminate & Wood-look flooring",
      "Waterproofing",
      "Underfloor heating",
      "Floor levelling compound"
    ],
    image: assetPath("assets/commercial.jpg")
  },
  {
    num: "03",
    title: "Repairs & Maint.",
    description: "Restoring and preserving your investment.",
    features: [
      "Tile repairs & replacement",
      "Grout repairs & restoration",
      "Silicone replacement",
      "Maintenance products",
      "Expert advice"
    ],
    image: assetPath("assets/extra-black-bathroom.png")
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="pt-16 pb-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                Our Services
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display uppercase tracking-tight text-foreground"
            >
              Craftsmanship <br />
              <span className="text-white/40">Across every domain.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <img
              src={assetPath("assets/logo-icon.png")}
              alt="Logo Motif"
              loading="lazy"
              decoding="async"
              className="w-16 h-16 opacity-[0.03] invert brightness-0"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-white/5">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex flex-col border-b lg:border-b-0 lg:border-r border-white/5 last:border-r-0 hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="p-8 md:p-12 flex-1 flex flex-col z-10">
                <div className="text-primary/50 font-display text-5xl font-bold mb-8 transition-colors duration-500 group-hover:text-primary">
                  {service.num}
                </div>
                <h3 className="text-2xl font-display uppercase tracking-widest text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-light mb-10 text-sm leading-relaxed max-w-sm">
                  {service.description}
                </p>
                <ul className="space-y-4 mt-auto">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-foreground/80 font-light uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 bg-primary/40 mr-4 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-700 hidden lg:block overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover filter grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
