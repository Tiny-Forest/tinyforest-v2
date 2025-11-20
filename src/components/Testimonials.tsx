import { siteConfig } from "@/config/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="px-4 pt-5 pb-10">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl space-y-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center space-y-4">
          <span className="inline-flex items-center rounded-full border border-border px-5 py-1 text-sm font-semibold text-muted-foreground">
            {siteConfig.testimonials.label}
          </span>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">
            {siteConfig.testimonials.title}
          </h2>
          {siteConfig.testimonials.subtitle && (
            <p className="text-lg text-foreground/70">
              {siteConfig.testimonials.subtitle}
            </p>
          )}
        </div>

        <div className="mx-auto grid md:w-4/6 w-full max-w-5xl gap-3  md:grid-cols-2">
          {siteConfig.testimonials.items.map((testimonial, index) => (
            <article
              key={index}
              className="rounded-[12px] border border-border bg-earth-beige/30 px-8 py-10"
            >
              <div className="mb-6 flex gap-1 text-xl text-forest-green">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span key={starIndex}>★</span>
                ))}
              </div>
              <p className="text-base leading-relaxed text-foreground/80">
                "{testimonial.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4 ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <p className="text-lg font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
