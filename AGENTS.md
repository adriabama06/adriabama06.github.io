# Portfolio (Astro)

## Project Overview

Personal portfolio website built with Astro (minimal template). Deployed to GitHub Pages.

- **Framework:** Astro 6.x
- **Package manager:** pnpm
- **Node:** >= 22.12.0
- **Deployment:** GitHub Actions -> GitHub Pages

## Commands

| Command            | Action                           |
| ------------------ | -------------------------------- |
| `pnpm install`     | Install dependencies             |
| `pnpm dev`         | Start dev server at localhost:4321 |
| `pnpm build`       | Build to `./dist/`               |
| `pnpm preview`     | Preview production build locally |

## Architecture

### Single-Component Pattern

The entire site uses a **single component** (`src/components/Portfolio.astro`) that renders all views (home, repositories, videos) based on props. Every page file is a thin wrapper:

```
src/pages/index.astro          -> <Portfolio lang="es" />
src/pages/en.astro             -> <Portfolio lang="en" />
src/pages/ca.astro             -> <Portfolio lang="ca" />
src/pages/repositories.astro   -> <Portfolio lang="es" view="repositories" />
src/pages/videos.astro         -> <Portfolio lang="es" view="videos" />
src/pages/en/repositories.astro -> <Portfolio lang="en" view="repositories" />
...etc
```

### Routing & Localization

- **ES (default):** `/`, `/repositories`, `/videos`
- **EN:** `/en`, `/en/repositories`, `/en/videos`
- **CA:** `/ca`, `/ca/repositories`, `/ca/videos`

The `getPath()` helper inside `Portfolio.astro` handles this:
- For `lang="es"`: paths are root-level (`/`, `/repositories`)
- For `lang="en"` or `lang="ca"`: paths are prefixed (`/en`, `/en/repositories`)

### Content Model

All content is **hardcoded** inside `Portfolio.astro`:

- `translations` object: i18n strings keyed by `{es, en, ca}`
- `repos` array: featured GitHub repos with `{title, url, image, tags, descriptions}`
- `videos` array: featured YouTube videos with `{title, url, image, tags, descriptions}`

All text content supports 3 languages. New content must add translations for all 3.

### CSS Architecture

- **Global styles** (`<style is:global>`): CSS variables, body, scrollbar, global reset
- **Local styles** (`<style>`): Component-specific styles scoped to this file
- Dark theme with CSS variables (`--bg-dark`, `--color-repo`, `--color-video`, etc.)
- Responsive breakpoints: 900px (2-col -> 1-col), 650px (nav stack), 600px (typography)

## Code Conventions

### Adding Content

When adding new repos or videos:

1. Add the entry to the `repos` or `videos` array in `Portfolio.astro`
2. Provide translations for **all 3 languages** in the content fields
3. Ensure images are accessible (YouTube thumbnails via `i.ytimg.com` are fine)

### Adding Languages

To add a new language:

1. Add translation keys to the `translations` object
2. Add the language option to the `lang` prop type: `'es' | 'en' | 'ca' | 'XX'`
3. Add the language button in the nav switcher
4. Create page wrapper files for each route under the new language folder
5. Update `getPath()` to handle the new language prefix

### Adding Views

To add a new view section:

1. Add the view option to the `view` prop type: `'home' | 'repositories' | 'videos' | 'newview'`
2. Add the nav item in the navbar section
3. Add the `{view === 'newview' && (...)}` conditional block
4. Create page wrapper files for each language

### CSS

- Use the existing CSS variable system for colors and spacing
- Follow the existing naming convention: `.section-name-element-name` (BEM-like)
- Hover effects use `cubic-bezier(0.16, 1, 0.3, 1)` for smooth transitions
- Use `translate3d` and `backface-visibility` for GPU-accelerated transforms
- Keep responsive styles in `@media` queries at the bottom of the `<style>` block

### JavaScript

- Inline `<script>` is used only for the Discord copy-to-clipboard feature
- Keep client-side scripts minimal and self-contained
- Use `async/await` for clipboard operations with error handling

## Deployment

- CI/CD via `.github/workflows/pages.yml`
- Triggers on push to `main` or manual dispatch
- Uses Node 24 + pnpm 11
- Builds to `dist/` and deploys as GitHub Pages artifact

## File Structure

```
src/
  components/
    Portfolio.astro        # Single component - all views, all content, all CSS
  pages/
    index.astro            # ES home
    en.astro               # EN home
    ca.astro               # CA home
    repositories.astro     # ES repos
    videos.astro           # ES videos
    en/
      repositories.astro   # EN repos
      videos.astro         # EN videos
    ca/
      repositories.astro   # CA repos
      videos.astro         # CA videos
```

## Important Notes

- **Never** edit `dist/` - it is generated output
- **Never** edit `.astro/` - it contains generated types
- All translations must be kept in sync across ES, EN, and CA
- The component file is large (~1450 lines) due to inline CSS and content - this is intentional. Do not split it unless there is a compelling reason.
- No external CSS framework, no JS framework, no API calls - this is a static site
- The `public/` directory contains only favicon files
