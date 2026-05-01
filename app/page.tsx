'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Terminal,
  Calendar,
  Cpu,
  Brain,
  Shield,
  Rocket,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
}

const thisWeekHighlights = [
  'OpenAI ships GPT-5 Turbo with 1M context window',
  'Rust 1.84 introduces async drop',
  'Cloudflare acquires Deno for $420M',
  'Linux 6.14 merges real-time scheduling',
  'npm suffers largest supply chain attack in history',
]

const lastWeekHighlights = [
  'Google announces Gemini Ultra 2.0',
  'COBOL gets official LSP support from IBM',
  'PostgreSQL 18 released with native sharding',
  'Apple M5 chip benchmarks leak',
  'EU AI Act enforcement begins',
]

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-line">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent" />
            <span className="text-lg font-bold tracking-tight">jas</span>
          </div>
          <span className="text-xs text-ink-faint">Weekly Tech Rundown</span>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="pt-28 pb-12 px-6"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.15]">
            Your weekly <span className="text-accent">tech</span> rundown
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-base text-ink-muted max-w-lg mx-auto">
            Emerging tech, legacy systems, security, AI, and everything in between — curated and interactive, every Monday.
          </motion.p>
        </div>
      </motion.section>

      {/* Issue Cards */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {/* This Week */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/issue/this-week" className="block group">
              <div className="rounded-2xl border border-line bg-card p-6 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                    <span className="text-xs font-medium text-emerald">Current Issue</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-ink-faint">
                    <Calendar className="w-3 h-3" />
                    Apr 28 — May 1, 2026
                  </div>
                </div>
                <h2 className="text-xl font-bold text-ink group-hover:text-accent transition-colors">
                  Issue #43 — This Week
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  GPT-5 Turbo, Rust async drop, Cloudflare acquires Deno, and 12 more stories.
                </p>
                <ul className="mt-4 space-y-2">
                  {thisWeekHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent">
                  Read full issue
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Last Week */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Link href="/issue/last-week" className="block group">
              <div className="rounded-2xl border border-line bg-card p-6 hover:border-violet/40 hover:shadow-xl hover:shadow-accent/5 transition-all h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-violet" />
                    <span className="text-xs font-medium text-violet">Previous Issue</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-ink-faint">
                    <Calendar className="w-3 h-3" />
                    Apr 21 — Apr 27, 2026
                  </div>
                </div>
                <h2 className="text-xl font-bold text-ink group-hover:text-violet transition-colors">
                  Issue #42 — Last Week
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Gemini Ultra 2.0, COBOL LSP, PostgreSQL 18 native sharding, and more.
                </p>
                <ul className="mt-4 space-y-2">
                  {lastWeekHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="w-1 h-1 rounded-full bg-violet mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-violet">
                  Read full issue
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Brain className="w-4 h-4" />, label: 'AI & ML', count: '6 stories' },
              { icon: <Cpu className="w-4 h-4" />, label: 'Infrastructure', count: '5 stories' },
              { icon: <Shield className="w-4 h-4" />, label: 'Security', count: '4 stories' },
              { icon: <Rocket className="w-4 h-4" />, label: 'Startups', count: '3 stories' },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-surface-alt border border-line text-center">
                <div className="flex justify-center text-ink-faint mb-2">{s.icon}</div>
                <p className="text-sm font-medium text-ink">{s.label}</p>
                <p className="text-xs text-ink-faint mt-0.5">{s.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-line">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            <span className="text-sm font-bold">jas</span>
          </div>
          <p className="text-xs text-ink-faint">
            &copy; {new Date().getFullYear()} jas. Curated with care, every Monday.
          </p>
        </div>
      </footer>
    </div>
  )
}
