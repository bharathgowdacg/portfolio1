import React from "react";

export default function Footer() {
    return (
        <footer className="mt-32 pb-10 text-center relative z-10 border-t border-white/5 pt-10">
            <div className="flex justify-center space-x-8 mb-8">
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/bharath-gowda-a5a890315"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-indigo-400 transition duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                >
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764S5.534 3.204 6.5 3.204s1.75.79 1.75 1.764S7.466 6.732 6.5 6.732zM20 19h-3v-5.604c0-3.368-4-3.529-4 0V19h-3V8h3v1.765C14.396 7.179 20 6.988 20 12.241V19z" />
                    </svg>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/bharathgowdacg"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-indigo-400 transition duration-300 transform hover:scale-110"
                    aria-label="GitHub"
                >
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.757-1.332-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.304 3.495.996.108-.775.419-1.305.762-1.604-2.665-.304-5.467-1.336-5.467-5.934 0-1.31.469-2.383 1.236-3.224-.124-.303-.536-1.523.117-3.18 0 0 1.006-.322 3.3.432a11.48 11.48 0 0 1 6 0c2.293-.754 3.299-.432 3.299-.432.653 1.657.241 2.877.118 3.18.768.841 1.236 1.914 1.236 3.224 0 4.61-2.804 5.63-5.479 5.922.43.37.823 1.102.823 2.222 0 1.604-.014 2.897-.014 3.289 0 .321.218.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                </a>
            </div>

            <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Bharath Gowda. Built with React & Tailwind.
            </p>
        </footer>
    );
}
