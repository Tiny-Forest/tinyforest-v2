import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 mb-12">
        <p className="text-muted-foreground flex items-center justify-center gap-2 text-lg">
          A Sustainable Agroforestry lifestyle<span className="text-2xl">🌳</span>
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
          Where every tree tells a Story.
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg"
            asChild
          >
            <a href="tel:6237891489">Contact us</a>
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg"
            asChild
          >
            <a 
              href="https://drive.google.com/uc?export=download&id=1aiuqzG1aC6ePTOumjnuLfVRPQYnht3aK"
              download
            >
              Download Brochure
            </a>
          </Button>
        </div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto">
        <img 
          src="https://framerusercontent.com/images/hSGHgjjtHgHKTWTTiZWLswoV5pk.png?width=1001&height=826"
          alt="Tree-lined pathway in Tiny Forest"
          className="w-full h-auto rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
