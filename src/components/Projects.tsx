import { siteConfig } from "@/config/content";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-20">
        <h2 
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold text-center text-foreground mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {siteConfig.projects.title}
        </h2>
        
        {siteConfig.projects.items.map((project) => {
          const ProjectItem = () => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div 
                ref={ref}
                key={project.id} 
                className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
            {project.videoPosition === "top" ? (
              <>
                <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${project.videoId}`}
                    title={project.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {project.name}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {project.name}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${project.videoId}`}
                    title={project.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </>
            )}
              </div>
            );
          };
          return <ProjectItem key={project.id} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
