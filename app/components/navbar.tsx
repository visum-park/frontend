"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Restaurant", path: "/restaurant" },
    // { name: "Conference Halls", path: "/conference-halls" },
    // { name: "Accommodation", path: "/accommodation" },
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
            className="flex-shrink-0 text-2xl font-bold text-[#BC9F64] hover:opacity-80 transition-opacity">
            Visum Park
          </a>

          {/* Nav Items */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname.includes(item.path);

              return (
                <motion.a
                  key={item.name}
                  href={item.path}
                  className={`relative px-3 py-2 font-medium transition-colors duration-300 ${
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
        </div>
      </div>
    </nav>
  );
}
