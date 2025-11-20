// FooterKeywords.tsx

import React from "react";
import { siteConfig } from "@/config/content";
interface FooterKeywordsProps {
  items: string[];
}

const Keywords: React.FC = () => {
  return (
    <div className="text-center mt-10 pb-6">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
        Some of the popular searches are
      </h2>

      {/* Keywords Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm sm:text-base text-foreground/80 leading-relaxed pb-4">
        {siteConfig.Keywords.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))}
      </div>
    </div>
  );
};

export default Keywords;
