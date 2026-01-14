"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full flex h-16 items-center justify-between" style={{ maxWidth: '1200px', padding: '0 24px' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
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

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Login Button - Desktop - Exact Legora Specs */}
        <div className="hidden items-center gap-4 md:flex">
          <Link 
            href="/login"
            className="inline-flex items-center"
            style={{
              fontSize: '12px',
              fontWeight: 400,
              fontFamily: 'var(--legora-font-ui)',
              color: 'var(--legora-text-primary)',
              padding: '0',
              textAlign: 'left'
            }}
          >
            Log in <span className="ml-1">+</span>
          </Link>
          <Link 
            href="/book-a-demo"
            className="legora-button legora-button-small"
          >
            <span className="button-cta-text">Book a demo</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-2">
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/book-a-demo" onClick={() => setMobileMenuOpen(false)}>
                  Book a demo
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
