import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowRight, Code2, Layers, Smartphone, Download } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  useEffect(() => {
    // Set initial position to center
    x.set(window.innerWidth / 2);
    y.set(window.innerHeight / 2);
  }, [x, y]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] flex flex-col justify-center pt-20 pb-10 overflow-hidden"
    >
      {/* Background Glows Follow Mouse */}
      <motion.div
        style={{ left: mouseX, top: mouseY }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 0.9, 1],
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 50% 60% 40% 50%",
            "40% 60% 70% 30% / 40% 50% 60% 50%",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        style={{ left: mouseX, top: mouseY }}
        animate={{
          rotate: [360, 0],
          scale: [0.9, 1.1, 1, 0.9],
          borderRadius: [
            "60% 40% 30% 70% / 50% 60% 40% 50%",
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 50% 60% 40% 50%",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] bg-sky-500/10 blur-[100px] pointer-events-none -translate-x-[40%] -translate-y-[60%]"
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm dark:shadow-none backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
          <span className="text-xs font-mono text-gray-600 dark:text-white/70 uppercase tracking-widest">
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-sans text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.05] text-gray-900 dark:text-white dark:text-glow max-w-4xl"
        >
          Android &<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-400 dark:from-indigo-400 dark:to-sky-300">
            Full-Stack Engineer
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-8 md:mt-12 max-w-xl"
        >
          <p className="text-lg md:text-xl text-gray-600 dark:text-white/50 leading-relaxed font-light">
            I am{" "}
            <span className="text-gray-900 dark:text-white font-medium">
              Junaid Gandhi
            </span>
            . I master the entire stack to build scalable web platforms and
            native mobile ecosystems end-to-end, all from a single brain.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-4 items-center"
        >
          <button
            onClick={() =>
              document
                .getElementById("systems")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="h-12 px-8 bg-gray-900 text-white dark:bg-white dark:text-black font-medium rounded-full hover:bg-gray-800 dark:hover:bg-white/90 transition-all flex items-center gap-2 group"
          >
            View Ecosystems
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="h-12 px-8 border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-white/5 hover:border-gray-400 dark:hover:border-white/40 transition-colors"
          >
            Contact Me
          </button>
          <Link
            to="/resume"
            className="h-12 px-8 border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-white/5 hover:border-gray-400 dark:hover:border-white/40 transition-colors flex items-center gap-2 group"
          >
            <Download className="w-4 h-4" />
            Resume
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full pt-8 border-t border-gray-200 dark:border-white/10"
        >
          <div className="flex gap-4 items-start">
            <Code2 className="w-6 h-6 text-indigo-500 dark:text-indigo-400 shrink-0 mt-1" />
            <div>
              <h3 className="font-mono text-sm font-medium text-gray-900 dark:text-white/80 mb-2">
                Web Platforms
              </h3>
              <p className="text-sm text-gray-500 dark:text-white/40 leading-relaxed">
                High-performance Next.js frontends powered by scalable
                Node.js/Bun microservices.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Smartphone className="w-6 h-6 text-sky-500 dark:text-sky-400 shrink-0 mt-1" />
            <div>
              <h3 className="font-mono text-sm font-medium text-gray-900 dark:text-white/80 mb-2">
                Native Android
              </h3>
              <p className="text-sm text-gray-500 dark:text-white/40 leading-relaxed">
                Deep integration with device hardware and complex local-state
                management.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Layers className="w-6 h-6 text-purple-500 dark:text-purple-400 shrink-0 mt-1" />
            <div>
              <h3 className="font-mono text-sm font-medium text-gray-900 dark:text-white/80 mb-2">
                API Ecosystems
              </h3>
              <p className="text-sm text-gray-500 dark:text-white/40 leading-relaxed">
                Unified MongoDB and Firebase architectures synchronizing
                multiple clients in real-time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
