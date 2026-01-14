import Link from "next/link";
import { FileText, PenTool, Search } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: "review" | "draft" | "research";
  href: string;
}

const iconMap = {
  review: FileText,
  draft: PenTool,
  research: Search,
};

export function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <Link href={href} className="group block" style={{ textAlign: 'left' }}>
      <div className="h-full transition-all hover:opacity-80">
        {/* Video Placeholder Card - White background with icon */}
        <div 
          className="mb-8 aspect-video w-full overflow-hidden rounded-lg flex flex-col items-center justify-center"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid rgba(10, 10, 10, 0.08)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
          }}
        >
          <div className="text-center">
            <Icon 
              className="h-16 w-16 mx-auto mb-3" 
              style={{ 
                color: '#4a5568',
                strokeWidth: 1.5
              }} 
            />
            <span 
              className="text-xs"
              style={{ 
                fontFamily: 'var(--legora-font-ui)',
                color: 'rgba(10, 10, 10, 0.5)',
                fontSize: '11px'
              }}
            >
              Video placeholder
            </span>
          </div>
        </div>
        
        {/* Title - Large, bold, serif */}
        <h3 
          className="mb-4"
          style={{
            fontSize: '24px',
            fontWeight: 400,
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
