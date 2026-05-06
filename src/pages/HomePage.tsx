import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { Systems } from "../components/sections/Systems";
import { MobileApps } from "../components/sections/MobileApps";
import { TechStack } from "../components/sections/TechStack";
import { Experience } from "../components/sections/Experience";
import { Reviews } from "../components/sections/Reviews";
import { Contact } from "../components/sections/Contact";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 bg-grid-white pointer-events-none opacity-[0.03] dark:opacity-10" />

      <Navbar />

      <main className="relative z-10 flex flex-col">
        <Hero />
        <Systems />
        <MobileApps />
        <Reviews />
        <TechStack />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
