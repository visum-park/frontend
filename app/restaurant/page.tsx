"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  "/images/restaurant/view1.jpg",
  "/images/restaurant/view2.jpg",
  "/images/restaurant/view3.jpg",
  "/images/restaurant/view4.jpg",
];

const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

export default function RestaurantView() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, AUTO_SLIDE_INTERVAL);
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
    <div className="min-h-screen bg-white">
      <section className="text-center py-20 px-4 relative">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold mb-4"
          style={{
            color: "#BC9F64",
            textShadow: "0 2px 10px rgba(188, 159, 100, 0.3)",
          }}>
          Our Restaurant
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-black text-lg leading-relaxed">
          Experience refined dining with local and international cuisine,
          thoughtfully prepared and served in an elegant, welcoming atmosphere.
        </motion.p>

        <div
          className="h-1 w-24 mx-auto mt-6 rounded-full"
          style={{ backgroundColor: "#BC9F64" }}
        />
      </section>

      {/* CAROUSEL */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div
          className="relative h-[420px] rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(188, 159, 100, 0.2)",
          }}>
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
                alt={`Restaurant image ${index + 1}`}
                loading="lazy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 rounded-full p-3"
            style={{
              background: "rgba(45, 75, 55, 0.7)",
              border: "1px solid rgba(188, 159, 100, 0.4)",
            }}>
            <ChevronLeft className="w-6 h-6 text-[#BC9F64]" />
          </button>

          <button
            onClick={next}
            className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 rounded-full p-3"
            style={{
              background: "rgba(45, 75, 55, 0.7)",
              border: "1px solid rgba(188, 159, 100, 0.4)",
            }}>
            <ChevronRight className="w-6 h-6 text-[#BC9F64]" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="w-3 h-3 cursor-pointer rounded-full transition-all"
              style={{
                backgroundColor: i === index ? "#BC9F64" : "#8A8F7A",
                transform: i === index ? "scale(1.25)" : "scale(1)",
                opacity: i === index ? 1 : 0.6,
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-12 flex justify-center">
          <a
            href="/restaurant/menu"
            className="group inline-flex items-center gap-2 px-9 py-3 rounded-full text-lg font-medium transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #BC9F64 0%, #a68a54 100%)",
              color: "#2D4B37",
              boxShadow: "0 10px 25px rgba(188, 159, 100, 0.35)",
            }}>
            View Our Menu
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
