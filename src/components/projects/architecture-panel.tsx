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
import { cn } from "@/lib/utils";

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

export function ArchitecturePanel({
  architecture,
  className,
}: {
  architecture: ProjectArchitecture;
  className?: string;
}) {
  return (
    <div className={cn("mt-6", className)}>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-tertiary">
        Key Highlights
      </p>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {fields.map(({ key, label, icon: Icon }, i) => {
          const isLast = i === fields.length - 1;
          return (
            <div
              key={key}
              className={cn(
                "rounded-xl border border-border/70 bg-chip/80 p-3.5",
                isLast && "sm:col-span-2",
              )}
            >
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent-tertiary/30 bg-accent-tertiary/10 text-accent-tertiary">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {architecture[key]}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
