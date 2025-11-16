import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4 bg-secondary">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">{siteConfig.about.label}</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          {siteConfig.about.title}
        </h2>
        
        <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-4xl">
          {siteConfig.about.description}
        </p>
        
        <p className="text-foreground/70 mb-6">{siteConfig.about.callToAction}</p>
        
        <Button 
          variant="outline" 
          size="lg"
          className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          asChild
        >
          <a 
            href={siteConfig.site.youtubeChannel}
            target="_blank" 
            rel="noopener noreferrer"
          >
            {siteConfig.about.buttonText}
          </a>
        </Button>
      </div>
    </section>
  );
};

export default About;
