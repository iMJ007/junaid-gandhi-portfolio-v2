import { motion } from "motion/react";
import {
  Smartphone,
  Play,
  Image as ImageIcon,
  BookA,
  Quote,
  ExternalLink,
  Download,
  Star,
} from "lucide-react";
import { useTheme } from "../ThemeProvider";

const apps = [
  {
    name: "Crisper",
    role: "Wallpapers & Illustrations",
    description:
      "A highly customizable wallpaper and illustration app providing high-quality, editable assets.",
    icon: ImageIcon,
    stats: "5.28L+ Installs",
    rating: "4.57",
    color: "bg-emerald-500",
    bgClass: "bg-emerald-500/10",
    textClass: "text-emerald-500",
    borderClass: "border-emerald-500/20",
    imageLight: "/crisper-light.png",
    imageDark: "/crisper-dark.png",
    link: "https://play.google.com/store/apps/details?id=com.junaidgandhi.crisper&hl=en_IN&gl=US",
  },
  {
    name: "Orphic",
    role: "Weird & Wonderful Words",
    description:
      "An educational app designed to help you discover and learn unique, obscure words every day.",
    icon: BookA,
    stats: "5.34L+ Installs",
    rating: "4.45",
    color: "bg-indigo-500",
    bgClass: "bg-indigo-500/10",
    textClass: "text-indigo-500",
    borderClass: "border-indigo-500/20",
    imageLight: "/orphic-light.png",
    imageDark: "/orphic-dark.png",
    link: "https://play.google.com/store/apps/details?id=orphic.eclectik.com.orphic&hl=en_IN&gl=US",
  },
  {
    name: "Evequote",
    role: "Quotes & Status",
    description:
      "A beautifully designed application for finding, saving, and sharing inspirational quotes and ideas.",
    icon: Quote,
    stats: "10K+ Installs",
    rating: "4.46",
    color: "bg-rose-500",
    bgClass: "bg-rose-500/10",
    textClass: "text-rose-500",
    borderClass: "border-rose-500/20",
    imageLight: "/evequote-light.png",
    imageDark: "/evequote-dark.png",
    link: "https://play.google.com/store/apps/details?id=com.eclectik.evequote&hl=en_IN&gl=US",
  },
];

export function MobileApps() {
  const { theme } = useTheme();

  return (
    <section
      id="mobile-apps"
      className="py-24 relative overflow-hidden bg-white/50 dark:bg-black/20"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium mb-6"
          >
            <Smartphone className="w-4 h-4" />
            <span>Personal Play Store Apps</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white max-w-2xl"
          >
            Standalone Native Apps
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            A suite of natively published Android applications demonstrating
            deep capabilities in custom UI, consumer experience, and standalone
            mobile products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {apps.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="p-8 pb-0">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl ${app.bgClass} flex items-center justify-center border ${app.borderClass}`}
                    >
                      <Icon className={`w-6 h-6 ${app.textClass}`} />
                    </div>
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 hover:text-gray-900 border border-gray-100 dark:border-white/5 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                      {app.role}
                    </div>
                    {app.stats && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                        <Download className="w-3 h-3" />
                        {app.stats}
                      </div>
                    )}
                    {app.rating && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-amber-500/10 rounded-full text-xs font-medium text-amber-600 dark:text-amber-400">
                        <Star className="w-3 h-3 fill-current" />
                        {app.rating}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {app.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                    {app.description}
                  </p>
                </div>

                <div className="relative h-64 mt-auto w-full px-8 flex justify-center mt-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 dark:from-[#0A0A0A] dark:via-[#0A0A0A]/50 to-transparent z-10 pointer-events-none" />
                  <div className="w-48 aspect-[9/19.5] bg-gray-100 dark:bg-zinc-900 border-[6px] border-white dark:border-zinc-800 rounded-t-[32px] overflow-hidden shadow-2xl relative transform transition-transform duration-500 group-hover:-translate-y-4">
                    <img
                      src={theme === "dark" ? app.imageDark : app.imageLight}
                      alt={app.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 z-[-1] flex items-center justify-center text-gray-400 text-xs font-mono text-center p-4">
                      Upload{" "}
                      {theme === "dark"
                        ? app.imageDark.split("/").pop()
                        : app.imageLight.split("/").pop()}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
