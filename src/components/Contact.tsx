import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Get in Touch
        </h2>
        
        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
          Ready to embrace a sustainable lifestyle at Tiny Forest? Contact us today to learn more about our projects.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <a href="tel:6237891489" className="text-lg hover:underline">
              +91 6237891489
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6" />
            <span className="text-lg">Panjapur & Archampatti, Tamil Nadu</span>
          </div>
        </div>
        
        <div className="pt-8">
          <Button 
            size="lg" 
            variant="secondary"
            className="rounded-full px-8 py-6 text-lg bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <a href="https://wa.me/916237891489" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
