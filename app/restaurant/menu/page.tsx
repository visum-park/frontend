"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RestaurantMenuPDF() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-white" />; // Avoid SSR mismatch

  return (
    <div className="min-h-screen bg-white">
      <section className="text-center py-10 px-4 relative">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold mb-4"
          style={{
            color: "#BC9F64",
            textShadow: "0 2px 10px rgba(188, 159, 100, 0.3)",
          }}>
          Our Menu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-black text-lg leading-relaxed">
          Delight in our complete menu, accessible anytime online.
        </motion.p>

        <div
          className="h-1 w-24 mx-auto mt-6 rounded-full"
          style={{ backgroundColor: "#BC9F64" }}
        />
      </section>

      {/* PDF Viewer */}
      <section className="max-w-7xl h-screen mx-auto px-4 pb-24">
        <div
          className="relative w-full h-screen rounded-2xl overflow-hidden border"
          style={{ borderColor: "rgba(188, 159, 100, 0.2)" }}>
          <iframe
            src="/pdfDocuments/menu.pdf"
            className="w-full h-full"
            title="Restaurant Menu"
          />
        </div>
      </section>
    </div>
  );
}
