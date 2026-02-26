import React from "react";

interface ExperienceItem {
    id: number;
    role: string;
    organization: string;
    timeline: string;
    description: string;
    tags: string[];
}

const experienceData: ExperienceItem[] = [
    {
        id: 1,
        role: "Junior Android Developer",
        organization: "Digital Space Explorer (Squadzip)",
        timeline: "2025 — Present",
        description:
            "Architecting and maintaining enterprise-level Android applications utilizing MVVM, Clean Architecture, and SOLID principles.",
        tags: ["Android", "Kotlin", "Architecture"],
    },
    {
        id: 2,
        role: "Founder & Lead Developer",
        organization: "Southbound Studios",
        timeline: "2025 — Present",
        description:
            "Directing game development, 3D modeling, and community leadership for PASADA: Jeepney Legends. Managing a team of testers and moderators.",
        tags: ["Roblox", "Game Dev", "Leadership"],
    },
    {
        id: 3,
        role: "Web Designer",
        organization: "eClerx (fka Personiv/AGR Operations Manila)",
        timeline: "July 2024 — May 2025",
        description:
            "Designed new websites for small to medium businesses and modified existing sites based on client requirements while managing tasks via Salesforce CRM.",
        tags: ["Web Design", "UI/UX", "Salesforce"],
    },
    {
        id: 4,
        role: "IT Support Intern",
        organization: "TaskUs Atlantis (LizardBear Corp.)",
        timeline: "June — July 2023",
        description:
            "Troubleshot Windows desktop devices, performed reimaging via PXE/IPv4 setup, and handled hardware setup and repair.",
        tags: ["IT Support", "Hardware", "Networking"],
    },
    {
        id: 5,
        role: "Music Producer & Vocalist",
        organization: "Young Fresho",
        timeline: "Current",
        description:
            "Providing professional R&B, hip-hop, and specialized talkbox production services.",
        tags: ["Audio Production", "Talkbox", "FL Studio"],
    },
];

const Experience: React.FC = () => {
    return (
        <section className="max-w-5xl mx-auto my-24 px-8 md:px-0">
            <h2 className="text-2xl font-semibold mb-8 border-b border-gray-800 pb-4 text-white">
                Current Status & Experience
            </h2>

            <div className="space-y-8">
                {experienceData.map((item) => (
                    <div
                        key={item.id}
                        className="relative pl-6 md:pl-8 border-l-2 border-gray-800 hover:border-yellow-500 transition-colors duration-300 group"
                    >
                        <span className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-[#121212] border-2 border-gray-800 group-hover:border-yellow-500 transition-colors duration-300"></span>

                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
                            <h3 className="text-xl font-medium text-white">
                                {item.role}{" "}
                                <span className="text-yellow-500 hidden md:inline-block mx-2">
                                    @
                                </span>
                                <span className="text-gray-300 block md:inline">
                                    {item.organization}
                                </span>
                            </h3>
                            <span className="text-sm font-mono text-gray-500 mt-1 md:mt-0">
                                {item.timeline}
                            </span>
                        </div>

                        <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-3xl">
                            {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs font-medium text-gray-500 bg-[#1a1a1a] px-2 py-1 rounded border border-gray-800"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
