"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import InquiryForm from "./inquiryForm";

export default function SendInquiryModalExample({
  facility
}: {
  facility: string;
}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="my-4 flex justify-center">
      {/* Trigger Button */}
      <button
        onClick={() => setShowForm(true)}
        className="mt-6 px-6 py-3 cursor-pointer rounded-full bg-[#BC9F64] text-white font-medium text-sm uppercase tracking-wide transition hover:opacity-90">
        Send Inquiry
      </button>

      {/* Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 relative">
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 cursor-pointer right-4 text-gray-500 hover:text-gray-700">
                ✕
              </button>

              {/* Form */}
              <InquiryForm facility={facility} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
