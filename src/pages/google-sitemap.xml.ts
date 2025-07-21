import type { APIRoute } from 'astro';

// より詳細なサイトマップ（Googleサーチコンソール用）
const pages = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.9', changefreq: 'weekly' },
  { url: '/how-to-bet', priority: '0.9', changefreq: 'weekly' },
  { url: '/prediction-basics', priority: '0.9', changefreq: 'weekly' },
  { url: '/enjoyment', priority: '0.8', changefreq: 'weekly' },
  { url: '/glossary', priority: '0.7', changefreq: 'monthly' }
];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages.map(page => `  <url>
    <loc>https://nankan-beginner.keiba.link${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};