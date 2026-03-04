"use client";

import { motion } from "framer-motion";
import Carousel from "../components/Carousel";

const images = [
  "/images/restaurant/view1.jpg",
  "/images/restaurant/view2.jpg",
  "/images/restaurant/view3.jpg",
  "/images/restaurant/view4.jpg",
];

export default function RestaurantView() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="text-center py-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold mb-4"
          style={{ color: "#BC9F64" }}>
          Our Restaurant
        </motion.h1>

        <p className="max-w-3xl mx-auto text-lg text-black">
          Experience refined dining with local and international cuisine,
          thoughtfully prepared and served in an elegant atmosphere.
        </p>
      </section>

      {/* Carousel */}
      <section className="max-w-6xl mx-auto px-4 pb-4">
        <Carousel images={images} autoSlideInterval={5000} height="h-[420px]" />
      </section>
      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="py-8 flex justify-center">
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
    </div>
  );
}
