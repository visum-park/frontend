"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Carousel from "./Carousel";

interface RoomCardProps {
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
  autoSlideInterval?: number;
  priceResidents: string;
  priceNonResidents: string;
  url: string;
}

const RoomCard = ({
  title,
  description,
  images,
  priceResidents,
  priceNonResidents,
  url,
  autoSlideInterval = 6000,
  reverse = false,
}: RoomCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
      {/* Carousel + Pricing */}
      <div className={`${reverse ? "lg:order-2" : ""} space-y-2`}>
        {/* Carousel */}
        <Carousel
          images={images}
          autoSlideInterval={autoSlideInterval}
          height="h-[420px]"
        />

        {/* Pricing Card */}
        <div className="border rounded-2xl mt-4 p-6 bg-white shadow-lg transition-all duration-300">
          <p className="text-xs font-semibold underline uppercase tracking-wider text-gray-400 mb-3">
            Starting From
          </p>

          <div className="space-y-2 text-[#BC9F64] font-semibold text-sm">
            <p>Residents: {priceResidents}</p>
            <p>Non-Residents: {priceNonResidents}</p>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
          {title}
        </h2>

        <div className="w-16 h-[2px] bg-[#BC9F64] mb-6" />

        <p className="text-gray-600 leading-relaxed mb-8">{description}</p>

        <Link href={url}>
          <button className="px-8 py-3 rounded border cursor-pointer border-[#BC9F64] text-[#BC9F64] uppercase tracking-wide text-sm transition-all duration-500 hover:bg-[#BC9F64] hover:text-white">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default RoomCard;
