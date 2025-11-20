import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/content";

// 👇 Add the global type declaration if not already declared in any file
declare global {
  interface Window {
    zaraz?: {
      event: (eventName: string, data?: Record<string, any>) => void;
    };
  }
}

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    // Track the click via Zaraz
    if (typeof window !== "undefined") {
      window.zaraz?.event("whatsapp_click");
      console.log("TinyForest_Brochure_Whatsapp");
    } else {
      console.log("TinyForest_Brochure_Whatsapp-");
    }
  };

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
          onClick={handleWhatsAppClick} // 👈 Add tracking
        >
          whatsapp us
        </a>
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
