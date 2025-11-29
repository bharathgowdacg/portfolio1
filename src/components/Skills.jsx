import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "MongoDB",
    "SQL",
    "Git",
    "Three.js"
];

export default function Skills() {
    return (
        <section id="skills" className="section-block">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="section-heading">Tech Stack</h2>

                <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
                    {SKILLS.map((s, i) => (
                        <motion.div
                            key={s}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="
                px-6 py-3
                rounded-xl
                font-medium 
                text-slate-200
                bg-white/5
                hover:bg-white/10
                border border-white/5
                hover:border-indigo-500/50
                backdrop-blur-sm
                transition-all
                duration-300
                cursor-default
                hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]
              "
                        >
                            {s}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
