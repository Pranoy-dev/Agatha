import { FeatureCard } from "@/components/shared/FeatureCard";

export function Features() {
  return (
    <section className="legora-section">
      <div className="mx-auto w-full" style={{ maxWidth: '1200px', padding: '0 24px' }}>
        <div className="mb-16" style={{ textAlign: 'center' }}>
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
            Smarter Tools, Better Outcomes
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
            Legora streamlines everything from research to drafting and review —
            helping lawyers spend less time managing process, and more time
            delivering value.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ textAlign: 'left' }}>
          <FeatureCard
            title="Review faster"
            description="Being an exceptional lawyer means reviewing and reading mountains of material. Legora can analyze tens of thousands of documents simultaneously, and suggest well-crafted markup based on your preferences."
            icon="review"
            href="/product/tabular-review"
          />
          <FeatureCard
            title="Draft smarter"
            description="Legora draws on precedent to draft, rewrite, and refine your content in Word. It identifies the substance of each document and suggests relevant, ready-to-use language—with you in control of what's approved and applied."
            icon="draft"
            href="/product/word-add-in"
          />
          <FeatureCard
            title="Research deeper"
            description="Access up-to-date information, legal databases, and your DMS content, all within Legora. With partnerships across jurisdictions and integrations with iManage and SharePoint, everything lawyers need is now in one place."
            icon="research"
            href="/product/legal-research"
          />
        </div>
      </div>
    </section>
  );
}
