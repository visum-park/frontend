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
    // { name: "Accommodation", path: "/accommodation" },
    { name: "Restaurant", path: "/restaurant" },
    // { name: "Team Building", path: "/team-building" },
    // { name: "Kid's Playground", path: "/kids-playground" },
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

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname.includes(item.path);

              return (
                <motion.a
                  key={item.name}
                  href={item.path}
                  className={`relative px-3 py-2 font-medium transition-colors ${
                    isActive
                      ? "text-[#BC9F64]"
                      : "text-gray-700 hover:text-[#BC9F64]"
                  }`}>
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-1 bg-[#BC9F64] rounded"
                    />
                  )}
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg border-t">
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navItems.map((item) => {
                const isActive = pathname.includes(item.path);

                return (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={`font-medium ${
                      isActive
                        ? "text-[#BC9F64]"
                        : "text-gray-700 hover:text-[#BC9F64]"
                    }`}>
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
