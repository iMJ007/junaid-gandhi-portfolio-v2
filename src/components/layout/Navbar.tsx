import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 inset-x-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="font-mono text-xl font-bold tracking-tighter text-gray-900 dark:text-white px-3 py-1.5 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none flex items-center justify-center"
        >
          JG<span className="text-indigo-500">.</span>
        </Link>

        {isHome && (
          <nav className="hidden md:flex items-center gap-8 px-6 py-2 border border-gray-200 dark:border-white/10 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-md shadow-sm dark:shadow-none">
            <a
              href="#systems"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white transition-colors"
            >
              Systems
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white transition-colors"
            >
              Capability
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        )}

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-md shadow-sm dark:shadow-none border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-white/70" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {isHome ? (
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="h-9 px-4 bg-gray-900 hover:bg-gray-800 dark:bg-white/10 dark:hover:bg-white/20 border border-transparent dark:border-white/10 rounded-full text-sm font-medium text-white backdrop-blur-md transition-colors hidden sm:flex items-center"
            >
              Let's talk
            </button>
          ) : (
            <Link
              to="/"
              className="h-9 px-4 bg-gray-900 hover:bg-gray-800 dark:bg-white/10 dark:hover:bg-white/20 border border-transparent dark:border-white/10 rounded-full text-sm font-medium text-white backdrop-blur-md transition-colors hidden sm:flex items-center"
            >
              Back to Portfolio
            </Link>
          )}
        </div>
      </div>
    </motion.header>
  );
}
