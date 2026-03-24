# Shashank Agarwal — Architecture Portfolio 2026

A minimal, editorial architecture student portfolio. Static HTML/CSS/JS — no build tools, no frameworks.

---

## Folder Structure

```
portfolio/
├── index.html                 ← main page
├── style.css                  ← all styles
├── script.js                  ← all JS + project data
├── projects/
│   └── PROJECT-TEMPLATE.html  ← copy-paste guide for new projects
├── images/
│   └── (place all images here)
└── files/
    └── (place all PDFs, drawings here)
```

---

## How to Update Content

### Change your name / tagline
Edit `index.html` → hero section.

### Add a new project
1. Open `projects/PROJECT-TEMPLATE.html` and follow the step-by-step instructions.
2. Copy the `<article>` block into `index.html` → `.works-grid`.
3. Add the data object to `PROJECTS = { ... }` in `script.js`.

### Change accent colour
In `style.css`, edit the `:root` block:
```css
--accent:       #B5603A;  /* terracotta */
--accent-light: #D4896A;
--accent-muted: #8C4A2C;
```
Preset options: Muted Gold `#C9A96E` · Deep Blue `#2B4C6F` · Sage `#5E7A5A`

### Replace portrait
Place your photo at `images/portrait.jpg` and uncomment the `<img>` tag in the About section.

### Update social links
Find the `contact-links` section in `index.html` and update `href="#"` on each link.

---

## Running Locally

Simply open `index.html` in a browser — no server needed.

Or use a local server for best results:
```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

---

## Typography

- **Headings**: Cormorant Garamond (Google Fonts)
- **Body**: DM Sans (Google Fonts)
- **Labels/Mono**: DM Mono (Google Fonts)

These load from Google Fonts. An internet connection is required for fonts to render correctly, unless you self-host them.
