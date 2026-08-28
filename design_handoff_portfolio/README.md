# Handoff: IT Undergraduate Portfolio Website

## Overview
A single-page, dark tech/code-editor-themed portfolio site for an IT undergraduate (name: Nadeesha Maduwantha, placeholder). Sections: Hero, About, Skills, Projects, Education, Contact. Fixed top nav with anchor links.

## About the Design Files
The bundled `Portfolio.dc.html` is a **design reference** — an interactive HTML/React prototype built in a proprietary streaming component format, not production code. Do not copy it as-is. **Recreate the design in a real project** using plain HTML/CSS/JS, or React/Next.js/Vite — whichever you prefer for a static portfolio site. If unsure, plain HTML+CSS (or Vite + React) is simplest for a single-page portfolio with no backend.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and layout below are final; recreate pixel-close.

## Global Design Tokens
- Background: `#12141a` (deep charcoal), subtle dot-grid overlay: `radial-gradient(circle, #ffffff0a 1px, transparent 1px)` at `28px 28px`
- Card/panel background: `#181b22`; darker panel (terminal header/code bg): `#0d0f13`
- Borders: `#ffffff14` (subtle), `#ffffff2a` (buttons/outline)
- Text: primary `#e6edf3`, secondary `#c9d1d9`, muted `#9aa4b2`, faint `#6b7280`
- Accent (single, sparing): terminal green `#39ff94`; hover lighten `#6dffb3`; tinted bg `#39ff9414`
- Fonts: headings/labels/code = `JetBrains Mono` (weights 400–700); body = `Inter` (400–600). Load from Google Fonts.
- Radius: 4px (pills/buttons/tags), 6–8px (cards)
- Section padding: `100px` vertical, `6vw` horizontal, max-width `1100px` centered content

## Screens / Sections (all on one page, id-anchored)

### Nav (`#hero` link + sticky bar)
Sticky top, `z-index:50`, translucent bg with `backdrop-filter: blur(8px)`, bottom border `#ffffff14`. Left: logo "nadeesha.dev" (`.dev` in accent green), JetBrains Mono 700 17px. Right: links "01.about / 02.skills / 03.projects / 04.education / 05.contact" (JetBrains Mono 14px, muted color) plus a "resume.pdf" button (outlined, accent green text/border, links to actual resume PDF).

### Hero (`#hero`)
Min-height 88vh, left-aligned, max-width 1100px. Content top-to-bottom: `$ whoami` prompt line (mono, green, gray `$`), Name as H1 (mono, 700, clamp 36–64px), title line "IT Undergraduate | Aspiring DevOps Engineer" (mono, 500, clamp 18–26px, muted, green pipe separator), one-line tagline paragraph (Inter, 17px, muted, max-width 560px), two CTA buttons: solid green "View Projects" (`#39ff94` bg, dark text) and outlined "Contact Me". Buttons scroll to `#projects`/`#contact`. Fade-up entrance animation staggered per element (not required in rebuild, nice-to-have).

### About (`#about`)
Section number "01" + heading "> About". Single card (bg `#181b22`, border, radius 8, padding 36px, max-width 720px) containing a 2–3 sentence bio paragraph mentioning degree (Information Technology & Management), university, and DevOps/systems-engineering interest. Bold the degree name inline.

### Skills (`#skills`)
Section number "02" + heading "> Skills". One card styled as a code editor window: header bar with 3 traffic-light dots (red/amber/green) + filename `skills.yaml`, dark bg. Body is a CSS grid (auto-fit, min 240px) of 4 category blocks, each divided by hairline borders: `languages:`, `devops_tools:`, `databases:`, `frameworks:` (mono, green labels) each followed by a wrapped row of pill tags (mono 13px, light text, subtle bg/border).
Placeholder data: Languages (Java, Python, JavaScript, C, Bash), DevOps Tools (Docker, Kubernetes, Jenkins, GitHub Actions, Terraform), Databases (MySQL, PostgreSQL, MongoDB, Redis), Frameworks (Node.js, Express, React, Spring Boot).

### Projects (`#projects`)
Section number "03" + heading "> Projects". Grid of 3 cards (auto-fit, min 320px), each styled as a mini terminal window: header bar with 3 dots + a fake filename (e.g. `ci-cd-pipeline.yml`). Body: project title (mono 18px), 2–3 line description (Inter, muted), wrapped tech-stack tag row (mono, green tint), and two links "GitHub ↗" / "Live Demo ↗" at the bottom.
Placeholder projects: (1) Automated CI/CD Pipeline — Docker/Jenkins/Kubernetes/AWS; (2) Infrastructure as Code Toolkit — Terraform/AWS/Python; (3) Team Task Tracker — React/Node.js/PostgreSQL.

### Education (`#education`)
Section number "04" + heading "> Education". Single card, left border accent in green (3px), containing: date range (mono, green, e.g. "2022 — 2026"), degree title (Inter 19px 600), university name (muted), then `relevant_coursework:` label followed by wrapped pill tags (Database Systems, Computer Architecture, Operating Systems, Networking, Cloud Computing, Software Engineering).

### Contact (`#contact`)
Section number "05" + heading "> Contact". One-line description of availability. Row of 3 pill-style link buttons (outlined, rounded 6px): email (mailto:), GitHub, LinkedIn — each with a small accent-colored icon glyph and mono label text.

### Footer
Centered, muted, mono, small: `// built by <Name> — <current year>`.

## Interactions & Behavior
- All nav links and hero CTA buttons are anchor scrolls (`<a href="#section">`) — implement smooth scroll (`scroll-behavior: smooth` on html, or JS scrollIntoView).
- Link hover: accent green brightens to `#6dffb3` (apply as global `a:hover`).
- No JS-driven interactivity beyond anchor nav; this is a static site. No contact form (icons/links only per requirements).
- Responsive: below ~768px, nav links should collapse (hide the link list or turn into a hamburger — the design didn't hand-detail mobile nav, use judgment), hero font sizes already use `clamp()`, grids already use `auto-fit`/`minmax` so cards reflow to 1 column on mobile automatically.

## Assets
No images/icons used — decorative dots are pure CSS gradient; traffic-light dots are solid-color circles (div/span with border-radius:50%). No external icon library required (emoji-like unicode glyphs used for mail/github/link/arrow — replace with a proper icon set, e.g. lucide/feather, in production).

## Files
- `Portfolio.dc.html` — full design reference, view in a browser to see the live rendered layout, colors, and copy.
