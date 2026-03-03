"use client";

import Carousel from "@/app/components/Carousel";
import RoomPricingCard from "@/app/components/RoomPricingCard";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const room = {
  title: "Standard Room",
  description:
    "A comfortable and elegantly designed room with all essential amenities, perfect for a restful stay.",
  images: [
    "/images/accommodation/rooms/Standard/standard1.jpg",
    "/images/accommodation/rooms/Standard/standard2.jpg",
    "/images/accommodation/rooms/Standard/standard3.jpg",
    "/images/accommodation/rooms/Standard/standard4.jpg",
  ],
  autoSlideInterval: 6000,

  prices: {
    residents: {
      single: {
        bedOnly: 2500,
        bedBreakfast: 3000,
      },
      double: {
        bedOnly: 3500,
        bedBreakfast: 4500,
      },
      longStay: {
        single: 2500,
        double: 3500,
      },
    },

    nonResidents: {
      single: {
        bedBreakfast: 42,
        halfBoard: 55,
        fullBoard: 68,
      },
      double: {
        bedBreakfast: 64,
        halfBoard: 85,
        fullBoard: 105,
      },
    },
  },
};

const StandardRoomPage = () => {
  return (
    <section className="bg-white py-28 px-6 lg:px-12">
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

        <RoomPricingCard prices={room.prices} />
      </div>
    </section>
  );
};

export default StandardRoomPage;
