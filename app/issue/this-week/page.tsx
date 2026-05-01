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
  Globe,
  Zap,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
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
        title: 'OpenAI Ships GPT-5 Turbo with 1M Token Context Window',
        summary: 'The latest model supports up to 1 million tokens of context, enabling entire codebases to be analyzed in a single prompt. Pricing starts at $5/M input tokens — 60% cheaper than GPT-4 Turbo. Early benchmarks show 40% improvement on complex reasoning tasks.',
        impact: 'high',
        readTime: '4 min',
      },
      {
        title: 'Anthropic Releases Claude 4.5 with Native Computer Use',
        summary: 'Claude 4.5 can now operate desktop applications, navigate browsers, and execute multi-step workflows autonomously. The model scored 92% on SWE-bench, up from 79% in the previous version.',
        impact: 'high',
        readTime: '3 min',
      },
      {
        title: 'Meta Open-Sources Llama 4 — 400B Parameters, Fully Open Weights',
        summary: 'Meta continues its open-source AI strategy with Llama 4, a 400B parameter model released under Apache 2.0. It matches GPT-4 on most benchmarks and runs efficiently on 4x H100 nodes.',
        impact: 'high',
        readTime: '4 min',
      },
      {
        title: 'Google DeepMind Solves Protein Folding for RNA',
        summary: 'AlphaFold 4 now predicts RNA structures with near-experimental accuracy. Pharmaceutical companies are already licensing the technology for drug discovery pipelines.',
        impact: 'medium',
        readTime: '3 min',
      },
      {
        title: 'Stability AI Pivots to Enterprise, Shuts Down Consumer Products',
        summary: 'After months of financial trouble, Stability AI has shut down DreamStudio and all consumer offerings. The company is now exclusively focused on B2B API customers with a new $60M funding round.',
        impact: 'medium',
        readTime: '2 min',
      },
      {
        title: 'NVIDIA CUDA Gets Official WebGPU Backend',
        summary: 'ML models can now run CUDA-optimized kernels directly in the browser via WebGPU. This enables client-side inference for models up to 7B parameters without server costs.',
        impact: 'medium',
        readTime: '3 min',
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
        title: 'Rust 1.84 Introduces Async Drop — A Decade-Long Quest Complete',
        summary: 'The most requested Rust feature finally lands. Async destructors allow cleanup of async resources (database connections, file handles, network sockets) without blocking the runtime. This unblocks dozens of ecosystem crates.',
        impact: 'high',
        readTime: '5 min',
      },
      {
        title: 'Deno Acquired by Cloudflare for $420M',
        summary: 'Cloudflare will integrate Deno\'s runtime into Workers, bringing native TypeScript execution, npm compatibility, and Deno\'s permission model to the edge. Ryan Dahl joins as VP of Runtime Engineering.',
        impact: 'high',
        readTime: '4 min',
      },
      {
        title: 'TypeScript 6.0 Released with Full Pattern Matching',
        summary: 'The long-awaited pattern matching RFC ships in TS 6.0. Also includes: improved inference for higher-kinded types, 30% faster type checking, and a new --isolatedModules default.',
        impact: 'high',
        readTime: '4 min',
      },
      {
        title: 'GitHub Copilot Workspace Goes GA, Replaces Pull Requests',
        summary: 'GitHub\'s AI-native development environment is now generally available. Developers describe changes in natural language, and Workspace generates diffs, runs tests, and opens PRs autonomously.',
        impact: 'medium',
        readTime: '3 min',
      },
      {
        title: 'Bun 1.5 Achieves Full Node.js Compatibility',
        summary: 'Bun now passes 99.8% of the Node.js test suite. The remaining 0.2% are intentional deviations. Bun also ships native S3 and Postgres clients built into the runtime.',
        impact: 'medium',
        readTime: '3 min',
      },
    ],
  },
  {
    id: 'infra',
    icon: <Cpu className="w-4 h-4" />,
    title: 'Infrastructure & Cloud',
    color: 'text-violet',
    tagBg: 'bg-violet/10 text-violet',
    items: [
      {
        title: 'Linux 6.14 Merges Real-Time Scheduling by Default',
        summary: 'After 20 years of development, the PREEMPT_RT patch set is fully merged into mainline Linux. This enables deterministic scheduling for robotics, audio, and financial trading workloads without custom kernels.',
        impact: 'high',
        readTime: '5 min',
      },
      {
        title: 'AWS Announces Graviton5 — 2x Performance per Watt',
        summary: 'The fifth-generation ARM chip from AWS delivers 2x performance improvement over Graviton4 for compute-intensive workloads. Available in preview for EC2 M8g and C8g instances.',
        impact: 'high',
        readTime: '3 min',
      },
      {
        title: 'Kubernetes 1.33 Ships with In-Place Pod Resizing GA',
        summary: 'Pods can now be resized without restart. This release also graduates VPA (Vertical Pod Autoscaler) recommendations and introduces native support for GPU time-slicing.',
        impact: 'medium',
        readTime: '3 min',
      },
      {
        title: 'Terraform Forks "OpenTofu" Reaches 1.0 Stable',
        summary: 'The community fork now has feature parity with Terraform 1.7 and adds native state encryption, a new testing framework, and OCI artifact support. Over 200 companies have migrated.',
        impact: 'medium',
        readTime: '3 min',
      },
      {
        title: 'Vercel Ships Edge Middleware v3 with 10ms Cold Starts',
        summary: 'New V8 isolate pooling technology reduces cold starts to under 10ms globally. Also introduces streaming middleware responses and local-first caching primitives.',
        impact: 'low',
        readTime: '2 min',
      },
    ],
  },
  {
    id: 'security',
    icon: <Shield className="w-4 h-4" />,
    title: 'Security & Privacy',
    color: 'text-red-600 dark:text-red-400',
    tagBg: 'bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400',
    items: [
      {
        title: 'npm Supply Chain Attack Affects 15,000 Packages',
        summary: 'A sophisticated attack compromised the npm token of a maintainer with publish access to 47 popular packages. The malicious code exfiltrated environment variables and CI secrets. npm has rotated 2M+ tokens and introduced mandatory 2FA for all publishers.',
        impact: 'high',
        readTime: '6 min',
      },
      {
        title: 'Critical Zero-Day in OpenSSH — Patch Immediately',
        summary: 'CVE-2026-1847 allows unauthenticated remote code execution on OpenSSH servers running versions 9.2-9.8. A fix is available in 9.8p2. CISA has added this to the Known Exploited Vulnerabilities catalog.',
        impact: 'high',
        readTime: '3 min',
      },
      {
        title: 'Signal Protocol Gets Post-Quantum Upgrade',
        summary: 'Signal has begun rolling out PQXDH (Post-Quantum Extended Diffie-Hellman) to all users. Messages are now protected against future quantum computer attacks using ML-KEM-1024.',
        impact: 'medium',
        readTime: '3 min',
      },
      {
        title: 'Chrome Removes Third-Party Cookies for 100% of Users',
        summary: 'After years of delays, Google has finally completed the rollout. The Privacy Sandbox APIs (Topics, Attribution Reporting) are now the only way to do cross-site measurement in Chrome.',
        impact: 'medium',
        readTime: '3 min',
      },
    ],
  },
  {
    id: 'startups',
    icon: <Rocket className="w-4 h-4" />,
    title: 'Startups & Business',
    color: 'text-sky-600 dark:text-sky-400',
    tagBg: 'bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-400',
    items: [
      {
        title: 'Stripe Launches Issuing 2.0 — Full Banking-as-a-Service',
        summary: 'Stripe now offers complete banking infrastructure: checking accounts, wire transfers, and FDIC-insured deposits. Any platform can become a neobank. Already powering 3 Y Combinator companies.',
        impact: 'high',
        readTime: '4 min',
      },
      {
        title: 'Databricks IPO Prices at $58B Valuation',
        summary: 'The largest enterprise software IPO of 2026. Databricks reported $2.8B ARR growing at 45% YoY. The stock opened 22% above IPO price on its first trading day.',
        impact: 'high',
        readTime: '3 min',
      },
      {
        title: 'Linear Raises $150M Series C to Build "The OS for Product Teams"',
        summary: 'The project management tool beloved by startups expands into roadmapping, customer feedback, and analytics. Now serving 30,000 teams including half of YC W26 batch.',
        impact: 'medium',
        readTime: '2 min',
      },
    ],
  },
  {
    id: 'hardware',
    icon: <Zap className="w-4 h-4" />,
    title: 'Hardware & Chips',
    color: 'text-amber-600 dark:text-amber-400',
    tagBg: 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400',
    items: [
      {
        title: 'TSMC 2nm Process Enters Mass Production',
        summary: 'The first 2nm chips will ship in Apple\'s M6 and NVIDIA\'s B300 GPUs later this year. TSMC reports 25% power reduction and 15% performance gain over 3nm at equivalent complexity.',
        impact: 'high',
        readTime: '3 min',
      },
      {
        title: 'Intel Panther Lake Benchmarks: Back in the Game?',
        summary: 'Early Geekbench scores show Intel\'s upcoming Panther Lake matching Apple M4 in single-core and beating it by 20% in multi-core. Intel\'s 18A process node appears to deliver on its promises.',
        impact: 'medium',
        readTime: '3 min',
      },
      {
        title: 'Samsung Unveils 12-Layer HBM4 Memory for AI Accelerators',
        summary: 'The new HBM4 spec delivers 2TB/s bandwidth per stack. NVIDIA and AMD have already secured initial supply for 2027 datacenter GPUs.',
        impact: 'medium',
        readTime: '2 min',
      },
    ],
  },
]

function ImpactBadge({ level }: { level: string }) {
  const styles = {
    high: 'bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-900',
    medium: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-400 dark:border-amber-900',
    low: 'bg-neutral-100 text-neutral-600 border-neutral-200 dark:bg-neutral-900 dark:text-neutral-400 dark:border-neutral-700',
  }
  return (
    <span className={`inline-flex items-center px-1.5 py-0.5 text-xs font-medium rounded border ${styles[level as keyof typeof styles]}`}>
      {level === 'high' && <TrendingUp className="w-2.5 h-2.5 mr-0.5" />}
      {level === 'medium' && <AlertTriangle className="w-2.5 h-2.5 mr-0.5" />}
      {level === 'low' && <CheckCircle className="w-2.5 h-2.5 mr-0.5" />}
      {level}
    </span>
  )
}

export default function ThisWeekPage() {
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
          <Link href="/issue/last-week" className="flex items-center gap-1 text-xs text-ink-muted hover:text-violet transition-colors">
            Last Week <ArrowRight className="w-3 h-3" />
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
            <span className="text-xs text-ink-muted font-medium">Issue #43</span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium text-emerald bg-emerald/10 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" /> Latest
            </span>
            <span className="text-xs text-ink-faint">Apr 28 — May 1, 2026</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-ink">
            This Week in Tech
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-2 text-base text-ink-muted max-w-2xl">
            {sections.reduce((acc, s) => acc + s.items.length, 0)} stories across {sections.length} categories. From GPT-5 to supply chain attacks — here&apos;s everything that happened.
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
                      <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${section.tagBg}`}>
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
          <Link href="/issue/last-week" className="flex items-center gap-2 text-sm font-medium text-violet hover:text-violet/80 transition-colors">
            Last Week&apos;s Issue <ArrowRight className="w-4 h-4" />
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
