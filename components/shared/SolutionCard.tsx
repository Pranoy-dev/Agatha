import Link from "next/link";

interface SolutionCardProps {
  title: string;
  description: string;
  href: string;
}

export function SolutionCard({ title, description, href }: SolutionCardProps) {
  return (
    <Link href={href} className="group block" style={{ textAlign: 'left' }}>
      <div className="h-full transition-all hover:opacity-80">
        {/* Image Placeholder with similar visual style to FeatureCard */}
        <div 
          className="mb-8 w-full overflow-hidden rounded-lg flex items-center justify-center"
          style={{ 
            width: '100%',
            aspectRatio: '366 / 488',
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            backdropFilter: 'blur(8px)',
            padding: '24px',
            borderRadius: '12px'
          }}
        >
          <div 
            className="w-full h-full rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)'
            }}
          >
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
          </div>
        </div>
        
        {/* Title - Matching FeatureCard style */}
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
        
        {/* Description - Matching FeatureCard style */}
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
