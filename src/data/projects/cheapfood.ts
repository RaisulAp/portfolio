import { defineProject } from "./define-project";

export const cheapFood = defineProject({
    id: "cheapfood",
    title: "CheapFood — Nearby Food & Store Discovery Platform",
    subtitle: "Modern Location-Based Marketplace for Food Discovery & Seller Management",
    description:
        "Developed a modern web-based platform designed to help users discover nearby food and local stores efficiently, with dual-role ecosystem for customers and sellers managing their digital storefronts.",
    thumbnail: "/images/projects/cheapfood/Home.png",
    imageOrientation: "default",
    category: "Marketplace Web App",
    year: "2024",
    techStack: [
        "FastAPI",
        "Python",
        "PostgreSQL",
        "React",
        "Tailwind CSS",
        "REST API Architecture",
        "Multi-Role Authentication",
    ],
    overview:
        "CheapFood is a centralized marketplace platform where customers can discover nearby food and stores while sellers can manage their food businesses digitally. The platform combines real-time location-based discovery, multi-role authentication, marketplace workflows, modern frontend architecture, and scalable backend services into a single integrated system.",
    background:
        "Finding nearby food or local restaurants is often fragmented across multiple platforms, especially for smaller food businesses that struggle to gain visibility online. CheapFood was developed to solve these problems by creating a unified platform that improves accessibility for customers while giving sellers the tools to build their online presence.",
    goals: [
        "Create a centralized platform for food discovery and local store browsing",
        "Implement real-time location-based discovery system",
        "Build separate but integrated customer and seller interfaces with isolated authentication",
        "Enable sellers to manage their food business and product listings digitally",
        "Design a scalable and responsive marketplace experience for both user roles",
        "Establish modern backend and frontend architecture for future expansion",
    ],
    challenges: [
        {
            title: "Multi-Role Authentication System",
            description:
                "Designing secure authentication systems for both customers and sellers while maintaining session isolation, clear role-based access management, and platform organization.",
        },
        {
            title: "Location-Based Real-Time Discovery",
            description:
                "Implementing efficient location tracking and nearby store discovery that performs well under typical database loads and scales as user base grows.",
        },
        {
            title: "Responsive Marketplace UI",
            description:
                "Designing a modern marketplace interface that feels polished across devices while remaining lightweight and maintaining high usability for both customer browsing and seller operations.",
        },
        {
            title: "FastAPI Backend Performance",
            description:
                "Building high-performance REST APIs with FastAPI that handle real-time data retrieval, location queries, and marketplace interactions without bottlenecks.",
        },
    ],
    solutions: [
        "Implemented FastAPI backend with modern asynchronous capabilities for high-performance API architecture",
        "Designed PostgreSQL database to support multi-role accounts, location data, product information, and marketplace operations",
        "Built React frontend with Tailwind CSS for responsive, modern user interfaces across both customer and seller platforms",
        "Separated customer and seller authentication flows while maintaining unified marketplace backend",
        "Implemented location-based queries and discovery algorithms for efficient nearby store finding",
        "Created modular React components for flexible marketplace UI reuse across both customer and seller interfaces",
    ],
    features: [
        {
            title: "Nearby Food Discovery",
            description:
                "Customers can search and discover nearby food stores, browse available food products, explore store information, and discover local sellers more easily with a focus on convenience and accessibility.",
        },
        {
            title: "Customer Authentication System",
            description:
                "Users can create accounts and log in securely to access personalized features including user registration, secure login, session management, and personalized user access.",
        },
        {
            title: "Food Browsing Experience",
            description:
                "Modern customer interface providing easy navigation, product exploration, responsive layouts, and marketplace aesthetics built with React and Tailwind CSS.",
        },
        {
            title: "Seller Dashboard",
            description:
                "Sellers have access to their own dashboard system to manage their digital store including product management, store configuration, listing organization, and food offering management.",
        },
        {
            title: "Seller Authentication System",
            description:
                "Separate login system for sellers providing improved security, access control, platform organization, and dedicated seller workflow management.",
        },
        {
            title: "Store Profile Management",
            description:
                "Sellers can customize and manage store profiles including store name, product displays, food listings, and seller information for flexible and dynamic storefronts.",
        },
    ],
    impact: [
        "Created a modern full-stack platform connecting customers with local food businesses",
        "Demonstrated ability to implement multi-role authentication and access management systems",
        "Built scalable marketplace architecture supporting real-time location-based discovery",
        "Enhanced user accessibility to local food businesses through intuitive, responsive interfaces",
        "Strengthened experience in modern Python backend development with FastAPI",
        "Proved capability to build complete SPA-style web applications with scalable frontend architecture",
    ],
    lessonsLearned: [
        "FastAPI provides excellent performance and scalability for modern API-driven applications",
        "Multi-role authentication systems require careful isolation and clear separation of concerns",
        "Location-based features require thoughtful database design and query optimization",
        "React component modularity is crucial for maintainable marketplace interfaces",
        "Marketplace applications must balance feature richness with intuitive user experience",
        "Full-stack JavaScript solutions benefit from strong type safety and architectural planning",
    ],
    gallery: [
        { src: "/images/projects/cheapfood/Home.png", alt: "Customer homepage with nearby stores" },
        { src: "/images/projects/cheapfood/Menu.png", alt: "Food browsing and product menu interface" },
        { src: "/images/projects/cheapfood/Seller.png", alt: "Seller dashboard overview" },
        { src: "/images/projects/cheapfood/Seller1.png", alt: "Seller store profile management" },
        { src: "/images/projects/cheapfood/SellerProfile.png", alt: "Seller profile configuration interface" },
    ],
});
