import { motion } from "framer-motion";
import { Home, Building2, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential",
    description: "Elevating homes with pristine finishes.",
    features: [
      "Floor & wall tiling",
      "SPC flooring",
      "Waterproofing",
      "Underfloor heating",
      "Floor levelling compound"
    ],
    image: "/assets/residential.jpg"
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Robust solutions for high-traffic environments.",
    features: [
      "Floor & wall tiling",
      "Laminate & Wood-look flooring",
      "Waterproofing",
      "Underfloor heating",
      "Floor levelling compound"
    ],
    image: "/assets/commercial.jpg"
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description: "Restoring and preserving your investment.",
    features: [
      "Tile repairs & replacement",
      "Grout repairs & restoration",
      "Silicone replacement",
      "Maintenance products",
      "Expert advice"
    ],
    image: "/assets/extra-white-bathroom.png"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Services
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-foreground"
            >
              Craftsmanship across every domain.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <img src="/assets/logo-icon.png" alt="Logo Motif" className="w-16 h-16 opacity-20" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-background p-3">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-light mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-foreground/80 font-light">
                      <span className="mr-3 text-primary mt-1 opacity-70">◆</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
