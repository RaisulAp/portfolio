"use client";

import { motion } from "framer-motion";
import {
    Monitor,
    Server,
    Smartphone,
    Database,
    Wrench,
    Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Monitor,
    Server,
    Smartphone,
    Database,
    Wrench,
    Users,
};

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 lg:py-32">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/3 blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-6xl px-6">
                <SectionHeading
                    label="Skills"
                    title="Technical"
                    description="A comprehensive toolkit built through real-world projects and continuous learning."
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, i) => {
                        const Icon = iconMap[category.icon] || Monitor;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="group rounded-2xl border border-border bg-surface-light/30 p-6 transition-all hover:border-primary/20 hover:bg-surface-light/60"
                            >
                                {/* Header */}
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="text-base font-bold text-foreground">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Skills */}
                                <div className="space-y-4">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name}>
                                            <div className="mb-1.5 flex items-center justify-between">
                                                <span className="text-sm text-muted-light">
                                                    {skill.name}
                                                </span>
                                                <span className="text-xs font-mono text-muted">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="h-1.5 overflow-hidden rounded-full bg-surface-lighter">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
