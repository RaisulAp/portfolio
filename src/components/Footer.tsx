import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";
import { profile } from "@/data/profile";

const socialLinks = [
    { href: profile.github, icon: GithubIcon, label: "GitHub" },
    { href: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { href: profile.instagram, icon: InstagramIcon, label: "Instagram" },
    { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-border">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
                    {/* Brand */}
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <a href="#home" className="flex items-center gap-2 text-lg font-bold">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-mono text-sm">
                                R
                            </span>
                            <span>
                                Raisul<span className="text-primary">.</span>
                            </span>
                        </a>
                        <p className="text-sm text-muted">
                            Software Engineer — Building meaningful digital solutions
                        </p>
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((link) => (
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
                    </div>
                </div>

                {/* Divider */}
                <div className="section-divider my-8" />

                {/* Bottom */}
                <div className="flex flex-col items-center gap-2 text-sm text-muted md:flex-row md:justify-between">
                    <p>© {new Date().getFullYear()} Raisul Agung Prabankoro. All rights reserved.</p>
                    {/* <p className="flex items-center gap-1">
                        Built with <Heart size={14} className="text-primary" /> using Next.js & Tailwind CSS
                    </p> */}
                </div>
            </div>
        </footer>
    );
}
