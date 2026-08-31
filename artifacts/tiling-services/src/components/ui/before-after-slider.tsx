import React, { useState, useRef } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-ew-resize select-none border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      onMouseDown={(e) => handlePointerDown(e.clientX)}
      onMouseMove={handleMouseMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
      onTouchMove={handleTouchMove}
      onTouchEnd={handlePointerUp}
      onTouchCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="slider"
      aria-valuenow={sliderPosition}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Image comparison slider"
    >
      <div className="absolute inset-0 w-full h-full bg-secondary">
        <img 
          src={afterImage} 
          alt="After transformation"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover pointer-events-none" 
        />
        <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm border border-white/10 text-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em]">
          After
        </div>
      </div>
      
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden bg-secondary"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before transformation"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover pointer-events-none filter grayscale-[30%]"
        />
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm border border-black/10 text-black px-5 py-2 text-xs font-bold uppercase tracking-[0.2em]">
          Before
        </div>
      </div>
      
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-primary z-10 transition-transform duration-75 shadow-[0_0_15px_rgba(216,141,84,0.5)]"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-16 bg-background border border-primary text-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-transform hover:scale-105">
          <MoveHorizontal className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
