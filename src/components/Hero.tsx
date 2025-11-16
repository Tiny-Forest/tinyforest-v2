import { useState } from "react";
import { Button } from "@/components/ui/button";
import BrochureDialog from "./BrochureDialog";
import { siteConfig } from "@/config/content";

const Hero = () => {
  const [showBrochureDialog, setShowBrochureDialog] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-12">
          <p className="text-muted-foreground flex items-center justify-center gap-2 text-lg">
            {siteConfig.hero.tagline}<span className="text-2xl">{siteConfig.hero.emoji}</span>
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            {siteConfig.hero.headline}
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
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
        
        <div className="w-full max-w-6xl mx-auto">
          <img 
            src={siteConfig.hero.videoUrl}
            alt="Tree-lined pathway in Tiny Forest"
            className="w-full h-auto rounded-3xl shadow-2xl"
          />
        </div>
      </section>
      
      <BrochureDialog open={showBrochureDialog} onOpenChange={setShowBrochureDialog} />
    </>
  );
};

export default Hero;
