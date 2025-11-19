# Henly Website

Henly is Pakistan's Poultry Marketplace.

## Development

- Install deps: npm install
- Run dev: npm run dev
- Typecheck: npm run typecheck
- Build: npm run build

## SEO

This site includes basic SEO setup:

- Global meta tags in `index.html` (description, theme-color, Open Graph, Twitter).
- Per-page tags via `react-helmet-async` using the `SEO` component in `src/components/SEO.tsx`.
- Robots and sitemap in `public/robots.txt` and `public/sitemap.xml`.
- Social share image at `public/og-image.svg`.

To add a new route:
- Add a `<SEO .../>` to the page component with a unique title and description.
- Add the route URL to `public/sitemap.xml`.
- Ensure internal links reference the new page.

## Production Deployment (Namecheap Shared Hosting)

Simple flow: push to `main` → GitHub Action builds → uploads files via FTP to `public_html`.

### One-time setup
1. Create FTP account in cPanel pointing to `public_html`.
2. Add GitHub repo secrets:
	- `FTP_SERVER` (e.g. server hostname or `ftp.henly.co` after DNS points)
	- `FTP_USERNAME`
	- `FTP_PASSWORD`
	- `DEPLOY_DOMAIN` = `henly.co`
3. Ensure `.htaccess` in `public/` contains SPA rewrite rules (it is already included).
4. (Optional) Keep static pages for compliance: `public/privacy/index.html` & `public/account-deletion/index.html`.

### Manual verification
After first deploy or any major change:
```bash
curl -I https://henly.co/
curl -I https://henly.co/privacy
curl -I https://henly.co/account-deletion
curl -I https://henly.co/sitemap.xml
```
Expect HTTP 200 for all routes.

### Rebuilding locally
```bash
npm ci
npm run build
```
The Vite build outputs to `dist/`. The workflow in `.github/workflows/deploy.yml` will upload that directory.

### Common issues
- 404 on deep link: Check `.htaccess` deployed and not renamed.
- Missing styles: Confirm `assets/` folder uploaded (build creates hashed files).
- FTP failure: Recheck secrets & server host; try server hostname instead of domain until DNS propagates.

