// @ts-nocheck
import { ReactNode } from "react";
import { motion } from "motion/react";
import {
  Database,
  Layout,
  Smartphone,
  Server,
  ExternalLink,
  Plug,
  Globe,
  Network,
} from "lucide-react";
import { useTheme } from "../ThemeProvider";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAndroid,
  SiFirebase,
  SiBun,
  SiHono,
} from "react-icons/si";

const getTagIcon = (tag: string) => {
  switch (tag) {
    case "Next.js":
      return <SiNextdotjs className="w-3 h-3" />;
    case "Node.js":
      return <SiNodedotjs className="w-3 h-3" />;
    case "Express":
      return <SiExpress className="w-3 h-3" />;
    case "MongoDB":
      return <SiMongodb className="w-3 h-3" />;
    case "Android":
      return <SiAndroid className="w-3 h-3" />;
    case "Firebase":
      return <SiFirebase className="w-3 h-3" />;
    case "Bun":
      return <SiBun className="w-3 h-3" />;
    case "Hono":
      return <SiHono className="w-3 h-3" />;
    case "API Consumer":
      return <Plug className="w-3 h-3" />;
    case "Web Platform":
      return <Globe className="w-3 h-3" />;
    case "System Integration":
      return <Network className="w-3 h-3" />;
    default:
      return null;
  }
};

export function Systems() {
  return (
    <section className="py-24 relative" id="systems">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col gap-4">
          <h2 className="font-mono text-sm text-indigo-500 dark:text-indigo-400 tracking-widest uppercase">
            System Architectures
          </h2>
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white max-w-2xl">
            Building ecosystems, not just applications.
          </h3>
          <p className="text-gray-600 dark:text-white/50 text-lg max-w-xl">
            My core strength is designing platforms where web, backend, and
            multiple mobile apps flow securely through a single unified
            architecture.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {PROJECTS.map((project, idx) => (
            <SystemCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemCard({
  project,
  index,
}: {
  project: any;
  index: number;
  key?: string | number;
}) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative p-8 md:p-12 border border-gray-200 dark:border-white/5 rounded-3xl bg-white dark:bg-white/[0.01] shadow-sm dark:shadow-none"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-center">
        {/* Detail Column */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.name}
              </h4>
              <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-xs font-mono text-gray-500 dark:text-white/60"
                >
                  {getTagIcon(tag)}
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-200 dark:bg-white/10 w-full" />

          {/* Architecture Tree */}
          <div className="flex flex-col gap-4">
            <h5 className="font-mono text-xs uppercase tracking-wider text-gray-400 dark:text-white/40">
              Architecture Stack
            </h5>
            <div className="flex flex-col gap-3 relative">
              <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gray-200 dark:bg-white/10" />
              {project.components.map((comp: any, i: number) => (
                <div key={i} className="flex items-start gap-4 relative">
                  <div className="w-6 h-6 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0 mt-1 z-10">
                    <comp.icon className="w-3 h-3 text-gray-500 dark:text-white/70" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white/90">
                      {comp.name}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-white/50 mt-0.5">
                      {comp.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {project.links.map((lnk: any, i: number) => (
                <a
                  key={i}
                  href={lnk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 dark:hover:border-white/20 transition-all text-sm font-medium text-gray-600 dark:text-white/80 hover:text-gray-900 dark:hover:text-white"
                >
                  <ExternalLink className="w-4 h-4 text-gray-400 dark:text-white/40 group-hover/link:text-gray-900 dark:group-hover/link:text-white transition-colors" />
                  {lnk.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Visual / Diagram Column */}
        <div className="order-1 md:order-2 h-[400px] md:h-[500px] rounded-3xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 p-8 relative overflow-hidden flex items-center justify-center">
          {/* Subtle grid background inside the card */}
          <div className="absolute inset-0 bg-grid-white opacity-50" />

          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {/* Mockup of architecture overlapping cards */}
            <div
              className={`relative w-3/4 aspect-[4/3] ${project.hasMultipleMobile ? "scale-90" : ""}`}
            >
              <div className="absolute -left-4 -bottom-4 w-full h-full bg-indigo-500/10 rounded-xl blur-2xl" />

              {/* Web Admin Pane (Fallback) */}
              {!project.images && (
                <div className="absolute inset-0 bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl p-4 flex flex-col gap-2 transform translate-x-4 -translate-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/10 pb-2">
                    <div className="w-16 h-2 bg-gray-200 dark:bg-white/20 rounded-full" />
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                      <div className="w-2 h-2 rounded-full bg-green-400/50" />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2 h-full">
                    <div className="w-1/4 h-3/4 border-r border-gray-100 dark:border-white/5 pr-4 flex flex-col gap-2">
                      <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full" />
                      <div className="w-3/4 h-2 bg-gray-100 dark:bg-white/5 rounded-full" />
                      <div className="w-5/6 h-2 bg-gray-100 dark:bg-white/5 rounded-full" />
                    </div>
                    <div className="w-3/4 flex flex-col gap-2">
                      <div className="w-1/2 h-4 bg-indigo-500/20 rounded-md" />
                      <div className="w-full h-24 bg-gray-50 dark:bg-white/5 rounded-md mt-2 flex items-center justify-center">
                        <Server className="w-6 h-6 text-gray-400 dark:text-white/20" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile App Panes */}
              {project.images ? (
                project.hasMultipleMobile ? (
                  <>
                    {/* Web Platform */}
                    <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-xl shadow-2xl flex flex-col gap-2 transform translate-x-4 -translate-y-4 group-hover:translate-x-8 group-hover:-translate-y-8 overflow-hidden bg-white dark:bg-[#0A0A0A] transition-all duration-500 ease-out z-10 group-hover:z-40">
                      <img
                        src={project.images.web}
                        alt={`${project.name} Web`}
                        className="relative z-10 w-full h-full object-cover object-left-top"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      {/* Fallback if image fails to load */}
                      <div className="absolute inset-0 bg-gray-50 dark:bg-zinc-900/50 flex items-center justify-center text-gray-400 font-mono text-sm px-4 text-center">
                        Upload {project.images.web?.split("/").pop()}
                      </div>
                    </div>

                    {/* User App */}
                    <div className="absolute -left-12 -bottom-10 w-32 md:w-36 aspect-[9/19.5] bg-white dark:bg-[#0A0A0A] border-[4px] border-gray-200 dark:border-white/10 rounded-[24px] shadow-2xl z-20 group-hover:z-50 overflow-hidden transform group-hover:-translate-x-8 group-hover:translate-y-4 group-hover:-rotate-3 transition-all duration-500 ease-out">
                      <img
                        src={project.images.userApp}
                        alt="User App"
                        className="relative z-10 w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gray-50 dark:bg-zinc-900/50 flex items-center justify-center text-gray-400 font-mono text-[10px] text-center p-2">
                        Upload {project.images.userApp?.split("/").pop()}
                      </div>
                    </div>

                    {/* Dealer App */}
                    <div className="absolute right-4 -bottom-16 w-32 md:w-36 aspect-[9/19.5] bg-white dark:bg-[#0A0A0A] border-[4px] border-gray-200 dark:border-white/10 rounded-[24px] shadow-2xl z-30 group-hover:z-50 overflow-hidden transform group-hover:translate-x-12 group-hover:translate-y-8 group-hover:rotate-3 transition-all duration-500 ease-out">
                      <img
                        src={
                          theme === "dark" && project.images.dealerDark
                            ? project.images.dealerDark
                            : project.images.dealerLight ||
                              project.images.dealerDark
                        }
                        alt="Dealer App"
                        className="relative z-10 w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gray-50 dark:bg-zinc-900/50 flex items-center justify-center text-gray-400 font-mono text-[10px] text-center p-2">
                        Upload{" "}
                        {(theme === "dark" && project.images.dealerDark
                          ? project.images.dealerDark
                          : project.images.dealerLight ||
                            project.images.dealerDark
                        )
                          ?.split("/")
                          .pop()}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Web Platform */}
                    <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-xl shadow-2xl flex flex-col gap-2 transform translate-x-4 -translate-y-4 group-hover:translate-x-8 group-hover:-translate-y-8 overflow-hidden bg-white dark:bg-[#0A0A0A] transition-all duration-500 ease-out z-10 group-hover:z-30">
                      <img
                        src={project.images.web}
                        alt={`${project.name} Web`}
                        className="relative z-10 w-full h-full object-cover object-left-top"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gray-50 dark:bg-zinc-900/50 flex items-center justify-center text-gray-400 font-mono text-sm px-4 text-center">
                        Upload {project.images.web?.split("/").pop()}
                      </div>
                    </div>

                    {/* Mobile App */}
                    <div className="absolute -left-8 -bottom-12 w-36 md:w-40 aspect-[9/19.5] bg-white dark:bg-[#0A0A0A] border-[4px] border-gray-200 dark:border-white/10 rounded-[28px] shadow-2xl z-20 group-hover:z-40 overflow-hidden transform group-hover:-translate-x-6 group-hover:translate-y-4 group-hover:-rotate-2 transition-all duration-500 ease-out">
                      <img
                        src={project.images.mobileApp}
                        alt={`${project.name} Mobile`}
                        className="relative z-10 w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gray-50 dark:bg-zinc-900/50 flex items-center justify-center text-gray-400 font-mono text-[10px] text-center p-2">
                        Upload {project.images.mobileApp?.split("/").pop()}
                      </div>
                    </div>
                  </>
                )
              ) : project.hasMultipleMobile ? (
                <>
                  {/* App 1 */}
                  <div className="absolute -left-12 -bottom-10 w-32 h-64 bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-[24px] shadow-2xl p-2 z-20">
                    <div className="w-full h-full border border-gray-100 dark:border-white/5 rounded-[16px] bg-gradient-to-b from-gray-100 dark:from-white/5 to-transparent relative overflow-hidden flex flex-col items-center">
                      <div className="w-10 h-1 bg-gray-200 dark:bg-white/20 rounded-full mt-2" />
                      <Smartphone className="w-8 h-8 text-gray-300 dark:text-white/20 mt-16" />
                      <div className="text-[8px] font-mono text-gray-400 dark:text-white/40 mt-2 uppercase">
                        User app
                      </div>
                    </div>
                  </div>
                  {/* App 2 */}
                  <div className="absolute right-4 -bottom-16 w-32 h-64 bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 dark:border-indigo-500/30 rounded-[24px] shadow-2xl p-2 z-30">
                    <div className="w-full h-full border border-gray-100 dark:border-white/5 rounded-[16px] bg-gradient-to-b from-indigo-500/5 dark:from-indigo-500/10 to-transparent relative overflow-hidden flex flex-col items-center">
                      <div className="w-10 h-1 bg-gray-200 dark:bg-white/20 rounded-full mt-2" />
                      <Smartphone className="w-8 h-8 text-indigo-400 mt-16" />
                      <div className="text-[8px] font-mono text-gray-400 dark:text-white/40 mt-2 uppercase">
                        Dealer app
                      </div>
                    </div>
                  </div>
                  {/* App 3 */}
                  <div className="absolute -right-8 top-12 w-28 h-56 bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-[24px] shadow-2xl p-2 z-10 opacity-60 transform rotate-12">
                    <div className="w-full h-full border border-gray-100 dark:border-white/5 rounded-[16px] bg-gray-50 dark:bg-white/[0.02]" />
                  </div>
                </>
              ) : (
                <div className="absolute -left-8 -bottom-12 w-40 h-80 bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-[28px] shadow-2xl p-2.5 z-20">
                  <div className="w-full h-full border border-gray-100 dark:border-white/5 rounded-[20px] bg-gradient-to-b from-sky-500/5 dark:from-sky-500/10 to-transparent relative overflow-hidden flex flex-col items-center">
                    <div className="w-12 h-1.5 bg-gray-200 dark:bg-white/20 rounded-full mt-3" />
                    <div className="w-full px-4 flex flex-col gap-2 mt-8">
                      <div className="w-full h-24 bg-gray-100 dark:bg-white/10 rounded-xl" />
                      <div className="w-full h-8 bg-gray-50 dark:bg-white/5 rounded-lg" />
                      <div className="w-3/4 h-8 bg-gray-50 dark:bg-white/5 rounded-lg" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const PROJECTS = [
  {
    name: "Cashmen Ecosystem",
    description:
      "A complete reselling and refurbished electronics marketplace architecture. Spans a web platform, robust API backend, and specialized Android applications for different user roles within the ecosystem.",
    hasMultipleMobile: true,
    images: {
      web: "/cashmen-web.png",
      userApp: "/user-app.png",
      dealerDark: "/dealer-dark.png",
      dealerLight: "/dealer-light.png",
    },
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Android", "Firebase"],
    links: [{ label: "cashmen.in", url: "https://cashmen.in" }],
    components: [
      {
        name: "Web Platform",
        detail: "Next.js frontend for general commerce / marketing",
        icon: Layout,
      },
      {
        name: "Core API Backend",
        detail: "Node.js/Express coordinating logic & inventory",
        icon: Server,
      },
      {
        name: "Database Schema",
        detail: "MongoDB + unified Firebase Auth/Realtime",
        icon: Database,
      },
      {
        name: "3x Native Android",
        detail: "User App, Dealer App, and Admin App",
        icon: Smartphone,
      },
    ],
  },
  {
    name: "RepairPhone Service Architecture",
    description:
      "End-to-end device repair management. Integrated public APIs with strict third-party access controls, serving both an internal portal and vendor Android apps.",
    hasMultipleMobile: true,
    images: {
      web: "/repairphone-web.png",
      userApp: "/repairphone-mobile-web.png",
      dealerLight: "/repairphone-dealer-light.png",
      dealerDark: "/repairphone-dealer-dark.png",
    },
    tags: ["Next.js", "Bun", "Hono", "Android", "MongoDB"],
    links: [{ label: "repairphone.in", url: "https://repairphone.in" }],
    components: [
      {
        name: "Service Portal",
        detail: "Web frontend for repair tracking & CMS",
        icon: Layout,
      },
      {
        name: "Public & Private APIs",
        detail: "Secure data pipelines serving Macwinn & others",
        icon: Server,
      },
      {
        name: "Native Apps",
        detail: "Dealer and Admin specialized workflows",
        icon: Smartphone,
      },
    ],
  },
  {
    name: "Macwinn",
    description:
      "Developed website for Darbar Technologies based on the RepairPhone third-party API infrastructure. Demonstrates the scalability and reusability of the API-driven system architecture designed in the core platform.",
    hasMultipleMobile: false,
    images: {
      web: "/macwinn-web.png",
      mobileApp: "/macwinn-mobile.png",
    },
    tags: ["API Consumer", "Web Platform", "System Integration"],
    links: [{ label: "macwinn.com", url: "https://macwinn.com" }],
    components: [
      {
        name: "Scalable Consumer",
        detail: "Frontend utilizing decoupled RepairPhone API",
        icon: Layout,
      },
      {
        name: "Stateless Middleware",
        detail: "Bridge and caching layer",
        icon: Server,
      },
    ],
  },
];
