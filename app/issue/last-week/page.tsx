'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Terminal,
  Brain,
  Cpu,
  Shield,
  Rocket,
  Code,
  Zap,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Database,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.04 } },
}

interface NewsItem {
  title: string
  summary: string
  impact: 'high' | 'medium' | 'low'
  readTime: string
}

interface Section {
  id: string
  icon: React.ReactNode
  title: string
  color: string
  tagBg: string
  items: NewsItem[]
}

const sections: Section[] = [
  {
    id: 'ai',
    icon: <Brain className="w-4 h-4" />,
    title: 'AI & Machine Learning',
    color: 'text-emerald',
    tagBg: 'bg-emerald/10 text-emerald',
    items: [
      {
        title: 'Google Announces Gemini Ultra 2.0 with Native Multimodal Reasoning',
        summary: 'Gemini Ultra 2.0 processes video, audio, code, and text simultaneously in a single forward pass. Google claims 50% improvement in complex reasoning. Available via Vertex AI and Gemini Advanced subscription.',
        impact: 'high',
        readTime: '4 min',
      },
      {
        title: 'Hugging Face Launches Open LLM Leaderboard v3',
        summary: 'The revamped leaderboard uses harder benchmarks including GPQA Diamond, IFEval, and a new multi-step reasoning suite. Many previously top-ranked models dropped significantly in rankings.',
        impact: 'medium',
        readTime: '2 min',
      },
      {
        title: 'Microsoft Integrates Phi-4 Directly into Windows 12',
        summary: 'Windows 12 ships with a 14B parameter model running locally via NPU. Powers system-wide features: smart file search, email summarization, and a coding assistant built into Terminal.',
        impact: 'high',
        readTime: '4 min',
      },
      {
        title: 'Midjourney v7 Generates 4K Video from Single Prompts',
        summary: 'The image generation company enters the video space. V7 produces 10-second 4K clips with consistent characters and physics. Available to Pro subscribers on web.',
        impact: 'medium',
        readTime: '3 min',
      },
      {
        title: 'EU AI Act Enforcement Officially Begins',
        summary: 'The first penalties for non-compliance are now in effect. Companies deploying high-risk AI systems must register with national authorities. Fines up to 7% of global revenue for violations.',
        impact: 'high',
        readTime: '5 min',
      },
    ],
  },
  {
    id: 'dev',
    icon: <Code className="w-4 h-4" />,
    title: 'Programming & Developer Tools',
    color: 'text-accent',
    tagBg: 'bg-accent/10 text-accent',
    items: [
      {
        title: 'COBOL Gets Official LSP Support from IBM',
        summary: 'IBM releases a full Language Server Protocol implementation for COBOL, bringing modern IDE features (autocomplete, go-to-definition, inline diagnostics) to VS Code and Neovim. Targets the 220B lines of COBOL still in production.',
        impact: 'high',
        readTime: '4 min',
      },
      {
        title: 'React 20 Introduces Server Actions v2 with Optimistic UI Primitives',
        summary: 'The new useOptimistic hook and server action pipelines simplify building real-time collaborative apps. Also ships: built-in form validation, streaming error boundaries, and 40% smaller client bundle.',
        impact: 'high',
        readTime: '5 min',
      },
      {
        title: 'JetBrains Releases Fleet 2.0 — Takes on VS Code',
        summary: 'Fleet 2.0 is fully open-sourced under MIT license. Features include native AI pair programming, remote dev via SSH without a server component, and sub-100ms startup for polyglot projects.',
        impact: 'medium',
        readTime: '3 min',
      },
      {
        title: 'Go 1.24 Adds Iterators and Improved Error Handling',
        summary: 'The range-over-func feature goes stable, enabling custom iterators. A new try() builtin simplifies error handling without abandoning explicit error returns. Community reception is mixed but positive.',
        impact: 'medium',
        readTime: '3 min',
      },
      {
        title: 'Prettier 4.0 Drops JavaScript, Rewrites in Rust',
        summary: 'The code formatter is now 100x faster after a complete Rust rewrite. Formats a 50,000-line file in 12ms. Full backward compatibility with Prettier 3 configs. The team cites OXC and Biome as inspiration.',
        impact: 'medium',
        readTime: '3 min',
      },
    ],
  },
  {
    id: 'infra',
    icon: <Cpu className="w-4 h-4" />,
    title: 'Infrastructure & Databases',
    color: 'text-violet',
    tagBg: 'bg-violet/10 text-violet',
    items: [
      {
        title: 'PostgreSQL 18 Released with Native Sharding',
        summary: 'The biggest Postgres release in a decade. Native horizontal sharding (no extensions needed), columnar storage for analytics workloads, pg_incremental for incremental materialized views, and 3x improvement in JSON query performance.',
        impact: 'high',
        readTime: '6 min',
      },
      {
        title: 'Docker Desktop Goes Free for All Team Sizes',
        summary: 'Docker reverses its controversial 2022 pricing decision. All features are now free for teams of any size. Revenue will come from Docker Hub Pro storage tiers and Docker Scout security scanning.',
        impact: 'high',
        readTime: '3 min',
      },
      {
        title: 'Cloudflare Workers Gains Persistent SQLite — D1 Goes GA',
        summary: 'D1 exits beta with 99.99% availability SLA, read replicas in 50+ regions, and automatic point-in-time recovery. 10GB free tier per database.',
        impact: 'medium',
        readTime: '3 min',
      },
      {
        title: 'HashiCorp Vault Gets Acquired by IBM for $6.4B',
        summary: 'IBM acquires HashiCorp, primarily for Vault and its secrets management platform. Terraform/OpenTofu fork gains momentum as users question IBM\'s open-source track record.',
        impact: 'high',
        readTime: '4 min',
      },
    ],
  },
  {
    id: 'security',
    icon: <Shield className="w-4 h-4" />,
    title: 'Security & Privacy',
    color: 'text-red-400',
    tagBg: 'bg-red-950/50 text-red-400',
    items: [
      {
        title: 'Apple M5 Chip Vulnerability Allows Side-Channel Key Extraction',
        summary: 'Researchers at MIT discover a microarchitectural flaw in M5 chips that leaks cryptographic keys via power analysis. Apple issues firmware mitigation with ~3% performance impact. No known exploits in the wild.',
        impact: 'high',
        readTime: '4 min',
      },
      {
        title: 'Passkeys Reach 2 Billion Accounts Worldwide',
        summary: 'FIDO Alliance reports 2B+ accounts now use passkeys for authentication. Google, Apple, Microsoft, and Amazon account for 80% of adoption. Password-only auth continues declining.',
        impact: 'medium',
        readTime: '2 min',
      },
      {
        title: 'Tor Project Merges with Tails OS',
        summary: 'The two privacy-focused organizations officially merge. The combined entity will focus on a unified privacy OS, easier onion service deployment, and fighting censorship in 40+ countries.',
        impact: 'medium',
        readTime: '3 min',
      },
    ],
  },
  {
    id: 'hardware',
    icon: <Zap className="w-4 h-4" />,
    title: 'Hardware & Chips',
    color: 'text-amber-400',
    tagBg: 'bg-amber-950/50 text-amber-400',
    items: [
      {
        title: 'Apple M5 Chip Benchmarks Leak — 40% Faster Than M4',
        summary: 'Leaked Geekbench 6 scores show single-core: 4,200 and multi-core: 24,800 for the base M5. Built on TSMC 2nm, it also integrates a 40-TOPS NPU for on-device AI workloads.',
        impact: 'high',
        readTime: '3 min',
      },
      {
        title: 'NVIDIA B200 Ships to Hyperscalers — H100 Prices Crater',
        summary: 'B200 GPUs begin shipping to Microsoft, Google, and Meta. Used H100 prices on secondary markets have dropped 60% in two months as supply floods the market.',
        impact: 'high',
        readTime: '3 min',
      },
      {
        title: 'AMD EPYC Turin Launches with 192 Cores',
        summary: 'AMD\'s latest server chip features 192 Zen 6 cores, 384 threads, and 512MB of L3 cache. Cloud providers report 35% better price-performance than previous generation.',
        impact: 'medium',
        readTime: '3 min',
      },
    ],
  },
  {
    id: 'startups',
    icon: <Rocket className="w-4 h-4" />,
    title: 'Startups & Business',
    color: 'text-sky-400',
    tagBg: 'bg-sky-950/50 text-sky-400',
    items: [
      {
        title: 'Figma Acquires Replit for $1.2B',
        summary: 'Figma integrates Replit\'s multiplayer IDE into its platform, enabling designers and developers to collaborate in the same workspace. Code can now be written, tested, and deployed without leaving Figma.',
        impact: 'high',
        readTime: '4 min',
      },
      {
        title: 'Arc Browser Shuts Down, Team Joins Google Chrome',
        summary: 'The Browser Company announces Arc will sunset in 6 months. The 45-person team joins Google to work on Chrome\'s AI features. Existing Arc users will be migrated to Chrome with Arc-like profiles.',
        impact: 'high',
        readTime: '3 min',
      },
      {
        title: 'Notion IPO Filing Reveals $800M ARR',
        summary: 'Notion files S-1 with the SEC. Revenue grew 55% YoY to $800M ARR with 42% net income margins. The company has 35M monthly active users across 100K+ teams.',
        impact: 'medium',
        readTime: '3 min',
      },
    ],
  },
]

function ImpactBadge({ level }: { level: string }) {
  const styles = {
    high: 'bg-red-950 text-red-400 border-red-900',
    medium: 'bg-amber-950 text-amber-400 border-amber-900',
    low: 'bg-neutral-900 text-neutral-400 border-neutral-700',
  }
  return (
    <span className={`inline-flex items-center px-1.5 py-0.5 text-[10px] font-medium rounded border ${styles[level as keyof typeof styles]}`}>
      {level === 'high' && <TrendingUp className="w-2.5 h-2.5 mr-0.5" />}
      {level === 'medium' && <AlertTriangle className="w-2.5 h-2.5 mr-0.5" />}
      {level === 'low' && <CheckCircle className="w-2.5 h-2.5 mr-0.5" />}
      {level}
    </span>
  )
}

export default function LastWeekPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-line">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <Terminal className="w-4 h-4 text-accent" />
            <span className="text-lg font-bold tracking-tight">jas</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-xs text-ink-faint">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="hover:text-ink transition-colors">{s.title.split(' ')[0]}</a>
            ))}
          </div>
          <Link href="/issue/this-week" className="flex items-center gap-1 text-xs text-ink-muted hover:text-emerald transition-colors">
            This Week <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </nav>

      {/* Header */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="pt-24 pb-10 px-6 border-b border-line"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <Link href="/" className="flex items-center gap-1 text-xs text-ink-faint hover:text-ink transition-colors">
              <ArrowLeft className="w-3 h-3" /> Home
            </Link>
            <span className="text-xs text-ink-faint">/</span>
            <span className="text-xs text-ink-muted font-medium">Issue #42</span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium text-violet bg-violet/10 rounded-full">
              Previous
            </span>
            <span className="text-xs text-ink-faint">Apr 21 — Apr 27, 2026</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-ink">
            Last Week in Tech
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-2 text-base text-ink-muted max-w-2xl">
            {sections.reduce((acc, s) => acc + s.items.length, 0)} stories across {sections.length} categories. Gemini Ultra 2.0, PostgreSQL 18, COBOL modernization, and more.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-4 flex flex-wrap gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border border-line hover:border-ink/20 transition-colors ${s.color}`}
              >
                {s.icon}
                {s.items.length}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.header>

      {/* Sections */}
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="px-6 py-12 border-b border-line last:border-b-0">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
                <span className={section.color}>{section.icon}</span>
                <h2 className="text-xl font-bold text-ink">{section.title}</h2>
                <span className="ml-auto text-xs text-ink-faint">{section.items.length} stories</span>
              </motion.div>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    className="p-5 rounded-xl border border-line bg-card hover:shadow-md hover:shadow-accent/5 transition-shadow group cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-semibold text-ink group-hover:text-accent transition-colors leading-snug flex-1">
                        {item.title}
                        <ExternalLink className="w-3 h-3 inline ml-1.5 opacity-0 group-hover:opacity-50 transition-opacity" />
                      </h3>
                      <div className="flex items-center gap-2 shrink-0">
                        <ImpactBadge level={item.impact} />
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                      {item.summary}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-ink-faint">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {item.readTime}
                      </span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${section.tagBg}`}>
                        {section.title.split(' ')[0]}
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Navigation Footer */}
      <div className="px-6 py-10 bg-surface-alt border-t border-line">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <Link href="/issue/this-week" className="flex items-center gap-2 text-sm font-medium text-emerald hover:text-emerald/80 transition-colors">
            This Week&apos;s Issue <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-line">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            <span className="text-sm font-bold">jas</span>
          </div>
          <p className="text-xs text-ink-faint">&copy; {new Date().getFullYear()} jas</p>
        </div>
      </footer>
    </div>
  )
}
