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
        id: "gerbang-data-indonesia",
        title: "Fullstack Developer — Mobile & Backend",
        organization: "PT. Gerbang Data Indonesia",
        period: "December 2024 — Present",
        type: "work",
        description:
            "Architecting and shipping mission-critical enterprise platforms, distributed telemetry ingestion pipelines, and production mobile applications. Owning the end-to-end software lifecycle from database schema design and distributed API architecture to production deployment and incident response.",
        highlights: [
            "Architected and shipped SIMRS VitaCore end-to-end: a modular-monolith backend (Node.js, Express, TypeScript, Prisma, PostgreSQL) with RBAC-gated APIs across outpatient, inpatient, pharmacy, and billing, paired with a React 19 real-time operations dashboard",
            "Designed biometric patient check-in kiosk: decoupled FastAPI microservice (InsightFace, ONNX) with pgvector similarity search, partial HNSW indexing, and Indonesian PDP-compliant consent architecture",
            "Diagnosed and resolved production authentication failure under concurrent hospital-network load, fixing rate limiter throttling on silent token refreshes and unblocking clinical consultations",
            "Built high-concurrency Go microservice integrating OpenAI API for candidate screening, combining deterministic scoring with selective LLM invocation to cut evaluation costs by over 70%",
            "Architected Golang backend ingesting high-frequency GPS telemetry from distributed vehicles with time-series location models and real-time client synchronization",
            "Built and shipped customer-facing Flutter mobile app to Google Play Store with resilient Xendit payment gateway state machine (pending/success/failure/timeout)",
            "Delivered web-based tugboat fleet management platform with Leaflet.js interactive vessel tracking, directional indicators, and dwell clustering for maritime operations",
        ],
    },
    {
        id: "atex-leader",
        title: "Expedition Leader — Mount Elbrus, Russia (5,642m)",
        organization: "ATEX 2024 — ASTACALA Tel-U International Expedition",
        period: "2024",
        type: "leadership",
        description:
            "Commanded an international high-altitude mountaineering expedition to the highest peak in Europe. Spearheaded strategic logistics, international diplomatic administration, risk mitigation, and real-time crisis decision-making in -20°C alpine environments.",
        highlights: [
            "Successfully summited Mount Elbrus (5,642m) with 100% team safety and zero casualty incidents",
            "Managed cross-border expedition logistics, diplomatic permissions, and institutional partnerships",
            "Made rapid, critical operational decisions under volatile weather conditions and severe hypoxia",
            "Maintained peak team morale, communication protocols, and safety standards under extreme stress",
            "Produced comprehensive post-expedition technical documentation, financial audits, and publications",
        ],
    },
    {
        id: "telkom-university",
        title: "Bachelor of Informatics (S.Kom.)",
        organization: "Telkom University",
        period: "Sept 2020 — Sept 2024",
        type: "education",
        description:
            "Graduated in Informatics with a strong academic grounding in software engineering, distributed systems, mobile application architecture, and database engineering (GPA: 3.01 / 4.00).",
        highlights: [
            "Specialized in modern software engineering, clean architecture, and distributed systems",
            "Engineered production-grade mobile and web systems as capstone and independent initiatives",
            "Active executive member of ASTACALA Tel-U mountaineering organization leading technical alpine operations",
            "Coursework focus: Data Structures, Database Systems, Network Architecture, and Software Design Patterns",
        ],
    },
];
