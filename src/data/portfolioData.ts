import type { Project } from "../types";

export const projects: Project[] = [
    {
        id: 1,
        title: "PASADA: Jeepney Legends",
        category: "Game Development",
        description:
            "An immersive Roblox experience celebrating Philippine commute culture. Reached 1.2M+ views on social media.",
        techStack: ["Roblox Studio", "Luau", "Blender 3D"],
        link: "/pasada",
    },
    {
        id: 2,
        title: "Squadzip",
        category: "Software Engineering",
        description:
            "Enterprise Android application built with high-performance architecture to manage field operations.",
        techStack: ["Kotlin", "MVVM", "Clean Architecture", "SOLID"],
        link: "https://squadzip.com/home",
    },
    {
        id: 3,
        title: "Young Fresho Production",
        category: "Music & Audio",
        description:
            "Professional R&B, hip-hop, and specialized talkbox production services.",
        techStack: ["FL Studio", "Talkbox", "Vocal Processing"],
        link: "https://www.youtube.com/@YoungFresho",
    },
];
