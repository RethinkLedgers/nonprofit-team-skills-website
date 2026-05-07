import type { MetadataRoute } from "next";

const SITE_URL = "https://nonprofit-team-skills-website.vercel.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
  ];
}
