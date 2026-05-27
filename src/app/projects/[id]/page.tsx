import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: `${project.title} | Raisul Agung Prabankoro`,
            description: project.description,
            images: [{ url: project.thumbnail, width: 1200, height: 630 }],
        },
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return <ProjectDetailClient project={project} />;
}
