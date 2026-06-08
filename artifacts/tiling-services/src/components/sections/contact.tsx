import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-accent relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-card shadow-2xl p-8 md:p-16 border border-border">
          
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block"
            >
              Get in touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-foreground mb-6"
            >
              Ready to transform your space?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground font-light max-w-2xl mx-auto"
            >
              Whether you need a full commercial fit-out, a residential bathroom makeover, or expert repair work, we are here to serve.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-accent group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 uppercase tracking-wide text-sm">Call Josh</h4>
                  <a href="tel:0272871227" className="text-lg text-muted-foreground hover:text-primary transition-colors font-light">
                    027-287-1227
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-accent group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 uppercase tracking-wide text-sm">Email Us</h4>
                  <a href="mailto:joshvanbaarle@gmail.com" className="text-lg text-muted-foreground hover:text-primary transition-colors font-light">
                    joshvanbaarle@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-accent group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 uppercase tracking-wide text-sm">Service Area</h4>
                  <p className="text-lg text-muted-foreground font-light">
                    Tauranga Region, NZ
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-accent/50 p-8 flex flex-col justify-center items-center text-center border border-border"
            >
              <h3 className="font-serif text-2xl mb-4 text-foreground">Follow our work</h3>
              <p className="text-muted-foreground font-light mb-8">See our latest projects, behind-the-scenes, and finished transformations.</p>
              
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/tilingservicesltd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://facebook.com/profile.php?id=61575671827618" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
