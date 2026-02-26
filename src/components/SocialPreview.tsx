import React from "react";

const SocialPreview: React.FC = () => {
    const accounts = [
        {
            handle: "@gelotinx2",
            alias: "Young Fresho",
            followers: "3.9K+",
            likes: "173.2K",
            highlights: ["2M+ View Pin", "Talkbox Covers", "Music"],
            link: "https://www.tiktok.com/@gelotinx2",
            accent: "border-purple-500",
        },
        {
            handle: "@playpasada",
            alias: "PASADA: Jeepney Legends",
            followers: "2.7K+",
            likes: "57.6K",
            highlights: ["506K+ SLEX View", "Jeepney Sim", "South Luzon Map"],
            link: "https://www.tiktok.com/@playpasada",
            accent: "border-yellow-500",
        },
    ];

    return (
        <section className="max-w-5xl mx-auto my-24 px-8 md:px-0">
            <h2 className="text-2xl font-semibold mb-8 border-b border-gray-800 pb-4 text-white">
                Social Pulse & Distribution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {accounts.map((acc, index) => (
                    <div
                        key={index}
                        className={`bg-[#1a1a1a] border-l-4 ${acc.accent} rounded-r-lg p-8 hover:bg-[#222] transition-all group`}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white">
                                    {acc.alias}
                                </h3>
                                <p className="text-gray-500 font-mono text-sm">
                                    {acc.handle}
                                </p>
                            </div>
                            <a
                                href={acc.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors"
                            >
                                Follow
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-[#121212] p-4 rounded-lg border border-gray-800">
                                <p className="text-2xl font-bold text-white">
                                    {acc.followers}
                                </p>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                                    Followers
                                </p>
                            </div>
                            <div className="bg-[#121212] p-4 rounded-lg border border-gray-800">
                                <p className="text-2xl font-bold text-white">
                                    {acc.likes}
                                </p>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                                    Total Likes
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-tighter mb-3">
                                Viral Highlights
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {acc.highlights.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] bg-gray-800/50 text-gray-300 px-2 py-1 rounded border border-gray-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SocialPreview;
