import { defineProject } from "./define-project";

export const vetosAi = defineProject({
    id: "vetos-ai",
    slug: "vetos-ai",
    title: "VETOS AI: Pet Lover App",
    subtitle: "The All-in-One Pet Care Super-App, Live on Google Play",
    description:
        "One app for everything a pet owner needs: health passport, clinic booking, grooming, pet hotel, shop, wallet and AI assistants. I built the Flutter app and designed the API contracts it runs on.",
    role: "Fullstack Developer (Mobile and API Contracts)",
    category: "Mobile Applications",
    keyMetric: "Live on Google Play: 13 API Modules, 160+ Endpoints, 1 Flutter App",
    status: "Production",
    thumbnail: "/images/projects/vetos/thumbnail.png",
    year: "2026",
    imageOrientation: "mobile",
    techStack: [
        "Flutter",
        "Dart",
        "Riverpod (with code generation)",
        "Dio",
        "REST API (contract-first, JSON)",
        "Firebase Cloud Messaging",
        "Flutter Secure Storage",
        "Flutter Map",
        "Google Play (release and in-app updates)",
    ],
    overview:
        "VETOS AI turns scattered pet care into a single, simple app. Owners connect to their veterinary clinic and manage everything from one account: a digital pet passport with vaccinations, visits and hospital stays; clinic, grooming and pet hotel bookings; an online shop; a wallet with subscriptions and loyalty points; and AI features including a chat assistant, breed detection and a photo studio. Built with Flutter, released on Google Play, and fully bilingual (Indonesian and English).",
    background:
        "A pet's life is spread across clinic paperwork, vaccination cards, chat messages, grooming appointments, boarding and shop purchases. VETOS AI was created to put all of it in the owner's pocket, tied to their own clinic. There was one more twist: the backend did not exist yet. Instead of waiting, I started from API contracts, so the app and the server could be built against the same specification from day one.",
    goals: [
        "Give every owner one account for their pets' health records, bookings, purchases and payments.",
        "Define the API contracts first, so mobile and backend teams build against one source of truth.",
        "Make the app dependable on real phones: safe sessions, clear payment states and friendly errors.",
        "Keep it fast: a small download and as few requests as possible when the home screen opens.",
        "Bring AI into pet care (chat, breed detection, photo studio) while leaving medical advice to the clinic.",
    ],
    challenges: [
        {
            title: "Building before the backend existed",
            description:
                "Screens, data models and error cases had to be designed while the endpoints were still being written. The fix: treat the API contract as the product's foundation.",
        },
        {
            title: "One account must never see another's data",
            description:
                "After a logout and a new sign-up, the previous owner's pets still showed up on Home. The data was not refetched; it was being kept alive in memory. A privacy bug like this must never reach production.",
        },
        {
            title: "Payments with many states",
            description:
                "Wallet, shop, booking and subscription payments can be pending, paid, failed or expired. The app must never show a wrong balance or charge a user twice.",
        },
        {
            title: "Real payloads do not always match the docs",
            description:
                "Live responses sometimes differed from the documented samples, and raw server errors could leak through to the user.",
        },
    ],
    solutions: [
        "Designed REST API contracts for 13 modules (auth, owner and subscriptions, pet passport, booking, shop, wallet, Pet Moments, Pet Buddy, content, notifications, AI breed, telemedicine, pet hotel) under one consistent standard: integer IDs, snake_case fields, ISO-8601 UTC time, integer Rupiah amounts, separate enums and master data, and a single response envelope.",
        "Structured the app in clean layers (Models, Repositories, Providers, Pages), so swapping a mock for the live API meant changing one repository per domain and zero screens.",
        "Hunted down the cross-account data leak to an app-lifetime provider that kept an auto-disposing pet list alive, reproduced it with a failing widget test, fixed it, and kept the test as a permanent regression guard.",
        "Moved all money calculation to the server so the app only shows server-computed figures, with explicit pending, success and failed payment screens.",
        "Parsed API responses defensively (type checks instead of blind casts) and sanitized server error messages in one central place instead of at every call site.",
        "Built a forced sign-out flow for expired sessions, and used push notifications first with a slow fallback poll to keep server load low.",
        "Lazy-loaded tabs and cached reads to cut startup requests, then trimmed the release build to shrink the download.",
        "Audited live endpoints against the contracts and reported backend defects, such as a medical-records endpoint that always failed and booking bugs that blocked every booking.",
    ],
    features: [
        {
            title: "Digital Pet Passport",
            description:
                "A pet's complete health record in one place: basic info, health status, vaccinations, clinic visits, hospital stays with a running bill, documents and a downloadable PDF.",
        },
        {
            title: "Clinic Network and Booking",
            description:
                "Connect to a clinic by QR code or from a directory, then book consultations, grooming and pet hotel stays and follow every booking's status.",
        },
        {
            title: "Pet Shop",
            description:
                "A product catalogue with a cart per clinic, server-computed checkout, order tracking and refunds straight to the wallet.",
        },
        {
            title: "Wallet, Subscriptions and Rewards",
            description:
                "A PIN-protected wallet with top-up, AI token packs, subscription plans (Basic, Silver, Gold) and loyalty points that can be redeemed for rewards.",
        },
        {
            title: "AI Assistants",
            description:
                "Pet Buddy chat with history, AI breed detection with care suggestions, and Pet Moments, a photo studio for creative pet pictures.",
        },
        {
            title: "Notifications and Consent",
            description:
                "Push notifications with deep links, an in-app notification center, and Inform Consent letters that owners can read, sign or reject.",
        },
    ],
    impact: [
        "Shipped to Google Play: one app covering booking, grooming, pet hotel, shop, wallet, loyalty, pet passport and AI features.",
        "Delivered 13 API contract modules with 160+ endpoints, written before the backend implemented them.",
        "Cut the home screen's startup requests from 13 to 5 with lazy-loaded tabs and cached reads.",
        "Shrank the arm64 release APK from 44.6 MB to 18.7 MB, a reduction of about 58%.",
        "Backed the code with 190+ automated test files, including a regression test for the cross-account data leak.",
        "Launched fully bilingual in Indonesian and English.",
    ],
    lessonsLearned: [
        "Contracts first removes a lot of guessing, but documented samples can still differ from live payloads, so every endpoint deserves a check against the real server.",
        "State that outlives a login session is the riskiest kind: any provider holding account data must dispose itself or be reset on logout.",
        "Measure before optimizing: request count and APK size only improved once I knew exactly where they came from.",
        "Push first, poll rarely: a short polling interval multiplied by thousands of owners is a real cost for the server.",
    ],
    gallery: [
        { src: "/images/projects/vetos/Home.png", alt: "Home screen with the pet strip, wallet, AI tokens and points, service shortcuts and pet health status" },
        { src: "/images/projects/vetos/PetPassport.png", alt: "Pet Passport overview with basic info and health status" },
        { src: "/images/projects/vetos/PassportMedicalRecords.png", alt: "Pet Passport medical records tab listing recent clinic visits" },
        { src: "/images/projects/vetos/PetBuddy.png", alt: "Pet Buddy AI chat answering a pet care question" },
        { src: "/images/projects/vetos/Wallet.png", alt: "Wallet screen with balance, AI tokens, reward points and recent transactions" },
        { src: "/images/projects/vetos/SubscriptionPlans.png", alt: "Subscription plans screen comparing Basic, Silver and Gold" },
        { src: "/images/projects/vetos/AiTokenTopup.png", alt: "AI token pack purchase screen with payment methods" },
        { src: "/images/projects/vetos/WalletHistory.png", alt: "Transaction history grouped by month with incoming and outgoing totals" },
        { src: "/images/projects/vetos/Shop.png", alt: "Pet shop with clinic seller label, wallet balance and product cards" },
        { src: "/images/projects/vetos/MyClinic.png", alt: "My Clinic screen with opening hours, services and the doctor on duty" },
        { src: "/images/projects/vetos/AiBreedDetection.png", alt: "AI breed detection screen with photo upload slots and care suggestions" },
        { src: "/images/projects/vetos/PetMoments.png", alt: "Pet Moments photo studio with creative feature cards" },
        { src: "/images/projects/vetos/PetHotel.png", alt: "Pet hotel menu with booking and pet monitoring entries" },
        { src: "/images/projects/vetos/Notifications.png", alt: "Notification center with booking, vaccine reminder and order updates" },
        { src: "/images/projects/vetos/HealthArticles.png", alt: "Health articles list with category filters" },
        { src: "/images/projects/vetos/Profile.png", alt: "Profile screen with personal data, app preferences and the pet list" },
    ],
});
