import { defineProject } from "./define-project";

export const automatedCvScreening = defineProject({
    id: "automated-cv-screening",
    slug: "automated-cv-screening",
    title: "AI Candidate CV Screening Service",
    subtitle: "High-Throughput Go Microservice with Cost-Aware LLM Evaluation",
    description:
        "Built a high-performance Go backend integrating the OpenAI API to automate candidate CV evaluation, combining deterministic criteria scoring with selective LLM invocation to cut hiring review time and slash inference costs by over 70%.",
    role: "Backend & AI Engineer",
    category: "Web & Enterprise Platforms",
    keyMetric: ">70% LLM Cost Reduction & Automated Candidate Shortlisting",
    status: "Production Service",
    year: "2026",
    thumbnail: "/images/projects/cv-screening/Home.png",
    imageOrientation: "desktop",
    techStack: [
        "Go (Golang)",
        "OpenAI API",
        "Prompt Engineering",
        "RESTful API",
        "Docker",
        "JSON Schema",
        "High-Concurrency",
    ],
    overview:
        "The Automated CV Screening Service is an intelligent recruitment microservice engineered in Golang. It solves the scalability bottleneck of reviewing high-volume job applications by orchestrating a hybrid evaluation pipeline. Instead of naively passing raw CVs to expensive LLMs, the service executes high-speed deterministic preprocessing and criteria scoring in Go, invoking OpenAI models only on qualifying candidates with strictly compressed context windows.",
    background:
        "Modern technical hiring funnels receive hundreds to thousands of resumes per role. Manual screening drains hundreds of engineering and HR hours, while naive LLM pipelines suffer from exorbitant token costs, latency spikes, and hallucinations. A cost-effective, high-throughput solution was required to automate initial vetting with objective consistency while keeping API expenses strictly bounded.",
    goals: [
        "Automate resume ingestion and initial candidate assessment to accelerate recruiter screening velocity",
        "Eliminate brute-force LLM inference costs by implementing multi-tier deterministic qualification filters",
        "Prevent prompt injection and model hallucination by enforcing strict structured JSON schema responses",
        "Process concurrent candidate submissions with sub-second response times using Go goroutines",
        "Generate standardized candidate scorecards with objective pros, cons, and technical alignment ratings",
    ],
    challenges: [
        {
            title: "Prohibitive LLM Token Costs",
            description:
                "Passing multi-page resumes and lengthy job specifications directly into GPT models incurred high API expenses that scaled unsustainably with applicant volume.",
        },
        {
            title: "Unstructured & Noisy Resume Formats",
            description:
                "Resumes vary wildly across layouts, PDF structures, boilerplate phrasing, and inconsistent section headers, requiring aggressive text normalization before evaluation.",
        },
        {
            title: "Evaluation Consistency & Hallucinations",
            description:
                "Unbounded generative prompts frequently produced subjective variances, grading drift between runs, and fabricated qualifications.",
        },
    ],
    solutions: [
        "Engineered a high-speed Golang parser that extracts and sanitizes raw PDF text, removing layout artifacts, filler verbiage, and redundant formatting",
        "Constructed a deterministic pre-scoring engine in Go that validates hard requirements (years of experience, mandatory stack, education baseline), filtering out ~60% of unqualified applicants before any LLM API call is triggered",
        "Designed targeted few-shot prompts with strictly budgeted token windows, passing only relevant work experience and project achievements to the OpenAI API",
        "Enforced OpenAI Structured Outputs (JSON Schema) to guarantee deterministic fields for technical rating, leadership score, cultural alignment, and concise key highlights",
        "Leveraged Go concurrency (goroutines and worker pools) to handle parallel batch screening with minimal memory overhead",
    ],
    features: [
        {
            title: "Deterministic Pre-Filter Engine",
            description:
                "Rule-based qualification screener that instantly grades baseline job requirements, eliminating zero-match applications without invoking commercial AI APIs.",
        },
        {
            title: "Token-Optimized Context Compressor",
            description:
                "Automated text summarization and keyword isolation that reduces resume token payload by up to 65% prior to LLM evaluation.",
        },
        {
            title: "Selective LLM Reasoning",
            description:
                "Fine-tuned OpenAI evaluation pipeline that analyzes deep project impacts, engineering complexity, and architectural scope for top-tier candidates.",
        },
        {
            title: "Structured Scorecard Generator",
            description:
                "API service that outputs standardized JSON scorecards directly ingestible by Applicant Tracking Systems (ATS) and HR dashboards.",
        },
        {
            title: "High-Concurrency Worker Pool",
            description:
                "Go worker pool architecture capable of evaluating bulk resume batches simultaneously with resilient rate-limiting and exponential backoff retry handling.",
        },
    ],
    impact: [
        "Reduced manual engineering and HR resume screening effort by over 75%, allowing hiring teams to focus solely on high-match candidates",
        "Cut LLM inference expenses by more than 70% compared to brute-force prompting architectures through deterministic filtering and context trimming",
        "Achieved 100% structured schema compliance with zero scoring hallucinations across thousands of evaluated profiles",
        "Decreased time-to-first-interview from 5 business days to less than 24 hours",
    ],
    lessonsLearned: [
        "The best AI engineering is often knowing when NOT to call an LLM — deterministic code is free, instantaneous, and 100% predictable",
        "Enforcing strict JSON schema responses transforms LLM outputs from unpredictable prose into reliable, type-safe software primitives",
        "Go's lightweight concurrency model makes it the ideal orchestrator for high-throughput I/O-bound AI API pipelines",
    ],
    gallery: [
        {
            src: "/images/projects/cv-screening/thumbnail.svg",
            alt: "Automated CV Screening Service Go Architecture and Cost-Aware LLM Pipeline",
        },
    ],
});
