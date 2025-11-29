import React from "react";
import { motion } from "framer-motion";
import UpgradedContactForm from "./UpgradedContactForm";

export default function Contact() {
    return (
        <section id="contact" className="section-block">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="section-heading">Get In Touch</h2>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <h3 className="text-3xl font-bold text-white mb-4">Let's Work Together</h3>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            I'm currently available for freelance work and full-time positions.
                            If you have a project that needs some creative touch, or just want to say hi, my inbox is always open!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-slate-200">
                                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <span>bharathgowdacg@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-200">
                                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <span>Bangalore, India</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
                        <UpgradedContactForm />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
