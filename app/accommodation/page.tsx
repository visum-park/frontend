"use client";

import { motion } from "framer-motion";
import RoomCard from "../components/RoomCard";
const rooms = [
  {
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
    priceResidents: "KES 2,500 / night",
    priceNonResidents: "USD 42 / night",
    url: "/accommodation/standard",
  },
  {
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
    priceResidents: "KES 3,500 / night",
    priceNonResidents: "USD 48 / night",
    url: "/accommodation/deluxe",
  },
];

const Accommodation = () => {
  return (
    <section className="bg-white transition-colors duration-500 py-10 p-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight">
            Accommodation
          </h1>

          <div className="w-20 h-[2px] bg-[#BC9F64] mx-auto mt-6 mb-6" />

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Discover thoughtfully designed rooms that blend comfort,
            sophistication, and tranquility for a memorable stay.
          </p>
        </motion.div>

        {/* Room Cards */}
        <div className="space-y-28">
          {rooms.map((room, index) => (
            <RoomCard
              key={room.title}
              title={room.title}
              description={room.description}
              images={room.images}
              autoSlideInterval={room.autoSlideInterval}
              priceResidents={room.priceResidents}
              priceNonResidents={room.priceNonResidents}
              reverse={index % 2 !== 0} // alternate layout
              url={room.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
