import type { Metadata } from "next";
import Image from "next/image";
import PrintButton from "./PrintButton";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
    title: "Portfolio PDF",
    robots: {
        index: false,
        follow: false,
    },
};

export default function PortfolioPdfPage() {
    const primarySkills = skillCategories.flatMap((category) =>
        category.skills.slice(0, 4).map((skill) => skill.name),
    );

    return (
        <main className="min-h-screen bg-slate-100 text-slate-950 print:bg-white">
            <PrintButton />

            <article className="mx-auto my-8 max-w-5xl bg-white px-8 py-10 shadow-sm print:my-0 print:max-w-none print:px-0 print:py-0 print:shadow-none">
                <header className="grid gap-8 border-b border-slate-200 pb-8 md:grid-cols-[1fr_160px] print:grid-cols-[1fr_120px]">
                    <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                            CV & Portfolio
                        </p>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-950 print:text-3xl">
                            {profile.name}
                        </h1>
                        <p className="mt-2 text-xl font-semibold text-slate-700 print:text-lg">
                            {profile.role}
                        </p>
                        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-700">
                            {profile.bio[0]}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-600">
                            <span>{profile.location}</span>
                            <span>{profile.email}</span>
                            <span>{profile.linkedin}</span>
                            <span>{profile.github}</span>
                        </div>
                    </div>

                    <div className="relative h-40 w-40 overflow-hidden rounded-xl border border-slate-200 print:h-28 print:w-28">
                        <Image
                            src={profile.profileImage}
                            alt={profile.name}
                            fill
                            className="object-cover"
                            sizes="160px"
                            priority
                        />
                    </div>
                </header>

                <PortfolioSection title="Profile">
                    <div className="space-y-3 text-sm leading-6 text-slate-700">
                        {profile.bio.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {profile.strengths.map((strength) => (
                            <span
                                key={strength}
                                className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700"
                            >
                                {strength}
                            </span>
                        ))}
                    </div>
                </PortfolioSection>

                <PortfolioSection title="Experience">
                    <div className="space-y-5">
                        {experiences.map((experience) => (
                            <div key={experience.id} className="break-inside-avoid">
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <h3 className="text-base font-bold text-slate-950">
                                        {experience.title}
                                    </h3>
                                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        {experience.period}
                                    </span>
                                </div>
                                <p className="mt-1 text-sm font-semibold text-slate-700">
                                    {experience.organization}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-700">
                                    {experience.description}
                                </p>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                                    {experience.highlights.slice(0, 4).map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </PortfolioSection>

                <PortfolioSection title="Selected Projects">
                    <div className="space-y-6">
                        {projects.map((project) => (
                            <div key={project.id} className="break-inside-avoid">
                                <div className="grid gap-4 md:grid-cols-[180px_1fr] print:grid-cols-[150px_1fr]">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                                        <Image
                                            src={project.thumbnail}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                            sizes="180px"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                                            <h3 className="text-base font-bold text-slate-950">
                                                {project.title}
                                            </h3>
                                            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                                {project.year} / {project.category}
                                            </span>
                                        </div>
                                        <p className="mt-1 text-sm font-semibold text-slate-700">
                                            {project.subtitle}
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-slate-700">
                                            {project.description}
                                        </p>
                                        <div className="mt-2 flex flex-wrap gap-1.5">
                                            {project.techStack.slice(0, 7).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                                    {project.impact.slice(0, 3).map((impact) => (
                                        <li key={impact}>{impact}</li>
                                    ))}
                                </ul>
                                {project.links && (
                                    <div className="mt-2 space-y-1 text-xs font-medium text-slate-600">
                                        {project.links.map((link) => (
                                            <p key={link.href}>
                                                {link.label}: {link.href}
                                            </p>
                                        ))}
                                    </div>
                                )}
                                <ProjectGalleryPreview
                                    title={project.title}
                                    images={project.gallery}
                                />
                            </div>
                        ))}
                    </div>
                </PortfolioSection>

                <PortfolioSection title="Skills">
                    <div className="grid gap-4 sm:grid-cols-2 print:grid-cols-2">
                        {skillCategories.map((category) => (
                            <div key={category.title} className="break-inside-avoid">
                                <h3 className="text-sm font-bold text-slate-950">
                                    {category.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-slate-700">
                                    {category.skills.map((skill) => skill.name).join(", ")}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-xs leading-5 text-slate-500">
                        Core toolkit: {Array.from(new Set(primarySkills)).slice(0, 18).join(", ")}.
                    </p>
                </PortfolioSection>
            </article>
        </main>
    );
}

function PortfolioSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="border-b border-slate-200 py-7 last:border-b-0 print:break-inside-avoid">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                {title}
            </h2>
            {children}
        </section>
    );
}

function ProjectGalleryPreview({
    title,
    images,
}: {
    title: string;
    images: { src: string; alt: string }[];
}) {
    const previewImages = images.slice(0, 4);

    if (previewImages.length === 0) {
        return null;
    }

    return (
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 print:grid-cols-4">
            {previewImages.map((image) => (
                <figure
                    key={image.src}
                    className="break-inside-avoid overflow-hidden rounded-md border border-slate-200 bg-slate-50"
                >
                    <div className="relative aspect-[4/3]">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="160px"
                        />
                    </div>
                    <figcaption className="truncate px-2 py-1.5 text-[10px] font-medium text-slate-500">
                        {image.alt || title}
                    </figcaption>
                </figure>
            ))}
        </div>
    );
}
