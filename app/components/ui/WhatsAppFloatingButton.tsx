"use client";

import { MessageCircle } from "lucide-react";
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;

export function WhatsAppFloatingButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_PHONE}?text=Hello%20I%20would%20like%20to%20inquire`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-green-500 text-white
        shadow-lg
        hover:bg-green-600
        transition-transform hover:scale-110
      "
      aria-label="Chat on WhatsApp">
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
