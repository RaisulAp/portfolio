import { defineProject } from "./define-project";

export const elrasyidTourTravel = defineProject({
    id: "elrasyid-tour-travel",
    slug: "elrasyid-tour-travel",
    title: "ELRASYID Tour & Travel — Umroh Booking & Information Website",
    subtitle: "Marketing & Package-Comparison Website for an Umroh Travel Agency",
    description:
        "Developed a Next.js marketing website for ELRASYID, a Sidoarjo-based umroh (Islamic pilgrimage) tour operator, letting prospective jamaah compare packages, check departure schedules, and book directly through WhatsApp.",
    role: "Full-Stack Web Engineer",
    category: "Web & Enterprise Platforms",
    keyMetric: "Direct WhatsApp Booking Funnel for 5 Package Tiers",
    status: "Client Work",
    thumbnail: "/images/projects/elrasyid/Elrasyid.png",
    imageOrientation: "desktop",
    year: "2026",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    overview:
        "ELRASYID's website is a Next.js/React marketing site for an umroh tour operator offering five package tiers priced Rp27.5–43.5 million across 9, 12, and 14-day durations with different airlines. The site gives prospective jamaah a single, comparable source of truth for pricing, schedules, and facilities, then funnels every interested visitor straight into a WhatsApp conversation for booking.",
    background:
        "ELRASYID has operated umroh packages from Sidoarjo since 2017, but like most Indonesian travel agencies, pricing and schedule information was scattered across brochures, flyers, and social media, making it hard for families to compare options confidently before committing tens of millions of rupiah to a faith-sensitive journey. The site was built to consolidate that information and make the booking decision transparent and easy.",
    goals: [
        "Present all umroh packages in a clear, comparable format covering price, duration, and airline",
        "Publish an up-to-date departure schedule so prospects can plan around specific dates",
        "Build trust through transparency with clearly separated included/excluded facilities and legality information",
        "Highlight seasonal offerings, such as the Umroh Maulid Nabi event, with urgency messaging",
        "Answer common objections upfront through a dedicated FAQ section to reduce repetitive inquiries",
        "Route every interested visitor straight into a WhatsApp conversation for booking and consultation",
    ],
    challenges: [
        {
            title: "Complex Package Comparison UX",
            description:
                "Presenting five-plus package variants that differ by duration, airline, and hotel proximity without overwhelming a non-technical, often older audience.",
        },
        {
            title: "Real-Time Promotional Messaging",
            description:
                "Surfacing time-sensitive information — sold-out badges, seasonal event pricing, flight routes — in a scannable ticker without cluttering the primary hero.",
        },
        {
            title: "Trust for a High-Ticket, Faith-Sensitive Purchase",
            description:
                "Customers commit Rp27.5–43.5 million toward a religious journey, so legality, licensing, and facility inclusions/exclusions needed to be unmistakably clear.",
        },
        {
            title: "Mobile-First Booking Funnel",
            description:
                "The primary audience browses and books via mobile and WhatsApp, so every comparison table and CTA had to stay usable on small screens.",
        },
    ],
    solutions: [
        "Built the site with Next.js (App Router) and React for a fast, component-driven architecture that scales as new packages and seasons are added",
        "Styled with Tailwind CSS to keep comparison tables, cards, and badges consistent while iterating quickly on layout",
        "Designed a dedicated Packages section with structured comparison cards for price, duration, and airline so prospects can compare at a glance",
        "Added a horizontal highlight ticker for time-sensitive info such as sold-out status, seasonal event pricing, and flight routes",
        "Built a Facilities section that explicitly separates what's included versus excluded per package to preempt trust concerns",
        "Added a Legality & Transparency section plus FAQ to answer licensing and booking questions before the visitor has to ask",
        "Connected every primary CTA to WhatsApp with context-aware, pre-filled messages for fast handoff into booking",
    ],
    features: [
        {
            title: "Package Comparison Cards",
            description:
                "Five umroh package tiers (9, 12, and 14 days, Rp27.5–43.5 million) compared by price, duration, and airline including Scoot, Lion Air, and Saudia.",
        },
        {
            title: "Live Promo Ticker",
            description:
                "Scrolling highlight bar surfacing sold-out alerts, seasonal event pricing for Umroh Maulid Nabi, and direct flight routes.",
        },
        {
            title: "Departure Schedule",
            description:
                "Browsable departure calendar spanning June through December 2026.",
        },
        {
            title: "Facilities Breakdown",
            description:
                "Clear included/excluded facility lists per package, covering hotel proximity, medical escorts, and more.",
        },
        {
            title: "Legality & Transparency Section",
            description:
                "Dedicated section addressing licensing and legality to build trust for a high-ticket religious travel purchase.",
        },
        {
            title: "FAQ & WhatsApp Booking Funnel",
            description:
                "FAQ section paired with WhatsApp deep-link CTAs throughout the site for direct booking conversations.",
        },
    ],
    impact: [
        "Shipped a production Next.js marketing site live on Vercel, giving ELRASYID a modern, mobile-first digital storefront for its umroh packages",
        "Consolidated pricing, schedule, and facility information previously scattered across brochures and social media into one comparable source",
        "Built a direct-to-WhatsApp booking funnel matched to how the target audience of families and older jamaah actually prefers to communicate",
        "Reinforced trust for a high-value, faith-sensitive purchase through explicit legality and inclusion/exclusion transparency",
    ],
    lessonsLearned: [
        "For high-ticket, trust-sensitive purchases, transparency sections like legality and inclusions/exclusions convert better than flashy design alone",
        "A scrolling ticker is an effective, low-friction way to surface time-sensitive promos without competing with the primary hero CTA",
        "Structuring comparison-heavy content as componentized cards in Next.js/React made the data model easy to swap as offerings change season to season",
        "For an Indonesian SME audience, a WhatsApp-first CTA strategy consistently outperforms traditional web forms",
    ],
    gallery: [],
    links: [{ label: "Live Demo", href: "https://elrasyid.vercel.app/" }],
});
