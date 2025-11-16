import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">About Us</p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Tiny Forest is a meticulously planned eco-community
        </h2>
        
        <p className="text-lg text-foreground/80 leading-relaxed mb-8 max-w-4xl">
          Nestled near Panjapur and Archampatti, Tiny Forest is more than a project — it's a way of life rooted in sustainability, health, and harmony with nature. Spread across 7 acres with 27 lands in Panjapur and 6 acres with 20 lands in Archampatti, it offers a rare chance to build your farmhouse or regenerative retreat and embrace a disease-free, chemical-free lifestyle on pure, living soil.
        </p>
        
        <p className="text-foreground/70 mb-6">Learn more about us on our channel.</p>
        
        <Button 
          variant="outline" 
          size="lg"
          className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          asChild
        >
          <a 
            href="https://www.youtube.com/@TinyForestGardens" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Youtube
          </a>
        </Button>
      </div>
    </section>
  );
};

export default About;
