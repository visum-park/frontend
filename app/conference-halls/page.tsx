"use client";

import SendInquiryModal from "@/app/components/SendInquiryModal";
import Carousel from "../components/Carousel";
import TermsAndConditions from "../components/TermsAndConditions";

const images = [
  "/images/conference/conferenceHall.jpeg",
  "/images/conference/backview.jpeg",
  "/images/conference/backview2.jpeg",
  "/images/conference/backview3.jpeg",
];

const formatKES = (amount: number) =>
  new Intl.NumberFormat("en-KE").format(amount);

const pricing = [
  {
    title: "Half Day Conference",
    description: "Conference hall access (half day)",
    price: 3000,
  },
  {
    title: "Full Day Conference",
    description: "Conference hall access (full day)",
    price: 3500,
    tag: "Most Popular",
    highlight: true,
  },
];

const Conference = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tight">
            Conference Halls
          </h1>

          <div className="w-20 h-[2px] bg-[#BC9F64] mx-auto mt-6 mb-6" />

          <p className="text-lg text-gray-600 leading-relaxed">
            Modern, spacious conference halls designed for meetings, workshops,
            and corporate events in a professional and comfortable setting.
          </p>
        </div>

        {/* Carousel */}
        <div className="mb-24">
          <Carousel
            images={images}
            autoSlideInterval={5000}
            height="h-[420px]"
          />
        </div>

        {/* Pricing Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">
              Conference Packages
            </h2>
            <p className="text-neutral-500 mt-4 text-lg">
              Flexible solutions for corporate retreats, meetings & workshops
            </p>
          </div>

          {/* Premium Pricing Layout */}
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {pricing.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-3xl border px-10 py-12 transition duration-300 bg-white text-center ${
                  item.highlight
                    ? "border-[#BC9F64] shadow-2xl scale-[1.03]"
                    : "border-neutral-200 shadow-md"
                } hover:shadow-2xl`}>
                {/* Badge */}
                {item.tag && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1.5 rounded-full ${
                      item.highlight
                        ? "bg-[#BC9F64] text-white"
                        : "bg-neutral-100 text-neutral-600"
                    }`}>
                    {item.tag}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-500 mb-8 text-base">
                  {item.description}
                </p>

                {/* Price */}
                <div className="text-4xl font-semibold text-[#BC9F64] tracking-tight">
                  KES {formatKES(item.price)}
                </div>

                <p className="text-sm text-neutral-400 mt-2">Per booking</p>
              </div>
            ))}
          </div>
        </div>
        <SendInquiryModal facility="Conference" />

        <TermsAndConditions />
      </section>
    </div>
  );
};

export default Conference;
