"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const contactLinks = [
    {
        icon: Mail,
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
        color: "text-red-400",
        bg: "bg-red-400/10",
    },
    {
        icon: GithubIcon,
        label: "GitHub",
        value: "Raisul Ap",
        href: profile.github,
        color: "text-foreground",
        bg: "bg-foreground/10",
    },
    {
        icon: LinkedinIcon,
        label: "LinkedIn",
        value: "Raisul A Prabankoro",
        href: profile.linkedin,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
    },
    {
        icon: InstagramIcon,
        label: "Instagram",
        value: "@thesul_ap",
        href: profile.instagram,
        color: "text-pink-400",
        bg: "bg-pink-400/10",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 lg:py-32">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/5 blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-4xl px-6">
                <SectionHeading
                    label="Contact"
                    title="Let's Work Together"
                    description="I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology."
                />

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Left - CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-between rounded-2xl border border-border bg-gradient-to-br from-surface-light to-surface p-8"
                    >
                        <div>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                <Send size={22} className="text-primary" />
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-foreground">
                                Got a project in mind?
                            </h3>
                            <p className="mb-6 text-sm leading-relaxed text-muted-light">
                                Whether you need a mobile app, web platform, or enterprise solution — I&apos;d love to hear about it. Let&apos;s turn your ideas into reality.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted">
                                <MapPin size={14} />
                                <span>{profile.location}</span>
                            </div>
                        </div>

                        <a
                            href={`mailto:${profile.email}`}
                            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                        >
                            <Mail size={18} />
                            Send Me an Email
                        </a>
                    </motion.div>

                    {/* Right - Contact Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        {contactLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                className="group flex items-center gap-4 rounded-xl border border-border bg-surface-light/30 p-5 transition-all hover:border-primary/20 hover:bg-surface-light"
                            >
                                <div
                                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${link.bg}`}
                                >
                                    <link.icon size={22} className={link.color} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                                        {link.label}
                                    </p>
                                    <p className="truncate text-sm font-medium text-foreground">
                                        {link.value}
                                    </p>
                                </div>
                                <ArrowUpRight
                                    size={18}
                                    className="flex-shrink-0 text-muted transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
