import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface PolicyLayoutProps {
  title: string;
  children: ReactNode;
}

export function PolicyLayout({ title, children }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#030303]">
      <div className="fixed inset-0 bg-grid-white pointer-events-none opacity-[0.03] dark:opacity-10" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 max-w-3xl mx-auto px-6">
        <div className="bg-white/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-sm backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-gray-900 dark:text-white mb-8 pb-8 border-b border-gray-100 dark:border-white/10">
            {title}
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-sans prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-indigo-500 hover:prose-a:text-indigo-600">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
