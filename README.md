# kazu0716.github.io

Personal portfolio for **Kazuki Odo** — Staff Software Engineer (MLOps /
Infrastructure) at Turing.

Live: <https://kazu0716.github.io>

## Stack

- [Astro 5](https://astro.build) — static-first site framework
- [React 19](https://react.dev) — components rendered server-side; no
  client-side JavaScript shipped by default
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

Theme: **Atom One Dark**.

## Project structure

```
src/
├── components/             # React (.tsx) section components
├── data/resume.ts          # All portfolio content lives here
├── layouts/Layout.astro
├── pages/
│   ├── index.astro         # Composes the section components
│   └── 404.astro
└── styles/global.css       # Tailwind v4 entry + theme tokens

public/                     # robots.txt, favicon.svg, og.png
scripts/generate-og.mjs     # OG image generator (sharp)
.github/workflows/deploy.yml # Build + deploy to GitHub Pages
```

The site is **data-driven**: to update résumé content (experience, skills,
projects, writing, etc.), edit only [`src/data/resume.ts`](src/data/resume.ts).

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + production build to dist/
npm run preview  # serve the production build
```

## Deployment

Pushing to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which runs
`astro build` and deploys to GitHub Pages via
[`actions/deploy-pages`](https://github.com/actions/deploy-pages).

The Pages source must be set to **GitHub Actions**
(repo *Settings → Pages → Source*).

## Regenerating the OG image

```sh
node scripts/generate-og.mjs
```

The script renders an SVG with `sharp` and writes `public/og.png`
(1200×630).

## Analytics

Google Analytics 4 is loaded only in production builds — see
[`src/layouts/Layout.astro`](src/layouts/Layout.astro).

## License

Code: MIT.
Résumé content (everything in `src/data/resume.ts`) is © Kazuki Odo.
