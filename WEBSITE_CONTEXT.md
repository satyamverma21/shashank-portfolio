# WEBSITE_CONTEXT.md

## 1. Website Identity
- **Purpose & domain**: Personal architecture portfolio website for showcasing academic and design projects.
- **Owner**: **Shashank Agarwal**, B.Arch (Class of 2026).
- **Role & personal brand tone**: Aspiring architect; tone blends technical precision with spatial poetry (“Technical Precision meets Spatial Poetry”).
- **Target audience**: Recruiters, potential employers, fellow architects, design enthusiasts, and academic peers.
- **Core message / value proposition**:
  > “Designing spaces that breathe meaning into material. Architecture as a dialogue between site, structure, and silence.”
  (Seen in the hero tagline, `index.html:56‑58`)

## 2. Tech Stack & Architecture
| Aspect | Details |
|--------|---------|
| **Framework** | None – static site built with plain HTML, CSS, and vanilla JavaScript. |
| **Styling approach** | Single `style.css` using CSS Custom Properties (design tokens) and pure CSS (no pre‑processor). |
| **UI libraries / component frameworks** | None. All UI components are handcrafted. |
| **Build tools / bundler** | No bundler at runtime. A Node script `generate-projects.js` generates `projects.json` from the `projects/` folder structure. |
| **Config files** | `generate-projects.js`, optional `project-metadata.json`. |
| **Fonts** | Google Fonts – **DM Mono**, **DM Sans**, **Playfair Display** (loaded via `<link>` in `index.html:15‑19`). |
| **Iconography** | Unicode characters (e.g., ☀️, ☾, arrows) – no external icon libraries. |
| **Data loading** | Projects fetched from `projects.json` via `fetch()` (fallback to hard‑coded `PROJECTS_FALLBACK` in `script.js`). |

## 3. HTML Skeleton & Page Structure
| Section | ID / Class | Description |
|--------|------------|-------------|
| **Navigation** | `<nav class="nav" id="nav">` (lines 26‑43) | Fixed top bar with logo, links (`.nav-links`), theme toggle, mobile toggle. |
| **Hero** | `<section class="hero" id="home">` (lines 45‑71) | Full‑height intro with grid background, title, tagline, CTA buttons, scroll indicator. |
| **Projects** | `<section class="projects section-alt" id="works">` (lines 73‑89) | Header + dynamically populated showcase (`#projectsShowcase`). |
| **Project Detail Overlay** | `<div class="project-detail" id="projectDetail">` (lines 91‑100) | Hidden overlay opened by clicking a project; contains meta, description, gallery, downloads. |
| **About** | `<section class="about" id="about">` (lines 102‑184) | Two‑column grid with portrait and biographical content, timelines, skills. |
| **Contact** | `<section class="contact" id="contact">` (lines 186‑220) | Email, phone, social links, download portfolio, link to works, location marker. |
| **Footer** | `<footer class="footer">` (lines 222‑228) | Copyright & design credit. |
| **Lightbox** | `<div class="lightbox" id="lightbox">` (lines 230‑239) | Modal for enlarged images with navigation controls. |
| **Custom Cursor** | `<div class="custom-cursor" id="customCursor">` (lines 241‑246) | Technical drawing‑style cursor shown on precise pointer devices. |

**Responsive breakpoints** (from `style.css`):
- `@media (max-width: 1024px)`: reduces nav height, hides custom cursor, adjusts grid margins.
- `@media (max-width: 768px)`: hides nav links, shows mobile toggle, stacks hero and projects, adjusts typography sizes.

## 4. Design System (Current State)
### Color palette (CSS variables – `style.css:7‑20`)
| Variable | Value | Usage |
|----------|-------|-------|
| `--off-white` | `#F7F5F0` | Light background, body. |
| `--warm-white` | `#FAF9F5` | Section‑alt background. |
| `--paper` | `#F0EDE5` | Card / gallery backgrounds. |
| `--parchment` | `#E8E4DA` | About section background. |
| `--grid-line` | `rgba(30,58,95,0.08)` | Grid overlays. |
| `--blueprint-bg` | `#E8F4FC` | Light blue UI areas. |
| `--blueprint-dark` | `#1E3A5F` | Dark blue UI (dark theme). |
| `--blueprint-line` | `#2C5282` | Grid lines (dark theme). |
| `--concrete` | `#C8C3BB` | Border / UI accents. |
| `--charcoal` | `#1A1D21` | Primary text (light mode). |
| `--charcoal-light` | `#2D3138` | Slightly lighter text. |
| `--graphite` | `#4A5568` | Nav link hover color. |
| `--mid-gray` | `#718096` | Sub‑text, muted labels. |
| `--light-gray` | `#A0AEC0` | Light‑gray UI elements, scrollbars. |
| `--accent` | `#C75B3A` | Primary accent (terracotta) – buttons, highlights, interactive states. |
| `--accent-light` | `#DD7352` | Hover / active accent variant. |
| `--accent-muted` | `#9B4530` | Darker accent variant. |
| `--accent-pale` | `rgba(199,91,58,0.08)` | Selection background. |

### Typography
- **Font families** (via `:root`):
  - `--font-sans`: *DM Sans* (fallback `Inter`, system UI).
  - `--font-serif`: *Playfair Display* (fallback `Georgia`).
  - `--font-mono`: *DM Mono* (fallback `SF Mono`, `Consolas`).
- **Scale** (selected selectors):
  - `h1` – clamp(4rem,12vw,11rem), weight 500.
  - `h2` – clamp(2.5rem,5vw,4.5rem).
  - `h3` – clamp(1.5rem,2.5vw,2rem).
  - `h4` – 1rem, mono, uppercase.
  - Body – 15px, line‑height 1.7, `var(--charcoal)`.
  - Buttons – 0.7rem, mono, uppercase.
- **Spacing scale** (`--space-xs` … `--space-3xl`) used throughout layout.

### Layout & Spacing
- 12‑column grid (`--grid-columns: 12`) with `gap: var(--grid-gap) = 24px`.
- Max content width `--max-width: 1440px`.
- Consistent padding/margin via spacing tokens (`var(--space-md)`, etc.).

### Borders, Shadows & Animations
- Borders: 1px solid using `var(--grid-line)` or `var(--charcoal)`.
- Shadows: e.g., `box-shadow: 0 20px 60px rgba(30,58,95,0.08)` on project modules.
- Animations:
  - Easing vars: `--ease-smooth`, `--ease-reveal`, `--ease-architect`.
  - Durations: `--duration-slow: .8s`, `--duration-base: .5s`, `--duration-fast: .25s`.
  - Keyframes: `heroFloat`, `fadeInUp`, `scrollPulse`, `pulse` (location marker).
  - Reveal animations via `.reveal` classes combined with IntersectionObserver in JS.
- **Design tokens**: All colors, fonts, spacing, grid settings, and easings are declared as CSS custom properties at the top of `style.css` and referenced throughout.

## 5. Components Inventory
| Component | Selector(s) | Purpose | Interactive? |
|-----------|-------------|---------|--------------|
| **Nav Bar** | `.nav`, `.nav-links`, `.nav-logo`, `.theme-toggle`, `.nav-mobile-toggle` | Site navigation, theme switch, mobile menu. | Yes (theme toggle, mobile menu). |
| **Hero** | `.hero`, `.hero-grid-bg`, `.hero-content`, `.hero-left`, `.hero-right`, `.hero-cta` | Intro/branding area. | No (static aside from scroll animation). |
| **Button** | `.btn`, `.btn-primary`, `.btn-ghost` | CTA styling. | Yes (hover effects). |
| **Project Module** | `.project-module`, `.project-module-content`, `.project-number`, `.project-name`, `.project-desc`, `.project-tags`, `.project-arrow`, `.project-module-image` | Grid item representing a project. | Yes (click opens detail overlay). |
| **Project Detail Overlay** | `#projectDetail`, `.project-detail-content`, `.project-detail-meta`, `.project-gallery` | Full‑screen project view with meta, description, specs, gallery, downloads. | Yes (close, lightbox, navigation). |
| **Timeline** | `.timeline`, `.timeline-item`, `.timeline-year` | Education & achievements list. | No. |
| **Contact Block** | `.contact`, `.contact-links`, `.contact-link`, `.contact-location` | Contact methods, social links, download CTA. | Yes (links, download). |
| **Footer** | `.footer`, `.footer-content` | Site footer. | No. |
| **Lightbox** | `.lightbox`, `.lightbox-content`, navigation buttons | Image enlargement modal. | Yes (next/prev, close). |
| **Custom Cursor** | `.custom-cursor`, `.cursor-outer`, `.cursor-inner`, `.cursor-corners` | Technical drawing‑style cursor. | Yes (hover / clicking states). |
| **Gallery** | `.gallery-grid`, `.gallery-item`, `.gallery-item-image`, `.gallery-info-bar` | Image grid inside project detail. | Yes (open lightbox). |
| **Reveal / Scroll Animation** | `.reveal`, `.reveal-left`, `.reveal-scale` (JS adds `.visible`) | Animate elements on scroll. | No (visual only). |

**Hardcoded vs Dynamic**
- Hardcoded: static HTML sections (hero, about, contact, footer).
- Dynamic: project showcase and detail overlay content generated from `projects.json` via `script.js`.
- The template file (`PROJECT‑TEMPLATE.html`) shows a manual card example (`.project-card`) but the runtime component uses `.project-module`.

## 6. Content Inventory
- **Hero**: Name “Shashank Agarwal”, title “Architecture Portfolio 2026”, tagline, two CTA buttons (View Works → `#works`, Download Portfolio PDF).
- **About**: Portrait (`me.png`), two bio paragraphs, education timeline (2021‑2026), skills & software timeline (Design, Software, Soft Skills).
- **Projects**: 5 projects (project1‑project5) each with title, subtitle, year, type, location, tools, area, description, details, hero image, image gallery, downloadable PDFs where applicable (see `projects.json`).
- **Contact**: Email `shashankagarwal8755@gmail.com`, phone `+91 72499 70010`, Instagram link, portfolio PDF download, link to works section, location text.
- **Assets**: Images in `projects/*/img/`, PDFs in `projects/*/download/`, additional PDFs in `files/`, favicon `transparent-logo.svg`.
- **External links**: Google Fonts, Instagram, Mailto link, downloadable PDFs.

## 7. Pain Points & UI Debt
| Issue | Details | Impact |
|-------|---------|--------|
| **Color contrast** | `--mid-gray` (`#718096`) on `--off-white` (`#F7F5F0`) may not meet WCAG AA contrast for body text. | Reduced readability for low‑vision users. |
| **Hard‑coded colors / gradients** | Several gradients/hard‑coded color values (e.g., hero background, overlay gradients) are not tokenized. | Makes global theming difficult. |
| **Duplicate IntersectionObserver code** | `initReveal` and `initRevealDynamic` contain almost identical logic. | Maintenance overhead, risk of divergence. |
| **Custom cursor** | Overrides default cursor and hides it on precise devices; may confuse users and break accessibility expectations. | Potential usability issue, especially for keyboard‑only navigation. |
| **Fixed dimensions** | Hero logo max‑width (`380px`) and project image min‑height (`300px`) are fixed. | May overflow or look cramped on very small viewports. |
| **Missing ARIA landmarks** | `<nav>` lacks `role="navigation"`; no `<main>` wrapper. | Screen‑reader navigation less explicit. |
| **Lazy loading** | Images are loaded eagerly; large galleries can slow initial page load. | Performance hit on first load. |
| **Unicode icon accessibility** | Icons (☀, ☾, ↗) have no explicit `aria-label`. | Screen readers may not convey meaning. |
| **Template divergence** | `PROJECT‑TEMPLATE.html` uses `.project-card` while runtime uses `.project-module`. | Confusing for contributors. |
| **Static asset paths** | JS fetches `'projects.json'` relative to current location; may break if site is deployed under a sub‑directory. | Deployment risk. |

## 8. Redesign Opportunities
- **Tokenize all colors & gradients**: Move every colour/gradient into CSS variables (or a separate `design‑tokens.css`) to enable easy palette swaps. |
- **Component abstraction**: Create reusable component classes (e.g., `.card`, `.btn--primary`) and replace duplicated markup. |
- **Consolidate IntersectionObserver**: Refactor `initReveal` + `initRevealDynamic` into a shared utility function. |
- **Accessibility upgrades**:
  - Add `role="navigation"` to `<nav>` and wrap main content in `<main role="main">`.
  - Provide descriptive `aria-label`s for Unicode icons or replace with SVG icons with appropriate `aria-hidden`.
  - Verify contrast ratios (use WCAG contrast tools) and adjust `--mid-gray` or background colors as needed. |
- **Responsive refinement**: Replace fixed pixel sizes with relative units (`clamp`, `vw`, `vh`). |
- **Performance enhancements**: Enable native lazy‑loading (`loading="lazy"`) on `<img>`, serve WebP where possible, and consider CDN for static assets. |
- **Optional custom cursor**: Add a user setting or media query to disable the custom cursor for accessibility‑focused users. |
- **Static‑site generation**: Migrate to a lightweight generator (e.g., Eleventy) to pre‑render project pages, improve SEO, and simplify data handling. |
- **Design system documentation**: Extract the CSS tokens into a dedicated file and generate a living style guide for future contributors. |
- **Consistent naming**: Align the template class (`project-card`) with the runtime component (`project-module`) or replace the template with a proper snippet. |
- **SEO meta tags**: Add `<meta name="description">`, Open Graph tags, and structured data (`JSON‑LD`) for each project. |
- **Theme persistence**: Keep the existing toggle but also respect `prefers-color-scheme` on first visit and store the choice in `localStorage`. |

*All references (class names, IDs, line numbers) correspond to the current codebase as of the latest commit.*
