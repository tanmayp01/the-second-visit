import type { ImageMetadata } from 'astro';

/**
 * Site photographs, looked up by name (for example 'area-welcome').
 *
 * Real photographs go in src/assets/photos/<name>.jpg.
 * Stand-in AI images go in src/assets/photos/temporary/<name>.jpg and are only used
 * while no real photo with the same name exists. `npm run launch-check` fails while
 * the temporary folder still has images in it.
 * If neither exists, the page shows a labelled placeholder with the photo brief.
 *
 * Photos of Deepak himself are never stand-ins: they stay placeholders until real.
 */
const real = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', { eager: true });
const temp = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/temporary/*.{jpg,jpeg,png,webp}', { eager: true });

const byName = (files: Record<string, { default: ImageMetadata }>) =>
  Object.fromEntries(Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace(/\.\w+$/, ''), mod.default]));

const realPhotos = byName(real);
const tempPhotos = byName(temp);

export function photo(name: string): ImageMetadata | undefined {
  return realPhotos[name] ?? tempPhotos[name];
}
