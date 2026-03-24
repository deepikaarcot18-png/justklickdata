import Hero from "../components/home/Hero";
import BestSeller from "../components/home/BestSeller";
import Footer from "../components/layout/Footer";
import CategoriesPage from "../components/home/CategoriesSection";
import SpecialOffersSection from "../components/home/SpecialOffersSection";
import FeaturesStrip from "../components/home/FeaturesStrip";
import ProductShowcase from "../components/home/ProductShowcase";
import StatsSection from "../components/home/StatsSection";
import NewsletterBanner from "../components/home/NewsletterBanner";

export default function Home() {
  return (
    <>
   
    <div className="grid grid-cols-[75%_25%] gap-2 h-full">
      
      <div className="h-full">
        <Hero />
      </div>

      <div className="h-full">
        <BestSeller />
      </div>
    </div>
    
    <div>
      <FeaturesStrip />
    </div>
    
    <div>
      <ProductShowcase />
    </div>
    
    <div>
      <CategoriesPage />
    </div>

    <div>
      <SpecialOffersSection />
    </div>

    <div>
      <StatsSection />
    </div>

    <div>
      <NewsletterBanner />
    </div>

<div>
  <Footer />
</div>
   </>
  );
}