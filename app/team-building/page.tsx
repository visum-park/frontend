"use client";

import { Construction } from "lucide-react";

export const TeamBuilding = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-xl">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-[#BC9F64]/10">
            <Construction className="text-[#BC9F64]" size={40} />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Page Under Development
        </h1>

        <div className="w-16 h-[2px] bg-[#BC9F64] mx-auto mb-6" />

        <p className="text-gray-600 leading-relaxed">
          We are currently working on bringing you an amazing team building
          experience. This page will be available soon. Please check back later
          for updates.
        </p>
      </div>
    </div>
  );
};

export default TeamBuilding;
