# jas — Weekly Tech Intelligence Newsletter

A curated weekly newsletter for senior engineers, architects, and tech leaders. Covers macro trends, cloud infrastructure, security vulnerabilities, AI developments, regulatory changes, and developer tooling — all verified and sourced.

**Live at:** [jas.dev](https://jas.dev)

---

## What's Inside

Each weekly issue includes:

| Section | Coverage |
|---------|----------|
| General News | Macro events affecting markets & business |
| Major Tech News | Leadership changes, earnings, strategic moves |
| Security Vulnerabilities | Critical CVEs with patch guidance |
| Cloud & Pricing | AWS / Azure / GCP pricing changes and benchmarks |
| Regulatory Compliance | New laws and enforcement affecting data & AI |
| Open Source Governance | License changes, major forks, foundation moves |
| AI Model Benchmarks | Performance data beyond the hype |
| Developer Tooling | Tools, frameworks, and workflow improvements |
| Legacy Modernization | COBOL, mainframe, and migration progress |
| Sovereign Cloud | Data residency, geopolitical infrastructure |

Plus **10 free interactive engineering tools** — SLA calculator, cloud cost estimator, meeting cost calculator, and more.

---

## Tech Stack

- **[Astro](https://astro.build)** v5 — Static site generation
- **[Tailwind CSS](https://tailwindcss.com)** v4 — Utility-first styling
- **TypeScript** — Type-safe data layer
- **Zero JS by default** — Interactive tools use vanilla `<script>` tags, no framework overhead

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
git clone https://github.com/jaswindercc/jas.git
cd jas
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

### Build for Production

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

---

## Project Structure

```
src/
├── components/       # Reusable Astro components
├── layouts/
│   ├── Base.astro        # HTML shell with SEO, nav, footer
│   └── IssueLayout.astro # Shared template for weekly issues
├── pages/
│   ├── index.astro       # Homepage with issue listing
│   ├── issue/            # Weekly issues (data-only pages)
│   └── tools/            # Interactive engineering tools
└── styles/
    └── global.css        # Tailwind imports & custom tokens
public/                   # Static assets
raw/                      # Raw research data (not published)
```

---

## Adding a New Weekly Issue

1. Create `src/pages/issue/2026-weekNN.astro`
2. Define data arrays (`generalNews`, `majorTechNews`, `sections`, etc.)
3. Pass them to `<IssueLayout>` — the template handles all rendering
4. Add the issue to the `issues` array in `src/pages/index.astro`
5. Update nav links in `src/layouts/Base.astro` to point to the latest

See existing issues for the data schema.

---

## Adding a New Tool

1. Create `src/pages/tools/your-tool-slug.astro`
2. Add the tool entry to the `tools` array in `src/pages/tools/index.astro`
3. Include JSON-LD structured data for SEO (see existing tools for pattern)

---

## Data Accuracy Policy

All news content follows strict verification rules:

- Every story must link to the **exact article URL** (not homepage)
- Unverifiable facts are excluded or marked `[UNVERIFIED]`
- Stock data is cross-checked against financial sources
- Quality over quantity — 5 verified stories > 30 questionable ones

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Submitting new issues or tool ideas
- Reporting broken links or inaccurate data
- Code style and PR process

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). News research uses publicly available sources cited in each issue.
