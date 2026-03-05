"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function JobAdvertToast() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const deadline = new Date(2026, 2, 14); // March 14, 2026

    const showToast = () => {
      const now = new Date();
      if (now < deadline) {
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

  // Hide banner if closed or on /careers page
  if (!open || pathname === "/careers") return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideIn">
      <div className="relative bg-white shadow-2xl rounded-xl w-[320px] overflow-hidden border">
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          <X size={18} className="text-gray-600" />
        </button>

        {/* Image */}
        <div className="relative w-full h-45">
          <Image
            src="/images/careers/hiring.png"
            alt="Visum Park Hiring"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h4 className="font-semibold text-gray-800">We're Hiring!</h4>

          <p className="text-sm text-gray-600 mt-1 mb-3">
            Join Visum Park as a Receptionist or Cook.
          </p>

          <a
            href="/careers"
            className="block text-center bg-[#BC9F64] text-white py-2 rounded-lg hover:opacity-90">
            View Jobs
          </a>
        </div>
      </div>
    </div>
  );
}
