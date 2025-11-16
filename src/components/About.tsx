import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/content";

const About = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
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
