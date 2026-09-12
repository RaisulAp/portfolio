"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    Calendar,
    Tag,
    Target,
    AlertTriangle,
    Lightbulb,
    Layers,
    TrendingUp,
    BookOpen,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    X,
    Sparkles,
    Briefcase,
    Mail,
} from "lucide-react";
import { Project, projects } from "@/data/projects";
import { useState, useMemo } from "react";

interface Props {
    project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const isDesktopProject = project.imageOrientation === "desktop";

    const currentIndex = useMemo(() => {
        return projects.findIndex((p) => p.id === project.id);
    }, [project.id]);

    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

    return (
        <>
            {/* Back Navigation */}
            <div className="fixed top-0 left-0 right-0 z-50 glass">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link
                        href="/all-projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-light transition-colors hover:text-foreground"
                    >
                        <ArrowLeft size={16} />
                        Back to Projects
                    </Link>
                    <span className="text-xs font-medium text-muted uppercase tracking-wider">
                        Case Study
                    </span>
                </div>
            </div>

            <main className="pt-24 pb-16">
                {/* Hero */}
                <section className="relative mx-auto max-w-5xl px-6">
                    {/* Hero Showcase Container */}
                    <div className="relative mb-12 w-full overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-surface-light/40 to-surface/20 p-4 sm:p-8 backdrop-blur-md">
                        {/* Ambient Glow di belakang gambar */}
                        <div className="absolute -top-24 left-1/2 -z-10 h-72 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

                        {/* Frame Showcase Responsif */}
                        <div className="relative mx-auto flex h-[260px] sm:h-[380px] md:h-[460px] w-full items-center justify-center">
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                priority
                                sizes="(max-width: 1200px) 100vw, 1200px"
                                className="object-contain object-center drop-shadow-2xl transition-all duration-300"
                            />
                        </div>
                    </div>

                    <div className="relative mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-4 flex flex-wrap items-center gap-2.5">
                                <span className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                    {project.category}
                                </span>
                                {project.role && (
                                    <span className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-light px-3 py-1 text-xs font-medium text-muted-light">
                                        <Briefcase size={12} className="text-primary" />
                                        {project.role}
                                    </span>
                                )}
                                {project.status && (
                                    <span className="rounded-lg border border-border bg-surface-light px-3 py-1 text-xs font-medium text-muted">
                                        {project.status}
                                    </span>
                                )}
                                <span className="flex items-center gap-1.5 text-xs text-muted">
                                    <Calendar size={12} />
                                    {project.year}
                                </span>
                            </div>

                            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                                {project.title}
                            </h1>
                            <p className="mb-4 text-lg text-muted-light sm:text-xl">
                                {project.subtitle}
                            </p>

                            {project.keyMetric && (
                                <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-xs sm:text-sm font-medium text-primary shadow-sm backdrop-blur-md">
                                    <Sparkles size={16} className="shrink-0 text-accent" />
                                    <span>Key Impact: <strong className="font-semibold">{project.keyMetric}</strong></span>
                                </div>
                            )}

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-light px-3 py-1.5 text-xs font-medium text-muted-light"
                                    >
                                        <Tag size={10} />
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {project.links && project.links.length > 0 && (
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {project.links.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                                        >
                                            {link.label}
                                            <ExternalLink size={16} />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </section>

                {/* Content */}
                <div className="mx-auto max-w-4xl px-6 py-16 space-y-16">
                    {/* Overview */}
                    <ContentSection
                        icon={BookOpen}
                        title="Overview"
                        delay={0}
                    >
                        <p className="text-base leading-relaxed text-muted-light sm:text-lg">
                            {project.overview}
                        </p>
                    </ContentSection>

                    {/* Background */}
                    <ContentSection
                        icon={Layers}
                        title="Background"
                        delay={0.05}
                    >
                        <p className="text-base leading-relaxed text-muted-light">
                            {project.background}
                        </p>
                    </ContentSection>

                    {/* Goals */}
                    <ContentSection
                        icon={Target}
                        title="Goals"
                        delay={0.1}
                    >
                        <ul className="space-y-3">
                            {project.goals.map((goal, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-muted-light">
                                    <span className="mt-1.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                                        {i + 1}
                                    </span>
                                    {goal}
                                </li>
                            ))}
                        </ul>
                    </ContentSection>

                    {/* Challenges */}
                    <ContentSection
                        icon={AlertTriangle}
                        title="Challenges"
                        delay={0.15}
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            {project.challenges.map((challenge, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl border border-border bg-surface-light/50 p-5"
                                >
                                    <h4 className="mb-2 text-sm font-semibold text-foreground">
                                        {challenge.title}
                                    </h4>
                                    <p className="text-xs leading-relaxed text-muted-light">
                                        {challenge.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ContentSection>

                    {/* Solutions */}
                    <ContentSection
                        icon={Lightbulb}
                        title="Solutions"
                        delay={0.2}
                    >
                        <ul className="space-y-3">
                            {project.solutions.map((solution, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-muted-light">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                                    {solution}
                                </li>
                            ))}
                        </ul>
                    </ContentSection>

                    {/* Key Features */}
                    <ContentSection
                        icon={Layers}
                        title="Key Features"
                        delay={0.25}
                    >
                        <div className="space-y-4">
                            {project.features.map((feature, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl border border-border bg-surface-light/30 p-5"
                                >
                                    <h4 className="mb-2 text-sm font-semibold text-foreground">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm leading-relaxed text-muted-light">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ContentSection>

                    {/* Impact */}
                    <ContentSection
                        icon={TrendingUp}
                        title="Impact & Results"
                        delay={0.3}
                    >
                        <div className="grid gap-3 sm:grid-cols-2">
                            {project.impact.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 rounded-lg border border-border bg-surface-light/30 p-4"
                                >
                                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                                        ✓
                                    </span>
                                    <span className="text-sm text-muted-light">{item}</span>
                                </div>
                            ))}
                        </div>
                    </ContentSection>

                    {/* Lessons Learned */}
                    <ContentSection
                        icon={BookOpen}
                        title="Lessons Learned"
                        delay={0.35}
                    >
                        <ul className="space-y-3">
                            {project.lessonsLearned.map((lesson, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-muted-light">
                                    <span className="mt-1 text-primary">→</span>
                                    {lesson}
                                </li>
                            ))}
                        </ul>
                    </ContentSection>

                    {/* Gallery */}
                    {project.gallery.length > 0 && (
                        <ContentSection
                            icon={Layers}
                            title="Gallery"
                            delay={0.4}
                        >
                            <div className={`grid gap-4 ${isDesktopProject ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 sm:grid-cols-3"}`}>
                                {project.gallery.map((img, i) => (
                                    <motion.button
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => setLightboxIndex(i)}
                                        className={`group relative overflow-hidden rounded-xl border border-border cursor-pointer bg-surface ${isDesktopProject ? "aspect-video" : "aspect-[4/3]"}`}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className={`${isDesktopProject ? "object-contain" : "object-cover"} transition-transform duration-300 group-hover:scale-105`}
                                            sizes="(max-width: 640px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                                    </motion.button>
                                ))}
                            </div>
                        </ContentSection>
                    )}
                </div>

                {/* Previous & Next Project Navigation */}
                <div className="mx-auto max-w-4xl px-6 pb-16">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                            Project Navigation
                        </span>
                        <Link
                            href="/all-projects"
                            className="text-xs font-medium text-primary hover:underline"
                        >
                            View All ({projects.length})
                        </Link>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {/* Previous */}
                        {prevProject && (
                            <Link
                                href={`/projects/${prevProject.id}`}
                                className="group flex flex-col justify-between rounded-2xl border border-border bg-surface-light/30 p-5 transition-all hover:border-primary/40 hover:bg-surface-light/60 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div>
                                    <div className="mb-2 flex items-center gap-1.5 text-xs text-muted">
                                        <ChevronLeft size={14} className="text-primary transition-transform group-hover:-translate-x-1" />
                                        <span>Previous Project</span>
                                    </div>
                                    <h4 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                                        {prevProject.title}
                                    </h4>
                                    <p className="mt-1 text-xs text-muted-light line-clamp-1">
                                        {prevProject.category}
                                    </p>
                                </div>
                            </Link>
                        )}

                        {/* Next */}
                        {nextProject && (
                            <Link
                                href={`/projects/${nextProject.id}`}
                                className="group flex flex-col justify-between rounded-2xl border border-border bg-surface-light/30 p-5 text-right transition-all hover:border-primary/40 hover:bg-surface-light/60 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div>
                                    <div className="mb-2 flex items-center justify-end gap-1.5 text-xs text-muted">
                                        <span>Next Project</span>
                                        <ChevronRight size={14} className="text-primary transition-transform group-hover:translate-x-1" />
                                    </div>
                                    <h4 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                                        {nextProject.title}
                                    </h4>
                                    <p className="mt-1 text-xs text-muted-light line-clamp-1">
                                        {nextProject.category}
                                    </p>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Conversion CTA Banner */}
                <div className="border-t border-border bg-surface-light/20">
                    <div className="mx-auto max-w-4xl px-6 py-16 text-center">
                        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Sparkles size={24} />
                        </div>
                        <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            Interested in working together?
                        </h3>
                        <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-muted-light sm:text-base">
                            I am currently open to software engineering opportunities, enterprise platform developments, and technical consulting.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                            >
                                <Mail size={16} />
                                Get in Touch
                            </Link>
                            <Link
                                href="/all-projects"
                                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-light/60 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-surface-light"
                            >
                                <ArrowLeft size={16} />
                                Back to All Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={() => setLightboxIndex(null)}
                >
                    <button
                        onClick={() => setLightboxIndex(null)}
                        className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                        <X size={20} />
                    </button>

                    {lightboxIndex > 0 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightboxIndex(lightboxIndex - 1);
                            }}
                            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    )}

                    {lightboxIndex < project.gallery.length - 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightboxIndex(lightboxIndex + 1);
                            }}
                            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                        >
                            <ChevronRight size={20} />
                        </button>
                    )}

                    <div
                        className="relative max-h-[85vh] max-w-[90vw]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={project.gallery[lightboxIndex].src}
                            alt={project.gallery[lightboxIndex].alt}
                            width={1200}
                            height={800}
                            className="max-h-[85vh] w-auto rounded-lg object-contain"
                        />
                        <p className="mt-3 text-center text-sm text-white/70">
                            {project.gallery[lightboxIndex].alt}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

/* Reusable content section wrapper */
function ContentSection({
    icon: Icon,
    title,
    delay,
    children,
}: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    delay: number;
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <Icon size={16} className="text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">{title}</h2>
            </div>
            {children}
        </motion.div>
    );
}
