import { assetPath } from "@/lib/asset-path";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          
          <div className="max-w-sm">
            <a href="#" className="inline-flex items-center gap-4 mb-8">
              <img src={assetPath("assets/logo-icon.png")} alt="Logo" className="w-8 h-8 brightness-0 invert opacity-80" />
              <span className="font-display font-bold text-xl tracking-[0.2em] uppercase">
                Tiling Services
              </span>
            </a>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Owner-operated tiling services in Tauranga. Expert craftsmanship that transforms homes and commercial spaces with immaculate finishing.
            </p>
          </div>

          <div className="flex flex-wrap gap-16 lg:gap-32">
            <div>
              <h4 className="font-display font-bold uppercase tracking-[0.15em] text-xs text-white/50 mb-6">Navigation</h4>
              <div className="flex flex-col gap-4 text-sm font-light text-white/80">
                <a href="#hero" className="hover:text-primary transition-colors">Home</a>
                <a href="#before-after" className="hover:text-primary transition-colors">Work</a>
                <a href="#services" className="hover:text-primary transition-colors">Services</a>
                <a href="#about" className="hover:text-primary transition-colors">About</a>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold uppercase tracking-[0.15em] text-xs text-white/50 mb-6">Contact</h4>
              <div className="flex flex-col gap-4 text-sm font-light text-white/80">
                <a href="tel:0272871227" className="hover:text-primary transition-colors">027-287-1227</a>
                <a href="mailto:joshvanbaarle@gmail.com" className="hover:text-primary transition-colors">joshvanbaarle@gmail.com</a>
                <span className="text-white/40">Tauranga, NZ</span>
              </div>
            </div>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-white/30 uppercase tracking-[0.1em]">
          <p>&copy; {currentYear} Tiling Services Ltd. All rights reserved.</p>
          <p className="font-display">"Here to Serve"</p>
        </div>
      </div>
    </footer>
  );
}
