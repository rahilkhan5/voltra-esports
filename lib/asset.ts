const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public file path with the deploy base path (GitHub Pages serves from a sub-path). */
export function asset(path: string) {
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function photo(name: string) {
  return asset(`/photos/${name}.jpg`);
}
