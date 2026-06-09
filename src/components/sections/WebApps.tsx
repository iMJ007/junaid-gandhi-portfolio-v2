"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  ExternalLink,
  Copy,
  Check,
  Heart,
  Share2,
  Sliders,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { useTheme } from "../ThemeProvider";

// Dummy quotes for the interactive preview
const PREVIEW_QUOTES = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Inspiration",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    category: "Design",
  },
  {
    text: "Make it simple, but significant.",
    author: "Don Draper",
    category: "Creativity",
  },
  {
    text: "Detail is not a detail. It designs the product.",
    author: "Charles Eames",
    category: "Craftsmanship",
  },
];

const GRADIENTS = [
  {
    name: "Cosmic Glow",
    style: "from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20",
    border: "border-purple-500/20",
    text: "text-purple-600 dark:text-purple-300",
  },
  {
    name: "Sunset Ember",
    style: "from-orange-500/15 via-rose-500/10 to-amber-500/10 dark:from-orange-500/25 dark:via-rose-500/15 dark:to-amber-500/15",
    border: "border-rose-500/20",
    text: "text-rose-600 dark:text-rose-300",
  },
  {
    name: "Emerald Forest",
    style: "from-emerald-500/10 via-teal-500/10 to-transparent dark:from-emerald-500/20 dark:via-teal-500/20 dark:to-transparent",
    border: "border-emerald-500/20",
    text: "text-emerald-600 dark:text-emerald-300",
  },
  {
    name: "Slate Modern",
    style: "from-slate-100 via-gray-100/50 to-zinc-200/50 dark:from-zinc-900 via-[#121212] to-zinc-900",
    border: "border-zinc-300/30 dark:border-white/10",
    text: "text-zinc-800 dark:text-zinc-200",
  },
];

export function WebApps() {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [activeGradient, setActiveGradient] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const quote = PREVIEW_QUOTES[currentQuoteIndex];
  const gradient = GRADIENTS[activeGradient];

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % PREVIEW_QUOTES.length);
    setIsLiked(false);
  };

  return (
    <section
      id="web-apps"
      className="py-24 relative overflow-hidden border-t border-gray-100 dark:border-white/5"
    >
      {/* Background glow effects */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-rose-500/5 dark:bg-rose-500/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute left-12 bottom-1/4 w-[350px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/[0.02] blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-sm font-medium mb-6 animate-pulse"
          >
            <Globe className="w-4 h-4" />
            <span>Personal Web App</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white max-w-2xl"
          >
            Web Platform Ecosystems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            Re-architecting portable consumer platforms for desktop screens,
            utilizing modern server-side rendering for optimal speed and SEO visibility.
          </motion.p>
        </div>

        {/* Large Feature Card with Interactive Web Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white dark:bg-[#0C0C0C] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl"
        >
          {/* Main layout grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full text-xs font-medium">
                  Web Companion
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-full text-xs font-mono">
                  Next.js + React
                </span>
              </div>

              <div>
                <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
                  Evequote Web
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                  The elegant web interface for the EveQuote micro-ecosystem, live
                  at <strong>evequote.junaidgandhi.com</strong>. Revoiced with 
                  Next.js to support serverless content optimization, immediate social scrapers, and dynamic page generation.
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-xs md:text-sm">
                  Whether exploring beautiful design aphorisms or collecting thoughts, the user interface bridges the gap between deep native mobile performance and fluid, global web access.
                </p>
              </div>

              {/* Stack Features List */}
              <div className="space-y-3 font-mono text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>Dynamic server-side custom typography mapping</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>Responsive layout supporting mobile, tablet & desktop viewports</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>Interactive template palette preview engine</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-2">
                <a
                  href="https://evequote.junaidgandhi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-full transition-all hover:scale-[1.02]"
                >
                  Visit Live Web App
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="#mobile-apps"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-white rounded-full text-sm font-medium transition-colors"
                >
                  View Play Store App
                </a>
              </div>
            </div>

            {/* Right Interactive Mockup Column */}
            <div className="lg:col-span-7 w-full h-full flex flex-col justify-center">
              <div className="relative bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/5 rounded-2xl p-4 md:p-6 overflow-hidden">
                
                {/* Simulated Grid inside container */}
                <div className="absolute inset-0 bg-grid-white dark:opacity-5 opacity-20 pointer-events-none" />

                {/* Simulated Web Browser */}
                <div className="relative bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col w-full">
                  
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50/50 dark:bg-zinc-900/50 border-b border-gray-100 dark:border-white/10">
                    <div className="flex gap-1.5 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    {/* URL Address Box */}
                    <div className="flex-1 max-w-sm mx-4 bg-gray-100 dark:bg-white/5 hover:bg-gray-200/50 dark:hover:bg-white/10 transition-colors border border-gray-200/50 dark:border-white/10 py-1 px-3 rounded-lg text-center flex items-center justify-center gap-1.5">
                      <Globe className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span className="font-mono text-[11px] text-gray-500 dark:text-gray-400 select-all leading-none inline-block">
                        evequote.junaidgandhi.com
                      </span>
                    </div>
                    <div className="flex gap-2 shrink-0 opacity-40">
                      <div className="w-4 h-4 rounded-full border border-gray-400" />
                    </div>
                  </div>

                  {/* Browser Canvas Application Area */}
                  <div className="p-6 md:p-8 flex flex-col gap-6 relative min-h-[280px]">
                    
                    {/* Tiny App Logo / Branding inside mockup */}
                    <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-3">
                      <span className="font-sans text-xs font-bold tracking-tight text-rose-500 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        Evequote Web
                      </span>
                      <span className="font-mono text-[10px] text-gray-400">
                        Theme: Custom Canvas
                      </span>
                    </div>

                    {/* Interactive Quote Card in Mockup */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentQuoteIndex + "_" + activeGradient}
                        initial={{ opacity: 0, scale: 0.98, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -5 }}
                        transition={{ duration: 0.25 }}
                        className={`flex flex-col justify-between p-6 rounded-2xl border ${gradient.border} bg-gradient-to-tr ${gradient.style} shadow-inner min-h-[140px]`}
                      >
                        <div>
                          <p className={`text-sm md:text-base font-medium ${gradient.text} tracking-tight leading-relaxed italic`}>
                            "{quote.text}"
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="font-mono text-[11px] text-gray-400 dark:text-gray-500">
                            — {quote.author}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-white/50 dark:bg-black/30 border border-black/5 dark:border-white/5 text-[9px] font-mono text-gray-500 uppercase tracking-widest scale-90">
                            {quote.category}
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Customizer Panel & controls */}
                    <div className="flex flex-col gap-4 border-t border-gray-100 dark:border-white/5 pt-4">
                      
                      {/* Gradient Selectors */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-wider flex items-center gap-1">
                          <Sliders className="w-3 h-3" />
                          Canvas Theme
                        </span>
                        <div className="flex gap-2">
                          {GRADIENTS.map((g, idx) => (
                            <button
                              key={g.name}
                              title={g.name}
                              onClick={() => setActiveGradient(idx)}
                              className={`w-4 h-4 rounded-full bg-gradient-to-tr ${g.style} border transition-all hover:scale-110 ${
                                activeGradient === idx
                                  ? "border-rose-500 scale-125"
                                  : "border-gray-200 dark:border-white/10"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Utility Action Area */}
                      <div className="flex justify-between items-center bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-xl p-2 mt-1">
                        
                        {/* Quote cycler */}
                        <button
                          onClick={handleNextQuote}
                          className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/5 transition-all active:scale-95"
                        >
                          <RefreshCw className="w-3 h-3" />
                          <span className="hidden sm:inline">Next Quote</span>
                        </button>

                        <div className="flex gap-1.5">
                          {/* Like Button */}
                          <button
                            onClick={() => setIsLiked(!isLiked)}
                            className={`p-1.5 rounded-lg hover:bg-gray-200/50 dark:hover:bg-white/5 transition-colors ${
                              isLiked
                                ? "text-rose-500 scale-110"
                                : "text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-white"
                            }`}
                          >
                            <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-rose-500" : ""}`} />
                          </button>

                          {/* Share Button Placeholder */}
                          <button
                            onClick={() => {}}
                            className="p-1.5 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/5 transition-colors"
                          >
                            <Share2 className="w-3.5 h-3.5" />
                          </button>

                          {/* Interactive Copy Button */}
                          <button
                            onClick={handleCopy}
                            className={`flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                              copied
                                ? "bg-green-500/10 border-green-500/30 text-green-500 dark:text-green-400"
                                : "bg-gray-900 border-transparent text-white dark:bg-white/10 dark:hover:bg-white/20 hover:bg-gray-800"
                            }`}
                          >
                            {copied ? (
                              <>
                                <Check className="w-3 h-3" />
                                <span className="hidden sm:inline">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span className="hidden sm:inline">Copy to Clipboard</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
