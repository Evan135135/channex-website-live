import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Seo
        title="Channel Manager API for PMS | Channex"
        description="Connect your PMS to 50+ OTAs via Channex's white-label channel manager API."
        canonical="/"
      />
      <Header />
      <Hero />
      <Partners />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
