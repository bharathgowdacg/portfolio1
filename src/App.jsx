import React, { useCallback, useEffect, useMemo, useState } from "react";
// import ParticlesBackground from "./components/ParticlesBackground"; // Commented out for video
import SpaceVideoBackground from "./components/SpaceVideoBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// -----------------------------
// App
// -----------------------------
export default function App() {
  // smooth link handler
  const handleSmoothLink = useCallback((e, href) => {
    if (href && href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 64, behavior: "smooth" });
      }
    }
  }, []);

  const navLinks = useMemo(() => [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ], []);

  return (
    <>
      <ScrollProgress />

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <div className="backdrop-blur-md bg-slate-900/70 border-b border-white/5 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a
              href="#hero"
              onClick={(e) => handleSmoothLink(e, "#hero")}
              className="text-2xl font-bold text-white tracking-tight"
            >
              Bharath<span className="text-indigo-500">.</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleSmoothLink(e, l.href)}
                  className="text-sm font-medium text-slate-300 hover:text-white hover:text-indigo-400 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/bharath_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/20 transition-all hover:scale-105"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-[-1]">
        <SpaceVideoBackground />
      </div>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-slate-100 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function ScrollProgress() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled =
        (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
      setPercent(Math.min(100, Math.max(0, scrolled || 0)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[100]"
      style={{
        width: `${percent}%`,
        background: "linear-gradient(90deg, #6366f1, #ec4899, #f59e0b)",
        boxShadow: "0 0 10px rgba(99, 102, 241, 0.5)"
      }}
    />
  );
}

