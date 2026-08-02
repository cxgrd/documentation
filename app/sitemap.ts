import {MetadataRoute} from "next";

export default function sitemap() : MetadataRoute.Sitemap {
  const baseUrl = "https://docs.cxgrd.com";

  const routes = [
    '',
    '/get-started',
    '/architecture',
    '/team',
    '/commands/auth-login',
    '/commands/check',
    '/commands/config',
    '/commands/doctor',
    '/commands/init-hooks',
    '/commands/input',
    '/commands/prompt',
    '/commands/scan',
    '/commands/watch',
    '/merge-policies',
    '/ai-vs-cxgrd',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes;

}