import { FeatureCard } from "@/components/shared/FeatureCard";

export function Features() {
  return (
    <section className="legora-section">
      <div className="mx-auto w-full" style={{ maxWidth: '1200px', padding: '0 24px' }}>
        {/* Subtle divider line */}
        <div 
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(10, 10, 10, 0.08)',
            marginBottom: '64px'
          }}
        />
        <div className="mb-16" style={{ textAlign: 'left' }}>
          <p 
            className="mb-6"
            style={{
              fontSize: '11px',
              fontWeight: 400,
              fontFamily: 'var(--legora-font-body)',
              color: 'rgba(10, 10, 10, 0.6)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            SMARTER TOOLS, BETTER OUTCOMES
          </p>
          <h2 
            className="max-w-4xl"
            style={{
              fontSize: '32px',
              fontWeight: 400,
              lineHeight: '35.2px',
              letterSpacing: '-0.32px',
              fontFamily: 'var(--legora-font-display)',
              color: 'var(--legora-text-primary)'
            }}
          >
            Agatha streamlines employee feedback and provides tailored guidance to leaders.
            It reduces information asymmetry and becomes a shared intelligence layer for the organization.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ textAlign: 'left' }}>
          <FeatureCard
            title="Employee feedback"
            description="Great leadership starts with understanding people. Agatha gathers employee feedback and signals from across the organization to give leaders a clear view of skills, motivation, and expectations—all in one place."
            icon="review"
            href="/product/employee-feedback"
          />
          <FeatureCard
            title="Advice Layer"
            description="Agatha doesn't just show data. It interprets patterns and provides tailored guidance based on what's happening inside your teams, helping leaders know when to act, where to focus, and what matters most."
            icon="draft"
            href="/product/advice-layer"
          />
          <FeatureCard
            title="Predictive intelligence"
            description="Agatha detects early signals and emerging patterns to anticipate future risks and opportunities. By turning employee intelligence into foresight, leaders can act earlier, reduce surprises, and make better decisions with confidence."
            icon="research"
            href="/product/predictive-intelligence"
          />
        </div>
      </div>
    </section>
  );
}
