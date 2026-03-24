import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const books = [
  {
    title: "RealEstate Data",
    category: "ADVENTURE, SCIENCE, COMEDY",
    price: "45.25",
    old: "60.00",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    title: "Dark Psychology",
    category: "THRILLER, MIND",
    price: "39.00",
    old: "55.00",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    title: "Space Journey",
    category: "SCI-FI",
    price: "50.00",
    old: "70.00",
    img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  },
];

export default function BestSeller() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right");
  const [prevIndex, setPrevIndex] = useState(null); // 👈 keep previous

  const prev = () => {
    setDirection("left");
    setPrevIndex(current);
    setCurrent((prev) => (prev - 1 + books.length) % books.length);
  };

  const next = () => {
    setDirection("right");
    setPrevIndex(current);
    setCurrent((prev) => (prev + 1) % books.length);
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setPrevIndex(current);
      setCurrent((prev) => (prev + 1) % books.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  const book = books[current];

  return (
    <div className="h-full w-full rounded-3xl px-6 py-8 flex flex-col items-center justify-between relative overflow-hidden bg-[#8b8b8b]">
      
      <div className="absolute inset-0 rounded-3xl shadow-inner shadow-black/20" />

      {/* TITLE */}
      <div className="text-center z-10">
        <h2 className="text-3xl font-semibold text-white">
          Best Seller
        </h2>
        <p className="text-white/70 text-sm mt-1">
          Based sales this week
        </p>
      </div>

      {/* IMAGE SECTION */}
      <div className="relative w-full flex items-center justify-center mt-6">
        
        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute -left-3 bg-white/20 hover:bg-white/30 backdrop-blur-xl p-3 rounded-full transition shadow-lg z-20"
        >
          <ChevronLeft className="text-white" size={12} />
        </button>

        {/* IMAGE CARD */}
        <div className="w-[220px] h-[320px] relative rounded-2xl overflow-hidden border border-white/40 bg-white/10 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
          
          {/* OLD IMAGE (exit) */}
          {prevIndex !== null && (
            <img
              src={books[prevIndex].img}
              className={`absolute inset-0 w-full h-full object-cover ${
                direction === "right" ? "slide-out-left" : "slide-out-right"
              }`}
            />
          )}

          {/* NEW IMAGE (enter) */}
          <img
            key={book.img}
            src={book.img}
            className={`absolute inset-0 w-full h-full object-cover ${
              direction === "right" ? "slide-in-right" : "slide-in-left"
            }`}
          />
        </div>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute -right-3 bg-white/20 hover:bg-white/30 backdrop-blur-xl p-3 rounded-full transition shadow-lg z-20"
        >
          <ChevronRight className="text-white" size={12} />
        </button>
      </div>

      {/* INFO */}
      <div
        key={book.title}
        className={`text-center mt-5 z-10 ${
          direction === "right" ? "slide-in-right" : "slide-in-left"
        }`}
      >
        <p className="text-white font-semibold text-lg">
          {book.title}
        </p>
        <p className="text-xs text-white/70 mt-1">
          {book.category}
        </p>
      </div>

      {/* PRICE */}
      <div className="bg-white px-6 py-2 rounded-xl flex gap-3 items-center shadow-md mt-4">
        <span className="line-through text-gray-400 text-sm">
          {book.old}
        </span>
        <span className="font-bold text-gray-900">
          RS {book.price}
        </span>
      </div>
    </div>
  );
}