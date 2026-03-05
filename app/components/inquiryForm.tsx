"use client";

import { useState } from "react";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

interface InquiryFormProps {
  facility: string;
}

interface ContactPayload {
  subject: string;
  contact: {
    firstName: string;
    lastName: string;
    email: string;
  };
  phone: string;
  description?: string;
}

export default function InquiryForm({ facility }: InquiryFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  /**
   * Resets error & success when user starts typing
   */
  const handleFieldChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (error) setError("");
      if (success) setSuccess(false);
      setter(e.target.value);
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    const payload: ContactPayload = {
      subject: `${facility} Inquiry - ${firstName} ${lastName}`,
      contact: { firstName, lastName, email },
      phone,
      description: description || undefined,
    };

    try {
      const res = await fetch(`${SERVER_URL}/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setSuccess(true);

      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDescription("");
    } catch (err) {
      setError(
        "We regret the inconvenience. We’re currently unable to submit your inquiry. Kindly try again in a few moments or contact us directly for immediate assistance.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6"
      aria-live="polite">
      <h2 className="text-2xl font-semibold text-[#BC9F64] text-center">
        Send an Inquiry for {facility}
      </h2>

      {/* Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={handleFieldChange(setFirstName)}
            required
            placeholder="John"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#BC9F64] transition text-gray-900 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={handleFieldChange(setLastName)}
            required
            placeholder="Doe"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#BC9F64] transition text-gray-900 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={handleFieldChange(setEmail)}
          required
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#BC9F64] transition text-gray-900 placeholder-gray-400"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          value={phone}
          onChange={handleFieldChange(setPhone)}
          required
          placeholder="+254700000000"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#BC9F64] transition text-gray-900 placeholder-gray-400"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message (Optional)
        </label>
        <textarea
          value={description}
          onChange={handleFieldChange(setDescription)}
          rows={4}
          placeholder="Any specific requirements?"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#BC9F64] transition text-gray-900 placeholder-gray-400 resize-none"
        />
      </div>

      {/* Feedback */}
      <div className="min-h-6">
        {success && (
          <p className="text-green-700 bg-green-50 border border-green-100 px-4 py-2 rounded-lg text-sm">
            Your inquiry has been received. Our team will contact you shortly.
          </p>
        )}

        {error && (
          <p className="text-rose-700 bg-rose-50 border border-rose-100 px-4 py-2 rounded-lg text-sm">
            {error}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-full bg-[#BC9F64] text-white font-medium text-sm transition hover:opacity-90 disabled:opacity-50">
        {loading ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
