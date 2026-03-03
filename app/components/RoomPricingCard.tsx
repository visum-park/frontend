"use client";

import { useState } from "react";
import RoomTerms from "./RoomTerms";

/* ================= TYPES ================= */

type OccupancyType = "single" | "double";
type Currency = "KES" | "USD";

interface ResidentPricing {
  single: { bedOnly: number; bedBreakfast: number };
  double: { bedOnly: number; bedBreakfast: number };
  longStay: { single: number; double: number };
}

interface NonResidentPricing {
  single: { bedBreakfast: number; halfBoard: number; fullBoard: number };
  double: { bedBreakfast: number; halfBoard: number; fullBoard: number };
}

interface Pricing {
  residents: ResidentPricing;
  nonResidents: NonResidentPricing;
}

interface RoomPricingCardProps {
  prices: Pricing;
}

/* ================= FORMATTERS ================= */

const formatKES = (amount: number) =>
  new Intl.NumberFormat("en-KE").format(amount);

const formatUSD = (amount: number) =>
  new Intl.NumberFormat("en-US").format(amount);

/* ================= PRICE ROW ================= */

const PriceRow = ({
  label,
  amount,
  currency,
}: {
  label: string;
  amount: number;
  currency: Currency;
}) => (
  <div className="flex justify-between py-2">
    <span className="text-neutral-600">{label}</span>
    <span className="text-[#BC9F64] font-semibold">
      <span className="text-neutral-500 text-xs mr-1">{currency}</span>
      {currency === "KES" ? formatKES(amount) : formatUSD(amount)}
    </span>
  </div>
);

/* ================= COMPONENT ================= */

export default function RoomPricingCard({ prices }: RoomPricingCardProps) {
  const [type, setType] = useState<"residents" | "nonResidents">("residents");
  const isResident = type === "residents";
  const occupancies: OccupancyType[] = ["single", "double"];

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md border border-neutral-200 px-4 py-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-neutral-900">Room Rates</h2>
        <p className="text-sm text-neutral-500 mt-1">
          Flexible pricing options for your stay
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center my-4">
        <div className="flex bg-neutral-100 rounded-full p-1 text-xs font-medium">
          <button
            onClick={() => setType("residents")}
            className={`px-4 py-1.5 rounded-full transition ${
              isResident
                ? "bg-[#BC9F64] text-white shadow-sm"
                : "text-neutral-600"
            }`}>
            Residents
          </button>
          <button
            onClick={() => setType("nonResidents")}
            className={`px-4 py-1.5 rounded-full transition ${
              !isResident
                ? "bg-[#BC9F64] text-white shadow-sm"
                : "text-neutral-600"
            }`}>
            Non-Residents
          </button>
        </div>
      </div>

      {/* Pricing Content */}
      <div className="space-y-8">
        {occupancies.map((occupancy) => {
          const residentData = prices.residents[occupancy];
          const nonResidentData = prices.nonResidents[occupancy];

          // Explicitly typed arrays for TypeScript
          const residentRows: {
            label: string;
            amount: number;
            currency: Currency;
          }[] = [
            {
              label: "Bed Only",
              amount: residentData.bedOnly,
              currency: "KES",
            },
            {
              label: "Bed + Breakfast",
              amount: residentData.bedBreakfast,
              currency: "KES",
            },
          ];

          const nonResidentRows: {
            label: string;
            amount: number;
            currency: Currency;
          }[] = [
            {
              label: "Bed & Breakfast",
              amount: nonResidentData.bedBreakfast,
              currency: "USD",
            },
            {
              label: "Halfboard",
              amount: nonResidentData.halfBoard,
              currency: "USD",
            },
            {
              label: "Fullboard",
              amount: nonResidentData.fullBoard,
              currency: "USD",
            },
          ];

          return (
            <div key={occupancy}>
              <h3 className="text-base font-semibold capitalize mb-3 text-neutral-800">
                {occupancy} Occupancy
              </h3>

              <div className="divide-y divide-neutral-200 text-sm">
                {isResident
                  ? residentRows.map((row) => (
                      <PriceRow key={row.label} {...row} />
                    ))
                  : nonResidentRows.map((row) => (
                      <PriceRow key={row.label} {...row} />
                    ))}
              </div>
            </div>
          );
        })}

        {/* Long Stay (Residents Only) */}
        {isResident && (
          <div className="border-t border-neutral-200 pt-4">
            <h3 className="text-base font-semibold mb-2 text-neutral-800">
              Long Stay (3+ Nights)
            </h3>
            <div className="divide-y divide-neutral-200 text-sm">
              <PriceRow
                label="Single"
                amount={prices.residents.longStay.single}
                currency="KES"
              />
              <PriceRow
                label="Double"
                amount={prices.residents.longStay.double}
                currency="KES"
              />
            </div>
          </div>
        )}

        {/* CTA */}
        <button className="w-full mt-6 py-3 rounded-full bg-[#BC9F64] text-white text-sm font-semibold hover:opacity-90 transition">
          Send Inquiry
        </button>

        {/* Terms */}
        <RoomTerms />
      </div>
    </div>
  );
}
