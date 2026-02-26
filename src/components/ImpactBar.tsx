import React from "react";

const ImpactBar: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto mb-20 px-8 md:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-gray-800 py-10">
                <div>
                    <h4 className="text-3xl font-bold text-white">2.6M+</h4>
                    {/* Combined 2M from Young Fresho + 506k/185k from PASADA pins */}
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mt-1">
                        Peak Video Reach
                    </p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-white">230K+</h4>
                    {/* Combined likes across both channels */}
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mt-1">
                        Total Social Likes
                    </p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-white">6.7K+</h4>
                    {/* Combined follower count */}
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mt-1">
                        Active Community
                    </p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-white">93%</h4>
                    {/* Rating seen in PASADA screenshot */}
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mt-1">
                        User Approval
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImpactBar;
