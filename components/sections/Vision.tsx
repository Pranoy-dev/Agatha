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
          {/* Text Content - Increased size for better readability */}
          <div 
            style={{
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: '22.5px',
              fontFamily: 'var(--legora-font-body)',
              color: 'var(--legora-text-primary)',
              maxWidth: '100%'
            }}
          >
            <p style={{ marginBottom: '20px', marginTop: 0, fontSize: '15px', lineHeight: '22.5px' }}>
              Over 3.6 billion people are in the global workforce and many will spend a large part of their lives at work. It is reasonable to expect work to feel not just productive, but clear, fair, and even exciting.
            </p>
            <p style={{ marginBottom: '20px', fontSize: '15px', lineHeight: '22.5px' }}>
              Our vision is to give leaders and teams more room for what matters: making good decisions, building trust, and moving forward together. By reducing misalignment and helping people understand each other, Agatha gives teams the time and clarity to focus on the big picture and implement change at scale with confidence.
            </p>
            <p style={{ marginBottom: 0, fontSize: '15px', lineHeight: '22.5px' }}>
              We are building more than a tool. Alongside modern organizations, we are building a new standard for how work feels: clearer expectations, healthier communication, and decisions people can trust. A future where AI supports human leadership, and work becomes more meaningful.
            </p>
          </div>

          {/* Image on Right */}
          <div 
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src="/images/Vision.jpg"
              alt="Agatha vision - AI as a shared communication layer in organizations"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
