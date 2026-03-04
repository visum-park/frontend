"use client";

import { CheckCircle, Copy } from "lucide-react";
import { useState } from "react";

const TermsAndConditions = () => {
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
      <div className="max-w-lg mx-auto border-t border-neutral-200 pt-8 mt-12">
        <h3 className="text-sm font-semibold text-neutral-900 mb-6 uppercase tracking-wider">
          Booking Information
        </h3>

        <div className="space-y-6 text-sm text-neutral-600">
          {/* Stay Info */}
          <div>
            <p className="text-xs font-semibold text-neutral-400 uppercase mb-3">
              Stay Details
            </p>

            <ul className="space-y-3">
              <li>
                Check-out time is{" "}
                <span className="font-medium text-neutral-900">10:00 AM</span>.
                Late check-out may be arranged upon request.
              </li>

              <li>
                Full payment is required at{" "}
                <span className="font-medium text-neutral-900">check-in</span>{" "}
                to confirm your stay.
              </li>
            </ul>
          </div>

          {/* Payment Info */}
          <div>
            <p className="text-xs font-semibold text-neutral-400 uppercase mb-3">
              Payment Information
            </p>

            <ul className="space-y-3">
              <li>
                We kindly accept{" "}
                <span className="font-medium text-neutral-900">
                  cashless payments only
                </span>{" "}
                for your convenience and security.
              </li>

              <li className="flex items-center gap-2">
                M-Pesa Till Number:
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 font-medium text-[#BC9F64] hover:underline transition">
                  {tillNumber}
                  <Copy size={14} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modern Toast */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-white border border-green-200 shadow-xl px-6 py-4 rounded-2xl animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle size={18} className="text-green-600" />

          <p className="text-sm text-neutral-800 font-medium">
            Till number copied successfully
          </p>
        </div>
      )}
    </>
  );
};

export default TermsAndConditions;
