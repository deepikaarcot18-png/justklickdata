
import { useState } from "react";

export default function NewsletterBanner() {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) {
      alert("Please enter email or phone number");
      return;
    }

    // simple check (email OR number)
    const isEmail = value.includes("@");
    const isPhone = /^[0-9]{10}$/.test(value);

    if (!isEmail && !isPhone) {
      alert("Enter valid email or 10-digit number");
      return;
    }

    alert("Subscribed successfully!");
    setValue("");
  };

  return (
    <section className="w-full px-4 sm:px-6 py-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="rounded-[22px] bg-green-100 px-6 py-10 sm:px-10 shadow-[0_10px_25px_rgba(0,0,0,0.06)]">

          <div className="text-center max-w-[600px] mx-auto">
            <h2 className="text-[#1f2937] text-[22px] sm:text-[28px] font-semibold">
              Subscribe for latest updates
            </h2>

            <p className="text-gray-600 text-sm mt-2">
              Real Estate • Hotels • Restaurants • Hospitals • Education
            </p>

            {/* Single Input */}
            <div className="mt-6 flex overflow-hidden rounded-lg border border-gray-200">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter email or phone number"
                className="h-[46px] flex-1 px-4 bg-white text-gray-700 placeholder:text-gray-400 text-sm outline-none"
              />

              <button
                onClick={handleSubmit}
                className="h-[46px] px-6 bg-green-400 text-white text-sm font-semibold hover:bg-green-500 transition"
              >
                Subscribe
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}