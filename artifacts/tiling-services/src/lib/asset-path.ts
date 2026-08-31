/**
 * Builds a public asset URL that respects Vite's configured base path.
 *
 * This keeps images working on a custom domain as well as hosts that serve
 * the site from a repository subfolder, such as GitHub Pages.
 */
export function assetPath(path: string): string {
  const basePath = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${basePath}${path.replace(/^\/+/, "")}`;
}