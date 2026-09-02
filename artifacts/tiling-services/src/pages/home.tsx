import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { ServicesSection } from "@/components/sections/services";
import { AboutSection } from "@/components/sections/about";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ShowcaseSection } from "@/components/sections/showcase";
import { ContactSection } from "@/components/sections/contact";
import { assetPath } from "@/lib/asset-path";

function LaunchSplash() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          onAnimationComplete={() => setIsVisible(false)}
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171717]"
        >
          <img
            src={assetPath("assets/logo-icon-splash.png")}
            alt=""
            className="h-[60vw] w-[60vw] max-h-[60vh] max-w-[60vh] object-contain brightness-0 invert"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <LaunchSplash />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BeforeAfterSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
