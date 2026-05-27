export interface Skill {
    name: string;
    level: number; // 0-100
}

export interface SkillCategory {
    title: string;
    icon: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        icon: "Monitor",
        skills: [
            { name: "Flutter", level: 90 },
            { name: "Dart", level: 88 },
            { name: "JavaScript", level: 82 },
            { name: "HTML/CSS", level: 85 },
            { name: "React", level: 70 },
            { name: "Tailwind CSS", level: 78 },
        ],
    },
    {
        title: "Backend",
        icon: "Server",
        skills: [
            { name: "Laravel", level: 88 },
            { name: "PHP", level: 85 },
            { name: "Python", level: 75 },
            { name: "REST API", level: 90 },
            { name: "Node.js", level: 68 },
        ],
    },
    {
        title: "Mobile",
        icon: "Smartphone",
        skills: [
            { name: "Flutter", level: 90 },
            { name: "Android SDK", level: 78 },
            { name: "Cross-Platform", level: 85 },
            { name: "Firebase", level: 82 },
            { name: "Push Notifications", level: 80 },
        ],
    },
    {
        title: "Database",
        icon: "Database",
        skills: [
            { name: "MySQL", level: 85 },
            { name: "Firebase", level: 82 },
            { name: "PostgreSQL", level: 72 },
            { name: "SQLite", level: 75 },
        ],
    },
    {
        title: "Tools & DevOps",
        icon: "Wrench",
        skills: [
            { name: "Git", level: 88 },
            { name: "Figma", level: 80 },
            { name: "VS Code", level: 92 },
            { name: "Postman", level: 85 },
            { name: "WordPress", level: 75 },
            { name: "Docker", level: 65 },
        ],
    },
    {
        title: "Soft Skills",
        icon: "Users",
        skills: [
            { name: "Leadership", level: 92 },
            { name: "Problem Solving", level: 90 },
            { name: "Communication", level: 88 },
            { name: "Team Coordination", level: 90 },
            { name: "Adaptability", level: 92 },
            { name: "Strategic Thinking", level: 85 },
        ],
    },
];
