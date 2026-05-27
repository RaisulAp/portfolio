import { coffeeRetailSaas } from "./projects/coffee-retail-saas";
import { atexExpedition } from "./projects/atex-expedition";
import { customerBilling } from "./projects/customer-billing";
export { defineProject } from "./projects/define-project";
import { fleetTrackingSystem } from "./projects/fleet-tracking-system";
import { stafforaHrm } from "./projects/staffora-hrm";
import { vehicleCostManagement } from "./projects/vehicle-cost-management";

export interface ProjectImage {
    src: string;
    alt: string;
}

export interface ProjectLink {
    label: string;
    href: string;
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    thumbnail: string;
    imageOrientation?: "desktop" | "mobile" | "default";
    category: string;
    year: string;
    techStack: string[];
    overview: string;
    background: string;
    goals: string[];
    challenges: { title: string; description: string }[];
    solutions: string[];
    features: { title: string; description: string }[];
    impact: string[];
    lessonsLearned: string[];
    gallery: ProjectImage[];
    links?: ProjectLink[];
}

export const projects: Project[] = [
    atexExpedition,
    stafforaHrm,
    customerBilling,
    fleetTrackingSystem,
    vehicleCostManagement,
    coffeeRetailSaas,
];
