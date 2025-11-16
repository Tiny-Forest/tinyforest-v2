import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="px-4 pt-1">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl space-y-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="rounded-[48px] bg-earth-beige px-8 py-16 text-center shadow-xl sm:px-16">
          <h2 className="text-3xl font-semibold text-foreground md:text-6xl">{siteConfig.contact.title}</h2>
          {siteConfig.contact.description && (
            <p className="mt-4 text-lg leading-relaxed text-foreground/70">{siteConfig.contact.description}</p>
          )}
          <div className="mt-8">
            <Button
              size="lg"
              className="rounded-full bg-forest-green px-10 py-6 text-base font-semibold text-primary-foreground hover:bg-forest-green/90"
              asChild
            >
              <a href={siteConfig.site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                {siteConfig.contact.whatsappButtonText}
              </a>
            </Button>
          </div>
        </div>

        <div className="rounded-[36px] bg-white px-6 py-10 shadow-sm sm:px-10 md:px-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_auto]">
            <div className="md:flex items-start gap-4">
              <div className="md:flex md:h-16 md:w-16 h-10 w-10 items-center justify-center rounded-full">
                <img src="/logo.png" alt={`${siteConfig.site.name} logo`} className="md:h-16 md:w-16 h-10 w-10 md:mb-7 object-contain" />
              </div>
              <div className="space-y-3 text-left">
                <p className="text-2xl font-semibold text-foreground">{siteConfig.site.name}</p>
                <p className="text-foreground/70 leading-relaxed sm:">{siteConfig.footer.description}</p>
              </div>
            </div>

            <div className="space-y-3 text-left">
              <p className="text-lg font-semibold text-foreground">Contact</p>
              <p className="text-lg text-foreground/70">
                {siteConfig.footer.contactNumbers.map((contact, index) => (
                  <span key={contact.value}>
                    {index > 0 ? ", " : ""}
                    <a href={`tel:${contact.value}`} className="transition hover:text-foreground/90">
                      {contact.display}
                    </a>
                  </span>
                ))}
              </p>
              <a
                href={`mailto:${siteConfig.footer.email}`}
                className="block text-lg text-foreground/70 transition hover:text-foreground/90"
              >
                {siteConfig.footer.email}
              </a>
            </div>

            <div className="text-left md:text-center">
              <p className="text-base font-medium text-foreground/70">{siteConfig.footer.qrLabel}</p>
              <div className="mt-4 inline-flex rounded-3xl border border-border bg-white p-3">
                <img
                  src={siteConfig.footer.qrImage}
                  alt={siteConfig.footer.qrLabel}
                  className="h-32 w-32 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
