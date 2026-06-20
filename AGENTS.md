# AGENTS.md

## Project Overview

This is **adriabama06's personal portfolio website** — a multilingual, static site built with [Astro](https://astro.build). It showcases repositories, YouTube videos, a career timeline, and social links. The site is deployed to **GitHub Pages** via a CI workflow on every push to `main`.

Live URL: `https://adriabama06.github.io/`

---

## Tech Stack

| Layer        | Technology                                             |
| ------------ | ------------------------------------------------------ |
| Framework    | **Astro v6** (static-site generation, `.astro` files)  |
| Language     | **TypeScript** (strict mode via `astro/tsconfigs/strict`) |
| Styling      | **Vanilla CSS** — a single `src/styles/global.css` with CSS custom properties (design tokens). Components also use scoped `<style>` blocks inside `.astro` files. |
| Font         | **Inter** (loaded via Google Fonts)                     |
| Package Mgr  | **pnpm** (lockfile: `pnpm-lock.yaml`, workspace: `pnpm-workspace.yaml`) |
| Node         | **≥ 22.12.0** (see `package.json` `engines`)           |
| Deployment   | **GitHub Pages** — `.github/workflows/pages.yml` builds with `pnpm build` and deploys `dist/` |

---

## Project Structure

```
/
├── public/                   # Static assets served as-is (favicons, images, SVG icons)
│   ├── images/               # Portfolio card images (avif format preferred)
│   └── *.svg                 # Social/nav SVG icons (arrow, discord, email, github, etc.)
├── src/
│   ├── components/           # Astro components (all .astro)
│   │   ├── Portfolio.astro   # Root layout — HTML shell, head, imports, view routing
│   │   ├── Navbar.astro      # Top navigation bar + mobile sidebar menu
│   │   ├── Hero.astro        # Hero/intro section
│   │   ├── HomeView.astro    # Home page content (hero, featured repos/videos, timeline)
│   │   ├── ReposView.astro   # /repositories subpage
│   │   ├── VideosView.astro  # /videos subpage
│   │   ├── Card.astro        # Reusable card for repo/video items
│   │   ├── Timeline.astro    # Vertical career timeline
│   │   └── Footer.astro      # Social links footer
│   ├── data/
│   │   ├── types.ts          # Shared TypeScript types (Lang, Repo, Video, TimelineItem, etc.)
│   │   ├── translations.ts   # All UI strings for es/en/ca — single source of truth for i18n
│   │   └── content.ts        # Repo and video data arrays
│   ├── lib/                  # (Currently empty — reserved for future utilities)
│   ├── pages/                # File-based routing
│   │   ├── index.astro       # / → Spanish (default language)
│   │   ├── en.astro          # /en → English
│   │   ├── ca.astro          # /ca → Catalan
│   │   ├── repositories.astro
│   │   ├── videos.astro
│   │   ├── en/               # /en/repositories, /en/videos
│   │   └── ca/               # /ca/repositories, /ca/videos
│   ├── styles/
│   │   └── global.css        # Global styles, design tokens, shared utility classes
│   ├── utils/
│   │   └── paths.ts          # getPath() helper for locale-aware URL generation
│   └── env.d.ts              # Astro client type declarations
├── astro.config.mjs          # Astro configuration (base: '/')
├── tsconfig.json             # TypeScript config (extends astro/tsconfigs/strict)
├── package.json
└── pnpm-lock.yaml
```

---

## Internationalization (i18n)

The site supports **three languages**: Spanish (`es`), English (`en`), and Catalan (`ca`).

- **Spanish is the default language** — it is served at the root (`/`).
- English and Catalan are served at `/en` and `/ca` respectively.
- All translatable strings live in `src/data/translations.ts` as a `Record<Lang, { ... }>`.
- The `Lang` type is defined in `src/data/types.ts` as `'es' | 'en' | 'ca'`.
- Use `src/utils/paths.ts` → `getPath(lang, path)` to generate locale-aware URLs. For `es`, paths omit the locale prefix; for `en`/`ca`, paths are prefixed with `/{lang}/`.
- When adding a new UI string, add the key to all three language entries in `translations.ts`.
- When adding a new page, create the base file (for `es`) and corresponding files inside `en/` and `ca/` directories.

---

## Styling Conventions

- **Design tokens** are defined as CSS custom properties in `:root` inside `src/styles/global.css`.
- Key tokens: `--bg-dark`, `--bg-card`, `--border-color`, `--text-main`, `--text-muted`, `--color-repo`, `--color-video`, `--color-theme-a`, `--color-theme-b`, `--font-family`.
- **Component styles** are scoped via `<style>` blocks inside `.astro` files. Prefer scoped styles for component-specific rules.
- **Shared styles** (`.container`, `.subpage-*`, `.back-link-container`, responsive breakpoints) live in `global.css`.
- The design is **dark-mode only** with a subtle grid background and radial gradient accents.
- **Breakpoints**: `900px` (tablet) and `600px` (mobile) are used consistently.
- **No CSS frameworks** (no Tailwind, no Bootstrap). Use vanilla CSS only.

---

## Component Architecture

All components are **Astro components** (`.astro` files) — no client-side framework (React, Vue, etc.) is used.

- `Portfolio.astro` is the root layout. It receives a `lang` prop and an optional `view` prop (`'home' | 'repositories' | 'videos'`), then conditionally renders the appropriate view component.
- Page files in `src/pages/` are thin wrappers that import `Portfolio.astro` and pass the correct `lang` and `view` props.
- Components receive translated strings and data as props rather than importing translations directly (except `Portfolio.astro` which acts as the data provider).
- Client-side JavaScript is embedded as `<script>` tags inside components when needed (e.g., mobile menu toggle, clipboard copy, smooth scrolling).

---

## Content Data

- **Repositories** and **Videos** are defined in `src/data/content.ts` as typed arrays (`Repo[]`, `Video[]`).
- Each entry includes multilingual descriptions via `Record<Lang, string>`.
- Images for cards are stored in `public/images/` (prefer `.avif` format for performance).
- To convert images to avif: `ffmpeg -i FILE -c:v libsvtav1 -preset 0 -svtav1-params tune=0:scenecut=0:avif=1 -frames:v 1 -vf "scale=w=1280:h=720:force_original_aspect_ratio=increase,crop=1280:720" out.avif`

---

## Development

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:4321)
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview
```

---

## Deployment

Deployment is fully automated via GitHub Actions (`.github/workflows/pages.yml`):

1. Triggered on push to `main` or manual dispatch.
2. Uses Node.js 24 + pnpm 11.
3. Runs `pnpm install` → `pnpm build`.
4. Uploads `dist/` to GitHub Pages.

**Do not** manually deploy or modify the `dist/` directory — it is git-ignored and rebuilt on every deploy.

---

## Key Guidelines for AI Agents

1. **No CSS frameworks** — use vanilla CSS with the existing design token system.
2. **No client-side frameworks** — keep everything as Astro components. Use `<script>` tags for interactivity.
3. **Always maintain all three languages** when modifying translatable text or adding new pages/features.
4. **Keep the default language (Spanish) at the root** — do not change the routing convention.
5. **Preserve existing comments and docstrings** unless directly related to the change being made.
6. **Test responsiveness** at the two breakpoints: 900px and 600px.
7. **Use semantic HTML** and maintain accessibility (proper heading hierarchy, alt texts, ARIA labels).
8. **Image format**: prefer `.avif` for new images; store them in `public/images/`.
9. **Type safety**: the project uses TypeScript strict mode — do not use `any` or bypass type checks.
10. **Scoped styles**: prefer `<style>` blocks inside `.astro` components; only add to `global.css` for truly shared styles.
