import { defineProject } from "./define-project";

export const coffeeRetailSaas = defineProject({
    id: "coffee-retail-saas",
    title: "Coffee Retail SaaS Platform",
    subtitle: "Flexible Web-Based Sales & Store Management System",
    description:
        "Developed a Laravel-based SaaS platform for coffee retail businesses, combining a customer-facing storefront and an admin management dashboard for products, orders, revenue, and dynamic store configuration.",
    thumbnail: "/images/projects/coffee-retail-saas/Dashboard.png",
    imageOrientation: "desktop",
    category: "SaaS Web App",
    year: "2026",
    techStack: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript",
        "Bootstrap",
        "WhatsApp API",
        "Dynamic CMS",
    ],
    overview:
        "The Coffee Retail SaaS Platform is a web-based system designed to help coffee retailers manage online sales, product catalogs, customer orders, store operations, and website content from a centralized ecosystem. The platform contains two integrated systems: a customer-facing website and an admin dashboard.",
    background:
        "Many small and medium coffee retailers still depend on manual operations or social media-only selling, which can make product management, order handling, revenue visibility, and customer purchasing experiences harder to manage. This project was built to provide a flexible, SaaS-ready digital store system that retailers can operate without technical complexity.",
    goals: [
        "Provide coffee retailers with a complete online selling platform",
        "Build a customer-facing website for product browsing, ordering, and order tracking",
        "Create an admin dashboard for products, orders, users, revenue, and configuration",
        "Allow store owners to update business information dynamically without editing source code",
        "Integrate WhatsApp communication into the customer purchase flow",
        "Design a scalable SaaS-ready architecture for future multi-store usage",
    ],
    challenges: [
        {
            title: "Dual-System Architecture",
            description:
                "The platform needed to support both a customer website and an admin dashboard while keeping user flows, permissions, UI structures, and data management clearly separated.",
        },
        {
            title: "Dynamic Store Configuration",
            description:
                "Store owners needed the ability to update store name, location, hours, descriptions, contact information, and business details without touching code.",
        },
        {
            title: "Multi-Role User Experience",
            description:
                "The system had to be powerful enough for administrators while remaining simple, attractive, responsive, and easy to use for customers.",
        },
        {
            title: "SaaS Flexibility",
            description:
                "The architecture needed to support future scalability, customization, and reusable operational workflows instead of being a static online store.",
        },
    ],
    solutions: [
        "Built the complete web platform using Laravel for backend logic and frontend views",
        "Separated customer storefront workflows from admin dashboard operations",
        "Implemented dynamic content management for store information and website configuration",
        "Created product, pricing, order, customer, user, and revenue management modules",
        "Integrated WhatsApp communication for faster customer-store interaction",
        "Designed responsive interfaces for both customer browsing and admin operational control",
    ],
    features: [
        {
            title: "Customer Storefront",
            description:
                "A responsive customer-facing website where users can browse products, view product details, place orders, and contact the store through WhatsApp.",
        },
        {
            title: "Admin Dashboard",
            description:
                "An operational control center for managing store information, products, pricing, orders, customers, revenue, website settings, and activity logs.",
        },
        {
            title: "Product & Pricing Management",
            description:
                "Tools for adding products, editing product information, updating prices, managing categories, and controlling product availability dynamically.",
        },
        {
            title: "Order Management",
            description:
                "A structured order workflow that helps administrators monitor incoming orders while customers can track their purchase status.",
        },
        {
            title: "Dynamic Store Configuration",
            description:
                "A CMS-style configuration system for updating store name, location, operating hours, descriptions, contact details, and business information.",
        },
        {
            title: "Revenue Monitoring",
            description:
                "Dashboard visibility into sales performance, revenue data, incoming orders, and operational growth for better business decisions.",
        },
    ],
    impact: [
        "Created a complete digital sales ecosystem for coffee retail businesses",
        "Improved product and order management through a centralized admin dashboard",
        "Reduced technical dependency by making store content dynamically configurable",
        "Enhanced customer purchasing flow through responsive storefront and WhatsApp integration",
        "Provided revenue and operational visibility for business owners",
        "Strengthened experience in SaaS-ready Laravel full-stack platform development",
    ],
    lessonsLearned: [
        "SaaS platforms need flexibility from the data model to the user interface",
        "Multi-role systems require clear separation between customer and admin workflows",
        "Dynamic CMS architecture can make business tools easier for non-technical users",
        "E-commerce workflows must balance operational control and customer simplicity",
        "Business-oriented software succeeds when it solves both management and customer experience problems",
        "A reusable platform architecture is more valuable than a static one-off website",
    ],
    gallery: [
        { src: "/images/projects/coffee-retail-saas/Dashboard.png", alt: "Customer website homepage" },
        { src: "/images/projects/coffee-retail-saas/Dashboard1.png", alt: "Customer dashboard section" },
        { src: "/images/projects/coffee-retail-saas/Dashboard2.png", alt: "Customer storefront overview" },
        { src: "/images/projects/coffee-retail-saas/Produk.png", alt: "Product catalog page" },
        { src: "/images/projects/coffee-retail-saas/Produk1.png", alt: "Product detail page" },
        { src: "/images/projects/coffee-retail-saas/Produk2.png", alt: "Product storefront section" },
        { src: "/images/projects/coffee-retail-saas/Pesanan.png", alt: "Customer order page" },
        { src: "/images/projects/coffee-retail-saas/LacakPesanan.png", alt: "Order tracking page" },
        { src: "/images/projects/coffee-retail-saas/AdminDashboard.png", alt: "Admin dashboard" },
        { src: "/images/projects/coffee-retail-saas/AdminProduk.png", alt: "Admin product management" },
        { src: "/images/projects/coffee-retail-saas/AdminProdukAdd.png", alt: "Admin add product page" },
        { src: "/images/projects/coffee-retail-saas/AdminPesanan.png", alt: "Admin order management" },
        { src: "/images/projects/coffee-retail-saas/AdminConfig.png", alt: "Admin website configuration" },
        { src: "/images/projects/coffee-retail-saas/AdminLog.png", alt: "Admin activity logs" },
    ],
});
