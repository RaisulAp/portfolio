import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const projectUrls = projects.map((project) => ({
        url: `${siteUrl}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        ...projectUrls,
    ];
}
