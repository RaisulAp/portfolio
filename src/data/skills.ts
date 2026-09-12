export interface SkillItem {
    name: string;
    tag: string;
}

export interface SkillCategory {
    title: string;
    description: string;
    icon: string;
    items: SkillItem[];
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Mobile Engineering",
        icon: "Smartphone",
        description: "Cross-platform mobile applications, reactive state & hardware integrations",
        items: [
            { name: "Flutter & Dart", tag: "Core Framework" },
            { name: "BLoC & Provider", tag: "State Arch" },
            { name: "Native SDK & Geofencing", tag: "Sensors & GPS" },
            { name: "Offline-First & Local Cache", tag: "Sync Engine" },
            { name: "Payment Gateway", tag: "Xendit / API" },
            { name: "Google Play Release", tag: "CI/CD Deploy" },
        ],
        skills: [
            "Flutter & Dart",
            "BLoC & Provider",
            "Native SDK & Geofencing",
            "Offline-First & Local Cache",
            "Payment Gateway",
            "Google Play Release",
        ],
    },
    {
        title: "Backend & Distributed Systems",
        icon: "Server",
        description: "High-throughput API microservices, modular monoliths & auth architecture",
        items: [
            { name: "Go (Golang)", tag: "Concurrency" },
            { name: "Node.js & TypeScript", tag: "Modular Core" },
            { name: "REST & gRPC APIs", tag: "System Design" },
            { name: "Redis Caching", tag: "In-Memory Store" },
            { name: "RBAC & Auth Integrity", tag: "Security Arch" },
            { name: "Modular Architecture", tag: "Scalable Core" },
        ],
        skills: [
            "Go (Golang)",
            "Node.js & TypeScript",
            "REST & gRPC APIs",
            "Redis Caching",
            "RBAC & Auth Integrity",
            "Modular Architecture",
        ],
    },
    {
        title: "AI & Telemetry Systems",
        icon: "Cpu",
        description: "Selective LLM pipelines, vector search & real-time IoT tracking",
        items: [
            { name: "OpenAI API Pipelines", tag: "Cost-Optimized" },
            { name: "Prompt Engineering", tag: "JSON Schema" },
            { name: "FastAPI & Python", tag: "AI Services" },
            { name: "InsightFace & ONNX", tag: "Biometrics" },
            { name: "GPS Telemetry Engine", tag: "Geo-Clustering" },
            { name: "pgvector Vector Search", tag: "Embeddings" },
        ],
        skills: [
            "OpenAI API Pipelines",
            "Prompt Engineering",
            "FastAPI & Python",
            "InsightFace & ONNX",
            "GPS Telemetry Engine",
            "pgvector Vector Search",
        ],
    },
    {
        title: "Web & Frontend Platforms",
        icon: "Layout",
        description: "Modern, high-performance web applications and clinical command centers",
        items: [
            { name: "React 19 & Next.js", tag: "App Router" },
            { name: "TypeScript", tag: "Strict Typing" },
            { name: "Tailwind CSS", tag: "Design Systems" },
            { name: "Live Dashboards", tag: "Real-Time Data" },
            { name: "Framer Motion", tag: "Interactions" },
            { name: "Zustand State Store", tag: "Client State" },
        ],
        skills: [
            "React 19 & Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Live Dashboards",
            "Framer Motion",
            "Zustand State Store",
        ],
    },
    {
        title: "Databases & Storage",
        icon: "Database",
        description: "Relational data modeling, vector embeddings & transactional consistency",
        items: [
            { name: "PostgreSQL", tag: "pgvector & HNSW" },
            { name: "MySQL", tag: "ACID Relational" },
            { name: "Prisma ORM", tag: "Type-Safe Schema" },
            { name: "Database Indexing", tag: "Query Tuning" },
            { name: "Redis Store", tag: "Pub/Sub & Cache" },
            { name: "SQLite Storage", tag: "Local Cache" },
        ],
        skills: [
            "PostgreSQL",
            "MySQL",
            "Prisma ORM",
            "Database Indexing",
            "Redis Store",
            "SQLite Storage",
        ],
    },
    {
        title: "DevOps & Engineering Reliability",
        icon: "ShieldCheck",
        description: "Containerization, automated CI/CD pipelines & production incident root-cause",
        items: [
            { name: "Docker & Containers", tag: "Containerization" },
            { name: "Git & GitHub Actions", tag: "CI/CD Pipelines" },
            { name: "Vercel & Cloud Deploy", tag: "Edge Runtime" },
            { name: "Postman API Testing", tag: "API Contracts" },
            { name: "Production Root-Cause", tag: "Incident Triage" },
            { name: "Indonesian PDP Laws", tag: "Data Compliance" },
        ],
        skills: [
            "Docker & Containers",
            "Git & GitHub Actions",
            "Vercel & Cloud Deploy",
            "Postman API Testing",
            "Production Root-Cause",
            "Indonesian PDP Laws",
        ],
    },
];
