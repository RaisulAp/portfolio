"use client";

import { motion } from "framer-motion";
import {
    Smartphone,
    Server,
    Cpu,
    Layout,
    Database,
    ShieldCheck,
    Layers,
    CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Smartphone,
    Server,
    Cpu,
    Layout,
    Database,
    ShieldCheck,
    Layers,
};

export default function Skills() {
    return (
        <section id="skills" className="relative overflow-hidden py-24 lg:py-32">
            {/* Ambient Background Accents */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/4 right-0 h-[450px] w-[450px] rounded-full bg-primary/4 blur-[140px]" />
                <div className="absolute bottom-10 left-0 h-[400px] w-[400px] rounded-full bg-accent/4 blur-[130px]" />
            </div>

            <div className="relative mx-auto max-w-6xl px-6">
                <SectionHeading
                    label="Technical Expertise"
                    title="Engineering Capabilities & Architecture Stack"
                    description="A structured overview of core technologies, distributed system patterns, and engineering methodologies leveraged to build production-grade enterprise software."
                />

                {/* Symmetrical 3x2 Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, i) => {
                        const Icon = iconMap[category.icon] || Layers;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.45, delay: i * 0.08 }}
                                className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-surface/75 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:bg-surface-light/60 hover:shadow-xl hover:shadow-primary/5"
                            >
                                {/* Subtle top highlight border on hover */}
                                <div className="pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div>
                                    {/* Card Header: Icon & Category Index */}
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/20">
                                            <Icon size={22} />
                                        </div>
                                        <span className="font-mono text-[11px] font-semibold tracking-wider text-muted/70 uppercase">
                                            0{i + 1} // Stack
                                        </span>
                                    </div>

                                    {/* Category Title & Narrative */}
                                    <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                                        {category.title}
                                    </h3>
                                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                                        {category.description}
                                    </p>

                                    {/* Row-Based List with Accent Specialization Tags */}
                                    <div className="mt-5 space-y-1 border-t border-border/50 pt-3">
                                        {category.items.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group/item flex items-center justify-between gap-2.5 rounded-lg border-b border-border/30 px-2.5 py-2 transition-all hover:bg-primary/[0.04] last:border-b-0"
                                            >
                                                <div className="flex min-w-0 flex-1 items-center gap-2">
                                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40 transition-all group-hover/item:scale-125 group-hover/item:bg-primary" />
                                                    <span className="text-xs font-medium leading-snug text-foreground/90 transition-colors group-hover/item:text-foreground">
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <span className="shrink-0 rounded-md border border-primary/20 bg-primary/[0.08] px-2 py-0.5 text-[10.5px] font-medium tracking-wide text-primary transition-colors group-hover/item:border-primary/40 group-hover/item:bg-primary/15">
                                                    {item.tag}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Footer Indicator */}
                                <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-3 text-[11px] text-muted">
                                    <span className="flex items-center gap-1.5">
                                        <CheckCircle2 size={13} className="text-emerald-400" />
                                        <span className="font-medium text-muted-light">Enterprise Ready</span>
                                    </span>
                                    <span className="font-mono text-[10px] text-muted/80">
                                        {category.items.length} Modules
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
