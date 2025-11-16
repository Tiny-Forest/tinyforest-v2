import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/content";

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {siteConfig.testimonials.title}
          </h2>
          <p className="text-xl text-muted-foreground">{siteConfig.testimonials.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.testimonials.items.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card border-border space-y-6 hover:shadow-xl transition-shadow">
              <p className="text-foreground/80 leading-relaxed text-lg italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
