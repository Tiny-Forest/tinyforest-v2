import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/content";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all"
        asChild
      >
        <a 
          href={siteConfig.site.whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
        >
          whatsapp us
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
