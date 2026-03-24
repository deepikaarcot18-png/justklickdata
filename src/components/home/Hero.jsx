import { useEffect, useState } from "react";

const slides = [
  {
    tag: "BACK TO SCHOOL",
    title: "Special 50% Off",
    subtitle: "for our student community",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    tag: "LIMITED OFFER",
    title: "Buy 1 Get 1 Free",
    subtitle: "this weekend only",
    desc: "Grab amazing books at best prices.",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    tag: "NEW ARRIVALS",
    title: "Explore New Books",
    subtitle: "latest collections",
    desc: "Stay ahead with trending reads.",
    img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  },
  {
    tag: "TOP PICKS",
    title: "Editor's Choice",
    subtitle: "handpicked books",
    desc: "Carefully curated for you.",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    tag: "BEST SELLERS",
    title: "Trending Now",
    subtitle: "most loved books",
    desc: "Popular among readers.",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // AUTO CHANGE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full rounded-3xl relative overflow-hidden flex flex-col justify-center">
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
          ${current === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          
          {/* BACKGROUND IMAGE (PARALLAX + ZOOM) */}
          <img
            src={slide.img}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[4000ms] ease-out
            ${
              current === index
                ? "scale-110 translate-x-0"
                : "scale-100 translate-x-4"
            }`}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

          {/* CONTENT */}
          <div className="relative px-12 py-10 h-full flex flex-col justify-center text-white">
            
            <div className="max-w-lg space-y-4">
              
              <p
                className={`tracking-[4px] text-sm text-green-300 transition-all duration-700
                ${current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                {slide.tag}
              </p>

              <h1
                className={`text-[52px] font-semibold leading-tight transition-all duration-700 delay-100
                ${current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                {slide.title}
              </h1>

              <p
                className={`text-[20px] text-gray-200 transition-all duration-700 delay-200
                ${current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                {slide.subtitle}
              </p>

              <p
                className={`text-gray-300 text-sm leading-relaxed transition-all duration-700 delay-300
                ${current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                {slide.desc}
              </p>

              {/* BUTTONS */}
              <div
                className={`mt-6 flex items-center gap-4 transition-all duration-700 delay-500
                ${current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <button className="bg-[#16a34a] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#15803d] transition">
                  Get the deal →
                </button>

                <button className="border border-white/40 px-6 py-3 rounded-xl text-white hover:bg-white/10 transition">
                  See other promos
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* DOTS */}
      <div className="absolute bottom-8 left-12 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300
              ${
                current === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
          />
        ))}
      </div>
    </div>
  );
}