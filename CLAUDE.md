# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website (aseyq.github.io) built as an Angular 21 SSR/prerendered
application, deployed as a static site to GitHub Pages. Standalone components, SCSS,
Angular Material + FontAwesome. The previous static HTML site is archived under `_old/`.

## Commands

```bash
npm start          # generate papers data, then ng serve at http://localhost:4200
npm run build      # generate papers data, then production ng build -> dist/aseyq-website
npm run generate   # regenerate src/app/data/papers.generated.ts from YAML only
npm test           # run unit tests (Vitest via @angular/build:unit-test)
npx ng test --include src/app/app.spec.ts   # run a single spec file
```

## Papers data pipeline

Publications and works-in-progress are NOT hand-written in TypeScript. The flow is:

1. Each paper is one YAML file in `src/data/papers/` (`pub-*.yaml`, `wip-*.yaml`).
2. `scripts/generate-papers.mjs` reads every `.yaml`/`.yml`, splits them by
   `category` (`publication` vs `wip`), sorts them, and writes
   `src/app/data/papers.generated.ts`.
3. Components import `publications` / `workInProgress` from the generated file.

When changing paper content, **edit the YAML files and run `npm run generate`** (or
`npm start`/`npm run build`, which run it automatically). Never hand-edit
`papers.generated.ts` — it is overwritten. The YAML shape must match the `Paper`
interface in `src/app/components/research/paper-card/paper-card.ts`.

Sorting: publications go by `year` then `month` descending; WIP go by `status`
following `STATUS_ORDER` in the generate script. Adding a new `PaperStatus` requires
updating three places: the `PaperStatus` type and `STATUS_LABEL` in `paper-card.ts`,
and `STATUS_ORDER` in `scripts/generate-papers.mjs`.

## Deployment caveat

`.github/workflows/deploy.yml` runs `npx ng build` directly (NOT `npm run build`), so
it does **not** run the generate step. The deploy relies on `papers.generated.ts` being
committed. After editing paper YAML, commit the regenerated `papers.generated.ts` too,
or the deployed site will be stale. GitHub Pages serves `dist/aseyq-website/browser`
(the prerendered static output).

## Structure notes

- Routing is page-based (`src/app/app.routes.ts`): each top-level section (about,
  research, experience, projects, teaching, contact) is a route. SSR uses full
  prerendering (`app.routes.server.ts`).
- `src/app/site.config.ts` holds a `maintenanceMode` flag/message that `App` reads to
  show a maintenance banner. This file is generally git-untracked/local.
- Browser-only APIs (clipboard, `document`) must be guarded with
  `isPlatformBrowser(PLATFORM_ID)` because of SSR/prerendering — see `paper-card.ts`.
- Static assets live in `public/` (copied to output root); paper cover images are
  referenced as `img/papers/...`.
