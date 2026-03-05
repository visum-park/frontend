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

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-gray-300 mb-4">
            Current Openings
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visum Park Hotel is looking for passionate and dedicated
            professionals to join our growing hospitality team. Explore the
            opportunities below and apply today.
          </p>
        </div>

        {/* Receptionist */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-green-800">
            Hotel Receptionist
          </h3>

          <h4 className="font-semibold mb-3 text-gray-300">
            Key Responsibilities
          </h4>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Welcome and receive guests warmly at the hotel and respond to
              inquiries and phone calls.
            </li>
            <li>
              Inform guests about hotel services, facilities, and accommodation
              rates.
            </li>
            <li>
              Handle guest reservations and update cancellations promptly to
              avoid booking conflicts.
            </li>
            <li>
              Build and maintain good relationships with guests to ensure their
              comfort and satisfaction.
            </li>
            <li>
              Handle complaints professionally to protect the hotel’s image.
            </li>
            <li>
              Maintain accurate records of bookings, payments, and billing
              information.
            </li>
            <li>Ensure the reception area remains clean and well organized.</li>
            <li>
              Attend to all booking channels including online platforms, phone
              calls, and walk-in guests.
            </li>
            <li>
              Report maintenance issues or faulty equipment to management
              immediately.
            </li>
          </ul>

          <h4 className="font-semibold mt-6 mb-3 text-gray-300">
            Qualifications
          </h4>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Diploma in Front Office Management, Hospitality Management, or
              equivalent qualification.
            </li>
            <li>
              At least 3 years experience in a similar position within a busy
              hospitality establishment.
            </li>
            <li>
              Excellent knowledge of customer service and guest relations.
            </li>
            <li>Strong interpersonal and communication skills.</li>
            <li>
              Good command of English; knowledge of additional languages is an
              added advantage.
            </li>
            <li>Highly organized with strong attention to detail.</li>
            <li>
              Ability to multitask efficiently in a fast-paced environment.
            </li>
            <li>
              Strong problem-solving skills and ability to handle guest issues
              professionally.
            </li>
          </ul>
        </div>

        {/* Cook */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-green-800">
            Kitchen Cook
          </h3>

          <h4 className="font-semibold mb-3 text-gray-300">
            Duties and Responsibilities
          </h4>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Prepare and cook menu items according to approved recipes and
              hotel standards.
            </li>
            <li>
              Ensure freshness and proper storage of all ingredients used in
              food preparation.
            </li>
            <li>
              Maintain cleanliness and sanitation in kitchen areas in line with
              food safety regulations.
            </li>
            <li>
              Monitor food inventory levels and notify management when
              replenishment is required.
            </li>
            <li>
              Work closely with other kitchen staff to ensure timely service.
            </li>
            <li>
              Follow proper food handling, hygiene, and safety procedures.
            </li>
            <li>
              Modify recipes to accommodate dietary restrictions when needed.
            </li>
            <li>Plate dishes attractively to enhance guest satisfaction.</li>
            <li>Assist in menu planning and development of new recipes.</li>
            <li>Train and guide junior kitchen staff where necessary.</li>
            <li>Monitor food usage and minimize waste.</li>
            <li>Oversee kitchen operations during assigned shifts.</li>
            <li>
              Communicate effectively with front-of-house staff and management.
            </li>
            <li>
              Follow portion control guidelines to maintain cost efficiency.
            </li>
            <li>Ensure proper use and maintenance of kitchen equipment.</li>
          </ul>

          <h4 className="font-semibold mt-6 mb-3 text-gray-300">
            Requirements
          </h4>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Diploma or Certificate in Food Production, Culinary Arts, or a
              related field.
            </li>
            <li>
              Proven experience as a cook, particularly with grill preparation
              and grilled dishes.
            </li>
            <li>
              Good knowledge of cooking techniques and culinary practices.
            </li>
            <li>
              Strong understanding of food safety, hygiene, and sanitation
              standards.
            </li>
            <li>
              Ability to work effectively in a fast-paced kitchen environment.
            </li>
            <li>
              Strong attention to detail and creativity in food preparation.
            </li>
            <li>Good teamwork and communication skills.</li>
            <li>Ability to multitask and prioritize duties efficiently.</li>
            <li>
              Flexibility to work evenings, weekends, and public holidays.
            </li>
            <li>Strong time management and discipline.</li>
          </ul>
        </div>

        {/* Apply Section */}
        <div className="bg-green-900 text-white rounded-xl p-10 text-center">
          <h3 className="text-2xl font-semibold mb-4">How to Apply</h3>

          <p className="mb-4">
            Interested candidates are invited to send their applications to:
          </p>

          <p className="text-xl font-semibold mb-2">visumparkhotel@yahoo.com</p>

          <p>Deadline: 14th March 2026</p>
        </div>
      </section>
    </div>
  );
}
