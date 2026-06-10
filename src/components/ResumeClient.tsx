"use client";

import { Printer, MapPin, Globe, Github, Linkedin, Smartphone, AlertCircle, X, ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';

const Section = ({ title, className = "", children }: { title: string; className?: string; children: React.ReactNode }) => (
  <section className={`mb-10 ${className}`}>
    <h2 className="text-xs font-bold tracking-[0.15em] text-zinc-400 dark:text-zinc-500 uppercase mb-5">
      {title}
    </h2>
    <div className="text-zinc-700 dark:text-zinc-400 text-[13.5px] leading-relaxed">
      {children}
    </div>
  </section>
);

const ExperienceItem = ({ 
  company, 
  role, 
  date, 
  children,
  className = ""
}: { 
  company: string; 
  role: string; 
  date: string; 
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`mb-8 break-inside-avoid ${className}`}>
    <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1.5">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{company}</h3>
      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500 sm:mt-0 mt-1 whitespace-nowrap">
        {date}
      </span>
    </header>
    <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">{role}</div>
    {children}
  </div>
);

export function ResumeClient() {
  const [showToast, setShowToast] = useState(false);

  const handlePrint = () => {
    try {
      window.print();
    } catch (e) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 8000);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] print:bg-white font-sans text-zinc-800 dark:text-zinc-200 selection:bg-blue-100 dark:selection:bg-blue-900/40 selection:text-blue-900 dark:selection:text-blue-100 py-12 print:py-0 relative">
      
      {/* Decorative dot background for sleek UI feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none no-print dark:invert" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      {/* Warning Toast for Iframe / Preview Users */}
      {showToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] no-print w-[calc(100vw-2rem)] max-w-lg">
          <div className="bg-zinc-900 text-white px-4 py-4 rounded-xl shadow-2xl flex items-start gap-4 border border-zinc-800">
            <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-sm font-semibold mb-1">Open in new tab to export PDF</h3>
              <p className="text-zinc-300 text-[13px] leading-relaxed">
                Browser security prevents downloading or printing directly from this preview panel. 
                Please click the <strong className="text-white">↗ Open in new tab</strong> button at the top right of this page, then try exporting your PDF again.
              </p>
            </div>
            <button onClick={() => setShowToast(false)} className="text-zinc-400 hover:text-white transition-colors p-1">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Glassmorphism Print Button Wrapper */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 no-print z-50 flex flex-col gap-3">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-zinc-900 dark:bg-white hover:bg-black dark:hover:bg-zinc-200 text-white dark:text-zinc-900 px-5 py-3 rounded-full font-medium shadow-xl hover:shadow-2xl transition-all active:scale-95"
        >
          <Printer className="w-4 h-4 text-zinc-300 dark:text-zinc-500" />
          <span className="text-sm">Export PDF</span>
        </button>
      </div>

      {/* Back Button */}
      <div className="fixed top-6 left-4 sm:top-8 sm:left-8 no-print z-50">
        <Link
          href="/"
          className="flex items-center gap-2 bg-white/70 dark:bg-black/70 hover:bg-white/90 dark:hover:bg-black/90 backdrop-blur-md text-zinc-800 dark:text-zinc-200 px-4 py-2.5 rounded-full font-medium shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_32px_rgba(0,0,0,0.1)] transition-all active:scale-95 border border-white/40 dark:border-white/10"
        >
          <ArrowLeft className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      <main className="max-w-[850px] mx-auto bg-white dark:bg-zinc-950 sm:shadow-[0_8px_40px_rgba(0,0,0,0.04)] sm:border sm:border-zinc-100 dark:sm:border-zinc-800/80 sm:rounded-2xl print:shadow-none print:border-none print:rounded-none py-14 px-8 sm:px-16 print:p-0 relative z-10 transition-shadow">
        
        {/* Header Section */}
        <header className="mb-10">
          <h1 className="text-4xl leading-none font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Junaid Gandhi</h1>
          <div className="text-[20px] font-medium text-blue-600 dark:text-blue-400 mt-2 tracking-tight">Senior Android & Full-Stack Engineer</div>
          <div className="text-[13px] font-medium text-zinc-400 dark:text-zinc-500 mt-1.5 tracking-wide">Mobile • Backend • Product Systems • API Architecture</div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-6 text-[13px] text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <MapPin className="w-[14px] h-[14px] text-zinc-400 dark:text-zinc-500" />
              <span>Mumbai, India</span>
            </div>
            <a href="https://junaidgandhi.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Globe className="w-[14px] h-[14px] text-zinc-400 dark:text-zinc-500" />
              <span>junaidgandhi.com</span>
            </a>
            <a href="https://linkedin.com/in/mohammed-junaid-gandhi" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="w-[14px] h-[14px] text-zinc-400 dark:text-zinc-500" />
              <span>linkedin.com/in/mohammed-junaid-gandhi</span>
            </a>
            <a href="https://github.com/iMJ007" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github className="w-[14px] h-[14px] text-zinc-400 dark:text-zinc-500" />
              <span>github.com/iMJ007</span>
            </a>
            <a href="https://play.google.com/store/apps/dev?id=6428398715878309895" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 whitespace-nowrap hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Smartphone className="w-[14px] h-[14px] text-zinc-400 dark:text-zinc-500" />
              <span>Play Store Dev</span>
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <Section title="Professional Summary">
          <p className="text-justify text-zinc-600 dark:text-zinc-400">
            Senior Android & Full-Stack Engineer with 10+ years of experience building production-grade mobile applications, scalable backend systems, and full-stack platforms. Independently architected Android applications with more than <strong className="font-medium text-zinc-900 dark:text-zinc-200 border-b border-blue-200/60 dark:border-blue-900/60 pb-px">1M+ cumulative installs</strong> and backend infrastructures serving users, dealers, partners, and administrators across India. Experienced in Kotlin, Java, Node.js, Bun, Hono.js, MongoDB, Next.js, Firebase, and scalable REST API systems with end-to-end ownership from development to deployment.
          </p>
        </Section>

        {/* Core Skills */}
        <Section title="Core Skills" className="break-inside-avoid">
          <ul className="space-y-3">
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="font-medium text-zinc-900 dark:text-zinc-200 sm:w-[120px] shrink-0 text-sm">Mobile</span> 
              <span className="text-zinc-500 dark:text-zinc-400">Android SDK, Kotlin, Java, MVVM, Coroutines, Retrofit, Room Database, LiveData, ViewModel, Paging, WorkManager, XML Views, Jetpack Components, Navigation Component</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="font-medium text-zinc-900 dark:text-zinc-200 sm:w-[120px] shrink-0 text-sm">Backend</span> 
              <span className="text-zinc-500 dark:text-zinc-400">Node.js, Express.js, Bun, Hono.js, REST APIs, MongoDB, Mongoose, RBAC, API Key Authentication</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="font-medium text-zinc-900 dark:text-zinc-200 sm:w-[120px] shrink-0 text-sm">Frontend</span> 
              <span className="text-zinc-500 dark:text-zinc-400">Next.js, React, Vite, JavaScript ES6, HTML5, CSS3</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="font-medium text-zinc-900 dark:text-zinc-200 sm:w-[120px] shrink-0 text-sm">Infrastructure</span> 
              <span className="text-zinc-500 dark:text-zinc-400">DigitalOcean, Ubuntu, Nginx, PM2, Firebase Authentication, Firebase Analytics, Firebase Crashlytics, Firebase Cloud Messaging</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="font-medium text-zinc-900 dark:text-zinc-200 sm:w-[120px] shrink-0 text-sm">Tools & Process</span> 
              <span className="text-zinc-500 dark:text-zinc-400">GitHub, Git, Clean Architecture, Production Deployment, API Integration</span>
            </li>
          </ul>
        </Section>

        {/* Professional Experience */}
        <Section title="Professional Experience">
          
          <ExperienceItem company="Darbar Technologies" role="Founding Engineer" date="2021 – Present">
            <ul className="list-disc list-outside ml-4 space-y-2 mb-5 text-zinc-600 dark:text-zinc-400">
              <li>Led architecture and full-stack engineering for RepairPhone, a nationwide repair service platform.</li>
              <li>Architected scalable backend systems using Bun, Hono.js, MongoDB, and Mongoose.</li>
              <li>Built REST APIs supporting customers, repair partners, administrators, and third-party platforms.</li>
              <li>Implemented Role-Based Access Control (RBAC) and built an API key authentication and external integration platform.</li>
              <li>Developed partner and admin Android applications using Kotlin and XML Views.</li>
              <li>Rebuilt frontend platform using Next.js.</li>
              <li>Managed production deployment on DigitalOcean using Ubuntu, PM2, and Nginx reverse proxy.</li>
              <li>Integrated Firebase Authentication, Analytics, Crashlytics, and Push Notifications.</li>
              <li>Designed systems supporting India-wide service operations.</li>
            </ul>
            
            <div className="bg-zinc-50/80 dark:bg-zinc-900/50 rounded-xl p-5 mt-4 no-print sm:border sm:border-zinc-100/80 dark:sm:border-zinc-800/50 print:p-0 print:bg-transparent">
              <h4 className="text-[11px] font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-4">Key Projects Built</h4>
              <div className="space-y-5">
                <div>
                  <div className="font-medium text-zinc-900 dark:text-zinc-200 text-sm">RepairPhone <span className="text-zinc-400 dark:text-zinc-500 font-normal ml-1">— Full-stack Service Platform</span></div>
                  <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1.5 text-zinc-500 dark:text-zinc-400 text-[13px]">
                    <li>Backend architecture developed from scratch.</li>
                    <li>Multi-role operational workflows with Android apps for partners and operations.</li>
                    <li>External API ecosystem for third-party integrations.</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-zinc-900 dark:text-zinc-200 text-sm">MacWinn.com <span className="text-zinc-400 dark:text-zinc-500 font-normal ml-1">— Integration Platform</span></div>
                  <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1.5 text-zinc-500 dark:text-zinc-400 text-[13px]">
                    <li>Third-party integration platform based entirely on RepairPhone APIs.</li>
                    <li>Built using React and Vite as a live production system for a Bengaluru repair center.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="hidden print:block mt-4">
              <h4 className="text-sm font-semibold text-zinc-900 mb-2">Key Projects Built</h4>
               <div className="space-y-4">
                <div>
                  <div className="font-medium text-zinc-900 text-sm">RepairPhone (Full-stack Service Platform)</div>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-zinc-600">
                    <li>Backend architecture developed from scratch.</li>
                    <li>Multi-role operational workflows with Android apps for partners and operations.</li>
                    <li>External API ecosystem for third-party integrations.</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-zinc-900 text-sm">MacWinn.com (Integration Platform)</div>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-zinc-600">
                    <li>Third-party integration platform based entirely on RepairPhone APIs.</li>
                    <li>Built using React and Vite as a live production system for a Bengaluru repair center.</li>
                  </ul>
                </div>
              </div>
            </div>
          </ExperienceItem>

          <ExperienceItem company="Cashmen.in" role="Senior Android & Full-Stack Developer" date="2019 – Present">
            <ul className="list-disc list-outside ml-4 space-y-2 mb-5 text-zinc-600 dark:text-zinc-400">
              <li>Developed Android applications for customers, dealers, regional managers, and administrators.</li>
              <li>Architected backend APIs using Node.js, Express.js, MongoDB, and Mongoose.</li>
              <li>Rebuilt frontend website using Next.js.</li>
              <li>Managed infrastructure deployment using DigitalOcean, Ubuntu, PM2, and Nginx.</li>
              <li>Implemented Firebase Authentication and Push Notification systems.</li>
              <li>Built scalable dealer and lead management workflows.</li>
            </ul>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 mt-6 print:border-none print:p-0 print:bg-transparent break-inside-avoid">
              <div className="flex flex-col gap-0.5">
                <span className="text-3xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight">841K<span className="text-blue-500 dark:text-blue-400">+</span></span>
                <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Installs</span>
              </div>
              <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800 hidden sm:block"></div>
              <div className="flex flex-col gap-0.5">
                <span className="text-3xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight">216K<span className="text-blue-500 dark:text-blue-400">+</span></span>
                <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Users</span>
              </div>
              <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800 hidden sm:block"></div>
              <div className="flex flex-col gap-0.5">
                <span className="text-3xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight">524<span className="text-blue-500 dark:text-blue-400">+</span></span>
                <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Dealers</span>
              </div>
              <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800 hidden sm:block"></div>
              <div className="flex flex-col gap-0.5">
                <span className="text-3xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight">1000<span className="text-blue-500 dark:text-blue-400">+</span></span>
                <span className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Leads / mo</span>
              </div>
            </div>
          </ExperienceItem>

          <ExperienceItem company="Eclectik Devs" role="Independent Android Engineer" date="2016 – Present">
            <div className="text-[13.5px] leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4">
              Independently architected and launched multiple successful consumer Android applications featuring MVVM Architecture, Room Database, Firebase Auth, Analytics, Crashlytics, and Cloud Messaging.
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3 mt-4 print:grid-cols-1 print:gap-4 print:border-none">
              <div className="bg-zinc-50/50 dark:bg-zinc-900/40 rounded-xl p-4 sm:border sm:border-zinc-100 dark:sm:border-zinc-800/80 hover:bg-white dark:hover:bg-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-800 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">Orphic</h4>
                  <div className="flex items-center gap-1 pt-1 opacity-70">
                    <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">4.45 ★</span>
                  </div>
                </div>
                <div className="text-blue-600/80 dark:text-blue-400 font-medium mb-2 text-xs">534K+ downloads</div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Built using Kotlin, MVVM, Room, Firebase, LiveData, and Coroutines.</p>
              </div>

              <div className="bg-zinc-50/50 dark:bg-zinc-900/40 rounded-xl p-4 sm:border sm:border-zinc-100 dark:sm:border-zinc-800/80 hover:bg-white dark:hover:bg-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-800 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">Crisper</h4>
                  <div className="flex items-center gap-1 pt-1 opacity-70">
                    <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">4.57 ★</span>
                  </div>
                </div>
                <div className="text-blue-600/80 dark:text-blue-400 font-medium mb-2 text-xs">528K+ downloads</div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Illustration and stock image Android platform.</p>
              </div>

              <div className="bg-zinc-50/50 dark:bg-zinc-900/40 rounded-xl p-4 sm:col-span-2 sm:border sm:border-zinc-100 dark:sm:border-zinc-800/80 hover:bg-white dark:hover:bg-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-800 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all print:col-span-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">EveQuote</h4>
                  <div className="flex items-center gap-1 pt-1 opacity-70">
                    <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">4.46 ★</span>
                  </div>
                </div>
                <div className="text-blue-600/80 dark:text-blue-400 font-medium mb-2 text-xs">10K+ downloads</div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">Quote creation and sharing platform with integrated AdMob monetization.</p>
              </div>
            </div>
          </ExperienceItem>

          <ExperienceItem company="eHom" role="Web Developer" date="2017" className="!mb-0">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">Worked on web development initiatives for a Mumbai-based hardware startup focused on smart home solutions.</p>
          </ExperienceItem>

        </Section>

        {/* Education */}
        <Section title="Education" className="!mb-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Bachelor of Science in Computer Science</h3>
              <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">Wilson College</div>
            </div>
            <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 sm:mt-0 mt-1 whitespace-nowrap">
              2012 – 2016
            </span>
          </div>
        </Section>

      </main>
    </div>
  );
}
