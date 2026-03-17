"use client";

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-50 w-full">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Work With Us
            </h1>
            <p className="text-lg max-w-2xl">
              Join the team at Visum Park Hotel and be part of a hospitality
              experience dedicated to excellence, service, and guest
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Closed Notice */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Applications Closed
          </h2>
          <p className="text-lg mb-2">
            Thank you for your interest in joining Visum Park Hotel.
          </p>
          <p className="text-gray-700">
            We are no longer accepting applications at this time. Please check
            back later for future opportunities.
          </p>
        </div>
      </section>

      {/* Previous Openings (Optional: keep or remove) */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center mb-14">
          <h2 className="text-2xl font-semibold text-gray-400 mb-4">
            Recently Closed Positions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The following positions were recently open and are now closed.
          </p>
        </div>

        {/* Receptionist */}
        <div className="mb-12 opacity-70">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Hotel Receptionist
          </h3>
          <p className="text-sm text-gray-500">
            Applications for this position are now closed.
          </p>
        </div>

        {/* Cook */}
        <div className="mb-12 opacity-70">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Kitchen Cook
          </h3>
          <p className="text-sm text-gray-500">
            Applications for this position are now closed.
          </p>
        </div>
      </section>

      {/* Footer Note */}
      <section className="text-center pb-16 px-6">
        <p className="text-gray-500">
          For inquiries, feel free to contact us at{" "}
          <span className="font-medium">visumparkhotel@yahoo.com</span>
        </p>
      </section>
    </div>
  );
}
