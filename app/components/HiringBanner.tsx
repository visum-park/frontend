"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const HiringBanner = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  // Hide banner if closed or on /careers page
  if (!visible || pathname === "/careers") return null;

  return (
    <div className="relative overflow-hidden bg-white text-[#2D4B37]">
      {/* Scrolling text container */}
      <Link
        href="/careers"
        className="flex items-center underline gap-4 py-2 whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-8">
          <span className="font-semibold">
            We are hiring. Click to view job openings.
          </span>
        </div>
      </Link>

      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent clicking link
          setVisible(false);
        }}
        className="absolute right-2 top-1 text-[#2D4B37] font-bold hover:text-[#1e3224]">
        ✕
      </button>

      {/* CSS animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          padding-left: 90%;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default HiringBanner;
