import React from "react";

export default function SpaceVideoBackground() {
    // Path to the uploaded video
    const videoSrc = "https://fg6ae0196omuyqcy.public.blob.vercel-storage.com/vedio.mp4";

    return (
        <div className="space-video-wrapper" aria-hidden="true">
            <video
                className="space-video"
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            />
            {/* subtle dark overlay so text stays readable */}
            <div className="space-video-overlay" />
        </div>
    );
}
