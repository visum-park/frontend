"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Conference Halls", path: "/conference-halls" },
    { name: "Accommodation", path: "/accommodation" },
    { name: "Restaurant", path: "/restaurant" },
    { name: "Team Building", path: "/team-building" },
    { name: "Kid's Playground", path: "/kids-playground" },
    { name: "Work With Us", path: "/careers" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold text-[#BC9F64] hover:opacity-80 transition">
            Visum Park
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const isActive = pathname.includes(item.path);

              return (
                <motion.a
                  key={item.name}
                  href={item.path}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    isActive
                      ? "bg-[#BC9F64] text-white"
                      : "text-gray-700 hover:bg-[#BC9F64] hover:text-white"
                  }`}>
                  {item.name}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
            aria-label="Toggle menu">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t shadow-lg">
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navItems.map((item, index) => {
                const isActive = pathname.includes(item.path);

                return (
                  <motion.a
                    key={item.name}
                    href={item.path}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block w-full text-center px-5 py-3 rounded-xl font-medium transition ${
                      isActive
                        ? "bg-[#BC9F64] text-white"
                        : "bg-gray-50 text-gray-700 hover:bg-[#BC9F64] hover:text-white"
                    }`}>
                    {item.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
