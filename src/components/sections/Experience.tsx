"use client";

import { motion } from "framer-motion";
import { Mountain, Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/data/experience";

const typeIcons = {
    leadership: Mountain,
    work: Briefcase,
    education: GraduationCap,
};

const typeColors = {
    leadership: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    work: "text-primary bg-primary/10 border-primary/20",
    education: "text-accent bg-accent/10 border-accent/20",
};

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 lg:py-32">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/3 blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-4xl px-6">
                <SectionHeading
                    label="Experience"
                    title="My Journey"
                    description="From leading international expeditions to building enterprise software — a timeline of growth and impact."
                />

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:left-1/2 md:-translate-x-px" />

                    <div className="space-y-12">
                        {experiences.map((exp, i) => {
                            const Icon = typeIcons[exp.type];
                            const colorClass = typeColors[exp.type];
                            const isLeft = i % 2 === 0;

                            return (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-xl border ${colorClass}`}
                                        >
                                            <Icon size={20} />
                                        </div>
                                    </div>

                                    {/* Content card */}
                                    <div
                                        className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-4" : "md:pl-4"
                                            }`}
                                    >
                                        <div className="group rounded-xl border border-border bg-surface-light/50 p-6 transition-all hover:border-primary/20 hover:bg-surface-light">
                                            <div className="mb-3 flex items-center gap-3">
                                                <span className="rounded-full bg-surface-lighter px-3 py-1 text-xs font-medium text-muted-light">
                                                    {exp.period}
                                                </span>
                                                <span className="text-xs font-medium uppercase tracking-wider text-muted">
                                                    {exp.type}
                                                </span>
                                            </div>

                                            <h3 className="mb-1 text-lg font-bold text-foreground">
                                                {exp.title}
                                            </h3>
                                            <p className="mb-3 text-sm font-medium text-primary">
                                                {exp.organization}
                                            </p>
                                            <p className="mb-4 text-sm leading-relaxed text-muted-light">
                                                {exp.description}
                                            </p>

                                            <ul className="space-y-2">
                                                {exp.highlights.map((h, j) => (
                                                    <li
                                                        key={j}
                                                        className="flex items-start gap-2 text-xs text-muted-light"
                                                    >
                                                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                                                        {h}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
