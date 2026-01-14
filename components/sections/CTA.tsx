import Link from "next/link";

export function CTA() {
  return (
    <section className="legora-section" style={{ textAlign: 'center' }}>
      <div className="mx-auto w-full text-center" style={{ maxWidth: '1200px', padding: '0 24px' }}>
        <h2 
          className="mb-4 mx-auto max-w-3xl"
          style={{
            fontSize: '32px',
            fontWeight: 400,
            lineHeight: '35.2px',
            letterSpacing: '-0.32px',
            fontFamily: 'var(--legora-font-display)',
            color: 'var(--legora-text-primary)'
          }}
        >
          Ready to realize your full potential?
        </h2>
        <h2 
          className="mb-8 mx-auto max-w-3xl"
          style={{
            fontSize: '32px',
            fontWeight: 400,
            lineHeight: '35.2px',
            letterSpacing: '-0.32px',
            fontFamily: 'var(--legora-font-display)',
            color: 'var(--legora-text-primary)'
          }}
        >
          Discover how Legora can put time back in your hands for what matters
          most.
        </h2>
        <Link 
          href="/book-a-demo"
          className="legora-button"
        >
          <span className="button-cta-text">Book a demo</span>
        </Link>
      </div>
    </section>
  );
}
