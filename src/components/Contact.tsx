import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto text-center space-y-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          {siteConfig.contact.title}
        </h2>
        
        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
          {siteConfig.contact.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <a href={`tel:${siteConfig.site.phone}`} className="text-lg hover:underline">
              {siteConfig.site.phoneFormatted}
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6" />
            <span className="text-lg">{siteConfig.site.locations}</span>
          </div>
        </div>
        
        <div className="pt-8">
          <Button 
            size="lg" 
            variant="secondary"
            className="rounded-full px-8 py-6 text-lg bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <a href={`https://wa.me/${siteConfig.site.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              {siteConfig.contact.whatsappButtonText}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
