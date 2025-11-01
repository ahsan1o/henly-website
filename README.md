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
