export function Vision() {
  return (
    <section 
      className="legora-section"
      style={{ backgroundColor: '#e8e6d8' }}
    >
      <div className="mx-auto w-full" style={{ maxWidth: '1200px', padding: '0 24px' }}>
        {/* Heading */}
        <h2 
          style={{
            fontSize: '32px',
            fontWeight: 400,
            lineHeight: '35.2px',
            letterSpacing: '-0.32px',
            fontFamily: 'var(--legora-font-display)',
            color: 'var(--legora-text-primary)',
            marginBottom: '64px',
            marginTop: 0,
            textAlign: 'left'
          }}
        >
          Our Vision
        </h2>

        {/* Two Column Layout: Text on Left, Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Text Content - Standardized body text */}
          <div 
            style={{
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: '16.9px',
              fontFamily: 'var(--legora-font-body)',
              color: 'var(--legora-text-primary)',
              maxWidth: '100%'
            }}
          >
            <p style={{ marginBottom: '20px', marginTop: 0 }}>
              More than 3.6 billion people around the world are part of the workforce, and many will spend a large part of their lives at work. It's reasonable to expect work to feel not just productive, but clear, fair, and even exciting.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Yet most workplace problems don't come from a lack of effort or skill. They come from misunderstanding. Communication is often treated as language alone, but real communication goes deeper—shaped by upbringing, culture, experience, motivation, and expectations.
            </p>
            <p style={{ marginBottom: '20px' }}>
              When these differences aren't understood, alignment breaks down. And when alignment breaks down, performance, trust, and energy follow.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Agatha represents a future where AI becomes a shared communication layer inside organizations. A layer that listens across teams, understands human signals, and makes expectations clear and visible for everyone.
            </p>
            <p style={{ marginBottom: '20px' }}>
              By turning employee intelligence into understanding and foresight, Agatha helps leaders and teams work with clarity instead of assumptions. When people feel understood and aligned, work becomes lighter, faster, and more meaningful.
            </p>
            <p style={{ marginBottom: 0 }}>
              This is how work becomes exciting again—not by adding more tools, but by finally understanding the people doing the work.
            </p>
          </div>

          {/* Image Placeholder on Right */}
          <div 
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(10, 10, 10, 0.05)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div 
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  fontFamily: 'var(--legora-font-body)',
                  color: 'rgba(10, 10, 10, 0.5)',
                  marginBottom: '8px'
                }}
              >
                Image placeholder
              </div>
              <div 
                style={{
                  fontSize: '11px',
                  fontWeight: 400,
                  fontFamily: 'var(--legora-font-ui)',
                  color: 'rgba(10, 10, 10, 0.4)'
                }}
              >
                Matches text height
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
