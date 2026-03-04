"use client";

import Carousel from "@/app/components/Carousel";
import RoomPricingCard from "@/app/components/RoomPricingCard";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const room = {
  title: "Deluxe Room",
  description:
    "Spacious and elegantly furnished with modern amenities for ultimate comfort.",
  images: [
    "/images/accommodation/rooms/Deluxe/deluxe1.jpg",
    "/images/accommodation/rooms/Deluxe/deluxe2.jpg",
    "/images/accommodation/rooms/Deluxe/deluxe3.jpg",
    "/images/accommodation/rooms/Deluxe/deluxe4.jpg",
  ],
  autoSlideInterval: 4000,

  prices: {
    residents: {
      single: { bedOnly: 3000, bedBreakfast: 3500 },
      double: { bedOnly: 4000, bedBreakfast: 5000 },
      longStay: { single: 2500, double: 3500 },
    },
    nonResidents: {
      single: { bedBreakfast: 48, halfBoard: 77, fullBoard: 97 },
      double: { bedBreakfast: 74, halfBoard: 96, fullBoard: 122 },
    },
  },
};

const DeluxeRoomPage = () => {
  return (
    <section className="bg-white p-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/accommodation"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#BC9F64] hover:underline transition">
            <ArrowLeft size={18} />
            Back to Accommodation
          </Link>
        </div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight">
            {room.title}
          </h1>

          <div className="w-20 h-[2px] bg-[#BC9F64] mx-auto mt-6 mb-6" />

          <p className="text-lg text-gray-600 leading-relaxed">
            {room.description}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="mb-8">
          <Carousel
            images={room.images}
            autoSlideInterval={room.autoSlideInterval}
            height="h-[420px]"
          />
        </div>

        {/* Pricing Card */}
        <RoomPricingCard prices={room.prices} />

        {/* Next Room Link */}
        <div className="mt-10 text-center">
          <Link
            href="/accommodation/standard"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#BC9F64] hover:underline transition">
            View Standard Room
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DeluxeRoomPage;
