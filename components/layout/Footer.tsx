import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto w-full py-12" style={{ maxWidth: '1200px', padding: '48px 24px' }}>
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="Agatha logo"
              style={{
                height: '24px',
                width: 'auto',
                display: 'block'
              }}
            />
            <span 
              className="text-xl font-bold"
              style={{
                fontSize: '24px',
                fontWeight: 700,
                fontFamily: 'var(--legora-font-display)',
                color: 'var(--legora-text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: '1.2'
              }}
            >
              Agatha
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
