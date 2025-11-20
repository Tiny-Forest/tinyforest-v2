import { useState } from "react";
import { Button } from "@/components/ui/button";
import BrochureDialog from "./BrochureDialog";
import { siteConfig } from "@/config/content";

const Hero = () => {
  const [showBrochureDialog, setShowBrochureDialog] = useState(false);

  return (
    <>
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center px-4 py-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-12 relative z-10">
          <div className="text-muted-foreground flex items-center justify-center gap-3 text-lg animate-fade-in">
            <span className="h-3 w-3 bg-forest-green" aria-hidden="true" />
            <span className="md:text-xl text-base">
              {siteConfig.hero.tagline}
            </span>
            <span className="text-2xl" role="img" aria-label="tree">
              {siteConfig.hero.emoji}
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl font-normal text-foreground leading-tight animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {siteConfig.hero.headline}
          </h1>

          <div
            className="mx-auto grid w-full max-w-md grid-cols-2 gap-4 pt-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {siteConfig.hero.ctaButtons.map((button, index) => (
              <Button
                key={index}
                size="lg"
                variant={button.variant as "default" | "secondary"}
                className="w-full rounded-full bg-primary px-6 py-4 md:text-base text-sm text-primary-foreground hover:bg-primary/90"
                asChild={!button.requiresForm}
                onClick={
                  button.requiresForm
                    ? () => setShowBrochureDialog(true)
                    : undefined
                }
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

        {/* <div className="w-full max-w-6xl mx-auto relative z-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
              poster={siteConfig.hero.fallbackImage}
              src={siteConfig.hero.backgroundVideo}
            >
            </video>
          </div>
        </div> */}
        <div
          className="w-full max-w-6xl mx-auto relative z-10 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2DEwPTkcaqE?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=2DEwPTkcaqE&modestbranding=1"
              title="Tiny Forest Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <BrochureDialog
        open={showBrochureDialog}
        onOpenChange={setShowBrochureDialog}
      />
    </>
  );
};

export default Hero;
