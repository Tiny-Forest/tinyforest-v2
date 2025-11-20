import { siteConfig } from "@/config/content";

const Header = () => {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-6 sm:px-8 sm:py-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full  sm:h-14 sm:w-14">
          <img
            src="/logo.png"
            alt={`${siteConfig.site.name} logo`}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-normal font-sans text-foreground sm:text-2xl">
            {siteConfig.site.name}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
