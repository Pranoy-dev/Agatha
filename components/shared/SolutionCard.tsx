"use client";

import Link from "next/link";
import { useState } from "react";

interface SolutionCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function SolutionCard({ title, description, href, imageSrc, imageAlt }: SolutionCardProps) {
  const [imageError, setImageError] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Prevent text selection on double-click or drag
    if (e.detail > 1 || e.button === 0) {
      e.preventDefault();
    }
  };

  return (
    <Link 
      href={href} 
      className="group block select-none" 
      style={{ 
        textAlign: 'left',
        textDecoration: 'none',
        color: 'inherit'
      }}
      onDragStart={(e) => e.preventDefault()}
    >
      <div 
        className="h-full select-none"
        onMouseDown={handleMouseDown}
      >
        {/* Image Container */}
        <div 
          className="mb-8 w-full overflow-hidden flex items-center justify-center"
          style={{ 
            width: '100%',
            aspectRatio: '366 / 488'
          }}
        >
          {imageSrc && !imageError ? (
            <img
              src={imageSrc}
              alt={imageAlt || title}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              style={{ 
                display: 'block'
              }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="text-center p-4">
              <span 
                className="text-xs"
                style={{ 
                  fontFamily: 'var(--legora-font-ui)',
                  color: 'rgba(10, 10, 10, 0.5)',
                  fontSize: '11px'
                }}
              >
                Image placeholder
                <br />
                366 × 488px
              </span>
            </div>
          )}
        </div>
        
        {/* Title - Matching FeatureCard style */}
        <h3 
          className="mb-4 select-none"
          style={{
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '26.4px',
            letterSpacing: '-0.24px',
            fontFamily: 'var(--legora-font-display)',
            color: 'var(--legora-text-primary)',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none'
          }}
        >
          {title}
        </h3>
        
        {/* Description - Matching FeatureCard style */}
        <p 
          className="leading-relaxed select-none"
          style={{
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '20px',
            fontFamily: 'var(--legora-font-body)',
            color: 'rgba(10, 10, 10, 0.7)',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none'
          }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}
