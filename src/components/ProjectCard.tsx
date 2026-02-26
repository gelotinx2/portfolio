import React from "react";
import { Link } from "react-router-dom";
import type { Project } from "../types";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-[#1e1e1e] border border-gray-800 rounded-lg p-6 hover:border-yellow-500 transition-colors duration-300 flex flex-col h-full">
            <div className="mb-4">
                <span className="text-yellow-500 text-xs font-bold tracking-widest uppercase">
                    {project.category}
                </span>
                <h3 className="text-2xl font-semibold text-white mt-1">
                    {project.title}
                </h3>
            </div>

            <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-[#2a2a2a] text-gray-300 text-xs px-2 py-1 rounded"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="mt-auto pt-4">
                {project.link.startsWith("/") ? (
                    <Link
                        to={project.link}
                        className="text-white text-sm font-medium hover:text-yellow-500 transition-colors"
                    >
                        View Deep Dive →
                    </Link>
                ) : (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm font-medium hover:text-yellow-500 transition-colors"
                    >
                        Visit Site →
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
