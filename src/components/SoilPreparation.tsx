import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/content";

const SoilPreparation = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground text-sm uppercase tracking-wider">{siteConfig.soilPreparation.label}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {siteConfig.soilPreparation.title}
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {siteConfig.soilPreparation.description}
          </p>
        </div>
        
        <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-xl mb-12">
          <img 
            src={siteConfig.soilPreparation.videoThumbnail}
            alt="Soil preparation process"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.soilPreparation.features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-lg text-foreground/80 pt-8">
          {siteConfig.soilPreparation.closingText}
        </p>
        
        <p className="text-center text-2xl font-semibold text-primary">
          {siteConfig.soilPreparation.treesCount}
        </p>
      </div>
    </section>
  );
};

export default SoilPreparation;
