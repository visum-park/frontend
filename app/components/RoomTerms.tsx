"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

const RoomTerms = () => {
  const [showToast, setShowToast] = useState(false);
  const tillNumber = "5441541";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(tillNumber);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <>
      <div className="max-w-lg mx-auto border-t pt-4">
        <h3 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide">
          Terms & Conditions
        </h3>

        <ul className="space-y-3 text-sm text-gray-600">
          <li>
            • Check-out time is{" "}
            <span className="font-medium text-black">10:00 AM</span>.
          </li>

          <li>
            • Payment for accommodation is due at{" "}
            <span className="font-medium text-black">check-in</span>.
          </li>

          <li>
            •{" "}
            <span className="font-medium text-black">
              Cash payments are not accepted.
            </span>
          </li>

          <li className="flex items-center gap-2">
            • Till Number:
            <button
              onClick={handleCopy}
              className="flex cursor-pointer items-center gap-1 font-medium text-[#BC9F64] hover:underline transition">
              {tillNumber}
              <Copy size={14} />
            </button>
          </li>
        </ul>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-white border border-[#BC9F64]/40 shadow-2xl px-6 py-4 rounded-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          {/* Gold Accent Dot */}
          <div className="w-3 h-3 rounded-full bg-[#BC9F64]" />

          {/* Message */}
          <p className="text-sm text-gray-800 font-medium">
            Till number copied successfully
          </p>
        </div>
      )}
    </>
  );
};

export default RoomTerms;
