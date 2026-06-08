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

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-none shadow-2xl cursor-ew-resize select-none"
      onMouseDown={(e) => handlePointerDown(e.clientX)}
      onMouseMove={handleMouseMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
      onTouchMove={handleTouchMove}
      onTouchEnd={handlePointerUp}
      onTouchCancel={handlePointerUp}
    >
      {/* After image (base) */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={afterImage} 
          alt="After transformation" 
          className="w-full h-full object-cover pointer-events-none" 
        />
        <div className="absolute bottom-4 right-4 bg-background/90 text-foreground px-4 py-1 text-sm font-semibold uppercase tracking-wider">
          After
        </div>
      </div>
      
      {/* Before image (clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before transformation" 
          className="w-full h-full object-cover pointer-events-none" 
        />
        <div className="absolute bottom-4 left-4 bg-foreground/90 text-background px-4 py-1 text-sm font-semibold uppercase tracking-wider">
          Before
        </div>
      </div>
      
      {/* Slider Divider */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white z-10 transition-transform duration-75"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-transform hover:scale-110">
          <MoveHorizontal className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
