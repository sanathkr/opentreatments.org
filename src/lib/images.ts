import type { ImageMetadata } from 'astro';

/**
 * Every file in src/assets/images, keyed by path. Astro optimises and hashes
 * these at build time, so we never ship the original multi-megabyte originals.
 */
const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpeg,jpg,png,gif,webp,svg}',
  { eager: true },
);

/**
 * Look up an image by its filename in src/assets/images.
 *
 *   img('person-pam-todd.jpeg')
 *
 * Throws at build time (with the list of near-matches) if the file is missing,
 * so a typo in a data file fails the build instead of shipping a broken image.
 */
export function img(filename: string): ImageMetadata {
  const key = `/src/assets/images/${filename}`;
  const found = images[key];
  if (found) return found.default;

  const stem = filename.replace(/\.[^.]+$/, '').slice(0, 8);
  const near = Object.keys(images)
    .map((k) => k.split('/').pop()!)
    .filter((f) => f.startsWith(stem));

  throw new Error(
    `Image not found: src/assets/images/${filename}\n` +
      (near.length ? `Did you mean: ${near.join(', ')}?` : 'No similarly-named file exists.'),
  );
}
