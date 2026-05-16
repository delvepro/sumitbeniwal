import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumit Beniwal | Senior Software Developer & Team Lead",
  description:
    "Portfolio of Sumit Beniwal — Senior Software Developer & Team Lead at Delve Professionals LLC. MERN, Next.js, AWS, Docker, Linux, and AI integration.",
  keywords: [
    "senior software developer",
    "team lead",
    "DevOps",
    "AWS",
    "Docker",
    "MERN stack",
    "Next.js",
    "Sumit Beniwal",
    "Delve Professionals",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrains.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
