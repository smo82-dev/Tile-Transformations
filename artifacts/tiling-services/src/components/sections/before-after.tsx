import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { assetPath } from "@/lib/asset-path";

type Transformation = {
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  imageFit?: "cover" | "contain";
};

export function BeforeAfterSection() {
  const transformationSlides: Transformation[][] = [
    [
      {
        title: "Fireplace Hearth",
        beforeImage: assetPath("assets/fireplace-before.png"),
        afterImage: assetPath("assets/fireplace-after.png"),
        beforeAlt: "Before: worn and damaged tiled fireplace hearth",
        afterAlt: "After: neatly tiled fireplace hearth",
      },
      {
        title: "Conservatory Floor",
        beforeImage: assetPath("assets/conservatory-before.png"),
        afterImage: assetPath("assets/conservatory-after.png"),
        beforeAlt: "Before: unfinished conservatory floor ready for tiling",
        afterAlt: "After: patterned black and white tiled conservatory floor",
      },
    ],
    [
      {
        title: "SPC Bathroom Floor",
        beforeImage: assetPath("assets/spc-bathroom-before.jpg"),
        afterImage: assetPath("assets/spc-bathroom-after.jpg"),
        beforeAlt: "Before: bathroom prepared for SPC flooring installation",
        afterAlt: "After: completed bathroom with dark SPC flooring",
        imageFit: "contain",
      },
      {
        title: "SPC Bathroom Detail",
        beforeImage: assetPath("assets/spc-bathroom-detail-before.png"),
        afterImage: assetPath("assets/spc-bathroom-detail-after.png"),
        beforeAlt: "Before: bathroom with existing fixtures before SPC flooring installation",
        afterAlt: "After: finished bathroom with new SPC flooring",
        imageFit: "contain",
      },
    ],
    [
      {
        title: "underfloor heating",
        beforeImage: assetPath("assets/underfloor-heating-before.jpg"),
        afterImage: assetPath("assets/underfloor-heating-after.png"),
        beforeAlt: "Before: underfloor heating installed beneath the bathroom floor",
        afterAlt: "After: completed tiled bathroom floor with underfloor heating",
      },
    ],
  ];

  return (
    <section id="before-after" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                The Transformation
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display uppercase tracking-tight text-foreground"
            >
              From tired to <span className="text-white/40">timeless</span>.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base font-light leading-relaxed max-w-sm"
          >
            A perfect tile job is more than just laying materials—it's completely redefining the feel of a space. Drag the slider to see the difference precision makes.
          </motion.p>
        </div>

        <Carousel opts={{ align: "start", watchDrag: false }} className="max-w-6xl mx-auto">
          <CarouselContent>
            {transformationSlides.map((slide, slideIndex) => (
              <CarouselItem key={slideIndex}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                  {slide.map((transformation, transformationIndex) => (
                    <motion.div
                      key={transformation.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: transformationIndex * 0.1,
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="w-full relative"
                    >
                      <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-white/20" />
                      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-white/20" />

                      <BeforeAfterSlider
                        beforeImage={transformation.beforeImage}
                        afterImage={transformation.afterImage}
                        beforeAlt={transformation.beforeAlt}
                        afterAlt={transformation.afterAlt}
                        imageFit={transformation.imageFit}
                      />
                      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {transformation.title}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-4 mt-10">
            <CarouselPrevious
              aria-label="Previous work transformations"
              className="static translate-y-0 rounded-none border-white/20 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground"
            />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              More work
            </span>
            <CarouselNext
              aria-label="Next work transformations"
              className="static translate-y-0 rounded-none border-white/20 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
