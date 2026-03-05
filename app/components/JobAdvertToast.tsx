"use client";

import { X } from "lucide-react";
import Image from "next/image"; // Replace with <img> if not using Next.js
import { useEffect, useState } from "react";

const APP_URL = "/careers"; // Replace with your actual careers URL

export default function JobAdvertToast() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const deadline = new Date(2026, 2, 14); // March 14, 2026

    const showToast = () => {
      const now = new Date();
      if (now <= deadline) {
        setOpen(true);
        setTimeout(() => setOpen(false), 5000);
      }
    };

    // Initial check
    showToast();

    // Repeat every 10 seconds
    const interval = setInterval(showToast, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideIn">
      <div className="relative w-[320px] rounded-xl shadow-2xl border bg-white overflow-hidden">
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 cursor-pointer right-2 z-50 bg-[#BC9F64] text-white rounded-full p-1 shadow hover:opacity-90 transition">
          <X size={18} />
        </button>

        {/* Image */}
        <div className="relative w-full h-45">
          <Image
            src="/images/careers/hiring.png"
            alt="Visum Park Hiring"
            fill
            className="object-cover rounded-t-xl"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h4 className="font-semibold text-gray-800">We're Hiring!</h4>
          <p className="text-sm text-gray-600 mt-1 mb-3">
            Join Visum Park as a Receptionist or Cook.
          </p>
          <a
            href={APP_URL}
            className="block text-center bg-[#BC9F64] text-white py-2 rounded-lg hover:opacity-90 transition">
            View Jobs
          </a>
        </div>
      </div>
    </div>
  );
}
