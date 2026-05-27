import { defineProject } from "./define-project";

export const vehicleCostManagement = defineProject({
    id: "vehicle-cost-management",
    title: "Vehicle Tracking & Cost Management System",
    subtitle: "Mobile Fleet Operations Platform",
    description:
        "Developed a full-stack mobile fleet operations platform for real-time vehicle tracking, driver reporting, fuel monitoring, maintenance management, and transportation cost analysis.",
    thumbnail: "/images/projects/vehicle-cost-management/Dashboard.jpeg",
    category: "Mobile App",
    year: "2025",
    techStack: [
        "Flutter",
        "Dart",
        "Golang",
        "REST API",
        "Authentication",
        "Database Management",
        "Real-Time Data",
    ],
    overview:
        "The Vehicle Tracking & Cost Management System is a mobile-based fleet operations platform built to help companies monitor vehicles, manage driver activities, track fuel usage, record maintenance, and analyze operational transportation costs through one centralized application.",
    background:
        "Managing transportation fleets manually often creates limited visibility, scattered reports, poor fuel monitoring, weak maintenance tracking, and inefficient cost analysis. This project addressed those issues by combining backend services, mobile workflows, and operational analytics into a production-ready system for land transportation operations.",
    goals: [
        "Provide real-time visibility for company vehicles, trucks, and logistics fleets",
        "Digitalize daily driver reporting and operational documentation",
        "Track fuel usage, fuel expenses, and cost trends",
        "Manage vehicle maintenance activities and repair history",
        "Centralize trip, vehicle, and driver operational data",
        "Support better budgeting and operational evaluation through cost analysis",
    ],
    challenges: [
        {
            title: "Scalable Golang Backend",
            description:
                "The backend required careful API structure, authentication flow, data handling, performance optimization, and reliable communication between the mobile app and server.",
        },
        {
            title: "Real-Time Operational Data",
            description:
                "Fleet operations required consistent synchronization between mobile devices and backend services while handling unstable field connections and fast API communication.",
        },
        {
            title: "Field-Ready User Experience",
            description:
                "The app needed to be simple enough for drivers and field operators, reducing reporting friction while still supporting rich operational workflows.",
        },
        {
            title: "Cost Analysis Logic",
            description:
                "Fuel, maintenance, trip, and operational activity data had to be connected into a clear cost monitoring flow for management evaluation.",
        },
    ],
    solutions: [
        "Built a high-performance backend API using Golang for authentication, data processing, and operational modules",
        "Developed a Flutter mobile app with responsive UI and field-friendly reporting workflows",
        "Created modules for vehicle tracking, daily reports, fuel records, maintenance, trips, and user profiles",
        "Implemented structured REST API communication between mobile app and backend services",
        "Designed cost analysis flows combining fuel expenses, maintenance records, trip usage, and operational activity",
        "Optimized mobile navigation to keep reporting fast, clear, and practical for daily field usage",
    ],
    features: [
        {
            title: "Real-Time Vehicle Tracking",
            description:
                "Live monitoring for company vehicles, trucks, rental vehicles, and operational transportation units with route and trip visibility.",
        },
        {
            title: "Daily Driver Reporting",
            description:
                "Digital reporting for daily activity logs, trip notes, operational updates, and vehicle condition reports directly from the mobile app.",
        },
        {
            title: "Fuel Management",
            description:
                "Fuel purchase recording, quantity input, expense tracking, usage history, and fuel consumption analysis for operational cost control.",
        },
        {
            title: "Maintenance Tracking",
            description:
                "Maintenance activity records, repair history, maintenance cost tracking, and support for vehicle performance monitoring.",
        },
        {
            title: "Trip Management",
            description:
                "Operational trip management with vehicle usage tracking, trip records, route visibility, and activity monitoring.",
        },
        {
            title: "Cost Monitoring & Analysis",
            description:
                "Combined fuel, maintenance, trip, and activity data into a clearer overview of transportation spending and operational trends.",
        },
    ],
    impact: [
        "Improved operational visibility for land transportation fleets",
        "Reduced manual paperwork through digital driver reporting",
        "Centralized fuel, maintenance, trip, and vehicle records in one mobile platform",
        "Helped management monitor transportation costs more clearly",
        "Strengthened full-stack delivery experience across Golang backend and Flutter mobile development",
        "Created a scalable foundation for real-world fleet operations and cost management",
    ],
    lessonsLearned: [
        "Building a complete system independently requires strong alignment between backend architecture and mobile user experience",
        "Golang is effective for high-performance API development when the data flow is planned carefully",
        "Operational apps must prioritize speed, clarity, and simplicity for field users",
        "Real-time data handling requires reliable synchronization and practical fallback thinking",
        "Cost analysis becomes more valuable when connected directly to operational workflows",
        "Full-stack ownership improves understanding of how infrastructure decisions affect the end-user experience",
    ],
    gallery: [
        { src: "/images/projects/vehicle-cost-management/Login.jpeg", alt: "Login screen" },
        { src: "/images/projects/vehicle-cost-management/Dashboard.jpeg", alt: "Vehicle dashboard" },
        { src: "/images/projects/vehicle-cost-management/Dashboard1.jpeg", alt: "Operational summary dashboard" },
        { src: "/images/projects/vehicle-cost-management/DailyReport.jpeg", alt: "Daily driver report page" },
        { src: "/images/projects/vehicle-cost-management/Fuel.jpeg", alt: "Fuel management page" },
        { src: "/images/projects/vehicle-cost-management/Maintenance.jpeg", alt: "Maintenance monitoring page" },
        { src: "/images/projects/vehicle-cost-management/Trip.jpeg", alt: "Trip management page" },
        { src: "/images/projects/vehicle-cost-management/Trip1.jpeg", alt: "Trip detail page" },
        { src: "/images/projects/vehicle-cost-management/VehicleList.jpeg", alt: "Vehicle list page" },
        { src: "/images/projects/vehicle-cost-management/VehicleMenu.jpeg", alt: "Vehicle menu page" },
        { src: "/images/projects/vehicle-cost-management/Profile.jpeg", alt: "Driver profile page" },
    ],
});
