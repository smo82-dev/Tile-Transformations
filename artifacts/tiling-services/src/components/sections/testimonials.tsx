import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/asset-path";

type Review = {
  name: string;
  text: string;
  highlight: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
};

const reviews: Review[] = [
  {
    name: "Tessa",
    text: "Josh did a fabulous job tiling our family bathroom and ensuite. He was thorough, detail-focused, reliable, and easy to communicate with. Happy to recommend.",
    highlight: "thorough, detail-focused, reliable",
    image: assetPath("assets/tessa-bathroom.webp"),
    imageAlt: "Bright tiled bathroom with vanity and mirror",
  },
  {
    name: "David",
    text: "Josh did a great job tiling our kitchen and laundry. He was easy to have in the house, cleaned up daily, and delivered quality work. More than happy to recommend.",
    highlight: "quality work",
    image: assetPath("assets/david-kitchen-laundry.webp"),
    imageAlt: "Finished tiled kitchen backsplash with open shelving",
    imageClassName: "object-[center_30%]",
  },
  {
    name: "Betty",
    text: "Josh was the right person for our back wall and hearth project. He discussed the tile detailing with us, and other tradespeople commented on the quality of his tiling. Great work, highly recommend.",
    highlight: "quality of his tiling",
    image: assetPath("assets/betty-fireplace-hearth.webp"),
    imageAlt: "Stone tiled feature wall and hearth around a wood burner",
  },
  {
    name: "Emily",
    text: "The end result is a dream. It's perfect and I know it was a challenge. Josh is a top quality tiler and a master of his craft. Cannot recommend enough. Thank you so much Josh (I'll be back for the bathroom when I can!)",
    highlight: "master of his craft",
    image: assetPath("assets/emily-conservatory-floor.jpg"),
    imageAlt: "Black and white patterned tiled floor in a bright conservatory",
    imageClassName: "object-[center_35%]",
  },
  {
    name: "Kerry and Greg",
    text: "Josh had good ideas to suggest and helped us get the best out of the project. His work was precise and painstaking and the finished result looks superb. We were very happy with this small project and would warmly recommend Josh to anyone who might be looking for a skilled tiler.",
    highlight: "precise and painstaking",
    image: assetPath("assets/kerry-greg-bathroom-splash.jpg"),
    imageAlt: "Bathroom vanity with a navy blue tiled splashback",
  },
];

function ReviewQuote({ review }: { review: Review }) {
  const highlightIndex = review.text.indexOf(review.highlight);

  if (highlightIndex === -1) {
    return <>{review.text}</>;
  }

  return (
    <>
      {review.text.slice(0, highlightIndex)}
      <span className="text-primary">{review.highlight}</span>
      {review.text.slice(highlightIndex + review.highlight.length)}
    </>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  }, []);

  const showReview = useCallback((index: number) => {
    setActiveIndex((index + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(showNext, 7000);
    return () => window.clearInterval(interval);
  }, [isPaused, prefersReducedMotion, showNext]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "Home") {
      event.preventDefault();
      showReview(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      showReview(reviews.length - 1);
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
    setIsPaused(true);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    setIsPaused(false);

    if (startX === null || endX === undefined) {
      return;
    }

    const distance = endX - startX;
    if (Math.abs(distance) < 45) {
      return;
    }

    if (distance < 0) {
      showNext();
    } else {
      showPrevious();
    }
  };

  return (
    <section id="testimonials" className="py-24 md:py-28 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            const nextTarget = event.relatedTarget;
            if (!nextTarget || !event.currentTarget.contains(nextTarget as Node)) {
              setIsPaused(false);
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-8 focus-visible:ring-offset-background"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[34rem] lg:w-5/12 relative lg:self-stretch"
            >
              <div className="relative flex w-full items-center justify-center aspect-[4/5] lg:aspect-auto lg:h-full bg-black/20 overflow-hidden">
                <div className="absolute inset-0 border border-white/10 z-10 pointer-events-none translate-x-4 translate-y-4" />
                <div className="absolute inset-0 grid">
                  {reviews.map((review, index) => (
                    <motion.div
                      key={review.name}
                      initial={false}
                      animate={{
                        opacity: index === activeIndex ? 1 : 0,
                        scale: index === activeIndex ? 1 : 1.04,
                      }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
                      aria-hidden={index !== activeIndex}
                      className="col-start-1 row-start-1 pointer-events-none"
                    >
                      <img
                        src={review.image}
                        alt={review.imageAlt}
                        loading={index === 0 ? "lazy" : "eager"}
                        decoding="async"
                        className={`w-full h-full object-contain filter grayscale-[20%] contrast-125 ${review.imageClassName ?? "object-center"}`}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-white/70">
                  <span className="text-primary">{String(activeIndex + 1).padStart(2, "0")}</span>
                  <span className="w-8 h-px bg-white/30" />
                  <span>{String(reviews.length).padStart(2, "0")}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-7/12 relative lg:pl-12 flex flex-col items-start text-left"
            >
              <Quote className="absolute -top-12 -left-2 w-32 h-32 text-white/[0.03] -z-10 rotate-180" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-primary" />
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                  Client Experience
                </span>
              </div>

              <div className="grid min-h-[22rem] md:min-h-[25rem]">
                {reviews.map((review, index) => (
                  <motion.div
                    key={review.name}
                    initial={false}
                    animate={{
                      opacity: index === activeIndex ? 1 : 0,
                      x: index === activeIndex ? 0 : 18,
                    }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
                    aria-hidden={index !== activeIndex}
                    className={`col-start-1 row-start-1 flex flex-col items-start justify-center ${
                      index === activeIndex ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                  >
                    <blockquote className="max-w-2xl text-lg md:text-2xl lg:text-3xl font-display text-foreground leading-[1.3] mb-8 tracking-normal">
                      “<ReviewQuote review={review} />”
                    </blockquote>

                    <div className="flex items-center gap-6">
                      <div className="w-12 h-[2px] bg-white/20" />
                      <div>
                        <p className="font-display font-bold text-foreground tracking-[0.15em]">{review.name}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex gap-0.5 text-primary" aria-label="5 star Google review">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                              <Star key={starIndex} className="w-3 h-3 fill-current" aria-hidden="true" />
                            ))}
                          </div>
                          <p className="text-muted-foreground font-light text-xs tracking-widest">Google Review</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between gap-6 border-t border-white/10 pt-5">
                <div className="flex items-center gap-2" aria-label="Choose a testimonial">
                  {reviews.map((review, index) => (
                    <button
                      key={review.name}
                      type="button"
                      onClick={() => showReview(index)}
                      aria-label={`Show review ${index + 1} from ${review.name}`}
                      aria-current={index === activeIndex ? "true" : undefined}
                      className={`h-1.5 transition-all duration-500 ${
                        index === activeIndex ? "w-10 bg-primary" : "w-5 bg-white/20 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Show previous review"
                    className="flex h-11 w-11 items-center justify-center border border-white/15 text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Show next review"
                    className="flex h-11 w-11 items-center justify-center border border-white/15 text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
                  aria-live="polite"
                  className="sr-only"
                >
                  Showing review {activeIndex + 1} of {reviews.length} from {reviews[activeIndex].name}.
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}