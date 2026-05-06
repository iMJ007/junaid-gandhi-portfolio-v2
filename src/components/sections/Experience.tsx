import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

export function Experience() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="about">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="font-mono text-sm text-sky-500 dark:text-sky-400 tracking-widest uppercase">
            The Indie Advantage
          </h2>
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white leading-tight">
            Solo development, <br /> enterprise scale.
          </h3>
          <p className="text-gray-600 dark:text-white/60 text-lg leading-relaxed mt-2">
            I don't just write code; I orchestrate systems. Building
            independently requires rigorous architectural planning across the
            entire stack. From configuring the underlying database schemas, to
            deploying scalable Node.js microservices, out to publishing polished
            native Android endpoints.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <Feature>End-to-End System Design & Architecture</Feature>
            <Feature>Zero-friction API deployments</Feature>
            <Feature>Play Store Published (Cripser, Orphic, Evequote)</Feature>
            <Feature>Autonomous problem solving</Feature>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square md:aspect-[4/5] bg-gradient-to-br from-indigo-500/5 dark:from-indigo-500/10 to-transparent rounded-3xl border border-gray-200 dark:border-white/5 overflow-hidden flex items-center justify-center isolate"
        >
          {/* Decorative code block / grid behind */}
          <div className="absolute inset-0 bg-grid-white opacity-20" />

          <div className="relative z-10 w-3/4 bg-white dark:bg-[#050505] border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-xl dark:shadow-2xl font-mono text-sm">
            <div className="flex gap-2 border-b border-gray-100 dark:border-white/10 pb-4 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/50" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/50" />
              <span className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/50" />
            </div>

            <div className="flex flex-col gap-2 text-gray-500 dark:text-white/50">
              <p>
                <span className="text-indigo-600 dark:text-indigo-400">
                  class
                </span>{" "}
                <span className="text-emerald-500 dark:text-emerald-300">
                  JunaidGandhi
                </span>{" "}
                {"{"}
              </p>
              <p className="pl-4">
                skills = [
                <span className="text-amber-600 dark:text-amber-300">
                  'Web'
                </span>
                ,{" "}
                <span className="text-amber-600 dark:text-amber-300">
                  'API'
                </span>
                ,{" "}
                <span className="text-amber-600 dark:text-amber-300">
                  'Android'
                </span>
                ];
              </p>
              <p className="pl-4 mt-2">
                <span className="text-indigo-600 dark:text-indigo-400">
                  async
                </span>{" "}
                <span className="text-sky-500 dark:text-sky-300">
                  architectSystem
                </span>
                () {"{"}
              </p>
              <p className="pl-8 text-gray-400 dark:text-white/30">
                // 1. Model database schema
              </p>
              <p className="pl-8 text-gray-400 dark:text-white/30">
                // 2. Spin up scalable backend
              </p>
              <p className="pl-8 text-gray-400 dark:text-white/30">
                // 3. Build & connect frontend
              </p>
              <p className="pl-8 text-gray-400 dark:text-white/30">
                // 4. Publish native mobile apps
              </p>
              <p className="pl-8 mt-2">
                <span className="text-indigo-600 dark:text-indigo-400">
                  return
                </span>{" "}
                <span className="text-amber-600 dark:text-amber-300">
                  'Production Ready'
                </span>
                ;
              </p>
              <p className="pl-4">{"}"}</p>
              <p>{"}"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
      <span className="text-gray-700 dark:text-white/80">{children}</span>
    </div>
  );
}
