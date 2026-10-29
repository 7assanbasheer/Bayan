import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bayan.law.sa";
  const currentDate = new Date().toISOString();

  const routes = [
    "",
    "/about",
    "/services",
    "/experience",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/services" ? 0.9 : 0.8,
  }));
}
