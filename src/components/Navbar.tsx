"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "glass py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
                {/* Logo */}
                <a
                    href="#home"
                    className="group flex items-center gap-2 text-lg font-bold tracking-tight"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-mono text-sm transition-colors group-hover:bg-primary/20">
                        R
                    </span>
                    <span className="hidden sm:inline text-foreground">
                        Raisul<span className="text-primary">.</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${activeSection === link.href.replace("#", "")
                                        ? "text-primary"
                                        : "text-muted-light hover:text-foreground"
                                    }`}
                            >
                                {link.label}
                                {activeSection === link.href.replace("#", "") && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute inset-0 rounded-lg bg-primary/5 border border-primary/10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href="#contact"
                    className="hidden md:inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20"
                >
                    Let&apos;s Talk
                </a>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="md:hidden p-2 text-muted-light hover:text-foreground transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass-light overflow-hidden"
                    >
                        <ul className="flex flex-col px-6 py-4 gap-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${activeSection === link.href.replace("#", "")
                                                ? "text-primary bg-primary/5"
                                                : "text-muted-light hover:text-foreground hover:bg-surface-lighter"
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-2">
                                <a
                                    href="#contact"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="block rounded-lg bg-primary/10 px-4 py-3 text-center text-sm font-medium text-primary"
                                >
                                    Let&apos;s Talk
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
