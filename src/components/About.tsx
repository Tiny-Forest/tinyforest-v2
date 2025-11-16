import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="px-4 md:py-24 py-6">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl space-y-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[40px] bg-muted shadow-2xl ring-1 ring-border/60">
            <img
              src={siteConfig.about.image.src}
              alt={siteConfig.about.image.alt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6 text-left">
            <span className="inline-flex w-fit items-center rounded-full border border-border px-5 py-1 text-sm font-medium text-muted-foreground">
              {siteConfig.about.label}
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              {siteConfig.about.title}
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              {siteConfig.about.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
