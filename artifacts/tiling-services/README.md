# Tiling Services NZ

This is a static React/Vite website for Tiling Services Ltd. It does not
require a server, database, or API to run in production.

## Build locally

From the repository root:

```bash
pnpm install
pnpm build:tiling-services
```

The finished website is written to:

```text
artifacts/tiling-services/dist/public
```

Upload the contents of that folder to any static web host, or connect the
repository to a hosting service and use the settings below.

## Hosting settings

For Netlify, the included `netlify.toml` is ready to use. If entering settings
manually, use:

- Build command: `pnpm --filter @workspace/tiling-services run build`
- Publish directory: `artifacts/tiling-services/dist/public`

For Vercel, the included `vercel.json` is ready to use.

For Cloudflare Pages or another static host:

- Build command: `pnpm --filter @workspace/tiling-services run build`
- Output directory: `artifacts/tiling-services/dist/public`
- Node.js: 20 or newer
- Package manager: pnpm

The repository already includes the required SPA fallback files so direct
visits continue to work if more client-side routes are added later.

## Hosting from a repository subfolder

The default build is for a custom domain or hosting root and uses `/` as its
base path. For GitHub Pages or another host that serves from a subfolder,
provide the subfolder when building:

```bash
BASE_PATH=/your-repository-name/ pnpm --filter @workspace/tiling-services run build
```

Keep the trailing slash in `BASE_PATH`.