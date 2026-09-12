import { defineProject } from "./define-project";

export const simrsVitacore = defineProject({
    id: "simrs-vitacore",
    slug: "simrs-vitacore",
    title: "SIMRS VitaCore",
    subtitle: "Multi-Tenant Hospital Operations & Biometric Patient Check-In Platform",
    description:
        "Architected an enterprise multi-tenant hospital information system featuring a modular-monolith backend (Node.js/Prisma/PostgreSQL), real-time clinical dashboard in React 19, and an AI-powered biometric facial recognition check-in kiosk compliant with Indonesian PDP regulations.",
    role: "Fullstack Software Engineer & System Architect",
    category: "Web & Enterprise Platforms",
    keyMetric: "Zero Session Dropout & PDP-Compliant AI Biometric Check-In Kiosk",
    status: "Enterprise",
    year: "2026",
    thumbnail: "/images/projects/vitacore/home.png",
    imageOrientation: "desktop",
    techStack: [
        "Node.js",
        "TypeScript",
        "Express",
        "Prisma",
        "PostgreSQL",
        "React 19",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "pgvector",
        "InsightFace",
        "ONNX",
        "Docker",
    ],
    overview:
        "SIMRS VitaCore is a comprehensive hospital information management platform engineered to unify fragmented healthcare workflows across outpatient, inpatient, pharmacy, and billing departments. The system provides real-time operational visibility through a modern clinical operations dashboard, and introduces an autonomous biometric face-recognition check-in kiosk that expedites patient queues while maintaining strict statutory privacy protections under Indonesia's PDP (Pelindungan Data Pribadi) law.",
    background:
        "Hospitals face intense operational friction: crowded registration queues, complex multi-department billing coordination, and high risk of clinical workflow interruption. Conventional hospital software is often fragmented, fragile under concurrent local network load, and vulnerable to session dropouts during vital medical consultations. VitaCore was architected to deliver unified operational reliability, rock-solid authentication under extreme hospital network concurrency, and frictionless automated patient intake.",
    goals: [
        "Unify hospital departments into a resilient modular-monolith architecture with strict RBAC enforcement",
        "Deliver real-time operational dashboards for patient queues, bed occupancy, and billing statuses",
        "Eliminate doctor session timeouts and authentication failures during consultations under high concurrent network traffic",
        "Deploy a sub-second biometric face-recognition kiosk to automate outpatient check-in",
        "Architect a privacy-first consent-state data model compliant with Indonesian PDP data-protection standards",
        "Provide robust auditing and tracing across multi-tenant hospital data partitions",
    ],
    challenges: [
        {
            title: "Production Authentication Concurrency Failure",
            description:
                "During peak hospital consultation hours, doctors experienced sudden logout incidents mid-consultation. The root cause was identified as a shared network rate limiter that throttled background silent token refreshes under heavy hospital LAN traffic, coupled with a legacy chat widget that bypassed the central HTTP client's refresh interceptor.",
        },
        {
            title: "Low-Latency Biometric Vector Search at Scale",
            description:
                "Performing facial recognition for thousands of registered hospital patients required sub-second vector similarity lookups without overloading the primary relational transactional database.",
        },
        {
            title: "Statutory Healthcare Privacy Compliance (PDP)",
            description:
                "Biometric facial data represents sensitive personal identifiable information (PII). The system needed explicit verifiable patient consent tracking, strict cryptographic segregation, and immutable audit logs to satisfy regulatory requirements.",
        },
        {
            title: "Multi-Module Operational Cohesion",
            description:
                "Managing interconnected medical domains (outpatient triage, inpatient ward assignments, pharmacy stock dispensations, and cashier reconciliation) without creating brittle cross-service dependency tangles.",
        },
    ],
    solutions: [
        "Engineered an isolated silent token refresh pool and unified the application HTTP client to guarantee continuous doctor session persistence with zero consult interruptions",
        "Architected a dedicated FastAPI microservice utilizing InsightFace and ONNX runtimes for 512-dimensional facial embedding generation",
        "Implemented PostgreSQL pgvector with partial HNSW indexing partitioned by active clinic schedules, achieving sub-350ms vector query responses",
        "Designed a PDP-compliant consent-state data model requiring biometric storage authorization before vector enrollment, with zero-knowledge facial image discard",
        "Constructed a modular-monolith backend in Node.js, Express, TypeScript, and Prisma ORM, enforcing strict bounded contexts between hospital services",
        "Built a responsive, high-performance operations dashboard in React 19 and Tailwind CSS with optimistic updates and live queue streaming",
    ],
    features: [
        {
            title: "AI Biometric Check-In Kiosk",
            description:
                "Autonomous patient terminal with face detection, ONNX-accelerated embedding generation, and sub-second patient record matching with printed queue slips.",
        },
        {
            title: "Real-Time Operations Dashboard",
            description:
                "Unified command view for hospital administrators displaying outpatient wait times, live bed availability, pharmacy dispensation queues, and cashier turnover.",
        },
        {
            title: "Modular Clinical & Pharmacy Flow",
            description:
                "End-to-end medical records flow connecting triage assessment, doctor prescription generation, automated pharmacy stock deduction, and consolidated invoice dispatch.",
        },
        {
            title: "Fault-Tolerant Session Management",
            description:
                "Resilient JWT authentication system with isolated refresh token channels and silent refresh retry mechanisms capable of surviving flaky hospital Wi-Fi networks.",
        },
        {
            title: "PDP Privacy & Audit Governance",
            description:
                "Granular biometric consent registry, role-based access control (RBAC), and tamper-evident audit logs tracking every medical record access event.",
        },
    ],
    impact: [
        "Resolved 100% of doctor session dropout incidents during live consultations, raising hospital system trust to 99.98% reliability",
        "Reduced average outpatient morning check-in time from 12 minutes to under 45 seconds via biometric kiosk self-service",
        "Eliminated patient record duplication and pharmacy inventory leakage through synchronized relational transactions",
        "Achieved full compliance readiness with Indonesian Personal Data Protection (PDP) regulatory requirements for sensitive health and biometric data",
    ],
    lessonsLearned: [
        "In enterprise healthcare environments, authentication failure is a clinical risk, not just a minor bug — silent background token refresh flows must never share rate limiters with generic user requests",
        "Decoupled Python microservices for AI/vector operations preserve core backend API throughput while enabling specialized GPU/ONNX optimizations",
        "Compliance should be baked into database schema design from day one rather than retrofitted as an afterthought",
    ],
    gallery: [
        {
            src: "/images/projects/vitacore/thumbnail.svg",
            alt: "SIMRS VitaCore Hospital Operations Dashboard and Biometric Kiosk Architecture",
        },
    ],
});
