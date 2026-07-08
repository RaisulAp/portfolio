import { defineProject } from "./define-project";

export const vpuCompanyProfile = defineProject({
    id: "vpu-company-profile",
    title: "PT. Visi Prima Utama (VPU) — Company Profile Website",
    subtitle: "Corporate Website for an Indonesian IT Consulting Firm Serving 50+ Enterprise & Government Clients",
    description:
        "Built a modern company profile website for PT. Visi Prima Utama (VPU), an Indonesian IT consulting firm founded in 2014, showcasing their track record across 52 state-owned, government, and private-sector organizations.",
    thumbnail: "/images/projects/vpu/vpu.png",
    imageOrientation: "desktop",
    category: "Company Profile Website",
    year: "2026",
    techStack: [
        "HTML5",
        "CSS3",
        "Vanilla JavaScript",
        "Canvas API Animation",
        "Responsive Design",
        "Vercel",
    ],
    overview:
        "VPU's company profile site is a fully static, framework-free corporate website built to translate the firm's decade-plus history and enterprise-grade client roster into a credible digital presence. It combines an animated interactive hero, a categorized showcase of 52 client organizations across BUMN, Government, and Private sectors, a thought-leadership articles section, and WhatsApp-driven lead funnels for consultation and partnership inquiries.",
    background:
        "VPU has delivered IT Service Management, Value Added Selling, and Project Management engagements since 2014 for blue-chip clients like Telkom Indonesia, PLN, Microsoft, and Universitas Indonesia, but lacked a web presence that reflected that credibility. The goal was a corporate site that lets prospects instantly recognize the scale and trustworthiness of VPU's client base and gives them a frictionless way to start a conversation.",
    goals: [
        "Establish a credible, enterprise-grade online presence reflecting 10+ years and 52 client engagements",
        "Showcase the client portfolio grouped by BUMN, Government, and Private sector for instant trust signaling",
        "Provide a persisted light/dark theme toggle for a modern, polished feel",
        "Drive lead generation directly through intent-based WhatsApp deep links",
        "Publish thought-leadership articles on AI, ML, and IT consulting to position VPU as an expert voice",
        "Keep the stack lightweight and framework-free for fast load times and easy long-term maintenance",
    ],
    challenges: [
        {
            title: "Custom Animated Background Without a Framework",
            description:
                "Building a performant, interactive particle/constellation canvas background with pointer-reactive parallax and a breathing pulse effect using plain JavaScript, while keeping frame budget low across devices.",
        },
        {
            title: "Flicker-Free Theme Switching",
            description:
                "Implementing a persisted dark/light theme toggle that applies the saved preference before first paint, avoiding a flash of the wrong theme on load.",
        },
        {
            title: "Large Logo Grid at Scale",
            description:
                "Organizing and laying out 52 client logos across three categorized groups while keeping the grid clean, responsive, and lightweight to load.",
        },
        {
            title: "Lead Capture Without a Backend",
            description:
                "Routing every call-to-action through pre-filled WhatsApp deep links instead of a form and backend, since the entire site is static.",
        },
    ],
    solutions: [
        "Built a dependency-free HTML/CSS/JS stack instead of a heavier framework, keeping the corporate site lightweight and fast on Vercel's edge network",
        "Implemented a custom Canvas API animation with pointer-reactive constellation lines that adapts particle density to viewport size and pauses when the tab is hidden or reduced motion is preferred",
        "Added an inline pre-paint script that reads the saved theme from localStorage and applies it to the document before CSS renders, eliminating theme flash",
        "Structured the client showcase into three clearly labeled, lazy-loaded logo grids (BUMN, Government, Private) with organization counts for quick scanning",
        "Wired every CTA to a pre-filled wa.me link with a distinct message per intent, so the client's team can respond directly without extra tooling",
        "Built a fully responsive layout with glass-card sections and a mobile nav toggle that holds up from mobile through large desktop screens",
    ],
    features: [
        {
            title: "Interactive Constellation Hero",
            description:
                "Canvas-based particle animation with pointer/touch-reactive parallax lines, automatically pausing on hidden tabs or reduced-motion preference.",
        },
        {
            title: "Dark / Light Theme Toggle",
            description:
                "Persisted, flicker-free theme switch applied before first paint via an inline pre-paint script.",
        },
        {
            title: "Categorized Client Portfolio",
            description:
                "52 organizations grouped into BUMN (14), Government (16), and Private (22) sectors with a lazy-loaded logo grid.",
        },
        {
            title: "Thought-Leadership Articles Section",
            description:
                "Dedicated Insights & Articles hub covering AI, Machine Learning, and IT consulting for content marketing and SEO.",
        },
        {
            title: "WhatsApp-Driven Lead Funnels",
            description:
                "Dual CTAs — Request Consultation and Partner With Us — deep-linking to pre-filled WhatsApp messages per intent.",
        },
        {
            title: "Fully Responsive Corporate Layout",
            description:
                "Mobile navigation, glass-morphism cards, and a sticky header that reacts to scroll across all screen sizes.",
        },
    ],
    impact: [
        "Delivered a production-ready corporate site live on Vercel, translating VPU's 10+ year, 52-client track record into a credible digital presence",
        "Replaced generic outreach with intent-based WhatsApp lead funnels, shortening the path from visitor to conversation",
        "Kept the entire site framework-free, minimizing long-term hosting cost and maintenance overhead for the client",
        "Delivered a smooth interactive background without hurting load performance through lazy-loading and reduced-motion handling",
    ],
    lessonsLearned: [
        "A well-structured vanilla JS/CSS stack can rival framework-based sites in polish while staying dramatically lighter",
        "Pre-paint inline scripts are essential for flicker-free theme persistence on static sites",
        "Categorizing large trust signals like client logos into digestible groups increases perceived credibility more than one unsorted wall of logos",
        "Routing every CTA through WhatsApp is a highly effective, zero-backend lead-gen pattern for B2B service companies in Indonesia",
    ],
    gallery: [],
    links: [{ label: "Live Demo", href: "https://ptvpu.vercel.app/" }],
});
