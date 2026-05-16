import type { ProjectArchitecture } from "@/types/project";
import {
  Cloud,
  Database,
  Gauge,
  HardDrive,
  Layers,
  Plug,
  Shield,
} from "lucide-react";

const fields: {
  key: keyof ProjectArchitecture;
  label: string;
  icon: typeof Gauge;
}[] = [
  { key: "scale", label: "Scale", icon: Gauge },
  { key: "backendArchitecture", label: "Backend architecture", icon: Layers },
  { key: "authFlow", label: "Auth flow", icon: Shield },
  { key: "caching", label: "Caching", icon: HardDrive },
  { key: "deploymentInfra", label: "Deployment infra", icon: Cloud },
  { key: "apis", label: "APIs", icon: Plug },
  { key: "databaseDesign", label: "Database design", icon: Database },
];

export function ArchitecturePanel({ architecture }: { architecture: ProjectArchitecture }) {
  return (
    <div className="mt-6 rounded-xl border border-border/80 bg-surface/40 p-4">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-accent">
        Architecture
      </p>
      <dl className="grid gap-3 sm:grid-cols-2">
        {fields.map(({ key, label, icon: Icon }) => (
          <div
            key={key}
            className="rounded-lg border border-border/60 bg-background/50 p-3"
          >
            <dt className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <Icon className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
              {label}
            </dt>
            <dd className="mt-1.5 text-xs leading-relaxed text-muted">{architecture[key]}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
