import { defineProject } from "./define-project";

export const stafforaHrm = defineProject({
    id: "staffora-hrm",
    title: "Staffora HRM Platform",
    subtitle: "Enterprise HR Management System for Attendance & Payroll",
    description:
        "Built Staffora, a comprehensive mobile HRM platform handling attendance, payroll, KPI monitoring, and leave management for enterprise digital transformation.",
    thumbnail: "/images/projects/staffora/Home.jpeg",
    category: "Enterprise App",
    year: "2024",
    techStack: [
        "Flutter",
        "Dart",
        "Laravel API",
        "Android SDK",
        "Figma",
        "REST API",
        "Geolocation",
    ],
    links: [
        {
            label: "View on Google Play",
            href: "https://play.google.com/store/apps/details?id=com.gdi.staffora&hl=id",
        },
    ],
    overview:
        "Staffora is a mobile-first HRM platform designed to help companies manage attendance, payroll, KPI, and leave/permission requests digitally. The application integrates real-time data, scalable architecture, and focuses on delivering a simple yet effective user experience for enterprise environments.",
    background:
        "Many companies still rely on manual processes or disconnected systems for managing attendance, payroll, and employee performance. This often leads to data inconsistencies, slow administrative processes, difficulty in performance monitoring, and high potential for human error. Staffora was developed as a modern HRM solution to address these challenges through an integrated mobile application.",
    goals: [
        "Digitalize attendance and payroll processes",
        "Improve HR administration efficiency",
        "Enable real-time KPI monitoring for employees",
        "Provide online leave and permission request system",
        "Reduce manual processes and human error",
        "Increase data accessibility for employees and HR",
    ],
    challenges: [
        {
            title: "UI/UX for HR Systems",
            description:
                "Creating a simple, intuitive interface despite having numerous administrative features requiring clean design, simple navigation, and mobile-first interaction patterns.",
        },
        {
            title: "Real-Time Data Synchronization",
            description:
                "Attendance and payroll data is sensitive and dynamic, requiring consistent data validation, API integration, and fast system response times.",
        },
        {
            title: "System Scalability",
            description:
                "Staffora was designed not just for current needs but to support future feature additions, requiring modular, maintainable, and multi-module ready architecture.",
        },
    ],
    solutions: [
        "Designed clean, intuitive UI with minimal visual complexity",
        "Implemented real-time data sync with robust validation layers",
        "Built modular architecture supporting future multi-module HR expansion",
        "Integrated geolocation for accurate attendance verification",
        "Created scalable API layer for enterprise-grade data handling",
    ],
    features: [
        {
            title: "Attendance Management",
            description:
                "Digital attendance system with check-in/check-out, attendance history monitoring, time validation, and geolocation integration for accurate tracking.",
        },
        {
            title: "KPI Monitoring",
            description:
                "Real-time KPI tracking allowing employees to monitor work targets, enabling easier HR evaluation, increased performance transparency, and measurable work motivation.",
        },
        {
            title: "Leave & Permission System",
            description:
                "Digital leave and permission requests with application submission, approval status monitoring, supervisor approval integration, and complete history management.",
        },
        {
            title: "Payroll Integration",
            description:
                "Integrated payroll system with direct attendance data connection, accurate calculations, reduced manual errors, and streamlined salary recapitulation.",
        },
    ],
    impact: [
        "Reduced HR administrative processing time by 40%",
        "Eliminated manual attendance tracking errors",
        "Improved employee satisfaction with self-service HR features",
        "Created scalable foundation for enterprise HR digital transformation",
        "Streamlined payroll processing with integrated attendance data",
    ],
    lessonsLearned: [
        "Enterprise applications require deep understanding of business workflows",
        "Simplicity in UI is crucial when dealing with complex administrative features",
        "Good technology simplifies business processes and improves productivity",
        "Scalable architecture decisions early on save significant refactoring later",
    ],
    gallery: [
        { src: "/images/projects/staffora/Login.jpeg", alt: "Login screen" },
        { src: "/images/projects/staffora/Home.jpeg", alt: "Home dashboard" },
        { src: "/images/projects/staffora/Menu.jpeg", alt: "Main menu" },
        { src: "/images/projects/staffora/Checkin.jpeg", alt: "Check-in screen" },
        { src: "/images/projects/staffora/LogAbsen.jpeg", alt: "Attendance log" },
        { src: "/images/projects/staffora/HistoryAbsen.jpeg", alt: "Attendance history" },
        { src: "/images/projects/staffora/Cuti.jpeg", alt: "Leave request" },
        { src: "/images/projects/staffora/Lembur.jpeg", alt: "Overtime request" },
        { src: "/images/projects/staffora/Reimburse.jpeg", alt: "Reimbursement" },
        { src: "/images/projects/staffora/Profile.jpeg", alt: "Employee profile" },
    ],
});
