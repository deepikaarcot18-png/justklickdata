import { useState, useRef, useEffect } from "react";
import { Search, LayoutGrid, ChevronDown, User2 } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-[1300px] mx-auto px-1 flex items-center h-[72px]">
        
        {/* LEFT LOGO */}
        <div className="flex items-center gap-4">
          <div className="bg-[#c3f1d5] p-3 rounded-2xl">
            <span className="text-green-600 text-lg">📘</span>
          </div>

          <div>
            <h1 className="font-semibold text-[18px] text-gray-900 leading-none">
              Logo
            </h1>
            <p className="text-[12px] text-gray-400 mt-1">
              Book Store Website
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex-1 flex items-center ml-12">
          <div className="flex items-center w-full h-[48px] bg-[#fbfdfb] border border-gray-200 rounded-2xl overflow-visible shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] focus-within:ring-2 focus-within:ring-green-200 transition">
            
            {/* DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-5 h-[48px] text-green-600 border-r border-gray-200"
              >
                <LayoutGrid size={17} strokeWidth={1.6} />
                <span className="text-sm font-medium text-gray-700">
                  Menus
                </span>
                <ChevronDown
                  size={14}
                  className={`text-gray-400 transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN MENU */}
              <div
                className={`absolute left-0 mt-2 w-[200px] bg-white border border-gray-100 rounded-xl shadow-lg p-2 z-50 transform transition-all duration-200 origin-top
                ${
                  open
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <p className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                  📚 All Books
                </p>
                <p className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                  🗂 Categories
                </p>
                <p className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                  ✍️ Authors
                </p>
              </div>
            </div>

            {/* INPUT */}
            <input
              className="flex-1 px-5 h-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
              placeholder="Search over 30 million book titles"
            />

            {/* SEARCH ICON */}
            <button className="px-5 flex items-center text-gray-400 hover:text-green-600 transition">
              <Search size={18} strokeWidth={1.6} />
            </button>
          </div>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-3 ml-4">
          <button className="px-6 h-[48px] bg-[#c9f5d6] text-green-700 rounded-xl text-sm font-medium border border-green-100 hover:bg-[#e4f4ea] transition">
            Log In
          </button>

          <button className="px-6 h-[48px] bg-green-500 text-white rounded-xl flex items-center gap-2 text-sm font-medium shadow-sm hover:shadow-md hover:bg-green-600 transition">
            <User2 size={16} strokeWidth={1.6} />
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}