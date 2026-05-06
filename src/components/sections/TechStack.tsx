// @ts-nocheck
import {
  Code2,
  Smartphone,
  Database,
  Server,
  Blocks,
  Plug,
  Shield,
  Network,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiNodedotjs,
  SiBun,
  SiExpress,
  SiHono,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiAndroid,
  SiKotlin,
  SiJetpackcompose,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const getToolIcon = (tool: string) => {
  switch (tool) {
    case "Next.js":
      return <SiNextdotjs className="w-3.5 h-3.5" />;
    case "React":
      return <SiReact className="w-3.5 h-3.5" />;
    case "Tailwind CSS":
      return <SiTailwindcss className="w-3.5 h-3.5" />;
    case "TypeScript":
      return <SiTypescript className="w-3.5 h-3.5" />;
    case "Motion":
      return <SiFramer className="w-3.5 h-3.5" />;
    case "Node.js":
      return <SiNodedotjs className="w-3.5 h-3.5" />;
    case "Bun.js":
      return <SiBun className="w-3.5 h-3.5" />;
    case "Express":
      return <SiExpress className="w-3.5 h-3.5" />;
    case "Hono":
      return <SiHono className="w-3.5 h-3.5" />;
    case "REST APIs":
      return <Plug className="w-3.5 h-3.5" />;
    case "MongoDB":
      return <SiMongodb className="w-3.5 h-3.5" />;
    case "Firebase Auth":
      return <SiFirebase className="w-3.5 h-3.5" />;
    case "Firestore":
      return <SiFirebase className="w-3.5 h-3.5" />;
    case "Redis":
      return <SiRedis className="w-3.5 h-3.5" />;
    case "Native Android":
      return <SiAndroid className="w-3.5 h-3.5" />;
    case "Kotlin":
      return <SiKotlin className="w-3.5 h-3.5" />;
    case "Java":
      return <FaJava className="w-3.5 h-3.5" />;
    case "Jetpack Compose":
      return <SiJetpackcompose className="w-3.5 h-3.5" />;
    case "API Rate Limiting":
      return <Shield className="w-3.5 h-3.5" />;
    case "Microservice Patterns":
      return <Network className="w-3.5 h-3.5" />;
    case "Authentication Flows":
      return <Shield className="w-3.5 h-3.5" />;
    case "Data Modeling":
      return <Database className="w-3.5 h-3.5" />;
    default:
      return null;
  }
};

export function TechStack() {
  const stack = [
    {
      category: "Frontend",
      icon: Code2,
      tools: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Motion"],
    },
    {
      category: "Backend",
      icon: Server,
      tools: ["Node.js", "Bun.js", "Express", "Hono", "REST APIs"],
    },
    {
      category: "Database & Services",
      icon: Database,
      tools: ["MongoDB", "Firebase Auth", "Firestore", "Redis"],
    },
    {
      category: "Mobile",
      icon: Smartphone,
      tools: ["Native Android", "Kotlin", "Java", "Jetpack Compose"],
    },
    {
      category: "System Design",
      icon: Blocks,
      tools: [
        "API Rate Limiting",
        "Microservice Patterns",
        "Authentication Flows",
        "Data Modeling",
      ],
    },
  ];

  return (
    <section className="py-24 border-y border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-mono text-sm text-indigo-500 dark:text-indigo-400 tracking-widest uppercase mb-4">
            Technology Stack
          </h2>
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Full-spectrum capabilities.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {stack.map((group, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <group.icon className="w-5 h-5 text-gray-400 dark:text-white/40" />
                <h4 className="font-medium text-gray-900 dark:text-white/90">
                  {group.category}
                </h4>
              </div>
              <ul className="flex flex-col gap-2 border-l border-gray-200 dark:border-white/10 pl-6 space-y-1">
                {group.tools.map((tool, j) => (
                  <li
                    key={j}
                    className="font-mono text-sm text-gray-500 dark:text-white/50 flex items-center gap-2 relative before:absolute before:-left-[25px] before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-px before:bg-gray-200 dark:before:bg-white/10 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors cursor-default"
                  >
                    {getToolIcon(tool)}
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
