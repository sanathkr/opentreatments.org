# opentreatments.org

The Open Treatments Foundation website. A static site built with
[Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), hosted on Netlify.

**To edit the site, read [CONTRIBUTING.md](CONTRIBUTING.md).** It explains how to add a page,
add a person, and add press coverage without needing to know Astro.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321. The site rebuilds as you save.

| Command           | What it does                                        |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Local dev server with live reload                   |
| `npm run build`   | Build the production site into `dist/`              |
| `npm run preview` | Serve the built site exactly as Netlify will        |
| `npm run check`   | Type-check the project                              |

## How it is laid out

```
src/
  pages/        One file per URL. Adding a file here adds a page.
  layouts/      The page shell — <head>, header, footer.
  components/   Reusable pieces (buttons, person cards, logo grids, forms).
  data/         The content that changes most: people, logos, press, nav.
  assets/images All imagery. Astro optimises and resizes these at build time.
  styles/       Global CSS and the colour/font tokens.
public/         Files served as-is: favicon, redirects.
```

## Deployment

Every push to `main` deploys automatically. Pull requests get their own preview URL.

Form submissions go to **Netlify → Forms**, in three buckets: `waitlist`, `contact`
and `contribute`.
