import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { usePurchaseModal } from "@/components/PurchaseModal";
import { createContext, useContext } from "react";

type PurchaseCtx = { openModal: () => void };
export const PurchaseContext = createContext<PurchaseCtx>({ openModal: () => {} });
export const usePurchase = () => useContext(PurchaseContext);

const Index = () => {
  const { openModal, PurchaseModal } = usePurchaseModal();

  return (
    <PurchaseContext.Provider value={{ openModal }}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <ReviewsSection />
        <CTASection />
        <Footer />
        <PurchaseModal />
      </div>
    </PurchaseContext.Provider>
  );
};

export default Index;
