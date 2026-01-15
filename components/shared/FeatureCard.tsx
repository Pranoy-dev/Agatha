"use client";

import Link from "next/link";
import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: "review" | "draft" | "research";
  href: string;
  imageSrc?: string;
  imageAlt?: string;
}

const imageMap = {
  review: "/images/Emplpyee Feedback.jpg",
  draft: "/images/Advice Layer.jpg",
  research: "/images/Predictive Intelligence.jpg",
};

export function FeatureCard({ title, description, icon, href, imageSrc, imageAlt }: FeatureCardProps) {
  const [imageError, setImageError] = useState(false);
  const defaultImageSrc = imageSrc || imageMap[icon];

  const renderVisual = () => {
    return (
      <div 
        className="mb-8 w-full overflow-hidden rounded-lg"
        style={{ 
          width: '100%',
          aspectRatio: '358 / 300',
          height: '300px'
        }}
      >
        {defaultImageSrc && !imageError ? (
          <img
            src={defaultImageSrc}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            style={{ 
              display: 'block'
            }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-center p-4 flex items-center justify-center h-full">
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
              358 × 300px
            </span>
          </div>
        )}
      </div>
    );
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
    >
      <div className="h-full">
        {renderVisual()}
        
        {/* Title - Large, bold, serif */}
        <h3 
          className="mb-4"
          style={{
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '26.4px',
            letterSpacing: '-0.24px',
            fontFamily: 'var(--legora-font-display)',
            color: 'var(--legora-text-primary)'
          }}
        >
          {title}
        </h3>
        
        {/* Description - Smaller, regular weight, sans-serif */}
        <p 
          className="leading-relaxed"
          style={{
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '20px',
            fontFamily: 'var(--legora-font-body)',
            color: 'rgba(10, 10, 10, 0.7)'
          }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}
