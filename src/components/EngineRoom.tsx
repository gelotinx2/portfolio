import React from "react";

const EngineRoom: React.FC = () => {
	const skillCategories = [
		{
			title: "Engineering & Architecture",
			skills: [
				"Kotlin",
				"Java",
				"TypeScript",
				"React",
				"Tailwind CSS",
				"MVVM",
				"Clean Architecture",
				"SOLID",
			],
		},
		{
			title: "World Building & 3D",
			skills: [
				"Roblox Studio",
				"Luau",
				"Blender 3D",
				"Asset Modeling",
				"Level Design",
			],
		},
		{
			title: "Audio & Production",
			skills: [
				"FL Studio",
				"Talkbox",
				"Vocal Processing",
				"Sound Design",
				"Mixing & Mastering",
			],
		},
	];

	return (
		<section className="max-w-5xl mx-auto my-24 px-8 md:px-0">
			<h2 className="text-2xl font-semibold mb-8 border-b border-gray-800 pb-4 text-white">
				The Engine Room
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{skillCategories.map((category, index) => (
					<div
						key={index}
						className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors"
					>
						<h3 className="text-lg font-medium text-white mb-4">
							{category.title}
						</h3>
						<div className="flex flex-wrap gap-2">
							{category.skills.map((skill, idx) => (
								<span
									key={idx}
									className="bg-[#2a2a2a] text-gray-300 text-xs px-3 py-1.5 rounded-full border border-gray-700 hover:border-yellow-500 hover:text-yellow-500 transition-colors cursor-default"
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default EngineRoom;
