import type { Project } from "@/types/project";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ProjectCaseStudyHeader({ project }: { project: Project }) {
  return (
    <header className="space-y-6">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Case study</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
      >
        Visit live site
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </header>
  );
}
