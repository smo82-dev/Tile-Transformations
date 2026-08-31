import { assetPath } from "@/lib/asset-path";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 border-t border-background/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-4">
            <img src={assetPath("assets/logo-icon.png")} alt="Logo" className="w-8 h-8 opacity-50 grayscale invert" />
            <div>
              <p className="font-serif text-xl">Tiling Services Ltd</p>
              <p className="text-background/50 text-sm font-light italic">"Here to Serve"</p>
            </div>
          </div>

          <div className="flex gap-6 text-sm font-light text-background/60">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-background/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs font-light text-background/40">
          <p>&copy; {currentYear} Tiling Services Ltd. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Tauranga Region, New Zealand</p>
        </div>
      </div>
    </footer>
  );
}
