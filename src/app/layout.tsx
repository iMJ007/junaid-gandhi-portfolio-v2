import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Junaid Gandhi | Full-Stack & Android Engineer",
  description: "Portfolio of Junaid Gandhi, a Full-Stack and Android Engineer specializing in scalable web platforms, APIs, and native mobile ecosystems. Creator of Crisper, Orphic, and Evequote.",
  keywords: "Junaid Gandhi, Full-Stack Engineer, Android Developer, Mobile Apps Development, React, Node.js, Kotlin, Compose, Play Store Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Junaid Gandhi",
    jobTitle: "Full-Stack & Android Engineer",
    url: "https://junaidgandhi.com",
    sameAs: [
      "https://github.com/iMJ007",
      "https://www.linkedin.com/in/mohammed-junaid-gandhi-31555313b/",
      "https://play.google.com/store/apps/dev?id=6428398715878309895"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Independent Developer"
    },
    knowsAbout: ["Full-Stack Engineering", "Android Development", "React", "Node.js", "Kotlin", "Jetpack Compose", "React Native", "TypeScript", "Next.js", "MongoDB", "PostgreSQL", "Firebase"]
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
