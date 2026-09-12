"use client";

import { motion } from "framer-motion";
import { Quote, Smartphone, Server, ShieldCheck, Compass } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const engineeringPillars = [
    {
        icon: Smartphone,
        title: "High-Performance Mobile Systems",
        description:
            "Architecting cross-platform Flutter clients with offline-first synchronization, native device geofencing, hardware camera verification, and resilient Xendit payment state flows.",
    },
    {
        icon: Server,
        title: "Scalable Backend & Telemetry Ingestion",
        description:
            "Engineering high-concurrency Golang & Node.js services, time-series GPS location pipelines, modular-monolith hospital backends, and low-latency API architectures.",
    },
    {
        icon: ShieldCheck,
        title: "Business Impact & Incident Elimination",
        description:
            "Diagnosing and resolving critical production concurrency failures, automating manual candidate vetting with cost-aware LLMs, and ensuring statutory PDP data privacy compliance.",
    },
    {
        icon: Compass,
        title: "High-Stakes Alpine Leadership",
        description:
            "Expedition Leader of the ASTACALA Tel-U summit to Mount Elbrus, Russia (5,642m). Bringing sub-zero (-20°C) crisis composure, risk mitigation, and decisive ownership to software engineering.",
    },
];

export default function About() {
    return (
        <section id="about" className="relative py-24 lg:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeading
                    label="Engineering Narrative"
                    title="Architecting for Reliability, Built for Real-World Scale"
                    description="Bridging intuitive mobile experiences with battle-tested backend architecture — backed by the grit of high-altitude alpine leadership."
                />

                <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
                    {/* Sticky Image Column */}
                    <div className="lg:col-span-2">
                        <div className="lg:sticky lg:top-28">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6 }}
                                className="relative mx-auto max-w-sm lg:max-w-none pb-8"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface-light shadow-2xl">
                                    <Image
                                        src={profile.casualImage}
                                        alt={`${profile.name} casual`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 384px, 420px"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />

                                    {/* Active badge */}
                                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-md">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span>System Architect &amp; Alpine Leader</span>
                                    </div>
                                </div>
                                {/* Floating quote card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="absolute -bottom-6 -right-4 left-6 glass-light rounded-xl border border-border/80 p-4 shadow-xl sm:-right-6"
                                >
                                    <Quote size={18} className="mb-2 text-primary" />
                                    <p className="text-sm font-medium italic leading-relaxed text-muted-light">
                                        &ldquo;{profile.philosophy}&rdquo;
                                    </p>
                                    <div className="mt-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-muted">
                                        <span>Creed</span>
                                        <span className="text-primary/90">Mt. Elbrus &apos;24</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <div className="space-y-5">
                            {profile.bio.map((paragraph, i) => (
                                <p key={i} className="text-base leading-relaxed text-muted-light sm:text-lg">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Strengths Tags */}
                        <div className="mt-8 flex flex-wrap gap-2">
                            {profile.strengths.map((strength) => (
                                <span
                                    key={strength}
                                    className="rounded-lg border border-border bg-surface-light px-3 py-1.5 text-xs font-medium text-muted-light"
                                >
                                    {strength}
                                </span>
                            ))}
                        </div>

                        {/* Engineering Pillars Grid */}
                        <div className="mt-12 grid gap-4 sm:grid-cols-2">
                            {engineeringPillars.map((pillar, i) => (
                                <motion.div
                                    key={pillar.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    className="group rounded-xl border border-border bg-surface-light/50 p-5 transition-all hover:border-primary/20 hover:bg-surface-light"
                                >
                                    <pillar.icon
                                        size={22}
                                        className="mb-3 text-primary transition-transform group-hover:scale-110"
                                    />
                                    <h3 className="mb-1 text-sm font-semibold text-foreground">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-xs leading-relaxed text-muted">
                                        {pillar.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
