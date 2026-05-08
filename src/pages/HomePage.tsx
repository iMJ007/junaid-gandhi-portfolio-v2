import { Suspense, lazy } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";

const Systems = lazy(() => import("../components/sections/Systems").then(m => ({ default: m.Systems })));
const MobileApps = lazy(() => import("../components/sections/MobileApps").then(m => ({ default: m.MobileApps })));
const TechStack = lazy(() => import("../components/sections/TechStack").then(m => ({ default: m.TechStack })));
const Experience = lazy(() => import("../components/sections/Experience").then(m => ({ default: m.Experience })));
const Reviews = lazy(() => import("../components/sections/Reviews").then(m => ({ default: m.Reviews })));
const Contact = lazy(() => import("../components/sections/Contact").then(m => ({ default: m.Contact })));

export function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 bg-grid-white pointer-events-none opacity-[0.03] dark:opacity-10" />

      <Navbar />

      <main className="relative z-10 flex flex-col">
        <Hero />
        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading...</div>}>
          <Systems />
          <MobileApps />
          <Reviews />
          <TechStack />
          <Experience />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}
