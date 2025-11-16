const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Our projects
        </h2>
        
        {/* Panjappur Project */}
        <div className="space-y-8">
          <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oC4T3Y0hp5c"
              title="Panjappur Project"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Panjappur Project Development
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Tiny Forest offers chemical-free food and a naturally stress-free, healthy lifestyle.
              It restores soil, water, and air through organic inputs and native trees. A rich mix of fruit, medicinal, and native plants boosts soil health and biodiversity.
              The ecosystem supports pollinators and delivers year-round natural yield. Spread across 7 acres with 27 lands, it reflects 2.5 years of dedicated soil nurturing for a peaceful, green way of living.
            </p>
          </div>
        </div>
        
        {/* Archampatti Project */}
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Tiny Forest - Archampatti
          </h3>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            Tiny Forest's Archampatti farmland has been renewed into a thriving, self-sustaining ecosystem using native vegetation that restores soil, water, and air quality. It offers fresh, chemical-free fruits, herbs, and vegetables in a serene green setting that supports natural, healthy living. A diverse mix of fruit trees, medicinal plants, and greens enriches the soil, attracts beneficial insects, and ensures year-round harvests. Spread across 6 acres with 20 planned lands, it provides abundant greenery and a peaceful, spacious living environment.
          </p>
          
          <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5-H1UcHXJcw"
              title="Archampatti Project"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
