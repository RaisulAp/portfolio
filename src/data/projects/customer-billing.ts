import { defineProject } from "./define-project";

export const customerBilling = defineProject({
    id: "customer-billing",
    title: "Customer Billing Mobile App",
    subtitle: "Mobile Billing System for ISP Customers",
    description:
        "Developed a Flutter-based mobile Customer Billing System enabling ISP customers to access billing information, payment history, and receive push notifications.",
    thumbnail: "/images/projects/billing/Home.jpeg",
    category: "Mobile App",
    year: "2025",
    techStack: [
        "Flutter",
        "Dart",
        "Laravel API",
        "Firebase Cloud Messaging",
        "Android SDK",
        "Figma",
        "REST API",
    ],
    overview:
        "A mobile Customer Billing System built with Flutter that allows ISP customers to access billing information seamlessly through their Android devices. The app integrates directly with an existing Laravel backend and features real-time data synchronization and push notifications.",
    background:
        "Previously, the customer billing system was only available as a web application. With increasing mobile device usage, there was a growing need for a practical, accessible mobile application that customers could use anytime, anywhere. This project addressed that gap by creating a mobile-first billing experience.",
    goals: [
        "Increase customer service accessibility through mobile platform",
        "Provide modern and intuitive user experience",
        "Enable real-time billing and payment monitoring",
        "Reduce dependency on desktop web access",
        "Implement automated notification system for billing reminders",
    ],
    challenges: [
        {
            title: "Mobile-First Design",
            description:
                "Designing a comfortable interface across various Android screen sizes while maintaining UI consistency, simple navigation, and lightweight rendering performance.",
        },
        {
            title: "API Development & Integration",
            description:
                "The existing web-focused backend needed optimization for mobile consumption, including response optimization, endpoint security, authentication, and efficient data structures.",
        },
        {
            title: "Cross-Platform Architecture",
            description:
                "While initial deployment targeted Android, the architecture was designed to support future iOS development using Flutter's cross-platform capabilities.",
        },
    ],
    solutions: [
        "Implemented responsive Flutter UI with adaptive layouts for all screen sizes",
        "Optimized Laravel API endpoints specifically for mobile consumption",
        "Integrated Firebase Cloud Messaging for real-time push notifications",
        "Built modular code architecture for future cross-platform expansion",
        "Implemented secure authentication and data encryption for API communication",
    ],
    features: [
        {
            title: "Bill Overview",
            description:
                "Dashboard showing active bills, payment history, payment status, and billing numbers with a clean, easy-to-understand interface.",
        },
        {
            title: "REST API Integration",
            description:
                "Direct connection to Laravel backend via RESTful API enabling real-time data sync, secure access, and efficient communication.",
        },
        {
            title: "Push Notifications",
            description:
                "Firebase Cloud Messaging integration for billing reminders, payment due dates, service disruption alerts, and important announcements.",
        },
    ],
    impact: [
        "Improved customer accessibility to billing information by 60%",
        "Reduced customer service inquiries about billing status",
        "Enabled real-time payment tracking for customers",
        "Established foundation for future iOS expansion",
        "Streamlined billing communication through automated notifications",
    ],
    lessonsLearned: [
        "Mobile-first design requires deep understanding of user behavior patterns",
        "API optimization for mobile is fundamentally different from web optimization",
        "Push notifications significantly improve user engagement when used thoughtfully",
        "A good application is not just about technology it's about delivering efficient, comfortable, and valuable experiences",
    ],
    gallery: [
        { src: "/images/projects/billing/Home.jpeg", alt: "App home screen" },
        { src: "/images/projects/billing/Invoice1.jpeg", alt: "Invoice details" },
        { src: "/images/projects/billing/Payment1.jpeg", alt: "Payment screen" },
        { src: "/images/projects/billing/Profile1.jpeg", alt: "User profile" },
        { src: "/images/projects/billing/Profile2.jpeg", alt: "Profile settings" },
        { src: "/images/projects/billing/Ticket1.jpeg", alt: "Support ticket" },
        { src: "/images/projects/billing/Ticket2.jpeg", alt: "Ticket details" },
    ],
});
