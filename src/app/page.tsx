"use client";

import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { Systems } from "../components/sections/Systems";
import { MobileApps } from "../components/sections/MobileApps";
import { WebApps } from "../components/sections/WebApps";
import { TechStack } from "../components/sections/TechStack";
import { Experience } from "../components/sections/Experience";
import { FAQ } from "../components/sections/FAQ";
import { Reviews } from "../components/sections/Reviews";
import { Contact } from "../components/sections/Contact";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 bg-grid-white pointer-events-none opacity-[0.03] dark:opacity-10" />

      <Navbar />

      <main className="relative z-10 flex flex-col">
        <Hero />
        <Systems />
        <MobileApps />
        <WebApps />
        <Reviews />
        <TechStack />
        <Experience />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}
