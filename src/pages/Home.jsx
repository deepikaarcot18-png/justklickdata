import Hero from "../components/home/Hero";
import BestSeller from "../components/home/BestSeller";

export default function Home() {
  return (
    <div className="grid grid-cols-[75%_25%] gap-2 h-full">
      
      <div className="h-full">
        <Hero />
      </div>

      <div className="h-full">
        <BestSeller />
      </div>

    </div>
  );
}