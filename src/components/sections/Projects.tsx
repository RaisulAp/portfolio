"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 lg:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeading
                    label="Projects"
                    title="Featured Work"
                    description="Real-world projects that demonstrate my ability to build scalable, user-centric digital solutions."
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link
                                href={`/projects/${project.id}`}
                                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-light/30 transition-all hover:border-primary/20 hover:bg-surface-light/60 hover:shadow-xl hover:shadow-primary/5"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
