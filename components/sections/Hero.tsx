"use client";

import Link from "next/link";
import { LogoCarousel } from "@/components/shared/LogoCarousel";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="legora-hero relative flex flex-col items-center justify-center text-center">
      <div className="mx-auto w-full" style={{ maxWidth: '1200px', padding: '0 24px' }}>
        {/* Split Headline - Exact Legora Specs */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="mb-4" style={{
            fontFamily: 'var(--legora-font-display)',
            color: 'var(--legora-text-primary)',
            fontSize: 'clamp(45px, 7vw, 118px)',
            lineHeight: '0.95',
            letterSpacing: '-0.02em'
          }}>
            <span className="block">AI for leaders,</span>
            <span className="block">to decide better</span>
          </h1>
        </motion.div>

        {/* Logo Carousel - Positioned between headline and subtitle */}
        <div className="mb-8">
          <LogoCarousel />
        </div>

        {/* Subheadline - Exact Legora Specs */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="mx-auto max-w-3xl" style={{
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: '26.4px',
            letterSpacing: '-0.24px',
            fontFamily: 'var(--legora-font-display)',
            color: 'var(--legora-text-primary)'
          }}>
            Agatha turns your organization into a connected system, collecting employee intelligence to guide leaders, meet expectations, and predict future trends.
          </h3>
        </motion.div>

        {/* CTA Button - Exact Legora Specs */}
        <div>
          <Link 
            href="/book-a-demo"
            className="legora-button"
          >
            <span>Solve what actually matters</span>
            <span className="pipe-separator">|</span>
            <span className="button-cta-text">Book a demo</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
