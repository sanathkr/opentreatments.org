# Design sources

Working files that are **not** part of the site build.

Nothing in `src/assets/images/` is safe to use as a scratch folder: `src/lib/images.ts`
globs that directory eagerly, so every file in it is emitted into `dist/` and served —
whether or not a page references it. Keep source artwork here instead.

- `favicon-source.png` — the mark the Squarespace site used as its favicon, pulled from
  its CDN. `public/favicon.ico`, `public/favicon-*.png` and `public/apple-touch-icon.png`
  are generated from this.
