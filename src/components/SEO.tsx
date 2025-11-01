import { Helmet, HelmetProvider } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  locale?: string;
  canonical?: string;
  robots?: string;
  siteName?: string;
};

export function SEOProvider({ children }: { children: React.ReactNode }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}

export default function SEO({ title, description, url, image = '/og-image.svg', imageAlt = "Henly — Pakistan's Poultry Marketplace", locale = 'en_PK', canonical, robots, siteName = 'Henly' }: SEOProps) {
  const canonicalUrl = canonical || url;
  const resolvedImage = image.startsWith('http') ? image : `${new URL(image, canonicalUrl).toString()}`;
  const imageType = image.endsWith('.svg') ? 'image/svg+xml' : image.endsWith('.png') ? 'image/png' : image.endsWith('.jpg') || image.endsWith('.jpeg') ? 'image/jpeg' : undefined;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {robots ? <meta name="robots" content={robots} /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={resolvedImage} />
      {imageType && <meta property="og:image:type" content={imageType} />}
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content={locale} />
  <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
}
