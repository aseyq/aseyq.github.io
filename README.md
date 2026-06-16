# aseyq.github.io

Personal academic website built with Angular 21 (SSR/prerendered) and deployed as a
static site to GitHub Pages at [aseyq.github.io](https://aseyq.github.io). Uses Angular
Material and FontAwesome.

## Setup

```bash
npm install
```

## Development

```bash
npm start          # regenerates papers data, then serves at http://localhost:4200
```

The app reloads automatically when you change source files.

## Editing papers

Publications and works-in-progress are generated from YAML files, not edited directly
in TypeScript:

1. Edit / add files in `src/data/papers/` (`pub-*.yaml` for publications, `wip-*.yaml`
   for works-in-progress). The fields must match the `Paper` interface in
   `src/app/components/research/paper-card/paper-card.ts`.
2. Regenerate the data:
   ```bash
   npm run generate   # writes src/app/data/papers.generated.ts
   ```
   (`npm start` and `npm run build` run this automatically.)
3. **Commit the regenerated `src/app/data/papers.generated.ts`** along with the YAML —
   the deploy build does not regenerate it (see Deployment below).

## Testing

Unit tests run with [Vitest](https://vitest.dev/) via the Angular build system.

```bash
npm test                                     # run all unit tests
npx ng test --include src/app/app.spec.ts    # run a single spec file
```

## Building

```bash
npm run build      # regenerates papers data, then production build into dist/
```

The static site to deploy is the prerendered browser output in
`dist/aseyq-website/browser`.

## Deployment

Deployment is automatic via GitHub Actions (`.github/workflows/deploy.yml`): every push
to `main` builds the site and publishes `dist/aseyq-website/browser` to GitHub Pages.

> **Note:** the CI workflow runs `npx ng build` directly, which does **not** run the
> papers generate step. Always commit an up-to-date `src/app/data/papers.generated.ts`,
> otherwise the deployed site will show stale paper data.

The custom domain is configured via the `CNAME` file.
