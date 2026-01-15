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
          Have more questions?
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
          Discover how Agatha can help you make better decisions and build a more aligned organization.
        </h2>
        <Link 
          href="/contact"
          className="legora-button"
        >
          <span className="button-cta-text">Contact us</span>
        </Link>
      </div>
    </section>
  );
}
