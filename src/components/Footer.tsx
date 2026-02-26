import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="max-w-5xl mx-auto mt-32 mb-10 border-t border-gray-800 pt-10 px-8 md:px-0">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Let's build something.
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Whether it's scalable app architecture or a custom
                        talkbox track.
                    </p>
                    <a
                        href="mailto:sprmcfrsho@gmail.com"
                        className="inline-block mt-4 text-yellow-500 font-medium hover:text-white transition-colors"
                    >
                        sprmcfrsho@gmail.com ↗
                    </a>
                </div>
                <div className="flex flex-wrap gap-6 text-sm font-medium">
                    <a
                        href="https://github.com/gelotinx2"
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mark-angelo-maligalig-74457a2b4/"
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://www.youtube.com/@YoungFresho"
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                        YouTube
                    </a>
                    <a
                        href="https://www.fiverr.com/gelotinx2"
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                        Fiverr
                    </a>
                    <a
                        href="https://www.roblox.com/users/7177833840/profile"
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                        Roblox
                    </a>
                </div>
            </div>
            <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
                <p>
                    © {new Date().getFullYear()} Southbound Studios. All rights
                    reserved.
                </p>
                <p className="mt-2 md:mt-0">
                    Built with React, Vite & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
