"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    label: string;
    title: string;
    description?: string;
}

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
        >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                {label}
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {title}
            </h2>
            {description && (
                <p className="mx-auto max-w-2xl text-base text-muted-light leading-relaxed sm:text-lg">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
