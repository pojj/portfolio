# Portfolio — William Song

A personal portfolio that ships as **thirty completely different designs**. On
every page load one is chosen at random; the Remix button reloads the site into
a different one.

## The thirty designs

| # | Name | Vibe |
|---|------|------|
| 0 | **Midnight** | Dark, blue/indigo glassmorphism. Sleek and product-like. |
| 1 | **Solar** | Light, warm amber, serif editorial/magazine layout. |
| 2 | **Terminal** | Near-black neon-green CLI/hacker theme, fully monospace. |
| 3 | **Brutalist** | Stark cream, thick black borders, hard shadows, primary colors. |
| 4 | **Synthwave** | 80s retro neon — purple/cyan, sunset, perspective grid. |
| 5 | **Swiss** | Monochrome International Typographic Style, red accent, huge type. |
| 6 | **Bento** | Playful pastel rounded bento-box grid. |
| 7 | **Cyber** | Neon pink/cyan, angular HUD panels, glitch effects. |
| 8 | **Aurora** | Vivid animated gradient-mesh behind frosted glass. |
| 9 | **Newspaper** | Print broadsheet — masthead, drop cap, serif columns. |
| 10 | **Blueprint** | Cyan-on-navy technical drafting with title blocks. |
| 11 | **Claymorphism** | Soft 3D puffy pastel shapes with deep soft shadows. |
| 12 | **Y2K Aero** | Glossy aqua/chrome early-2000s window chrome. |
| 13 | **Fashion Noir** | High-contrast B&W serif fashion editorial. |
| 14 | **Forest** | Earthy green serif, calm and botanical. |
| 15 | **Art Deco** | Black & gold geometric 1920s elegance. |
| 16 | **Pop Art** | Halftone comic, bold outlines, speech bubbles. |
| 17 | **Glass Light** | Light frosted iOS-style glassmorphism over color orbs. |
| 18 | **Notebook** | Ruled paper, handwritten font, doodles. |
| 19 | **Mono Noir** | Refined pure-black minimal, geometric. |
| 20 | **Memphis** | 80s Memphis — bold squiggles, clashing primaries, playful shapes. |
| 21 | **Steampunk** | Walnut, brass, and parchment workshop with gauges and rivets. |
| 22 | **Arctic** | Icy blues, frosted panels, angular crystal-cut geometry. |
| 23 | **Lava** | Volcanic dark base with molten orange/red heat accents. |
| 24 | **Pixel Quest** | Retro 16-bit game HUD, chunky pixels, RPG inventory feel. |
| 25 | **Zen** | Calm stone and bamboo palette, generous whitespace, quiet type. |
| 26 | **Classic Mac** | System 7 desktop — striped title bars, draggable windows, menubar. |
| 27 | **Risograph** | Grainy duotone print layers, misregistration, paper texture. |
| 28 | **Cosmic** | Deep space nebula gradients, stars, orbital section layouts. |
| 29 | **Holographic** | Iridescent foil gradients, prismatic type, luminous cards. |

Each design is self-contained (its own layout, copy, ordering, and styles) — they
intentionally share almost nothing beyond the raw facts and a scroll-reveal helper.

### How the random selection works

- An inline script in `src/index.html` picks a design **before first paint**
  (so there's no flash) and sets a `theme-*` class on `<html>`.
- The Remix button picks a *different* design, stashes it in `sessionStorage`,
  and reloads — so the button always visibly changes the site.
- Append `?v=0` … `?v=29` to the URL to force a specific design
  (handy for sharing or screenshots).

### Startup splash

On first visit, a Claude Code–themed intro plays before the site appears; on
later loads a short mascot animation runs instead. Skip anytime with the overlay
controls.

## Sections (per design)

Hero / experience / projects / skills / contact — reworded and reordered to fit
each design's personality (e.g. Terminal frames them as `$ whoami`,
`$ cat experience.log`, `$ ls ~/projects`). Contact is Formspree-powered where
a form is shown; other designs use mailto links.

## Tech

- Angular (NgModule based), no UI framework — custom CSS design systems
- One `VariantService` + thirty self-contained variant components
- Newer designs share facts via `shared/portfolio.data.ts`; each styles/relabels them
- `IntersectionObserver`-based reveal-on-scroll directive (shared)
- Claude Code–themed startup overlay (`app-startup`)

## Develop

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # production build to dist/portfolio-website
```

## Deploy on GitHub Pages

Delete any existing `gh-pages` branch locally and remotely, create a new
`gh-pages` branch from `master`, then on that branch run:

```bash
ng add angular-cli-ghpages
ng deploy --base-href=https://pojj.github.io/portfolio/
```
