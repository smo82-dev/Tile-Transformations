import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { assetPath } from "@/lib/asset-path";
import { scrollToSection } from "@/lib/scroll-to-section";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#before-after" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-8"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-12 flex items-center justify-between gap-6">
          
          {/* Logo */}
          <a href="#" className="flex shrink-0 items-center gap-3 lg:gap-4 group z-50">
            <img 
              src={assetPath("assets/logo-icon.png")} 
              alt="Logo" 
              className="w-8 h-8 lg:w-9 lg:h-9 object-contain transition-transform duration-500 group-hover:scale-110 brightness-0 invert"
            />
            <span className="font-display font-bold text-foreground text-base lg:text-xl tracking-[0.16em] lg:tracking-[0.2em] uppercase hidden sm:block whitespace-nowrap">
              Tiling Services
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-white transition-colors duration-300 relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("contact");
              }}
              className="ml-1 xl:ml-4 px-5 xl:px-7 py-3 bg-white text-black text-xs font-bold uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-colors duration-500 whitespace-nowrap"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden shrink-0 text-foreground z-50 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl font-display uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("contact");
                  setMobileMenuOpen(false);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="px-10 py-5 mt-8 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
              >
                Get a Quote
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
