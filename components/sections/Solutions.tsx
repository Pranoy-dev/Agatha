import { SolutionCard } from "@/components/shared/SolutionCard";

export function Solutions() {
  return (
    <>
      {/* Intro Section */}
      <section className="legora-section">
        <div className="mx-auto w-full text-center" style={{ maxWidth: '1200px', padding: '0 24px' }}>
          <p 
            className="mb-4 mx-auto max-w-3xl"
            style={{
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: '16.9px',
              fontFamily: 'var(--legora-font-body)',
              color: 'var(--legora-text-primary)'
            }}
          >
            The collaborative AI workspace built to fit seamlessly into a
            lawyer's workflow. Legora adapts to your ways of working, unlocking
            team and machine collaboration at scale.
          </p>
          <h2 
            className="mx-auto max-w-4xl"
            style={{
              fontSize: '32px',
              fontWeight: 400,
              lineHeight: '35.2px',
              letterSpacing: '-0.32px',
              fontFamily: 'var(--legora-font-display)',
              color: 'var(--legora-text-primary)'
            }}
          >
            Legora meets lawyers where they are.
          </h2>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="legora-section">
        <div className="mx-auto w-full" style={{ maxWidth: '1200px', padding: '0 24px' }}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" style={{ textAlign: 'left' }}>
            <SolutionCard
              title="Litigation"
              description="Streamline the litigation process and free your team to focus on a winning outcome."
              href="/solutions/litigation"
            />
            <SolutionCard
              title="M&A"
              description="Review documents faster and draft precise, detailed agreements and reports in less time."
              href="/solutions/ma"
            />
            <SolutionCard
              title="Tax"
              description="Analyze complex tax rulings and legislation with speed and clarity."
              href="/solutions/tax"
            />
            <SolutionCard
              title="Banking"
              description="Stay ahead of regulation, process documents faster and focus on strategy."
              href="/solutions/banking"
            />
          </div>
        </div>
      </section>
    </>
  );
}
