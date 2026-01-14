export function Vision() {
  return (
    <section 
      className="legora-section"
      style={{ backgroundColor: 'var(--legora-bg-accent)' }}
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
            marginBottom: '48px',
            marginTop: 0,
            textAlign: 'left'
          }}
        >
          Our Vision
        </h2>
        
        {/* Images with Names - At the top */}
        <div 
          className="mb-16"
          style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '32px',
            flexWrap: 'wrap'
          }}
        >
          <div>
            <div 
              className="flex items-center justify-center"
              style={{ 
                width: '275px',
                height: '366px',
                marginBottom: '12px',
                backgroundColor: '#f5f5f5',
                border: '1px dashed #d0d0d0',
                borderRadius: '8px',
                position: 'relative'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    margin: '0 auto 12px',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <span 
                  style={{ 
                    fontSize: '11px',
                    fontFamily: 'var(--legora-font-ui)',
                    color: '#999999',
                    display: 'block'
                  }}
                >
                  Image placeholder
                </span>
                <span 
                  style={{ 
                    fontSize: '10px',
                    fontFamily: 'var(--legora-font-ui)',
                    color: '#999999',
                    display: 'block',
                    marginTop: '4px'
                  }}
                >
                  275 × 366px
                </span>
              </div>
            </div>
            <div 
              style={{
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '16.9px',
                fontFamily: 'var(--legora-font-body)',
                color: 'var(--legora-text-primary)',
                textAlign: 'left'
              }}
            >
              Pranoy Mathew
            </div>
          </div>
          <div>
            <div 
              className="flex items-center justify-center"
              style={{ 
                width: '275px',
                height: '366px',
                marginBottom: '12px',
                backgroundColor: '#f5f5f5',
                border: '1px dashed #d0d0d0',
                borderRadius: '8px',
                position: 'relative'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    margin: '0 auto 12px',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <span 
                  style={{ 
                    fontSize: '11px',
                    fontFamily: 'var(--legora-font-ui)',
                    color: '#999999',
                    display: 'block'
                  }}
                >
                  Image placeholder
                </span>
                <span 
                  style={{ 
                    fontSize: '10px',
                    fontFamily: 'var(--legora-font-ui)',
                    color: '#999999',
                    display: 'block',
                    marginTop: '4px'
                  }}
                >
                  275 × 366px
                </span>
              </div>
            </div>
            <div 
              style={{
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '16.9px',
                fontFamily: 'var(--legora-font-body)',
                color: 'var(--legora-text-primary)',
                textAlign: 'left'
              }}
            >
              Korey Stegared-pace
            </div>
          </div>
        </div>

        {/* Text Content in Two Columns */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          style={{
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '20px',
            fontFamily: 'var(--legora-font-body)',
            color: 'var(--legora-text-primary)'
          }}
        >
          {/* Left Text Column */}
          <div>
            <p style={{ marginBottom: '24px', marginTop: 0 }}>
              More than 3.6 billion people around the world are part of the workforce, and many of them will spend a large part of their lives at work. It's only reasonable to have expectations about what work should feel like. Not just productive, but clear, fair, and even exciting.
            </p>
            <p style={{ marginBottom: 0 }}>
              Yet most problems at work don't come from a lack of effort or skill. They come from misunderstanding. Communication is treated as language alone, but real communication goes deeper. It's shaped by upbringing, culture, experience, motivation, and expectations. When these differences aren't understood, alignment breaks down. And when alignment breaks down, performance, trust, and energy follow.
            </p>
          </div>
          
          {/* Right Text Column */}
          <div>
            <p style={{ marginBottom: '24px', marginTop: 0 }}>
              Without solving this deeper layer of communication, we're not solving the real problem of work.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Agatha represents a future where AI becomes a shared communication layer inside organizations. A layer that listens across teams, understands human signals, and makes expectations clear and visible for everyone.
            </p>
            <p style={{ marginBottom: '24px' }}>
              By turning employee intelligence into understanding and foresight, Agatha helps leaders and teams work with clarity instead of assumptions. When people feel understood and aligned, work becomes lighter, faster, and more meaningful.
            </p>
            <p style={{ marginBottom: 0 }}>
              This is how work becomes exciting again.
              Not by adding more tools, but by finally understanding the people doing the work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
