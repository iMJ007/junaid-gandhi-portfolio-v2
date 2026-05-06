// @ts-nocheck
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Play,
} from "lucide-react";
import { SiX } from "react-icons/si";

export function Contact() {
  return (
    <section
      className="py-24 border-t border-gray-200 dark:border-white/5 relative overflow-hidden"
      id="contact"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/10 rounded-[100%] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-gray-900 dark:text-white mb-6">
          Ready to build your system?
        </h2>
        <p className="text-gray-600 dark:text-white/50 text-lg max-w-xl mx-auto mb-10">
          I'm currently available to architect and develop scalable, end-to-end
          platforms.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:contact@junaidgandhi.com"
            className="h-14 px-8 bg-gray-900 text-white dark:bg-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-white/90 hover:scale-105 transition-all text-lg flex items-center justify-center gap-2 group w-full sm:w-auto shadow-md dark:shadow-none"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a
            href="https://wa.me/919987379763"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-8 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-semibold rounded-full hover:bg-[#25D366]/20 hover:scale-105 transition-all text-lg flex items-center justify-center gap-2 group w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>

        <div className="mt-20 flex flex-wrap gap-8 items-center justify-center font-mono text-sm uppercase tracking-widest text-gray-500 dark:text-white/40">
          <a
            href="https://github.com/iMJ007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 group"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-junaid-gandhi-31555313b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 group"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://play.google.com/store/apps/dev?id=6428398715878309895&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 group"
          >
            <Play className="w-4 h-4 fill-current outline-none" />
            <span className="hidden sm:inline">Play Store</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://x.com/MohammedJunaidG"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 group"
          >
            <SiX className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">X</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <p className="mt-16 text-gray-400 dark:text-white/20 text-xs font-mono">
          © {new Date().getFullYear()} Junaid Gandhi. All systems operational.
        </p>
      </div>
    </section>
  );
}
