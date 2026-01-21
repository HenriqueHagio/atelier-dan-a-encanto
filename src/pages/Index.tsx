import HeroSection from "@/components/HeroSection";
import ValuesSection from "@/components/ValuesSection";
import ModalitiesSection from "@/components/ModalitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValuesSection />
      <ModalitiesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
