"use client";

import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="bg-[#1e3224] py-8 px-4 md:px-12 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
        {/* Contact Section */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="text-[#BC9F64] font-semibold text-lg">Contact Us</h3>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#BC9F64]" />
            <a
              href="https://www.google.com/maps/dir//Visum+Park+Hotel,+Machakos/"
              target="_blank"
              className="text-white text-sm hover:underline">
              Machakos Town, Machakos County, Kenya
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#BC9F64]" />
            <p className="text-white text-sm">
              +254 727 737 733 / +254 740 926 266
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#BC9F64]" />
            <a
              href="mailto:visumparkhotel@yahoo.com"
              className="text-white text-sm hover:underline">
              visumparkhotel@yahoo.com
            </a>
          </div>
        </div>

        {/* Socials Section */}
        <div className="flex flex-col items-start gap-4 md:items-center">
          <h3 className="text-[#BC9F64] font-semibold text-lg">Follow Us</h3>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: "https://facebook.com/Visum-Park-Hotel" },
              { Icon: Instagram, href: "https://instagram.com/visumparkhotel" },
            ].map(({ Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 flex items-center justify-center bg-[#BC9F64] rounded-full">
                <Icon className="w-4 h-4 text-[#2D4B37]" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Careers Section */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[#BC9F64] font-semibold text-lg">Careers</h3>
          <a
            href={`/careers`}
            className="bg-[#BC9F64] text-[#2D4B37] px-4 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition">
            View Open Positions
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-[#BC9F64] pt-4 text-center">
        <p className="text-white text-sm">
          &copy; 2026 Visum Park Hotels. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
