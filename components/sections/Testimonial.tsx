export function Testimonial() {
  return (
    <section className="legora-section">
      <div className="mx-auto w-full" style={{ maxWidth: '1200px', padding: '0 24px' }}>
        <div className="grid gap-8 md:grid-cols-[auto_1fr] lg:grid-cols-[300px_1fr]">
          {/* Image and Quote Section */}
          <div className="space-y-6">
            {/* Image Placeholder */}
            <div 
              className="bg-muted/30 rounded-lg flex items-center justify-center"
              style={{ 
                width: '100%',
                aspectRatio: '1 / 1',
                maxWidth: '275px',
                maxHeight: '275px'
              }}
            >
              <span 
                className="text-xs text-muted-foreground text-center p-2"
                style={{ fontFamily: 'var(--legora-font-ui)' }}
              >
                Testimonial image placeholder
              </span>
            </div>
            
            {/* Quote - Exact Legora H2 Spec */}
            <h2 
              className="mb-6"
              style={{
                fontSize: '32px',
                fontWeight: 400,
                lineHeight: '35.2px',
                letterSpacing: '-0.32px',
                fontFamily: 'var(--legora-font-display)',
                color: 'var(--legora-text-primary)'
              }}
            >
              "Today as much as 80% of our people are active users, and as
              high as 30% use Legora more than ten times a day."
            </h2>
            
            {/* Author Info */}
            <div className="mb-4">
              <div 
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: '16.9px',
                  fontFamily: 'var(--legora-font-body)',
                  color: 'var(--legora-text-primary)'
                }}
              >
                Thomas K Svensen
              </div>
              <div 
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: '16.9px',
                  fontFamily: 'var(--legora-font-body)',
                  color: 'var(--legora-text-primary)',
                  opacity: 0.7
                }}
              >
                Managing Partner at BAHR
              </div>
            </div>
          </div>
          
          {/* Video Placeholder */}
          <div className="flex items-center justify-center">
            <div 
              className="bg-muted/30 rounded-lg flex items-center justify-center w-full"
              style={{ 
                aspectRatio: '16 / 9',
                maxWidth: '743px',
                maxHeight: '594px'
              }}
            >
              <span 
                className="text-xs text-muted-foreground text-center p-4"
                style={{ fontFamily: 'var(--legora-font-ui)' }}
              >
                Video placeholder
                <br />
                743 × 594px
              </span>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <p 
          className="mt-8 mx-auto max-w-3xl"
          style={{
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '16.9px',
            fontFamily: 'var(--legora-font-body)',
            color: 'var(--legora-text-primary)'
          }}
        >
          Our collaboration with BAHR demonstrates how a unified culture,
          world-class legal minds, and cutting-edge AI can work together to
          shape the future of legal services.
        </p>
      </div>
    </section>
  );
}
