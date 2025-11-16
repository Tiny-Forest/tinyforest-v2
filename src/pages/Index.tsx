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
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <SoilPreparation />
        <Testimonials />
        <Contact />
      </main>
      
      <footer className="bg-secondary py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Tiny Forest. All rights reserved.
          </p>
        </div>
      </footer>
      
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
