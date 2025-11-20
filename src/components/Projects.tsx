import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
declare global {
  interface Window {
    zaraz?: {
      event: (eventName: string, data?: Record<string, any>) => void;
    };
  }
}
const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const handleYouTubeVisit = () => {
    if (typeof window !== "undefined") {
      window.zaraz?.event("visit_youtube_channel");
      console.log("TinyForest_Brochure_Youtube");
    } else {
      console.log("TinyForest_Brochure_Youtube-");
    }
  };
  return (
    <section className="px-4 pb-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl rounded-[40px] bg-earth-beige px-6 py-12  transition-all duration-700 sm:px-10 lg:px-16 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <p className="text-muted-foreground">
            {siteConfig.about.callToAction}
          </p>
          <Button
            size="lg"
            className="rounded-full bg-forest-green px-8 py-5 text-base font-semibold text-primary-foreground hover:bg-forest-green/90"
            asChild
          >
            <a
              href={siteConfig.site.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleYouTubeVisit}
            >
              {siteConfig.about.buttonText}
            </a>
          </Button>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">
            {siteConfig.projects.title}
          </h2>
        </div>

        <div className="space-y-10">
          {siteConfig.projects.items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

type Project = (typeof siteConfig.projects.items)[number];

const ProjectCard = ({ project }: { project: Project }) => {
  const { ref, isVisible } = useScrollAnimation();

  const media = (
    <div className="w-full overflow-hidden rounded-[28px] bg-black/5 shadow-lg ring-1 ring-black/10">
      <div className="aspect-video w-full">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${project.videoId}`}
          title={project.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </div>
  );

  const copy = (
    <div className="space-y-4 text-left">
      <h3 className="text-3xl font-medium text-foreground md:text-4xl">
        {project.name}
      </h3>
      <p className="text-lg leading-relaxed text-foreground/80">
        {project.description}
      </p>
    </div>
  );

  return (
    <div
      ref={ref}
      className={`grid items-center gap-8 rounded-[32px] px-6 py-8 transition-all duration-700 transform hover:scale-[0.95] md:grid-cols-2 lg:gap-12 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {project.videoPosition === "top" ? (
        <>
          {media}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {media}
        </>
      )}
    </div>
  );
};
