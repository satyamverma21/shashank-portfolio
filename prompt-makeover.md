
You are an expert frontend designer and creative technologist. Read the frontend-design SKILL.md at /mnt/skills/public/frontend-design/SKILL.md before writing a single line of code.

## TASK
Completely redesign the architecture portfolio website for Shashank Agarwal (B.Arch 2026) — a full static site using vanilla HTML, CSS, and JavaScript only (no frameworks, no bundlers). The site structure, sections, and content remain the same; ONLY the visual design, layout system, animations, and UI are being overhauled.

---

## AESTHETIC DIRECTION — "Brutalist Blueprint"

Commit fully to this direction: **Raw Architectural Drafting meets Luxury Editorial**. 

Think: the aesthetic of a high-end architectural monograph — Tadao Ando meets Zaha Hadid's drawing style. Heavy use of blueprint-like construction lines, exposed grid geometry, dramatic typography at editorial scale, and a dark-first palette that feels like rendered concrete and oxidized metal under gallery lighting.

### Color Palette (mandatory)
Use these exact CSS variables:
```css
:root {
  --ink:         #0A0A0B;        /* near-black — primary background */
  --graphite:    #111214;        /* card/section backgrounds */
  --oxide:       #1C1C20;        /* surface variant */
  --ash:         #2A2A30;        /* borders, dividers */
  --fog:         #6B6B78;        /* muted text */
  --linen:       #E8E4DC;        /* off-white text, headings */
  --chalk:       #F5F2EC;        /* brightest text */
  --brass:       #C9A84C;        /* PRIMARY ACCENT — gold/brass */
  --brass-light: #E2C06E;        /* hover states */
  --brass-dim:   rgba(201,168,76,0.12); /* glow backgrounds */
  --blueprint:   #1A3A5C;        /* blueprint-blue structural lines */
  --blueprint-line: rgba(44,108,180,0.18); /* grid overlays */
  --concrete:    #3C3C42;        /* secondary surface */
  --red-mark:    #C0392B;        /* annotation red — used sparingly */
}
```

---

## TYPOGRAPHY

- **Display / Hero**: Use `"Cormorant Garamond"` (Google Fonts, weights 300 & 600) — enormous, architectural scale, confident. The h1 should be `clamp(6rem, 14vw, 13rem)`, weight 300, ultra-wide letter-spacing. Italic variant for accent phrases.
- **Sub-headings / Labels**: `"Bebas Neue"` (Google Fonts) — all caps, condensed, structural. Use for section numbers, project types, categories.
- **Body / UI**: `"DM Mono"` (keep from original) — monospace precision for body text, metadata, tags, coordinates. Weight 400.
- **Navigation**: `"Bebas Neue"` at small scale with wide tracking.

Load all via Google Fonts in `<head>`.

---

## LAYOUT SYSTEM

- Establish a **rigid 12-column construction grid** with blueprint-style crosshairs visible as a subtle background overlay (use SVG `<pattern>` or CSS grid lines in `::before` pseudo-elements on sections).
- Use **extreme asymmetry**: hero left column takes 7 cols, right takes 5. Projects alternate between left-heavy and right-heavy layouts.
- **Bleed elements**: Some headings and images should overflow their grid column intentionally — breaking the grid for dynamism.
- **Generous negative space** in a controlled way — sections breathe, but deliberate density clusters around typographic moments.

---

## SECTION-BY-SECTION DESIGN SPECS

### Navigation
- Fixed, full-width. Height: 56px. Background: `rgba(10,10,11,0.92)` with `backdrop-filter: blur(12px)`.
- Left: Logo mark — the monogram "SA" rendered in `Cormorant Garamond` italic + brass color + thin border square around it.
- Center: Nav links in `Bebas Neue`, brass on hover with a sliding underline that comes from left.
- Right: Theme toggle (minimal icon), a "Download CV" pill button in brass outline.
- Bottom border: 1px `var(--ash)`.

### Hero Section
- Full viewport height (100dvh). Background: `var(--ink)`.
- **Blueprint grid overlay**: Render a CSS/SVG grid of fine lines in `var(--blueprint-line)` covering the full hero — like architectural drafting paper in the dark.
- **Large typographic statement**: Name "SHASHANK AGARWAL" in `Cormorant Garamond` weight 300 at full h1 size — it should overflow and be clipped at edges deliberately.
- Beneath it: "B.ARCH · 2026 · NEW DELHI" in `DM Mono`, fog color, small.
- Tagline: "Designing spaces that breathe meaning into material." in `Cormorant Garamond` italic, linen color, large.
- Two CTA buttons: Primary in solid brass; Ghost in brass outline. Both with hover: inverse fill.
- **Animated element**: A large architectural cross/compass rose SVG in top-right, slowly rotating (60s infinite), in blueprint-line color — very subtle, structural.
- Scroll indicator: animated vertical line with a dot that pulses downward.

### Projects Section
- Section header: Large "WORKS" in `Bebas Neue` at display scale. Beside it, a horizontal rule extending full width. Section number "01" in brass at far right.
- Each project module: Full-width horizontal strip. On hover, the strip expands height and the project image transitions from grayscale to color at 20% opacity overlay.
- Left side: Project number (brass, mono), project name (Cormorant Garamond, large), year + type (DM Mono, fog).
- Right side: Tags as outlined brass pills. Arrow icon → rotates 45° on hover.
- A thin 1px `var(--ash)` line separates each project. On hover, this line turns brass.
- **Staggered reveal**: Each project animates in from below with a 0.1s stagger delay as it enters the viewport (IntersectionObserver).

### Project Detail Overlay
- Full screen takeover. Background: `var(--graphite)`.
- Top bar: project number + name + close button (×).
- Meta grid: 4-column data grid with labels in `Bebas Neue` fog and values in `DM Mono` linen.
- Gallery: Masonry-style grid (CSS columns), images with a thin brass border on hover.
- Lightbox: centered, `var(--ink)` background, navigation with brass arrows.

### About Section
- Background: `var(--graphite)`.
- Left column (5 cols): Portrait image (`me.png`) with an architectural **blueprint annotation overlay** — dashed lines pointing to labeled features in `DM Mono` micro-text (e.g., "← precision", "→ vision"). This is achieved with absolute-positioned lines and labels over the image container.
- Right column (7 cols): Bio text in `DM Mono` body, education timeline as a vertical line with brass dot markers and year labels in `Bebas Neue`.
- Skills rendered as horizontal progress bars — thin, brass fill, animated on scroll entry.

### Contact Section
- Background: `var(--ink)`.
- Big brass "LET'S BUILD." heading in `Cormorant Garamond` italic, spanning ~80% width.
- Contact links as large, hoverable rows — each row underlines on hover and shows a → arrow that slides in from left.
- Location shown with a blinking red dot (`var(--red-mark)`) as architectural "site marker".

### Footer
- 1 line. Background: `var(--ash)`. Text in `DM Mono` fog. Copyright left, "Designed & Built by Shashank Agarwal" right.

---

## ANIMATIONS & MICRO-INTERACTIONS

1. **Page load sequence**: Body starts at `opacity:0`. On `DOMContentLoaded`, nav fades in (300ms), then hero text animates up line by line with stagger (each line: `translateY(40px) → 0`, opacity 0→1, 80ms stagger, cubic-bezier(0.16,1,0.3,1) easing).
2. **Scroll reveals**: `.reveal` elements use IntersectionObserver — `translateY(30px) opacity:0` → `translateY(0) opacity:1` over 700ms.
3. **Project strip hover**: `height` smooth expand, image desaturate transition, line color change — all CSS transitions, 400ms.
4. **Blueprint compass**: SVG element in hero, `animation: spin 60s linear infinite`.
5. **Cursor**: Keep the custom cursor concept but redesign it — a small brass crosshair (+) with a thin circle around it. The crosshair rotates 45° on hover over interactive elements.
6. **Nav scroll state**: After 80px scroll, nav background transitions from transparent to `rgba(10,10,11,0.92)`.

---

## TECHNICAL REQUIREMENTS

- Pure HTML + CSS + Vanilla JS — no frameworks, no external JS libraries.
- Google Fonts only for typography (no other CDNs).
- CSS Custom Properties for all design tokens.
- Maintain all existing section IDs (`#home`, `#works`, `#about`, `#contact`) for anchor links.
- Maintain `fetch('projects.json')` data loading pattern with `PROJECTS_FALLBACK` array.
- Dark theme as default. Light theme toggle should produce: `--ink: #F5F2EC`, `--linen: #0A0A0B`, `--graphite: #ECEAE4`, `--brass` stays the same.
- Add `prefers-color-scheme: dark` as the initial detection.
- All images: `loading="lazy"`, and add `aspect-ratio` to prevent layout shift.
- Add ARIA landmarks: `<main>`, `role="navigation"` on `<nav>`, `aria-label` on icon buttons.

---

## DELIVERABLES

Produce:
1. `index.html` — complete redesigned HTML with all sections
2. `style.css` — complete new CSS with all tokens, animations, responsive breakpoints
3. `script.js` — complete JS (project loading, theme toggle, custom cursor, scroll behavior, reveal animations, lightbox, project detail overlay)

All three files should be fully production-ready and interconnected. Do not leave placeholder comments — implement everything.

Start by reading the SKILL.md, then design-think for 2 minutes (comment your aesthetic decisions inline as a CSS block comment at the top of style.css), then build.