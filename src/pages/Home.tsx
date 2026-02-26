import React from "react";
import { projects } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";
import EngineRoom from "../components/EngineRoom";
import Experience from "../components/Experience";
import ImpactBar from "../components/ImpactBar";
import SocialPreview from "../components/SocialPreview";

const App: React.FC = () => {
    return (
        <div className="min-h-screen font-sans p-8 md:p-16">
            <header className="max-w-5xl mx-auto mb-20 mt-10 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex-1">
                    <p className="text-gray-500 mb-2 font-mono text-sm">
                        [Status: Building in the South]
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
                        Software Architect <br />& Creative Founder.
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Building high-performance Android systems, immersive 3D
                        worlds, and talkbox-driven R&B.
                    </p>
                </div>

                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0">
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full border-2 border-gray-800 grayscale hover:grayscale-0 hover:border-yellow-500 transition-all duration-500"
                    />
                </div>
            </header>

            <main className="max-w-5xl mx-auto">
                <ImpactBar />

                <h2 className="text-2xl font-semibold mb-8 border-b border-gray-800 pb-4 text-white">
                    Selected Work
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <Experience />

                <EngineRoom />

                <SocialPreview />
            </main>
        </div>
    );
};

export default App;
