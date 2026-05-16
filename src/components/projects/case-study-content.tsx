import type { Project } from "@/types/project";
import { ArchitecturePanel } from "@/components/projects/architecture-panel";
import {
  AlertTriangle,
  Layers,
  Rocket,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

const sections: {
  key: "problem" | "architecture" | "challenges" | "optimization" | "scalability";
  title: string;
  icon: typeof Target;
  type: "text" | "list";
}[] = [
  { key: "problem", title: "Problem", icon: Target, type: "text" },
  { key: "architecture", title: "Architecture", icon: Layers, type: "text" },
  { key: "challenges", title: "Challenges", icon: AlertTriangle, type: "list" },
  { key: "optimization", title: "Optimization", icon: Zap, type: "list" },
  { key: "scalability", title: "Scalability", icon: TrendingUp, type: "list" },
];

export function CaseStudyContent({ project }: { project: Project }) {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
          Technical architecture
        </h2>
        <ArchitecturePanel architecture={project.architecture} />
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5 text-accent" aria-hidden />
          <h2 className="text-2xl font-bold text-foreground">Case study</h2>
        </div>

        <div className="grid gap-6">
          {sections.map(({ key, title, icon: Icon, type }) => (
            <article key={key} className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Icon className="h-5 w-5 text-accent" aria-hidden />
                {title}
              </h3>
              {type === "text" ? (
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {project.caseStudy[key] as string}
                </p>
              ) : (
                <ul className="mt-3 space-y-2.5">
                  {(project.caseStudy[key] as string[]).map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted md:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
