import { siteConfig } from "@/config/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SoilPreparation = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="px-4 py-0">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl space-y-12 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="mx-auto inline-flex items-center rounded-full bg-forest-green/10 px-6 py-2 text-base font-semibold text-forest-green">
          {siteConfig.soilPreparation.label}
        </span>

        <div className="space-y-4">
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">
            {siteConfig.soilPreparation.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-foreground/80">
            {siteConfig.soilPreparation.description}
          </p>
        </div>

        <div className="grid items-center gap-10 text-left lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] bg-black/5 shadow-2xl ring-1 ring-black/10">
            <div className="aspect-video w-full overflow-hidden rounded-[32px]">
              {siteConfig.soilPreparation.videoId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${siteConfig.soilPreparation.videoId}`}
                  title={siteConfig.soilPreparation.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              ) : (
                <img
                  src={siteConfig.soilPreparation.videoThumbnail}
                  alt="Soil preparation"
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>

          <ul className="space-y-5 text-lg leading-relaxed text-foreground/80">
            {siteConfig.soilPreparation.features.map((feature, index) => (
              <li key={index}>
                <h2 className="font-semibold text-foreground">
                  {feature.title}:
                </h2>{" "}
                <h3>{feature.description}</h3>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-lg text-foreground/80">
          {siteConfig.soilPreparation.closingText}
        </p>

        <span className="mx-auto inline-flex items-center justify-center rounded-full bg-forest-green px-6 py-3 text-sm font-semibold text-primary-foreground">
          {siteConfig.soilPreparation.treesCount}
        </span>
      </div>
    </section>
  );
};

export default SoilPreparation;
