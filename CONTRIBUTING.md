# Contributing to jas

Thanks for your interest in contributing! This project is a weekly tech intelligence newsletter — contributions that improve accuracy, add useful tools, or fix bugs are welcome.

## Ways to Contribute

### Report Issues
- **Broken links** — If a source URL returns 404, open an issue
- **Inaccurate data** — Stock prices, dates, or facts that are wrong
- **Typos & formatting** — Quick fixes are always welcome

### Suggest Content
- **Tool ideas** — Interactive calculators or utilities for engineers
- **Section improvements** — Better ways to present data
- **New categories** — Coverage areas we're missing

### Submit Code
- **Bug fixes** — Layout issues, broken interactivity, build errors
- **New tools** — Self-contained interactive engineering utilities
- **Performance** — Lighthouse improvements, accessibility fixes

---

## Development Setup

```bash
git clone https://github.com/jaswindercc/jas.git
cd jas
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

---

## Pull Request Process

1. **Fork** the repo and create a branch from `main`
2. **Make changes** — keep PRs focused on one thing
3. **Test** — run `npm run build` to verify no errors
4. **Submit** — open a PR with a clear description of what changed and why

### PR Guidelines

- Keep commits atomic and messages descriptive
- Don't modify raw research data in `raw/` unless fixing verified errors
- New tools should include JSON-LD structured data (see existing tools)
- News content must follow the [Data Accuracy Policy](#data-accuracy)

---

## Code Style

- **Astro components** — Use `.astro` files with frontmatter for data
- **Tailwind CSS** — Use utility classes, follow existing color token patterns (`text-text`, `bg-bg-card`, `border-border`)
- **No frameworks** — Interactive tools use vanilla `<script>` tags
- **TypeScript** — Use `as const` for union types in data arrays

---

## Data Accuracy

This is non-negotiable for news content:

- Every story must have an **exact article URL** (not publication homepage)
- Unverifiable facts must be excluded or marked `[UNVERIFIED]`
- Stock data must be cross-referenced with financial data sources
- Dates must fall within the stated issue range
- Quality over quantity — always

---

## Adding a New Tool

1. Create `src/pages/tools/your-tool-slug.astro`
2. Follow the existing pattern: Base layout → breadcrumb → h1 → description → interactive card → "How it works" → back link
3. Add JSON-LD `WebApplication` schema in frontmatter
4. Add the tool to the `tools` array in `src/pages/tools/index.astro`
5. Test the build: `npm run build`

---

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
