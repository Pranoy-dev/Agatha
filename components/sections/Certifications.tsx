const certifications = [
  {
    title: "ISO 42001",
    description:
      "ISO 42001 certified, our AI governance framework gives customers confidence in how we build and run AI.",
  },
  {
    title: "ISO 27001",
    description:
      "Legora is fully certified with ISO 27001, the internationally recognized standard for information security management.",
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
      style={{ backgroundColor: 'var(--legora-bg-dark)' }}
    >
      <div className="mx-auto w-full" style={{ maxWidth: '1200px', padding: '0 24px' }}>
        <div className="mb-12" style={{ textAlign: 'center' }}>
          <p 
            className="mb-4"
            style={{
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: '16.9px',
              fontFamily: 'var(--legora-font-body)',
              color: 'var(--legora-bg-primary)'
            }}
          >
            Certified & compliant
          </p>
          <h2 
            className="mx-auto max-w-4xl"
            style={{
              fontSize: '32px',
              fontWeight: 400,
              lineHeight: '35.2px',
              letterSpacing: '-0.32px',
              fontFamily: 'var(--legora-font-display)',
              color: 'var(--legora-bg-primary)'
            }}
          >
            Legora is committed to maintaining compliance with the most
            rigorous international safety and security standards.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" style={{ textAlign: 'left' }}>
          {certifications.map((cert, index) => {
            return (
              <div key={index} className="h-full">
                {/* Icon Placeholder - Exact Legora Spec: 56px × 56px */}
                <div 
                  className="mb-4 flex items-center justify-center"
                  style={{ width: '56px', height: '56px' }}
                >
                  <div 
                    className="bg-white/10 rounded-lg flex items-center justify-center"
                    style={{ width: '56px', height: '56px' }}
                  >
                    <span 
                      className="text-[10px] text-white/70"
                      style={{ fontFamily: 'var(--legora-font-ui)' }}
                    >
                      Icon
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
                    color: 'var(--legora-bg-primary)'
                  }}
                >
                  {cert.title}
                </h3>
                
                {/* Description - Exact Legora Body Spec */}
                <p 
                  className="leading-relaxed"
                  style={{
                    fontSize: '13px',
                    fontWeight: 400,
                    lineHeight: '16.9px',
                    fontFamily: 'var(--legora-font-body)',
                    color: 'var(--legora-bg-primary)',
                    opacity: 0.9
                  }}
                >
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
