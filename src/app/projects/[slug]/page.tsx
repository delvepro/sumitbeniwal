import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Footer } from "@/components/layout/footer";
import { CaseStudyContent } from "@/components/projects/case-study-content";
import { ProjectCaseStudyHeader } from "@/components/projects/project-case-study-header";
import { getProjectBySlug, projectSlugs } from "@/data/projects";
import { siteConfig } from "@/data/content";
import Link from "next/link";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} | Case Study — ${siteConfig.name}`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <AnimatedBackground />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="font-semibold tracking-tight text-foreground">
            {siteConfig.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </Link>
          <Link
            href="/#projects"
            className="text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            All projects
          </Link>
        </nav>
      </header>

      <main className="relative min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div
            className={`mb-10 h-1 w-24 rounded-full bg-gradient-to-r ${project.gradient}`}
          />
          <ProjectCaseStudyHeader project={project} />
          <div className="mt-12">
            <CaseStudyContent project={project} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
