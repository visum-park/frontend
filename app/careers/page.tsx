"use client";

import Image from "next/image";

export default function CareersPage() {
  const keyResponsibilities = [
    "Lead and manage all kitchen operations.",
    "Develop creative menus and seasonal specials.",
    "Ensure exceptional food quality and presentation.",
    "Supervise, train and mentor kitchen staff.",
    "Manage food costing, inventory and stock control.",
    "Ensure compliance with HACCP, food safety and hygiene standards.",
    "Coordinate conference, banquet and outdoor catering services.",
    "Minimize wastage while maximizing efficiency and profitability.",
  ];

  const qualifications = [
    "Diploma or Higher Diploma in Culinary Arts, Food Production, Hospitality Management or related field.",
    "Professional Chef Certification is an added advantage.",
    "Minimum 5 years' experience in a reputable hotel or restaurant.",
    "At least 2 years' experience in a supervisory or Head Chef position.",
    "Strong leadership, menu planning, food costing and kitchen management skills.",
    "Knowledge of HACCP and food safety standards.",
    "Experience in conference and banqueting operations is an added advantage.",
  ];
  let hasOpenPositions = false

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 w-full bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Work With Us</h1>
          <p className="text-lg max-w-2xl text-gray-200 mx-auto">
            Join the team at Visum Park Hotel and be part of a hospitality
            experience dedicated to excellence, service, and guest satisfaction.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Active Job Section */}
        {hasOpenPositions ? <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-8">
              <div>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-2">
                  Open Position
                </span>
                <h2 className="text-3xl font-bold text-gray-900">Head Chef</h2>
                <p className="text-gray-600 mt-1">Join Our Culinary Team</p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-900 text-center md:text-right">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                  Application Deadline
                </p>
                <p className="text-xl font-bold text-amber-900">11th August 2026</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Text Details */}
              <div className="lg:col-span-7 space-y-8 text-gray-700">
                <p className="text-base leading-relaxed">
                  Visum Park Hotel is seeking an experienced, passionate, and innovative{" "}
                  <strong className="text-gray-900">Head Chef</strong> to lead our kitchen operations and deliver exceptional dining experiences to our guests.
                </p>

                {/* Key Responsibilities */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {keyResponsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Qualifications */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    Minimum Qualifications
                  </h3>
                  <ul className="space-y-2">
                    {qualifications.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How to Apply */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">How to Apply</h3>
                  <p className="text-sm text-gray-600">
                    Interested candidates should send their Application Letter, Detailed CV, and Copies of Relevant Certificates to:
                  </p>
                  <div className="pt-2">
                    <a
                      href="mailto:visumparkhotel@yahoo.com"
                      className="inline-flex items-center text-emerald-700 font-semibold hover:underline"
                    >
                      visumparkhotel@yahoo.com
                    </a>
                  </div>
                  <p className="text-xs text-gray-400 italic pt-2 border-t border-gray-200">
                    * Only shortlisted candidates will be contacted.
                  </p>
                </div>
              </div>

              {/* Poster Image */}
              <div className="lg:col-span-5 flex justify-center items-start">
                <div className="relative w-full rounded-xl overflow-hidden shadow-md border border-gray-200">
                  <Image
                    src="/images/careers/head-chef-hiring.png"
                    alt="Head Chef Hiring Announcement - Visum Park Hotel"
                    width={800}
                    height={1100}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section> : <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-8">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-2">
                  No Open Position
                </span>
            </div>
          </div>}
        

        {/* Recently Closed Positions */}
        <section className="pt-8 border-t border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-gray-500">
              Recently Closed Positions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="p-4 bg-white rounded-lg border border-gray-200 opacity-60">
              <h3 className="font-semibold text-gray-800">Hotel Receptionist</h3>
              <p className="text-xs text-gray-500 mt-1">Applications closed</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 opacity-60">
              <h3 className="font-semibold text-gray-800">Kitchen Cook</h3>
              <p className="text-xs text-gray-500 mt-1">Applications closed</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 opacity-60">
              <h3 className="font-semibold text-gray-800">Head Chef</h3>
              <p className="text-xs text-gray-500 mt-1">Applications closed</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
