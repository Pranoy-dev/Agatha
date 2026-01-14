import { SolutionCard } from "@/components/shared/SolutionCard";

export function Solutions() {
  return (
    <section className="legora-section">
      <div className="mx-auto w-full" style={{ maxWidth: '1200px', padding: '0 24px' }}>
        {/* Header Section - Text on left, Large heading on right */}
        <div 
          className="mb-16 grid grid-cols-1 md:[grid-template-columns:1fr_3fr] gap-8 items-start"
        >
          {/* Left side - Descriptive text */}
          <div style={{ textAlign: 'left' }}>
            <p 
              className="mb-4"
              style={{
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '20px',
                fontFamily: 'var(--legora-font-body)',
                color: 'var(--legora-text-primary)'
              }}
            >
              The collaborative Agentic layer is build into employee workflow. The employee receives transparency through the AI system
            </p>
          </div>
          
          {/* Right side - Large heading */}
          <div style={{ textAlign: 'left' }}>
            <h2 
              style={{
                fontSize: 'clamp(32px, 5vw, 64px)',
                fontWeight: 400,
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                fontFamily: 'var(--legora-font-display)',
                color: 'var(--legora-text-primary)'
              }}
            >
              10x organisational productivty through alignment
            </h2>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ textAlign: 'left' }}>
          <SolutionCard
            title="Retain top talent"
            description="Keeping great people starts with understanding why they leave. Agatha detects early signals of disengagement, unmet expectations, and stalled growth, helping leaders intervene early and retain employees longer."
            href="/solutions/retain-talent"
          />
          <SolutionCard
            title="Prevent performance decline"
            description="Performance rarely drops overnight. Agatha identifies early signs of burnout, misalignment, and friction across teams, so leaders can act early and restore momentum before results suffer."
            href="/solutions/prevent-decline"
          />
          <SolutionCard
            title="Guide employee trajectory"
            description="Growth looks different for every employee. Agatha helps leaders understand where people are most likely to grow and succeed, enabling better role alignment, development paths, and long-term engagement."
            href="/solutions/employee-trajectory"
          />
        </div>
      </div>
    </section>
  );
}
