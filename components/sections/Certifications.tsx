const certifications = [
  {
    title: "ISO 42001",
    description:
      "ISO 42001 certified, our AI governance framework gives customers confidence in how we build and run AI.",
  },
  {
    title: "ISO 27001",
    description:
      "Agatha is fully certified with ISO 27001, the internationally recognized standard for information security management.",
  },
  {
    title: "SOC Type 2",
    description:
      "We meet SOC 2 requirements to ensure secure and compliant management of data across all our systems.",
  },
  {
    title: "GDPR",
    description:
      "With our technical team based in Sweden, we operate under GDPR — the world's strictest standard for data privacy.",
  },
];

export function Certifications() {
  return (
    <section 
      className="legora-section"
      style={{ 
        backgroundColor: 'var(--legora-bg-dark)'
      }}
    >
      <div className="mx-auto w-full" style={{ maxWidth: '1200px', padding: '0 24px' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p 
            style={{
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: '16.9px',
              fontFamily: 'var(--legora-font-body)',
              color: 'rgba(255, 255, 255, 0.7)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '16px'
            }}
          >
            CERTIFIED & COMPLIANT
          </p>
          <h2 
            className="mx-auto"
            style={{
              fontSize: '32px',
              fontWeight: 400,
              lineHeight: '35.2px',
              letterSpacing: '-0.32px',
              fontFamily: 'var(--legora-font-display)',
              color: '#ffffff',
              maxWidth: '900px'
            }}
          >
            Agatha is committed to maintaining compliance with the most
            rigorous international safety and security standards.
          </h2>
        </div>

        {/* Certifications Grid with vertical separators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ textAlign: 'left', gap: '0' }}>
          {certifications.map((cert, index) => {
            return (
              <div 
                key={index} 
                className="h-full flex flex-col relative"
                style={{
                  paddingRight: index < certifications.length - 1 ? '40px' : '0',
                  paddingLeft: index > 0 ? '40px' : '0',
                  borderRight: index < certifications.length - 1 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none'
                }}
              >
                {/* Title - Bold */}
                <h3 
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    lineHeight: '24px',
                    letterSpacing: '-0.2px',
                    fontFamily: 'var(--legora-font-display)',
                    color: '#ffffff',
                    marginBottom: '12px'
                  }}
                >
                  {cert.title}
                </h3>
                
                {/* Description */}
                <p 
                  style={{
                    fontSize: '13px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    fontFamily: 'var(--legora-font-body)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '32px',
                    flexGrow: 1
                  }}
                >
                  {cert.description}
                </p>
                
                {/* Icon - Circular outline at bottom */}
                <div 
                  className="flex items-center justify-start"
                  style={{ width: '56px', height: '56px', marginTop: 'auto' }}
                >
                  <div 
                    className="rounded-full border-2 flex items-center justify-center"
                    style={{ 
                      width: '56px', 
                      height: '56px',
                      borderColor: 'rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <span 
                      style={{ 
                        fontSize: '10px',
                        fontFamily: 'var(--legora-font-ui)',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: 500
                      }}
                    >
                      {cert.title === 'SOC Type 2' ? 'AICPA' : cert.title === 'GDPR' ? 'GDPR' : cert.title}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
