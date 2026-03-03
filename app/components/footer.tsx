"use client";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer
      className="py-8 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #2D4B37 0%, #1e3224 100%)",
      }}>
      {/* Decorative gradient accents */}
      <div
        className="absolute top-0 left-0 w-96 h-96 opacity-5"
        style={{
          background:
            "radial-gradient(circle at top left, #BC9F64 0%, transparent 70%)",
        }}></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-5"
        style={{
          background:
            "radial-gradient(circle at bottom right, #BC9F64 0%, transparent 70%)",
        }}></div>

      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="text-4xl mb-12 text-center relative inline-block w-full"
          style={{
            color: "#BC9F64",
            fontWeight: 600,
            textShadow: "0 2px 10px rgba(188, 159, 100, 0.3)",
          }}>
          Contact Us
          <div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 rounded-full"
            style={{ backgroundColor: "#BC9F64" }}></div>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 mb-4">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ amount: 0.3 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative"
              style={{
                background: "linear-gradient(135deg, #BC9F64 0%, #a68a54 100%)",
                boxShadow: "0 8px 20px rgba(188, 159, 100, 0.3)",
              }}>
              <MapPin className="w-8 h-8" style={{ color: "#2D4B37" }} />
            </div>
            <h3 className="text-xl mb-2 text-[#BC9F64] font-semibold">
              Location
            </h3>
            <a
              className="text-white font-semibold hover:underline"
              target="_blank"
              href="https://www.google.com/maps/dir//Visum+Park+Hotel,+Machakos/@-1.4893478,37.2543937,8701m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x182f8733e540f495:0x1287ab73b1f294bf!2m2!1d37.2153151!2d-1.5237605?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D">
              Machakos Town
              <br />
              Machakos County, Kenya
              <br />
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{
                background: "linear-gradient(135deg, #BC9F64 0%, #a68a54 100%)",
                boxShadow: "0 8px 20px rgba(188, 159, 100, 0.3)",
              }}>
              <Phone className="w-8 h-8" style={{ color: "#2D4B37" }} />
            </div>
            <h3
              className="text-xl mb-2"
              style={{ color: "#BC9F64", fontWeight: 600 }}>
              Phone
            </h3>
            <p className="text-white">
              +254 727 737 733
              <br />
              +254 740 926 266
              <br />
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ amount: 0.3 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col items-center text-center rounded-2xl p-6 transition">
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #BC9F64 0%, #a68a54 100%)",
                boxShadow: "0 8px 20px rgba(188, 159, 100, 0.3)",
              }}>
              <Mail className="w-8 h-8" style={{ color: "#2D4B37" }} />
            </div>

            {/* Title */}
            <h3
              className="text-xl mb-2"
              style={{ color: "#BC9F64", fontWeight: 600 }}>
              Email
            </h3>

            {/* Clickable area */}
            <a
              href="mailto:visumparkhotel@yahoo.com"
              className="flex flex-col items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#BC9F64]/50 rounded-md">
              <p className="text-white text-lg">visumparkhotel@yahoo.com</p>

              <span
                className="text-sm p-2 font-medium flex items-center gap-1 transition-transform group-hover:translate-x-1"
                style={{ color: "#BC9F64" }}>
                Email us →
              </span>
            </a>
          </motion.div>
        </div>
        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ amount: 0.3 }}
          className="flex flex-col items-center mb-12">
          <h3
            className="text-xl mb-2"
            style={{ color: "#BC9F64", fontWeight: 600 }}>
            Follow Us
          </h3>

          <div className="flex gap-6">
            {[
              {
                Icon: Facebook,
                href: "https://web.facebook.com/p/Visum-Park-Hotel-100064349162240/?_rdc=1&_rdr#",
                label: "Facebook",
              },
              {
                Icon: Instagram,
                href: "https://www.instagram.com/visumparkhotel?fbclid=IwY2xjawP6r11leHRuA2FlbQIxMABicmlkETJRUldCTFVsY1d4Y0d6b29Bc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHoCtB__gzwrSuGVRumnJzH4Dbm7PDM3GhOL2WeXhregDYpn_pU-4FEvdETZC_aem_KWLoNNE_82tRZoXb12izLA",
                label: "Instagram",
              },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #BC9F64 0%, #a68a54 100%)",
                  boxShadow: "0 6px 18px rgba(188, 159, 100, 0.3)",
                }}
                aria-label={label}>
                <Icon className="w-6 h-6" style={{ color: "#2D4B37" }} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ amount: 0.3 }}
          className="pt-8 border-t text-center"
          style={{
            borderColor: "#BC9F64",
            borderImage:
              "linear-gradient(90deg, transparent 0%, #BC9F64 50%, transparent 100%) 1",
          }}>
          <p className="text-white">
            &copy; 2026 Visum Park Hotels. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
