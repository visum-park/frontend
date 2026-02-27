"use client";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-black font-sans">
      {/* Main Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-32 sm:items-start max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to <span className="text-[#BC9F64]">Visum Park Hotels</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          Experience seamless hotel management and an elegant interface for your
          guests and staff.
        </p>

        {/* Placeholder for CTA buttons or links */}
        <div className="flex gap-4">
          <a
            href="/restaurant"
            className="px-6 py-3 rounded-full bg-[#BC9F64] text-white font-medium hover:bg-[#a68a54] transition-colors">
            Explore Restaurant
          </a>
          <a
            href="/accommodation"
            className="px-6 py-3 rounded-full border border-[#BC9F64] text-[#BC9F64] font-medium hover:bg-[#BC9F64] hover:text-white transition-colors">
            View Rooms
          </a>
        </div>
      </main>
    </div>
  );
}
