import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto w-full py-12" style={{ maxWidth: '1200px', padding: '48px 24px' }}>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* Logo */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span 
                className="text-xl font-bold"
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  fontFamily: 'var(--legora-font-ui)',
                  color: 'var(--legora-text-primary)'
                }}
              >
                Legora
              </span>
            </Link>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/product"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/product/word-add-in"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Word Add-In
                </Link>
              </li>
              <li>
                <Link
                  href="/product/outlook-add-in"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Outlook Add-In
                </Link>
              </li>
              <li>
                <Link
                  href="/product/editor"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Editor
                </Link>
              </li>
              <li>
                <Link
                  href="/product/tabular-review"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tabular Review
                </Link>
              </li>
              <li>
                <Link
                  href="/product/workflows"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Workflows
                </Link>
              </li>
              <li>
                <Link
                  href="/product/legal-research"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Legal Research
                </Link>
              </li>
              <li>
                <Link
                  href="/product/portal"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/solutions/ma"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  M&A
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/litigation"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Litigation
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/banking"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Banking
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/tax"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tax
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/law-firms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Law firms
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/in-house"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  In-house
                </Link>
              </li>
            </ul>
          </div>

          {/* Customers */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Customers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/customers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Join us */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Join us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact us
                </Link>
              </li>
              <li className="flex items-center gap-2 pt-2">
                <Link
                  href="https://www.linkedin.com/company/wearelegora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="https://x.com/WeAreLegora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/legal"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy-policy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/security"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Security Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
