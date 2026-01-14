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
        {/* Image Placeholder - Exact Legora Spec: 366px × 488px */}
        <div 
          className="mb-6 w-full overflow-hidden rounded-lg bg-muted/30 flex items-center justify-center"
          style={{ 
            width: '100%',
            aspectRatio: '366 / 488',
            maxWidth: '366px',
            maxHeight: '488px'
          }}
        >
          <div className="text-center p-4">
            <span 
              className="text-xs text-muted-foreground"
              style={{ fontFamily: 'var(--legora-font-ui)' }}
            >
              Image placeholder
              <br />
              366 × 488px
            </span>
          </div>
        </div>
        
        {/* Title - Exact Legora H3 Spec */}
        <h3 
          className="mb-3"
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
        
        {/* Description - Exact Legora Body Spec */}
        <p 
          className="leading-relaxed"
          style={{
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '16.9px',
            fontFamily: 'var(--legora-font-body)',
            color: 'var(--legora-text-primary)'
          }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}
