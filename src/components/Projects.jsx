import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    // Auto-rotate carousel
    useEffect(() => {
        const id = setInterval(() => {
            setActiveIndex((i) => (i + 1) % PROJECTS.length);
        }, 6000);
        return () => clearInterval(id);
    }, []);

    const nextSlide = () => setActiveIndex((i) => (i + 1) % PROJECTS.length);
    const prevSlide = () => setActiveIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);

    return (
        <section id="projects" className="section-block">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="section-heading">Featured Projects</h2>

                <div className="max-w-6xl mx-auto px-4">
                    <div className="relative">

                        {/* Main Card Display */}
                        <div className="relative overflow-hidden min-h-[400px] flex items-center justify-center">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="w-full max-w-3xl bg-slate-900/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative z-10"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    {/* Content */}
                                    <div className="flex-1 text-left">
                                        <h3 className="text-3xl font-bold text-white mb-2">
                                            {PROJECTS[activeIndex].title}
                                        </h3>
                                        <p className="text-indigo-400 font-medium mb-4">{PROJECTS[activeIndex].subtitle}</p>
                                        <p className="text-slate-300 mb-6 leading-relaxed">
                                            {PROJECTS[activeIndex].desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {PROJECTS[activeIndex].tags.map((t) => (
                                                <span key={t} className="text-xs font-semibold bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full border border-indigo-500/30">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4">
                                            <a href={PROJECTS[activeIndex].link} className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-lg shadow-indigo-500/25">
                                                View Live
                                            </a>
                                            <a href={PROJECTS[activeIndex].github} className="px-6 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-white font-medium transition">
                                                Source Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Controls */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/50 hover:bg-indigo-600 text-white border border-white/10 backdrop-blur transition z-20"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/50 hover:bg-indigo-600 text-white border border-white/10 backdrop-blur transition z-20"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>

                        {/* Dots */}
                        <div className="flex gap-3 justify-center mt-8">
                            {PROJECTS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-indigo-500 w-8" : "bg-white/20 hover:bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </motion.div>
        </section>
    );
}
