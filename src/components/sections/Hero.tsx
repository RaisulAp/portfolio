"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0">
                {/* Gradient orbs */}
                <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
                {/* Dot pattern */}
                <div className="absolute inset-0 dot-pattern opacity-40" />
                {/* Top gradient fade */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-32 lg:flex-row lg:gap-20 lg:py-0">
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-light/50 px-4 py-2 text-sm text-muted-light">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            Available for opportunities
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        Hi, I&apos;m{" "}
                        <span className="gradient-text">{profile.shortName}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-2 text-xl font-medium text-muted-light sm:text-2xl"
                    >
                        {profile.role}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-4 flex items-center justify-center gap-1.5 text-sm text-muted lg:justify-start"
                    >
                        <MapPin size={14} />
                        {profile.location} · {profile.university}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="mb-8 max-w-lg text-base leading-relaxed text-muted-light sm:text-lg lg:mx-0 mx-auto"
                    >
                        {profile.bio[0]}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
                    >
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                        >
                            View My Work
                            <ArrowDown
                                size={16}
                                className="transition-transform group-hover:translate-y-0.5"
                            />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-surface-light"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="/portfolio-pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-surface-light"
                        >
                            <FileDown size={16} />
                            Download PDF
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center justify-center gap-3 lg:justify-start"
                    >
                        {[
                            { href: profile.github, icon: GithubIcon, label: "GitHub" },
                            { href: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
                            { href: profile.instagram, icon: InstagramIcon, label: "Instagram" },
                            { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-primary/30 hover:text-primary hover:bg-primary/5"
                                aria-label={link.label}
                            >
                                <link.icon size={18} />
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative flex-shrink-0"
                >
                    <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl animate-float" />
                        {/* Image container */}
                        <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-border">
                            <Image
                                src={profile.profileImage}
                                alt={profile.name}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                            />
                        </div>
                        {/* Decorative badge */}
                        <div className="absolute -bottom-2 -right-2 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface-light shadow-xl">
                            <span className="text-2xl">🚀</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-muted"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <ArrowDown size={16} />
                </motion.div>
            </motion.div>
        </section>
    );
}
