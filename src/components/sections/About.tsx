"use client";

import { motion } from "framer-motion";
import { Quote, Zap, Target, Users, Lightbulb } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const values = [
    {
        icon: Target,
        title: "Problem Solver",
        description: "I approach technology as a tool to solve real problems and improve user experiences.",
    },
    {
        icon: Zap,
        title: "Fast Learner",
        description: "Continuously seeking opportunities to improve skills and challenge myself through real-world projects.",
    },
    {
        icon: Users,
        title: "Team Leader",
        description: "Proven leadership in high-pressure environments, from expedition management to software teams.",
    },
    {
        icon: Lightbulb,
        title: "Business-Minded",
        description: "Understanding both the technical and human side of software development for maximum impact.",
    },
];

export default function About() {
    return (
        <section id="about" className="relative py-24 lg:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeading
                    label="About Me"
                    title="More Than a Developer"
                    description="A passionate problem solver who sees technology as a tool to create better experiences and deliver meaningful solutions."
                />

                <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="relative mx-auto max-w-sm lg:max-w-none">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                                <Image
                                    src={profile.casualImage}
                                    alt={`${profile.name} casual`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 384px, 320px"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                            </div>
                            {/* Floating quote card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute -bottom-6 -right-4 left-8 glass-light rounded-xl p-4 sm:-right-8"
                            >
                                <Quote size={18} className="mb-2 text-primary" />
                                <p className="text-sm font-medium italic leading-relaxed text-muted-light">
                                    &ldquo;{profile.philosophy}&rdquo;
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

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

                        {/* Values Grid */}
                        <div className="mt-12 grid gap-4 sm:grid-cols-2">
                            {values.map((value, i) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    className="group rounded-xl border border-border bg-surface-light/50 p-5 transition-all hover:border-primary/20 hover:bg-surface-light"
                                >
                                    <value.icon
                                        size={20}
                                        className="mb-3 text-primary transition-transform group-hover:scale-110"
                                    />
                                    <h3 className="mb-1 text-sm font-semibold text-foreground">
                                        {value.title}
                                    </h3>
                                    <p className="text-xs leading-relaxed text-muted">
                                        {value.description}
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
