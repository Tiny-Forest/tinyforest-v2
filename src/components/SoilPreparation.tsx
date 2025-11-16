import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Deep Ploughing",
    description: "Done every 3 months to keep soil soft, aerated, and thriving with microbes."
  },
  {
    title: "Cow Dung Enrichment",
    description: "150 tons of native cow dung slurry boosts soil fertility and root health."
  },
  {
    title: "Organic Manures",
    description: "Each pit receives goat manure and vermicompost for balanced nutrition."
  },
  {
    title: "Green-Manure Cycle",
    description: "Millets and green-manure crops grown every 6 months naturally regenerate soil."
  },
  {
    title: "Biofertilizers",
    description: "Panchagavya, Meen Amilam, EM, Azospirillum, and Phosphobacteria enrich soil biology."
  },
  {
    title: "Organic Soil Building",
    description: "All practices together create fertile, chemical-free, living soil."
  }
];

const SoilPreparation = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground text-sm uppercase tracking-wider">Soil Preparation</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Heartbeat of Tiny Forest
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Through careful ploughing, biofertilizers, and organic enrichment, we transform barren ground into living, fertile soil that sustains both people and planet.
          </p>
        </div>
        
        <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-xl mb-12">
          <img 
            src="https://i.ytimg.com/vi_webp/8KShgqofAJI/maxresdefault.webp"
            alt="Soil preparation process"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-lg text-foreground/80 pt-8">
          And we have done much more, all with love ❤️
        </p>
        
        <p className="text-center text-2xl font-semibold text-primary">
          35+ Handpicked Trees
        </p>
      </div>
    </section>
  );
};

export default SoilPreparation;
