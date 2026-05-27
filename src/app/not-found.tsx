import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <h1 className="mb-2 text-7xl font-bold gradient-text">404</h1>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
                Page Not Found
            </h2>
            <p className="mb-8 max-w-md text-muted-light">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
            >
                <ArrowLeft size={16} />
                Back to Home
            </Link>
        </div>
    );
}
