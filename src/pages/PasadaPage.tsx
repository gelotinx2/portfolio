import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Screenshot {
    url: string;
    caption: string;
}

const PasadaPage: React.FC = () => {
    const screenshots: Screenshot[] = [
        {
            url: "/images/pasada-1.jpg",
            caption: "SM City Calamba built in Roblox Studio.",
        },
        {
            url: "/images/pasada-2.jpg",
            caption: "WalterMart Makiling built in Roblox Studio.",
        },
        {
            url: "/images/pasada-3.jpg",
            caption: "SLEX Calamba Exit built in Roblox Studio.",
        },
        {
            url: "/images/pasada-4.jpg",
            caption: '"Laguna Classic" jeepney model built in Blender.',
        },
    ];

    // 2. State to track the active image
    const [selectedImg, setSelectedImg] = useState<Screenshot | null>(null);

    return (
        <div className="max-w-5xl mx-auto py-20 px-8 md:px-0 relative">
            <Link
                to="/"
                className="text-gray-500 hover:text-yellow-500 transition-colors font-mono text-sm"
            >
                ← Back to Portfolio
            </Link>

            <header className="mt-10 mb-16">
                <h1 className="text-5xl font-bold text-white mb-4">
                    PASADA: Jeepney Legends
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                    A tribute to Philippine commute culture. Reached 1M+
                    collective views on social media by focusing on technical
                    authenticity and regional route variants.
                </p>
            </header>

            <section className="mb-20">
                <h2 className="text-2xl font-semibold mb-8 border-b border-gray-800 pb-4 text-white">
                    Development Screenshots
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {screenshots.map((img, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImg(img)}
                            className="aspect-video bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden group cursor-pointer hover:border-yellow-500 transition-all"
                        >
                            <img
                                src={img.url}
                                alt={img.caption}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {selectedImg && (
                <div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 md:p-10 animate-in fade-in duration-300"
                    onClick={() => setSelectedImg(null)}
                >
                    <button className="absolute top-10 right-10 text-white text-4xl hover:text-yellow-500">
                        &times;
                    </button>

                    <div
                        className="max-w-4xl w-full h-auto flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImg.url}
                            alt="Large View"
                            className="max-h-[80vh] w-auto rounded-lg shadow-2xl border border-gray-800"
                        />
                        <p className="mt-6 text-white text-lg font-medium text-center italic">
                            {selectedImg.caption}
                        </p>
                    </div>
                </div>
            )}

            <section className="mb-20">
                <h2 className="text-2xl font-semibold mb-8 border-b border-gray-800 pb-4 text-white">
                    Technical Optimization & Standards
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8">
                        <h3 className="text-yellow-500 font-mono text-sm uppercase mb-4 tracking-widest">
                            Optimization Framework
                        </h3>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="flex gap-3">
                                <span className="text-yellow-500">01</span>
                                <div>
                                    <strong className="text-white block">
                                        Low-Triangle Modeling
                                    </strong>
                                    Assets are engineered with low triangle
                                    counts to ensure high performance and
                                    stability across mobile and low-end hardware
                                    without sacrificing visual fidelity.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-yellow-500">02</span>
                                <div>
                                    <strong className="text-white block">
                                        Texture Atlasing
                                    </strong>
                                    Advanced atlasing techniques are utilized to
                                    minimize draw calls and optimize memory
                                    usage, enabling the rendering of complex,
                                    high-detail environments.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-yellow-500">03</span>
                                <div>
                                    <strong className="text-white block">
                                        Scalable Systems
                                    </strong>
                                    The codebase follows robust, modular
                                    patterns designed for scalability, allowing
                                    for the rapid deployment of new regional
                                    route variants and vehicle models.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8 flex flex-col">
                        <h3 className="text-yellow-500 font-mono text-sm uppercase mb-4 tracking-widest">
                            Artistic Authenticity
                        </h3>
                        <p className="text-white text-lg font-medium leading-relaxed mb-4">
                            "Every texture in PASADA is handcrafted from
                            scratch."
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            To ensure a unique and authentic aesthetic, a
                            bespoke texturing pipeline is used. By creating all
                            textures manually, the project achieves a level of
                            cultural and technical detail that generic assets
                            cannot provide—capturing the specific wear, signage,
                            and chrome reflections of the Philippine Jeepney.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PasadaPage;
