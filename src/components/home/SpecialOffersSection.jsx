import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const offers = [
  {
    id: 1,
    title: "Premium Villas",
    category: "Real Estate",
    tags: ["PROPERTY", "SALES", "HOMES"],
    description:
      "Explore premium villas, modern apartments, and trusted property deals in prime locations for families and investors.",
    provider: "Urban Nest Realty",
    price: "18,999",
    oldPrice: "24,999",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    path: "/real-estate",
    highlighted: false,
  },
  {
    id: 2,
    title: "Fine Dining Deals",
    category: "Restaurants",
    tags: ["FOOD", "DINING", "OFFERS"],
    description:
      "Discover top restaurants, family dining spots, and exclusive meal packages with quality service and ambiance.",
    provider: "Royal Table",
    price: "999",
    oldPrice: "1,499",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    path: "/restaurants",
    highlighted: true,
  },
  {
    id: 3,
    title: "Health Check Packages",
    category: "Hospitals / Clinics",
    tags: ["HEALTHCARE", "CARE", "CHECKUP"],
    description:
      "Get access to reliable hospitals and clinics offering health checkups, consultations, and quality treatment services.",
    provider: "City Care Hospital",
    price: "2,499",
    oldPrice: "3,299",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80",
    path: "/hospitals-clinics",
    highlighted: false,
  },
  {
    id: 4,
    title: "Luxury Stay Rooms",
    category: "Hotels / Lodges",
    tags: ["STAY", "ROOMS", "COMFORT"],
    description:
      "Book elegant rooms, comfortable lodges, and weekend stay offers with modern facilities and great hospitality.",
    provider: "Grand Horizon Stay",
    price: "3,999",
    oldPrice: "5,200",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    path: "/hotels-lodges",
    highlighted: false,
  },
  {
    id: 5,
    title: "Skill Learning Programs",
    category: "Education Institutes",
    tags: ["LEARNING", "COURSES", "STUDY"],
    description:
      "Find leading institutes and professional learning programs designed to support students and career growth.",
    provider: "Bright Future Academy",
    price: "4,499",
    oldPrice: "6,000",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    path: "/education-institutes",
    highlighted: false,
  },
  {
    id: 6,
    title: "Modern Design Plans",
    category: "Architects",
    tags: ["DESIGN", "PLANS", "INTERIORS"],
    description:
      "Connect with experienced architects and interior designers for stylish layouts, smart spaces, and premium concepts.",
    provider: "Space Craft Studio",
    price: "7,999",
    oldPrice: "10,500",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    path: "/architects-interior-designers",
    highlighted: false,
  },
];

function SpecialOffersSection() {
//   const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const maxStartIndex = offers.length - visibleCount;
  const visibleOffers = offers.slice(startIndex, startIndex + visibleCount);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < maxStartIndex) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
        <section className=" px-6 py-12">
          <div className="mx-auto max-w-[1120px]">
        <div className="mb-10 text-center">
          <h2 className="text-[32px] font-semibold text-[#151d3b]">
            Special Offers
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[13px] leading-6 text-slate-500">
            Discover curated offers across our featured categories with trusted
            services, exclusive pricing, and quality experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleOffers.map((offer) => (
            <div
              key={offer.id}
            //   onClick={() => navigate(offer.path)}
              className={`w-full max-w-[300px] cursor-pointer overflow-hidden rounded-[12px] border border-[#ececec] bg-white transition-all duration-300 hover:-translate-y-1 ${
                offer.highlighted
                  ? "shadow-[0_14px_30px_rgba(76,111,255,0.12)]"
                  : "shadow-sm hover:shadow-md"
              }`}
            >
              <div className="h-[150px] w-full overflow-hidden bg-[#d8d8d8]">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="px-4 pb-4 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#31b44b]">
                  {offer.category}
                </p>

                <h3 className="mt-2 text-[17px] font-semibold text-[#18213c]">
                  {offer.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {offer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#e8f7ea] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#31b44b]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-3 text-[11px] leading-5 text-slate-500">
                  {offer.description}
                </p>

                <p className="mt-3 text-[11px] font-semibold text-[#18213c]">
                  {offer.provider}
                </p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    //   navigate(offer.path);
                    }}
                    className="inline-flex h-[36px] items-center justify-center gap-2 rounded-[8px] bg-[#31b44b] px-4 text-[11px] font-semibold text-white transition hover:bg-[#26953b]"
                  >
                    <span className="text-[12px]">↗</span>
                    View offer
                  </button>

                  <div className="flex items-end gap-2">
                    <span className="text-[18px] font-semibold text-[#18213c]">
                      ₹ {offer.price}
                    </span>
                    <span className="pb-[2px] text-[11px] text-slate-400 line-through">
                      ₹ {offer.oldPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-base transition ${
              startIndex === 0
                ? "cursor-not-allowed border-[#e6e6e6] bg-white text-slate-300"
                : "border-[#d8eddc] bg-white text-[#31b44b] hover:bg-[#f0fbf2]"
            }`}
            aria-label="Previous offers"
          >
            ←
          </button>

          <button
            onClick={handleNext}
            disabled={startIndex === maxStartIndex}
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-base transition ${
              startIndex === maxStartIndex
                ? "cursor-not-allowed border-[#e6e6e6] bg-white text-slate-300"
                : "border-[#d8eddc] bg-[#e8f7ea] text-[#31b44b] hover:bg-[#dcf3e1]"
            }`}
            aria-label="Next offers"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffersSection;