import type { Metadata } from "next";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { JsonLd } from "@/components/seo/json-ld";
import { SeoContent } from "@/components/seo/seo-content";
import {
  buildPersonJsonLd,
  buildProfessionalServiceJsonLd,
  buildProfilePageJsonLd,
  buildWebSiteJsonLd,
  defaultDescription,
  defaultTitle,
  seoKeywords,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: seoKeywords,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          buildPersonJsonLd(),
          buildWebSiteJsonLd(),
          buildProfilePageJsonLd(),
          buildProfessionalServiceJsonLd(),
        ]}
      />
      <SeoContent />
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
