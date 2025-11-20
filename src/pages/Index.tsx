import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SoilPreparation from "@/components/SoilPreparation";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-0 sm:pt-1">
        <Hero />
        <About />
        <Projects />
        <SoilPreparation />
        <Testimonials />
        <Contact />
      </main>
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
