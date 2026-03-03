import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { WhatsAppFloatingButton } from "./components/ui/WhatsAppFloatingButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visum Park Hotel | Exceptional Comfort & Service",
  description:
    "Visum Park Hotel offers exceptional comfort and personalized service in Machakos, Kenya. Enjoy stylish rooms, modern amenities, and a relaxing stay tailored to your needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white">
        {/* font variables applied inside client wrapper */}
        <div className={`${geistSans.variable} ${geistMono.variable}`}>
          <Navbar />
          {children}
          <WhatsAppFloatingButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
