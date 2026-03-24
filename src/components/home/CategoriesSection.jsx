import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Real Estate",
    subtitle: "PROPERTY, SALES",
    path: "/real-estate",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Restaurants",
    subtitle: "FOOD, DINING",
    path: "/restaurants",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hospitals / Clinics",
    subtitle: "HEALTHCARE",
    path: "/hospitals-clinics",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hotels / Lodges",
    subtitle: "STAY, ROOMS",
    path: "/hotels-lodges",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Education Institutes",
    subtitle: "LEARNING, COURSES",
    path: "/education-institutes",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Architects",
    subtitle: "PLANS, DESIGN",
    path: "/architects",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
];

function CategoriesPage() {
//   const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const visibleCount = 5;
  const maxStartIndex = categories.length - visibleCount;
  const visibleCategories = categories.slice(
    startIndex,
    startIndex + visibleCount
  );

  const handleNext = () => {
    if (startIndex < maxStartIndex) {
      setStartIndex((prev) => prev + 1);
      setHoveredIndex(null);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
      setHoveredIndex(null);
    }
  };

  return (
    <section className="overflow-x-hidden py-16">
        <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-10 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">            
          Categories
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-[17px] font-light leading-8 text-slate-600">
            Discover trusted services across key categories, thoughtfully organized to help you find the right solutions quickly and efficiently.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
                    <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl transition ${
              startIndex === 0
                ? "cursor-not-allowed bg-gray-200 text-gray-400"
                : "bg-white text-[#121935] shadow-sm hover:bg-gray-50"
            }`}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="w-full max-w-[1200px] overflow-hidden pt-2">
          <div className="grid grid-cols-5 items-start justify-items-center gap-x-1 gap-y-3">                                   {visibleCategories.map((item, index) => {
                const isHovered = hoveredIndex === index;
                const isAnyHovered = hoveredIndex !== null;

                return (
                  <div
                    key={item.path}
                    // onClick={() => navigate(item.path)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`flex w-[145px] cursor-pointer flex-col items-center text-center transition-all duration-500 ease-out ${
                      isHovered
                        ? "z-10 scale-[1.08] opacity-100"
                        : isAnyHovered
                        ? "scale-[0.9] opacity-70"
                        : "scale-100 opacity-100"
                    }`}
                  >
                    <div className="w-[145px] rounded-[24px]">
                      <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                        <div className="h-[230px] w-[145px] overflow-hidden rounded-[24px]">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full rounded-[24px] object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <h3 className="mt-4 flex h-[48px] items-center justify-center text-[14px] font-medium uppercase leading-6 text-[#121935]">
                      {item.title}
                    </h3>

                    <p className="mt-1 h-[20px] text-[9px] font-light uppercase tracking-[0.18em] text-[#2eb24c]">
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex === maxStartIndex}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl transition ${
              startIndex === maxStartIndex
                ? "cursor-not-allowed bg-gray-200 text-gray-400"
                : "bg-white text-[#121935] shadow-sm hover:bg-gray-50"
            }`}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default CategoriesPage;
