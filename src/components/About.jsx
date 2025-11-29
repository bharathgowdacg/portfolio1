import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="section-block relative">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
            >
                <h2 className="section-heading">About Me</h2>

                <div className="max-w-4xl mx-auto bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                    <p className="text-slate-200 leading-relaxed text-lg text-center">
                        I'm a full-stack developer specializing in building <span className="text-indigo-400 font-semibold">robust, scalable apps</span> and clean frontends.
                        I enjoy solving real problems, optimizing performance, and constantly learning new tech stacks to stay ahead of the curve.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
