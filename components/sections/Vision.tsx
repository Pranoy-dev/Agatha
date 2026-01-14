export function Vision() {
  return (
    <section 
      className="legora-section"
      style={{ backgroundColor: 'var(--legora-bg-accent)' }}
    >
      <div className="mx-auto w-full" style={{ maxWidth: '1200px', padding: '0 24px' }}>
        <div className="grid gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
          {/* Author Info */}
          <div style={{ textAlign: 'left' }}>
            <h2 
              className="mb-8"
              style={{
                fontSize: '32px',
                fontWeight: 400,
                lineHeight: '35.2px',
                letterSpacing: '-0.32px',
                fontFamily: 'var(--legora-font-display)',
                color: 'var(--legora-text-primary)'
              }}
            >
              Our Vision
            </h2>
            <div 
              className="mb-2"
              style={{
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '16.9px',
                fontFamily: 'var(--legora-font-body)',
                color: 'var(--legora-text-primary)'
              }}
            >
              Max Junestrand
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
              Co-founder & CEO
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Image Placeholders */}
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div 
                className="bg-muted/30 rounded-lg flex items-center justify-center"
                style={{ 
                  width: '100%',
                  aspectRatio: '275 / 366',
                  maxWidth: '275px',
                  maxHeight: '366px'
                }}
              >
                <span 
                  className="text-xs text-muted-foreground text-center p-2"
                  style={{ fontFamily: 'var(--legora-font-ui)' }}
                >
                  Image placeholder
                  <br />
                  275 × 366px
                </span>
              </div>
              <div 
                className="bg-muted/30 rounded-lg flex items-center justify-center"
                style={{ 
                  width: '100%',
                  aspectRatio: '743 / 594',
                  maxWidth: '743px',
                  maxHeight: '594px'
                }}
              >
                <span 
                  className="text-xs text-muted-foreground text-center p-2"
                  style={{ fontFamily: 'var(--legora-font-ui)' }}
                >
                  Image placeholder
                  <br />
                  743 × 594px
                </span>
              </div>
            </div>

            <div 
              className="space-y-4"
              style={{
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '16.9px',
                fontFamily: 'var(--legora-font-body)',
                color: 'var(--legora-text-primary)'
              }}
            >
              <p>
                Lawyers bring judgment, strategy, and creativity. AI brings speed,
                scale, and precision. Together, they unlock new possibilities for
                how legal work gets done.
              </p>
              <p>
                Our vision is to give every lawyer the tools to focus on what
                matters most: advising clients, shaping outcomes, and driving
                progress. By removing repetitive tasks and streamlining complex
                workflows, we help lawyers spend less time on admin and more time
                practising law at its highest level.
              </p>
              <p className="pt-4">
                We're building more than a product. Alongside industry
                professionals, we're building a new golden standard for legal
                work. A future where tech complements expertise, where legal teams
                operate with confidence and efficiency, and where every lawyer has
                the freedom to do their best work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
