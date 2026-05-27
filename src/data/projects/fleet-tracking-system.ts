import { defineProject } from "./define-project";

export const fleetTrackingSystem = defineProject({
    id: "fleet-tracking-system",
    title: "Fleet Tracking System",
    subtitle: "Web-Based Tugboat Monitoring Platform",
    description:
        "Developed a web-based Fleet Tracking System for tugboat operations, combining real-time monitoring, fleet management, role-based access, and AI detection summaries in one centralized dashboard.",
    thumbnail: "/images/projects/fleet-tracking/Dashboard.png",
    category: "Enterprise Web App",
    year: "2026",
    techStack: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript",
        "Bootstrap",
        "REST API",
        "Real-Time Data",
    ],
    overview:
        "The Fleet Tracking System is a web-based platform designed to help maritime and logistics companies monitor and manage tugboat activities through a centralized dashboard. The system provides real-time fleet visibility, trip and operational management, user access control, reporting, and AI-based people detection summaries.",
    background:
        "In maritime operations, visibility, coordination, and monitoring accuracy are critical for safety and efficiency. Manual monitoring processes can slow decision-making and make it difficult to track fleet activities consistently. This project addressed those challenges by creating an integrated operational platform for tugboat monitoring and management.",
    goals: [
        "Improve operational visibility through real-time tugboat tracking",
        "Centralize fleet, trip, jetty, and vehicle management",
        "Reduce manual monitoring and reporting processes",
        "Support faster decision-making for operational teams",
        "Provide role-based access for admins, drivers, and guest viewers",
        "Integrate AI detection summaries into the monitoring dashboard",
    ],
    challenges: [
        {
            title: "Real-Time Data Processing",
            description:
                "Handling live tracking data required efficient backend architecture, reliable synchronization, optimized communication, and stable performance for operational datasets.",
        },
        {
            title: "Complex Operational Workflow",
            description:
                "Fleet operations involve connected modules such as trips, vehicles, users, jetties, and monitoring systems, requiring consistent data flow and maintainable business logic.",
        },
        {
            title: "Dashboard Usability",
            description:
                "The platform needed to present important operational data clearly so users could monitor activity, navigate modules, and make decisions quickly.",
        },
        {
            title: "AI Monitoring Integration",
            description:
                "The dashboard needed to display AI-generated people detection data as summaries, alerts, and reports while keeping the operational interface easy to understand.",
        },
    ],
    solutions: [
        "Built a Laravel-based full-stack architecture for backend logic and frontend dashboard views",
        "Implemented centralized modules for trip, jetty, vehicle, user, and fleet operational data",
        "Designed role-based access management for admin, driver, and guest/user viewer roles",
        "Integrated real-time tracking data into dashboard monitoring workflows",
        "Created AI detection summary interfaces for reports, alerts, and activity visualization",
        "Structured dashboard pages to keep operational information clear and easy to scan",
    ],
    features: [
        {
            title: "Real-Time Fleet Tracking",
            description:
                "Live tugboat position monitoring with movement history, route observation, operational activity updates, and dashboard-based fleet visibility.",
        },
        {
            title: "Trip Management",
            description:
                "Operational journey management covering trip scheduling, departure and arrival tracking, historical trip records, and route activity monitoring.",
        },
        {
            title: "Jetty Management",
            description:
                "Management tools for docking locations, operational destinations, jetty registration, and docking information configuration.",
        },
        {
            title: "Vehicle Management",
            description:
                "Centralized tugboat data management including fleet categorization, operational status monitoring, and vehicle assignment configuration.",
        },
        {
            title: "Role-Based User Management",
            description:
                "Access control for admin, driver, and guest/user viewer roles to improve security, accountability, and operational flexibility.",
        },
        {
            title: "AI-Based Detection Summary",
            description:
                "Dashboard integration for AI-generated people detection summaries, monitoring reports, alerts, and activity visualizations.",
        },
    ],
    impact: [
        "Improved fleet visibility through centralized real-time monitoring",
        "Reduced manual operational tracking and reporting workflows",
        "Organized tugboat, trip, jetty, and user data into one scalable platform",
        "Supported faster decision-making for maritime operational teams",
        "Enhanced monitoring awareness through AI-assisted detection summaries",
        "Strengthened experience in enterprise-scale Laravel system development",
    ],
    lessonsLearned: [
        "Enterprise web applications require strong alignment between system architecture and real operational workflows",
        "Real-time systems need careful data synchronization and performance-aware backend design",
        "Operational dashboards must prioritize clarity, hierarchy, and fast scanning over visual complexity",
        "Role-based access control is essential for platforms used by multiple operational user types",
        "Cross-team collaboration is important when integrating external AI or monitoring services",
        "Technology creates the most value when it improves visibility, coordination, and efficiency in real environments",
    ],
    gallery: [
        { src: "/images/projects/fleet-tracking/Dashboard.png", alt: "Fleet tracking dashboard" },
        { src: "/images/projects/fleet-tracking/Jetty.png", alt: "Jetty management page" },
        { src: "/images/projects/fleet-tracking/Vehicle.png", alt: "Vehicle management interface" },
        { src: "/images/projects/fleet-tracking/LastTrips.png", alt: "Trip history and monitoring page" },
        { src: "/images/projects/fleet-tracking/Violation.png", alt: "AI detection violation summary" },
        { src: "/images/projects/fleet-tracking/Violation2.png", alt: "Violation monitoring detail" },
        { src: "/images/projects/fleet-tracking/Violation3.png", alt: "AI detection monitoring report" },
    ],
});
