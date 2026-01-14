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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="mb-4" style={{
            fontFamily: 'var(--legora-font-display)',
            color: 'var(--legora-text-primary)'
          }}>
            <span className="block">Legal work,</span>
            <span className="block">without limits.</span>
          </h1>
        </motion.div>

        {/* Logo Carousel - Positioned between headline and subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <LogoCarousel />
        </motion.div>

        {/* Subheadline - Exact Legora Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            Spend less time on routine, and more time on the work only lawyers
            can do. Legora frees you from admin so you can think sharper, move
            faster, and deliver more for your clients.
          </h3>
        </motion.div>

        {/* CTA Button - Exact Legora Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            href="/book-a-demo"
            className="legora-button"
          >
            <span>Shift focus from admin to expertise</span>
            <span className="pipe-separator">|</span>
            <span className="button-cta-text">Book a demo</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
