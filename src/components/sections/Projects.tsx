"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { useState, useMemo } from "react";

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    // Get unique categories
    const categories = useMemo(() => {
        const cats = new Set(projects.map((p) => p.category));
        return ["All", ...Array.from(cats)];
    }, []);

    // Filter and slice projects
    const filteredProjects = useMemo(() => {
        const filtered =
            selectedCategory === "All"
                ? projects
                : projects.filter((p) => p.category === selectedCategory);
        return filtered.slice(0, 6);
    }, [selectedCategory]);

    const hasMoreProjects = projects.length > 6;

    return (
        <section id="projects" className="relative py-24 lg:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeading
                    label="Projects"
                    title="Featured Work"
                    description="Real-world projects that demonstrate my ability to build scalable, user-centric digital solutions."
                />

                {/* Filter Tabs */}
                <div className="mb-10 flex flex-wrap gap-2 md:gap-3">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${selectedCategory === category
                                    ? "border-primary/50 bg-primary/10 text-primary shadow-lg shadow-primary/20"
                                    : "border border-border bg-surface-light/30 text-muted-light hover:border-primary/30 hover:bg-surface-light/60"
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            {(() => {
                                const isDesktop = project.imageOrientation === "desktop";

                                return (
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-light/30 transition-all hover:border-primary/20 hover:bg-surface-light/60 hover:shadow-xl hover:shadow-primary/5"
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                                            <Image
                                                src={project.thumbnail}
                                                alt={project.title}
                                                fill
                                                className={`${isDesktop ? "object-contain p-2" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
                                            {/* Category badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="rounded-lg bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                                                    {project.category}
                                                </span>
                                            </div>
                                            {/* Arrow */}
                                            <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg bg-background/80 text-muted-light opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
                                                <ArrowUpRight size={16} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-1 flex-col p-6">
                                            <div className="mb-2 flex items-center gap-2">
                                                <span className="text-xs text-muted">{project.year}</span>
                                            </div>
                                            <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                                                {project.title}
                                            </h3>
                                            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-light line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Tech stack */}
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.techStack.slice(0, 4).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-md bg-surface-lighter px-2 py-1 text-[10px] font-medium text-muted-light"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.techStack.length > 4 && (
                                                    <span className="rounded-md bg-surface-lighter px-2 py-1 text-[10px] font-medium text-muted">
                                                        +{project.techStack.length - 4}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Footer */}
                                        <div className="border-t border-border px-6 py-3">
                                            <span className="flex items-center gap-2 text-xs font-medium text-primary">
                                                View Case Study
                                                <ExternalLink size={12} />
                                            </span>
                                        </div>
                                    </Link>
                                );
                            })()}
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                {hasMoreProjects && (
                    <motion.div
                        className="mt-12 flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: filteredProjects.length * 0.1 }}
                    >
                        <Link
                            href="/all-projects"
                            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-surface-light/30 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-surface-light/60 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
                        >
                            View All Projects ({projects.length})
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
