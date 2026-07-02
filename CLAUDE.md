# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Landing page (marketing site) for **Punto de Partida** — a service that converts a student's school material into an interactive practice app with a specialized tutor. Live at https://puntodepartida.com.ar (GitHub Pages, custom domain via `CNAME`, served from the `main` branch).

All user-facing copy is in **Spanish (Argentina)**, using voseo ("probá", "escribí", "completá"). Keep that voice in any copy changes.

## Development

There is no build system, package manager, linter, or test suite. The entire site is a single self-contained file:

- **`index.html`** — all markup, CSS (one `<style>` block in `<head>`), and JavaScript (one `<script>` block at the end). ~466 lines but ~300 KB, because two JPEG images are embedded as base64 `data:` URIs (lines ~182 and ~303 are each huge single lines — avoid reading those lines whole).
- **`video-presentacion.mp4`** — ~21 MB presentation video referenced by the `#video` section.
- Favicons, `og-image.jpg`, `CNAME`, `README.md` (brand mission/principles), `LICENSE` (MIT).

To preview locally: `python3 -m http.server` in the repo root and open `http://localhost:8000` (or open `index.html` directly). Deployment is just pushing to `main`.

## Page architecture

`index.html` is one scroll page with these `<section>` ids, in order: `hero`, `video`, `problema`, `solucion`, `demos`, `materias`, `faq`, `cta`, plus a footer. Primary conversion action throughout is the WhatsApp link `wa.me/5491123294719` (buttons plus a fixed `.wa-float` bubble).

### Interactive demo (`#demos` + the script block)

The core feature is a phone-mockup demo with three subject tabs. It's driven by two plain JS objects:

- `demos` — content data keyed by subject (`ingles`, `mate`, `historia`). Each subject has `color`, `colorClaro`, `tutorNombre`, and a `pasos` array. A paso can carry a `micro` object (tutor explanation card: `titulo`, `texto`, optional `regla`, `ejemplo`) and/or an exercise with `tipo` one of `mc`, `vf`, `fill`, `orden`, `libre`, plus per-type fields (`opciones`/`correcta`, `aceptadas`, `items`, `correccion.ok`/`correccion.mal`, etc.).
- `est` — runtime state per subject (`idx`, `resp`).

`renderPaso(demo)` rebuilds the exercise DOM into `#body-<demo>` from the current paso; `confirmar`/`skipEj`/`activarDemo` drive progression; element ids follow the pattern `<role>-<demo>` (`prog-ingles`, `conf-mate`, `fin-historia`, ...). To add or edit demo content, edit the `demos` object — the rendering is generic per `tipo`.

### Design system (used consistently across all sections)

- Colors: navy `#15233E` / `#1B2A4A` (dark sections, text), gold `#C19A4B` / hover `#D9B66C` (accents, CTAs), cream `#F4EFE6` (light backgrounds). Each demo subject has its own accent (indigo/green/amber).
- Fonts: Playfair Display (headings, `.titulo`, `.hero-h1`) and Hanken Grotesk (body), loaded from Google Fonts.
- Recurring decorative classes: `.label`, `.divisor`, `.diamond`, `.sec` / `.sec-navy`, `.btn-gold` / `.btn-ghost`.
