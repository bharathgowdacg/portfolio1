import React from "react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-[80vh] grid grid-cols-1 md:grid-cols-12 items-center gap-8 py-12"
        >
            <div className="relative z-10 md:col-span-6 flex items-center justify-center order-2 md:order-1">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                    <img
                        src="/profile.jpg"
                        alt="Bharath"
                        className="relative w-full h-full rounded-full border-4 border-slate-900/50 object-cover shadow-2xl z-10"
                    />
                </div>
            </div>

            <div className="relative z-10 md:col-span-6 order-1 md:order-2 text-center md:text-left">
                <p className="text-indigo-300 font-medium mb-2 tracking-wide uppercase text-sm">Hello, I'm</p>

                <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-6">
                    <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
                        Bharath Gowda
                    </span>
                </h1>

                <p className="mt-4 text-xl text-slate-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
                    I build <span className="text-white font-semibold">fast, reliable web applications</span> and delightful user experiences.
                </p>

                <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                    <a href="#projects" className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-500/30 transition-all hover:scale-105">
                        View Projects
                    </a>

                    <a href="#contact" className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold backdrop-blur-sm transition-all hover:scale-105">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}
