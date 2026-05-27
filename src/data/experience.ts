export interface Experience {
    id: string;
    title: string;
    organization: string;
    period: string;
    type: "leadership" | "work" | "education";
    description: string;
    highlights: string[];
}

export const experiences: Experience[] = [
    {
        id: "atex-leader",
        title: "Expedition Leader",
        organization: "ATEX 2024 — ASTACALA Tel-U International Expedition",
        period: "2024",
        type: "leadership",
        description:
            "Led an international mountaineering expedition to Mount Elbrus, Russia. Responsible for strategic planning, team coordination, risk management, and field decision-making in extreme conditions (-20°C).",
        highlights: [
            "Led team to successfully summit Mount Elbrus (5,642m)",
            "Managed expedition logistics and international administration",
            "Made critical real-time decisions under extreme weather conditions",
            "Maintained team morale and safety with zero incidents",
            "Produced comprehensive documentation and publications",
        ],
    },
    {
        id: "software-engineer",
        title: "Software Engineer",
        organization: "Professional Experience",
        period: "2023 — Present",
        type: "work",
        description:
            "Developing enterprise-grade mobile and web applications using Flutter, Laravel, and modern tech stacks. Focused on building scalable, user-centric digital solutions for real business problems.",
        highlights: [
            "Built HRM platform (Staffora) for attendance & payroll management",
            "Developed mobile billing system for ISP customers",
            "Designed and implemented REST API architectures",
            "Integrated Firebase services for real-time features",
            "Delivered cross-platform mobile applications",
        ],
    },
    {
        id: "telkom-university",
        title: "Bachelor of Informatics",
        organization: "Telkom University",
        period: "2020 — 2024",
        type: "education",
        description:
            "Studied Informatics with focus on software engineering, web development, mobile application development, and system architecture. Actively involved in organizational activities and expeditions.",
        highlights: [
            "Specialized in software engineering and system architecture",
            "Active member of ASTACALA mountaineering organization",
            "Developed multiple real-world projects during studies",
            "Combined academic excellence with leadership activities",
        ],
    },
];
