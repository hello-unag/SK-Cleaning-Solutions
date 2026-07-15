import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/design-system',
    },
    sitemap: 'https://skcleaningsolutions.com.au/sitemap.xml',
  };
}
