import { siteConfig } from "@/data/content";

/**
 * Crawler-friendly, keyword-rich copy that complements visible UI without cluttering the design.
 * Uses sr-only so screen readers and search engines get full context.
 */
export function SeoContent() {
  return (
    <aside className="sr-only" aria-label="About Sumit Beniwal — Full Stack Developer">
      <h2>Sumit Beniwal — Full Stack Developer & Senior Software Engineer</h2>
      <p>
        Welcome to the official portfolio of <strong>Sumit Beniwal</strong>, a{" "}
        <strong>senior full stack developer</strong>, <strong>fullstack developer</strong>, and{" "}
        <strong>team lead</strong> based in Rohtak, Haryana, India.{" "}
        <strong>Sumit Beniwal full stack developer</strong> expertise spans TypeScript, JavaScript,
        React, Next.js, Node.js, Express.js, MERN stack, PostgreSQL, MongoDB, Redis, WebSockets,
        event-driven architecture, Docker, AWS cloud, CI/CD, and production-grade DevOps.
      </p>
      <p>
        Whether you search for <strong>Sumit developer</strong>, <strong>Sumit full stack</strong>,{" "}
        <strong>Sumit Beniwal developer</strong>, <strong>Sumit Beniwal fullstack developer</strong>
        , or <strong>Sumit Beniwal software engineer</strong> — this site showcases real production
        work: SaaS platforms, fintech apps, e-commerce, real estate, music distribution, and social
        media management systems. Hire <strong>Sumit Beniwal</strong> for full-time roles, freelance
        projects, consulting, and technical leadership.
      </p>
      <p>
        {siteConfig.name} is a {siteConfig.role} at Delve Professionals LLC, delivering scalable
        MERN and Next.js applications with clean architecture, repository patterns, background jobs,
        notification services, real-time chat, and AWS deployments. Available for{" "}
        {siteConfig.availability.toLowerCase()}.
      </p>
      <nav aria-label="Portfolio sections">
        <ul>
          <li>
            <a href="#about">About Sumit Beniwal — Full Stack Developer</a>
          </li>
          <li>
            <a href="#skills">Skills — TypeScript, MERN, Next.js, AWS DevOps</a>
          </li>
          <li>
            <a href="#experience">Work Experience — Senior Developer & Team Lead</a>
          </li>
          <li>
            <a href="#education">Education — Computer Science, Rohtak</a>
          </li>
          <li>
            <a href="#projects">Projects — Full Stack Case Studies by Sumit Beniwal</a>
          </li>
          <li>
            <a href="#contact">Contact Sumit Beniwal — Hire Full Stack Developer</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
