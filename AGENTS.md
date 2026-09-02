# AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) and other coding agents when
working with code in this repository.

## Overview

Personal academic website (aseyq.github.io) built as an Angular 21 SSR/prerendered
application and deployed as a static site to GitHub Pages. Standalone components, SCSS,
Angular Material (M3) + FontAwesome. TypeScript is in full strict mode with
`strictTemplates`.

## Commands

```bash
npm start          # generate papers data, then ng serve at http://localhost:4200
npm run build      # generate papers data, then production ng build -> dist/aseyq-website
npm run generate   # regenerate src/app/data/papers.generated.ts from YAML only
npm test           # run unit tests (Vitest via @angular/build:unit-test)
npx ng test --include src/app/app.spec.ts   # run a single spec file
```

There is no lint script; formatting is Prettier (`.prettierrc`: 100 cols, single quotes,
`angular` parser for HTML).

## It is a single-page site, not a routed one

This is the most misleading part of the codebase. `src/app/app.routes.ts` and
`app.routes.server.ts` define per-section routes, but **nothing renders a
`<router-outlet>`**. `App` (`src/app/app.ts` / `app.html`) imports every section component
and stamps them all into one page as `<section id="...">` blocks; `navbar.html` navigates
with `#anchor` hrefs. The router config is effectively dead weight — changing it does not
change the site.

Consequences:

- **Adding or renaming a section touches three places**: the component, a `<section
  id="…" class="page-section">` block in `app.html`, and *both* the desktop `<nav>` and
  the mobile `<mat-menu>` link lists in `navbar.html`.
- The Projects section (`components/projects/`, incl. `expertise-venn`) is **commented out**
  in `app.html` and `navbar.html`. `ExpertiseVenn` is still live — `About` imports it
  directly.
- `Skills` is rendered but has no route entry; that mismatch is harmless because routes
  are unused.

## Papers data pipeline

Publications and works-in-progress are the only content that is *not* hand-written in a
component. The flow:

1. One YAML file per paper in `src/data/papers/` (`pub-*.yaml`, `wip-*.yaml`).
2. `scripts/generate-papers.mjs` reads every `.yaml`/`.yml`, splits on `category`
   (`publication` vs `wip`), sorts, and writes `src/app/data/papers.generated.ts`.
3. `Research` imports `publications` / `workInProgress` from the generated file.

**Edit the YAML and run `npm run generate`** (`npm start` / `npm run build` do it for you).
Never hand-edit `papers.generated.ts` — it is overwritten. The YAML shape must match the
`Paper` interface in `src/app/components/research/paper-card/paper-card.ts`.

Sorting: publications by `year` then `month` descending; WIP by `STATUS_ORDER` in the
generate script. **Adding a new `PaperStatus` requires updating three places**: the
`PaperStatus` union and `STATUS_LABEL` in `paper-card.ts`, and `STATUS_ORDER` in
`scripts/generate-papers.mjs`. A status missing from `STATUS_ORDER` sorts by `indexOf`
`-1`, i.e. silently to the top.

`papers.generated.ts` is committed. CI regenerates it during the build, so a stale copy
will not break the deployed site, but keep it in sync so the diff stays honest.

All other section content (experience, teaching, skills, profile links) lives as typed
arrays inside its own component class — edit those directly.

## Styling

`src/styles.scss` is the design system: a `:root` block of CSS custom properties (brand
palette, `--accent` / `--heading` semantic aliases, spacing/radius/shadow scales,
`--content-max`), then `mat.theme()` followed by hand overrides of `--mat-sys-*` variables
so Material matches the garnet/gold palette. **Component styles should consume the
semantic tokens (`var(--accent)`, `var(--space-3)`, …), not raw hex or `--mat-sys-*`.**
The production build enforces a 4kB warn / 8kB error budget per component stylesheet.

## SSR / prerender constraints

`outputMode: server` with `RenderMode.Prerender` for `**`, and hydration with event
replay. Any `document`, `navigator`, or `window` access must be guarded with
`isPlatformBrowser(inject(PLATFORM_ID))` — see the clipboard code in `paper-card.ts` for
the pattern (including its `document.execCommand` fallback).

## Deployment

`.github/workflows/deploy.yml` runs `npm ci && npm run build` on every push to `main` and
publishes `dist/aseyq-website/browser` (the prerendered static output) to GitHub Pages.
The custom domain comes from `CNAME` (duplicated at `public/CNAME` so it survives the
build).

`src/app/site.config.ts` (tracked) holds a `maintenanceMode` flag and message; when true,
`App` replaces the entire page with a maintenance card.

Static assets live in `public/` and are copied to the output root, so they are referenced
without a leading slash (`img/papers/…`, `img/skills/…`).
