import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageCircle, Quote } from "lucide-react";
import { reviews } from "../../data/reviews";

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Start with a random index
    setCurrentIndex(Math.floor(Math.random() * reviews.length));

    // Switch every 6 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        let next = Math.floor(Math.random() * reviews.length);
        while (next === prev) {
          next = Math.floor(Math.random() * reviews.length);
        }
        return next;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden bg-white/50 dark:bg-[#030303]/50 border-y border-gray-100 dark:border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-xs font-medium text-gray-600 dark:text-white/60 mb-6">
            <MessageCircle className="w-4 h-4" />
            <span>Play Store Reviews</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-gray-900 dark:text-white text-center">
            What Users Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto min-h-[250px] relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex-shrink-0"
            >
              <a
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative p-8 md:p-12 rounded-3xl bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md dark:shadow-none transition-all duration-500 hover:border-indigo-500/30 dark:hover:border-indigo-400/30">
                  <Quote className="absolute top-8 left-8 w-12 h-12 text-indigo-500/10 dark:text-indigo-400/10 -rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-indigo-500 text-indigo-500"
                        />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl font-serif text-gray-800 dark:text-white/90 leading-relaxed mb-8 italic">
                      "{review.text}"
                    </p>

                    <div className="flex flex-col items-center gap-1">
                      <span className="font-sans font-medium text-gray-900 dark:text-white">
                        {review.author}
                      </span>
                      <span className="text-sm font-mono text-gray-500 dark:text-white/40">
                        {review.appName} User
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
