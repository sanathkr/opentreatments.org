# How to edit the site

Everything here can be done from GitHub in a browser — click a file, click the pencil
icon, make the change, and click **Commit changes**. Netlify rebuilds and publishes
within about a minute. You do not need to install anything.

If you'd rather work locally, run `npm install` once, then `npm run dev`.

---

## Add a new page

1. Copy an existing page in `src/pages/` that looks closest to what you want.
   `src/pages/contribute.astro` is the simplest one to start from.
2. Name the new file after the URL you want. `src/pages/annual-report.astro`
   becomes `opentreatments.org/annual-report`.
3. Change the `title` and `description` at the top — these are what Google shows.
4. Write the content between the `<Section>` tags.

That's it. There is no list of pages to update and no navigation file to touch unless
you want the page in the menu (see below).

### The building blocks

Wrap each band of the page in a `<Section>`. The `theme` sets the background:

```astro
<Section theme="light">
  <h2 class="text-4xl">A heading</h2>
  <p class="mt-6 leading-relaxed">Some words.</p>
</Section>
```

| `theme`   | Background            |
| --------- | --------------------- |
| `white`   | White                 |
| `light`   | Warm off-white        |
| `brand`   | Purple, white text    |
| `slate`   | Dark grey, white text |
| `black`   | Black, white text     |

For a button, use `<Button href="/somewhere">Label</Button>`.

### Put the page in the menu

Open `src/data/site.ts` and add a line to `mainNav`:

```ts
{ label: 'Annual Report', href: '/annual-report' },
```

To nest it under "About Us" instead, add it to that item's `children` list.

---

## Add or remove a person

Open `src/data/people.ts`. There are three lists: `board`, `advisors`, and
`teamGroups`.

1. Add the photo to `src/assets/images/`, named `person-first-last.jpg`.
   Square photos look best — they get cropped to a circle.
2. Add an entry to the right list:

```ts
{
  name: 'Jane Doe',
  title: 'Software Engineer',
  photo: 'person-jane-doe.jpg',
},
```

Board members also take a `bio:` field. Advisors take a `bioUrl:` field, which turns
into the "Read Bio" link.

To remove someone, delete their entry. To reorder people, move the entries around —
they appear in the order they're listed.

---

## Add press coverage

Open `src/data/press.ts`. Add the outlet's logo to `src/assets/images/` as
`logo-outlet-name.png`, then add an entry to `pressReleases`, `news`, or `interviews`:

```ts
{
  title: 'The headline of the article',
  href: 'https://example.com/the-article',
  image: 'logo-example.png',
},
```

---

## Add a collaborator or pilot logo

Open `src/data/logos.ts`. Same pattern — drop the image in `src/assets/images/` and
add a row to `collaborators` or `pilots`.

---

## Change the contact email or footer text

Open `src/data/site.ts`. The `email`, `legal`, and `legalSecondary` values are used
everywhere on the site, so changing them here changes them everywhere.

---

## Forms

There are three forms: the waitlist, the contact form, and the volunteer signup.
Submissions arrive in **Netlify → Forms**, and Netlify emails you when one comes in
(set that up under Forms → Form notifications).

To change the skill checkboxes on the volunteer form, edit the `skills` list at the
top of `src/components/forms/ContributeForm.astro`.

If you add a brand-new form, give it a unique `name`, keep the hidden `form-name`
input matching that name, and keep the `data-netlify="true"` attribute — that's what
tells Netlify to capture it.

---

## Images

Drop images in `src/assets/images/` and reference them by filename. Astro resizes them,
converts them to WebP, and serves the right size for each screen, so it's fine to
upload the full-resolution original.

If you mistype a filename the build fails with a message naming the file it couldn't
find, rather than publishing a broken image.

---

## If something goes wrong

A bad edit fails the build, and **Netlify keeps the previous version live** — the
public site does not break. Go to Netlify → Deploys to read the error, then fix the
file and commit again.

To undo a change entirely, open the commit on GitHub and click **Revert**.
