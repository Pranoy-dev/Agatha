"use client";

import { useEffect, useState } from "react";

const logos = [
  { name: "Bird & Bird", alt: "logo Bird & Bird international Law Firm" },
  { name: "Bird & Bird", alt: "logo Bird & Bird international Law Firm" },
  { name: "Bird & Bird", alt: "logo Bird & Bird international Law Firm" },
  { name: "Bird & Bird", alt: "logo Bird & Bird international Law Firm" },
  { name: "Deloitte", alt: "Logo Deloitte" },
  { name: "Dentons", alt: "Dentons is a global law firm driven to provide you with the competitive edge in an increasingly complex and interconnected marketplace." },
  { name: "Goodwin", alt: "Logo Goodwin American multinational law firm" },
  { name: "CMS", alt: "Logo CMS an international law firm that offers legal and tax advisory services" },
];

export function LogoCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Placeholder logos - Exact Legora dimensions: 104px × 60px
  const renderLogo = (logo: { name: string; alt: string }, index: number) => {
    return (
      <div
        key={index}
        className="flex shrink-0 items-center justify-center px-4 grayscale opacity-60 transition-opacity hover:opacity-100"
        style={{ width: '104px', height: '60px' }}
      >
        {/* Placeholder - replace with actual logo images later */}
        <div 
          className="flex items-center justify-center rounded bg-muted/30"
          style={{ width: '104px', height: '60px' }}
        >
          <span 
            className="text-[10px] font-medium text-muted-foreground text-center px-2"
            style={{ 
              fontFamily: 'var(--legora-font-ui)',
              fontSize: '10px'
            }}
          >
            {logo.name}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className={`flex gap-8 whitespace-nowrap ${mounted ? 'animate-scroll' : ''}`}>
        {/* First set */}
        {logos.map((logo, index) => renderLogo(logo, index))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => renderLogo(logo, index + logos.length))}
      </div>
    </div>
  );
}
