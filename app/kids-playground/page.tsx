"use client";

import { ToyBrick } from "lucide-react";

export const KidsPlayground = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-xl">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-[#BC9F64]/10">
            <ToyBrick className="text-[#BC9F64]" size={40} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Kids Playground Coming Soon
        </h1>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-[#BC9F64] mx-auto mb-6" />

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          We are currently preparing a fun and safe playground experience for
          children. This page will be available soon with more details about our
          kids' activities and facilities.
        </p>
      </div>
    </div>
  );
};

export default KidsPlayground;
