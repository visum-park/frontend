"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface CarouselProps {
  images: string[];
  autoSlideInterval?: number;
  height?: string;
  showIndicators?: boolean;
}

export default function Carousel({
  images,
  autoSlideInterval = 5000,
  height = "h-[420px]",
  showIndicators = true,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, autoSlideInterval);
  };

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    startAutoSlide();
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    startAutoSlide();
  };

  const goTo = (i: number) => {
    setIndex(i);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      {/* Carousel */}
      <div
        className={`relative ${height} rounded-2xl overflow-hidden`}
        style={{ border: "1px solid rgba(188, 159, 100, 0.2)" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="absolute inset-0">
            <Image
              src={images[index]}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3"
          style={{
            background: "rgba(45, 75, 55, 0.7)",
            border: "1px solid rgba(188, 159, 100, 0.4)",
          }}>
          <ChevronLeft className="w-6 h-6 text-[#BC9F64]" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3"
          style={{
            background: "rgba(45, 75, 55, 0.7)",
            border: "1px solid rgba(188, 159, 100, 0.4)",
          }}>
          <ChevronRight className="w-6 h-6 text-[#BC9F64]" />
        </button>
      </div>

      {/* Indicators */}
      {showIndicators && (
        <div className="flex justify-center gap-3 mt-8">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="w-3 h-3 rounded-full transition-all"
              style={{
                backgroundColor: i === index ? "#BC9F64" : "#8A8F7A",
                transform: i === index ? "scale(1.25)" : "scale(1)",
                opacity: i === index ? 1 : 0.6,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
