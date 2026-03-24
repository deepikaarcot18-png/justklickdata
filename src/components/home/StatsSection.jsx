
import {
  Building2,
  Hotel,
  UtensilsCrossed,
  Hospital,
  GraduationCap,
} from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: (
        <div className="p-4 rounded-full bg-blue-100">
          <Building2 className="w-8 h-8 text-blue-400" />
        </div>
      ),
      value: "12,500+",
      label: "Real Estate Listings",
    },
    {
      icon: (
        <div className="p-4 rounded-full bg-pink-100">
          <Hotel className="w-8 h-8 text-pink-400" />
        </div>
      ),
      value: "850+",
      label: "Hotels Available",
    },
    {
      icon: (
        <div className="p-4 rounded-full bg-orange-100">
          <UtensilsCrossed className="w-8 h-8 text-orange-400" />
        </div>
      ),
      value: "2,400+",
      label: "Restaurants Added",
    },
    {
      icon: (
        <div className="p-4 rounded-full bg-red-100">
          <Hospital className="w-8 h-8 text-red-400" />
        </div>
      ),
      value: "420+",
      label: "Hospitals Connected",
    },
    {
      icon: (
        <div className="p-4 rounded-full bg-purple-100">
          <GraduationCap className="w-8 h-8 text-purple-400" />
        </div>
      ),
      value: "1,250+",
      label: "Institutes Listed",
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">{item.icon}</div>

              {/* Reduced font */}
              <h2 className="text-[24px] md:text-[28px] font-semibold text-[#11183f]">
                {item.value}
              </h2>

              <p className="mt-2 text-[14px] text-gray-500 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}