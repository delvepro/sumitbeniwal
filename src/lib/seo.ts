import type { Metadata } from "next";
import { siteConfig } from "@/data/content";
import { projectSlugs } from "@/data/projects";

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const seoKeywords = [
  "Sumit Beniwal",
  "Sumit Beniwal developer",
  "Sumit Beniwal full stack developer",
  "Sumit Beniwal fullstack developer",
  "Sumit Beniwal portfolio",
  "Sumit Beniwal software engineer",
  "Sumit Beniwal team lead",
  "Sumit Beniwal senior developer",
  "Sumit Beniwal MERN developer",
  "Sumit Beniwal TypeScript developer",
  "Sumit Beniwal Next.js developer",
  "Sumit Beniwal Node.js developer",
  "Sumit full stack",
  "Sumit full stack developer",
  "Sumit developer",
  "Sumit software developer",
  "Sumit fullstack",
  "Sumit Beniwal India",
  "Sumit Beniwal Rohtak",
  "Sumit Beniwal Haryana",
  "full stack developer Sumit Beniwal",
  "fullstack developer Sumit Beniwal",
  "hire Sumit Beniwal",
  "Sumit Beniwal resume",
  "Sumit Beniwal LinkedIn",
  "senior full stack developer",
  "senior software developer",
  "team lead developer",
  "TypeScript full stack developer",
  "MERN stack developer",
  "Next.js developer India",
  "Node.js developer India",
  "React developer India",
  "PostgreSQL developer",
  "MongoDB developer",
  "AWS DevOps engineer",
  "Docker developer",
  "CI/CD engineer",
  "full stack engineer India",
  "software engineer Rohtak",
  "web developer Rohtak",
  "Delve Professionals developer",
  "production systems developer",
  "scalable architecture developer",
  "event-driven backend developer",
  "real-time systems developer",
  "portfolio full stack developer",
  "freelance full stack developer India",
  "remote full stack developer",
  "JavaScript developer India",
  "Express.js developer",
  "Redis developer",
  "WebSocket developer",
  "clean architecture developer",
  "microservices developer",
  "SaaS developer",
  "e-commerce developer",
  "fintech developer",
];

export const defaultTitle =
  "Sumit Beniwal | Full Stack Developer & Senior Software Engineer | TypeScript, MERN, Next.js";

export const defaultDescription =
  "Sumit Beniwal — Senior Full Stack Developer & Team Lead. Expert in TypeScript, MERN stack, Next.js, Node.js, PostgreSQL, MongoDB, AWS & DevOps. Portfolio of 9+ production apps. Hire Sumit Beniwal for fullstack development, scalable architecture & technical leadership from Rohtak, India.";

export const ogImageAlt =
  "Sumit Beniwal — Full Stack Developer, Senior Software Engineer & Team Lead";

export function buildRootMetadata(): Metadata {
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: `%s | Sumit Beniwal — Full Stack Developer`,
    },
    description: defaultDescription,
    keywords: seoKeywords,
    authors: [{ name: "Sumit Beniwal", url: siteConfig.social.linkedin }],
    creator: "Sumit Beniwal",
    publisher: "Sumit Beniwal",
    applicationName: "Sumit Beniwal Portfolio",
    category: "technology",
    classification: "Portfolio, Software Development, Full Stack Engineering",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: siteUrl,
      siteName: "Sumit Beniwal — Full Stack Developer Portfolio",
      title: defaultTitle,
      description: defaultDescription,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      creator: "@sumitbeniwal",
      images: ["/opengraph-image"],
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    other: {
      "geo.region": "IN-HR",
      "geo.placename": "Rohtak",
      "geo.position": "28.8955;76.6066",
      ICBM: "28.8955, 76.6066",
    },
  };
}

export function buildPersonJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Sumit Beniwal",
    givenName: "Sumit",
    familyName: "Beniwal",
    alternateName: [
      "Sumit Beniwal Developer",
      "Sumit Full Stack Developer",
      "Sumit Beniwal Fullstack Developer",
    ],
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    jobTitle: [
      "Senior Software Developer",
      "Full Stack Developer",
      "Team Lead",
      "MERN Stack Developer",
      "TypeScript Developer",
    ],
    description: defaultDescription,
    email: siteConfig.email || undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rohtak",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: "Delve Professionals LLC",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Maharishi Dayanand University, Rohtak",
      },
    ],
    knowsAbout: [
      "Full Stack Development",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MERN Stack",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "WebSockets",
      "AWS",
      "Docker",
      "DevOps",
      "CI/CD",
      "Clean Architecture",
      "Event-Driven Systems",
      "Software Architecture",
      "Team Leadership",
    ],
    sameAs: [siteConfig.social.linkedin].filter(Boolean),
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Software Developer",
      occupationLocation: {
        "@type": "City",
        name: "Rohtak, Haryana, India",
      },
      skills: seoKeywords.slice(0, 20).join(", "),
    },
  };
}

export function buildWebSiteJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Sumit Beniwal — Full Stack Developer Portfolio",
    alternateName: [
      "Sumit Beniwal Portfolio",
      "Sumit Developer Portfolio",
      "Sumit Full Stack Portfolio",
    ],
    url: siteUrl,
    description: defaultDescription,
    inLanguage: "en-IN",
    author: { "@id": `${siteUrl}/#person` },
    publisher: { "@id": `${siteUrl}/#person` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildProfilePageJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    name: "Sumit Beniwal — Full Stack Developer Profile",
    description: defaultDescription,
    url: siteUrl,
    mainEntity: { "@id": `${siteUrl}/#person` },
    isPartOf: { "@id": `${siteUrl}/#website` },
    inLanguage: "en-IN",
    dateModified: new Date().toISOString().split("T")[0],
  };
}

export function buildProfessionalServiceJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: "Sumit Beniwal — Full Stack Development Services",
    description:
      "Full stack development, MERN & Next.js apps, TypeScript backends, PostgreSQL/MongoDB, AWS DevOps, scalable architecture, and technical team leadership by Sumit Beniwal.",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "Full Stack Web Development",
      "MERN Stack Development",
      "Next.js Development",
      "Node.js Backend Development",
      "AWS Cloud & DevOps",
      "Technical Team Leadership",
      "Software Architecture Consulting",
    ],
    provider: { "@id": `${siteUrl}/#person` },
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildProjectMetadata(
  title: string,
  description: string,
  slug: string,
): Metadata {
  const siteUrl = getSiteUrl();
  const pageTitle = `${title} — Case Study by Sumit Beniwal, Full Stack Developer`;

  return {
    title: pageTitle,
    description: `${description} Built by Sumit Beniwal, senior full stack developer specializing in TypeScript, MERN, Next.js & AWS.`,
    keywords: [
      ...seoKeywords.slice(0, 15),
      title,
      "Sumit Beniwal project",
      "full stack case study",
    ],
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: `${siteUrl}/projects/${slug}`,
      type: "article",
    },
  };
}

export function getSitemapEntries() {
  const siteUrl = getSiteUrl();
  const now = new Date();

  return [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly" as const, priority: 1 },
    ...projectSlugs.map((slug) => ({
      url: `${siteUrl}/projects/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
