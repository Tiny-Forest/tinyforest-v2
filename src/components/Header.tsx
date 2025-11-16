import { siteConfig } from "@/config/content";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-2xl">🌳</span>
          </div>
          <span className="text-xl font-semibold text-foreground">{siteConfig.site.name}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
