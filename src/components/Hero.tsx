import { useState } from "react";
import { Button } from "@/components/ui/button";
import BrochureDialog from "./BrochureDialog";
import { siteConfig } from "@/config/content";

const Hero = () => {
  const [showBrochureDialog, setShowBrochureDialog] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-12 relative z-10">
          <p className="text-muted-foreground flex items-center justify-center gap-2 text-lg animate-fade-in">
            {siteConfig.hero.tagline}<span className="text-2xl">{siteConfig.hero.emoji}</span>
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {siteConfig.hero.headline}
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {siteConfig.hero.ctaButtons.map((button, index) => (
              <Button 
                key={index}
                size="lg" 
                variant={button.variant as "default" | "secondary"}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg"
                asChild={!button.requiresForm}
                onClick={button.requiresForm ? () => setShowBrochureDialog(true) : undefined}
              >
                {button.requiresForm ? (
                  <span>{button.text}</span>
                ) : (
                  <a href={button.href}>{button.text}</a>
                )}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="w-full max-w-6xl mx-auto relative z-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
              poster={siteConfig.hero.fallbackImage}
            >
              <source src={siteConfig.hero.backgroundVideo} type="video/mp4" />
              <img 
                src={siteConfig.hero.fallbackImage}
                alt="Tree-lined pathway in Tiny Forest"
                className="w-full h-auto"
              />
            </video>
          </div>
        </div>
      </section>
      
      <BrochureDialog open={showBrochureDialog} onOpenChange={setShowBrochureDialog} />
    </>
  );
};

export default Hero;
