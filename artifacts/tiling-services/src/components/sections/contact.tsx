import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-8 h-[1px] bg-primary" />
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                  Get a Quote
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-display uppercase tracking-tight text-foreground mb-6"
              >
                Ready for <span className="text-white/40">precision?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground font-light text-sm md:text-base leading-relaxed"
              >
                Reach out to discuss your next project. Whether it's a large-scale commercial fit-out, a high-end residential bathroom, or expert repair work, we are here to serve.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10"
            >
              <div className="space-y-4">
                <div className="text-primary mb-4">
                  <Phone className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="font-display font-bold text-foreground uppercase tracking-[0.15em] text-sm">Call Josh</h4>
                <a href="tel:0272871227" className="block text-xl text-muted-foreground hover:text-white transition-colors font-light">
                  027-287-1227
                </a>
              </div>

              <div className="space-y-4">
                <div className="text-primary mb-4">
                  <Mail className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="font-display font-bold text-foreground uppercase tracking-[0.15em] text-sm">Email Us</h4>
                <a href="mailto:josh@tilingservices.co.nz" className="block text-xl text-muted-foreground hover:text-white transition-colors font-light break-words">josh@tilingservices.co.nz</a>
              </div>

              <div className="space-y-4">
                <div className="text-primary mb-4">
                  <MapPin className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="font-display font-bold text-foreground uppercase tracking-[0.15em] text-sm">Service Area</h4>
                <p className="text-xl text-muted-foreground font-light">
                  Tauranga Region, NZ
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-5 bg-secondary p-10 lg:p-14 flex flex-col justify-center border border-white/5"
            >
              <h3 className="font-display font-bold uppercase tracking-[0.15em] text-xl mb-4 text-foreground">Follow our work</h3>
              <p className="text-muted-foreground font-light text-sm mb-8 leading-relaxed">
                See our latest projects, behind-the-scenes, and finished transformations.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/tilingservicesltd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary text-foreground transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </a>
                <a 
                  href="https://facebook.com/profile.php?id=61575671827618" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary text-foreground transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
