import type { CSSProperties, ReactElement, ReactNode } from "react";
import { cn } from "@/lib/utils";

type IconProps = { className?: string; style?: CSSProperties };

function Svg({
  className,
  style,
  children,
  viewBox = "0 0 24 24",
}: IconProps & { children: ReactNode; viewBox?: string }) {
  return (
    <svg
      className={cn("h-4 w-4 shrink-0", className)}
      style={style}
      viewBox={viewBox}
      fill="currentColor"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const ReactIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="2.2" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      transform="rotate(120 12 12)"
    />
  </Svg>
);

const NextIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.6 14.5V8.2l-6.9 8.3h-.9V7.5h1.4v7.7l6.9-8.2h.9v9.5h-1.4z" />
  </Svg>
);

const NodeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 1.6L3.6 6.4v11.2L12 22.4l8.4-4.8V6.4L12 1.6zm0 2.3l6.2 3.5v7.2L12 18.1l-6.2-3.5V7.4L12 3.9zm-.7 3.6v4.8l.7.4.7-.4V7.5h-1.4zm-2.5 1.4l-1.2.7v4.1l3 1.7v-1.5l-1.8-1v-2.5l1.8-1V8.9l-1.8 1zm6.2 0v1.5l1.8 1v2.5l-1.8 1v1.5l3-1.7V9.6l-1.2-.7-1.8 1z" />
  </Svg>
);

const TypeScriptIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M1.5 1.5h21v21h-21V1.5zm11.3 10.2H9.4v1.5h2.2c.9 0 1.4.3 1.4.9 0 .6-.5.9-1.4.9H9.4v7.2h1.7v-3.1h1.8c2.1 0 3.3-1 3.3-2.6 0-1.7-1.2-2.8-3.4-2.8zm5.3 0h-4.4v1.5h1.4v7.7h1.7v-7.7h1.3v-1.5z" />
  </Svg>
);

const AwsIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6.8 14.2c0 .3.1.5.3.7l1.4 1c.2.1.2.2 0 .3l-1.7 1.2c-.2.1-.3.1-.4 0l-1.8-1.2c-.2-.1-.2-.2 0-.3l1.4-1c.2-.2.3-.4.3-.7V8.8c0-.2.1-.3.3-.3h1.1c.2 0 .3.1.3.3v5.4zm4.2-4.1c1.5 0 2.5.7 2.6 1.9h-1.5c-.1-.5-.5-.8-1.1-.8-.8 0-1.3.5-1.3 1.4v.9c0 .9.5 1.4 1.3 1.4.6 0 1-.3 1.1-.8h1.5c-.1 1.2-1.1 1.9-2.6 1.9-1.7 0-2.8-1.1-2.8-2.9v-.9c0-1.8 1.1-2.9 2.8-2.9zm5.7 0c1.1 0 1.9.4 2.3 1.1l-1.2.7c-.2-.4-.6-.6-1.1-.6-.8 0-1.3.5-1.3 1.4v.9c0 .9.5 1.4 1.3 1.4.5 0 .9-.2 1.1-.6l1.2.7c-.4.7-1.2 1.1-2.3 1.1-1.7 0-2.8-1.1-2.8-2.9v-.9c0-1.8 1.1-2.9 2.8-2.9zm4.6.2h1.6l-2.4 6.2h-1.6l-.8-2.2-1.1 2.2h-1.6l2.5-4.7-.5-1.5h1.6l.8 2.2 1.5-2.2z" />
  </Svg>
);

const PostgresIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M16.6 2.2c-1.3-.1-2.5.3-3.4 1-.7-.2-1.5-.2-2.3 0C8.4 1.8 5.7 2.6 5 5.2c-.4 1.7.1 3.5.8 5.1-.6 1.4-.9 2.8-.7 4.1.3 2.2 1.8 3.5 3.8 3.7.7.1 1.4 0 2-.3.5 1.1 1.3 2 2.5 2.4 1.6.5 3.2.1 4.2-1.1.7.2 1.5.2 2.2-.1 1.6-.6 2.5-1.9 2.5-3.7 0-1.2-.4-2.4-1-3.5.5-1.4.8-2.9.5-4.3-.5-2.3-2.3-3.5-5.2-3.3z" />
  </Svg>
);

const DockerIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.2 11.1h2.1v2.1H4.2v-2.1zm2.6 0h2.1v2.1H6.8v-2.1zm2.6 0h2.1v2.1H9.4v-2.1zm2.6 0h2.1v2.1h-2.1v-2.1zM6.8 8.6h2.1v2.1H6.8V8.6zm2.6 0h2.1v2.1H9.4V8.6zm2.6 0h2.1v2.1h-2.1V8.6zm0-2.5h2.1v2.1h-2.1V6.1zm3.5 7.6c-.2.1-.4.2-.7.2H2.4c-.2 0-.4-.1-.4-.3 0-.1 0-.2.1-.3.6-1.1 1.5-2 2.7-2.5-.3-.5-.4-1-.3-1.6.1-.6.4-1.1.9-1.5.1-.1.3 0 .4.1l.9 1.1c.7-.1 1.4 0 2 .3.6-.4 1.3-.5 2-.3l.9-1.1c.1-.1.3-.2.4-.1.5.4.8.9.9 1.5.1.6 0 1.1-.3 1.6 1.9.8 3.2 2.5 3.4 4.5 0 .2-.1.4-.3.4h-1.8c-.2 0-.3-.1-.4-.2z" />
  </Svg>
);

const TailwindIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 6.5c-2.7 0-4.4 1.3-5 4 1-.7 2.1-.9 3.3-.7.7.1 1.2.5 1.7 1 1.1 1.1 2.3 2.2 4.7 2.2 2.7 0 4.4-1.3 5-4-1 .7-2.1.9-3.3.7-.7-.1-1.2-.5-1.7-1-1.1-1.1-2.3-2.2-4.7-2.2zm-5 6c-2.7 0-4.4 1.3-5 4 1-.7 2.1-.9 3.3-.7.7.1 1.2.5 1.7 1 1.1 1.1 2.3 2.2 4.7 2.2 2.7 0 4.4-1.3 5-4-1 .7-2.1.9-3.3.7-.7-.1-1.2-.5-1.7-1-1.1-1.1-2.3-2.2-4.7-2.2z" />
  </Svg>
);

const GitIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21.6 11.1L12.9 2.4a1.4 1.4 0 00-2 0L9.1 4.2l2.5 2.5a1.7 1.7 0 011.7 2.1h.1a1.7 1.7 0 11-1.7-1.7h.1L9.3 4.7 2.4 11.6a1.4 1.4 0 000 2l8.7 8.7a1.4 1.4 0 002 0l8.5-8.5a1.4 1.4 0 000-2zM12.2 17a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4z" />
  </Svg>
);

const MongoIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12.2 2s.4 1.8.4 3.5c0 1.5-.5 2.5-.5 2.5s1.5.5 1.5 3.2c0 3.2-1.6 4.4-1.6 4.4s.1 1.3.2 2.1c.1.6.3 1.1.3 1.1l-.8.2s.1-.8.1-1.5c0-.9-.3-1.6-.3-1.6s-1.7 1.1-1.7 4.6c0 2.7.6 3.5.6 3.5h-.7s.1-.5.1-1.2c0-1.6-.6-2.7-.6-2.7S7.5 16.8 7.5 13c0-3.4 2.1-4.4 2.1-4.4S9 7.4 9 5.5C9 3.4 10.5 2 10.5 2s.8 1.6 1.1 2.8c.2-.8.6-2.8.6-2.8z" />
  </Svg>
);

const RedisIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.2L3.5 6.5v2.2L12 12l8.5-3.3V6.5L12 3.2zm0 9.5L3.5 9.4v2.3L12 15.2l8.5-3.5V9.4L12 12.7zm0 3.7L3.5 13v2.3L12 18.8l8.5-3.5V13L12 16.4z" />
  </Svg>
);

const ExpressIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21.5 8.2h-2.3l-2.1 5.4-2.1-5.4H12.7l3.4 7.6h1.8l3.6-7.6zM9.8 10.8c0-.8-.6-1.2-1.7-1.2H5.6v5.8h1.5v-2h1.1l1.4 2h1.8l-1.6-2.2c.7-.3 1.1-.9 1.1-1.8v-.6zm-1.5.3c0 .4-.2.6-.7.6H7.1v-1.2h.6c.4 0 .6.2.6.6zM2.5 9.6H1v5.8h1.5V9.6z" />
  </Svg>
);

const JsIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M1.5 1.5h21v21h-21V1.5zm11.8 15.8c0 2.1-1.2 3.1-3 3.1-1.6 0-2.6-.8-3.1-1.8l1.6-1c.3.5.6.9 1.3.9.7 0 1.1-.3 1.1-1.4v-6.3h2.1v6.5zm5.5 3.1c-1.9 0-3.1-.9-3.7-2.1l1.6-1c.4.7.9 1.2 1.9 1.2.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.4-.6-2.3-1.4-2.3-3 0-1.5 1.1-2.6 2.9-2.6 1.3 0 2.2.4 2.9 1.6l-1.6 1c-.3-.5-.7-.7-1.3-.7-.6 0-1 .4-1 1 0 .6.4.9 1.3 1.3l.5.2c1.6.7 2.5 1.5 2.5 3.1 0 1.8-1.4 2.8-3.1 2.8z" />
  </Svg>
);

const ReduxIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M16.6 14.6c.5-1.3.4-2.6-.2-3.7.5-.1 1-.4 1.3-.8 1.1-1.2 1-3.1-.2-4.2-1.2-1.1-3.1-1-4.2.2-.6.7-.8 1.5-.7 2.3-1.2.6-2.1 1.5-2.5 2.7-.8-.3-1.7-.3-2.5.1-1.5.8-2.1 2.7-1.3 4.2.8 1.5 2.7 2.1 4.2 1.3.5-.3.9-.7 1.1-1.1.8.9 1.9 1.5 3.1 1.6.4 1.3 1.4 2.3 2.8 2.5 1.7.3 3.3-.9 3.6-2.6.3-1.7-.9-3.3-2.6-3.6-.6-.1-1.2 0-1.7.3l-.2.1zm-7.1.5c-.7.4-1.6.1-2-.6-.4-.7-.1-1.6.6-2 .3-.1.5-.2.8-.2.1 1 .5 1.9 1.2 2.6l-.6.2zm5.8 2.3c-.7-.1-1.3-.5-1.7-1 .9-.1 1.7-.5 2.3-1.1.2.2.4.3.7.3.7.1 1.4-.3 1.5-1 .1-.7-.3-1.4-1-1.5-.2 0-.4 0-.5.1.3.9.2 1.9-.3 2.7-.3.3-.6.5-1 .5zm1.5-7.8c.4.4.5 1.1.1 1.6-.2.2-.4.3-.6.4-.4-.8-1.1-1.5-1.9-1.9.1-.2.1-.5.2-.7.4-.7 1.3-.9 2-.5.1 0 .2.1.2.1z" />
  </Svg>
);

const NginxIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8v7.5L12 19.3l-6.8-3.8V8L12 4.2zm-1.2 3.3v9l1.8-1V9.7l3.4 5.8 1.5-.9-3.5-6-3.2 0z" />
  </Svg>
);

const LinuxIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12.5 2.5c-.8 0-1.6.5-2 1.3-.5 1-.4 2.3.1 4.1.2.7.1 1.2-.2 1.6-.4.5-1 .8-1.5 1.2-1.2.9-2.5 1.9-2.5 4.2 0 2.2 1.4 3.8 3.5 4.3-.2.5-.3 1-.3 1.5 0 1.3.8 2.3 2.1 2.3.7 0 1.2-.3 1.6-.7.4.4.9.7 1.6.7 1.3 0 2.1-1 2.1-2.3 0-.5-.1-1-.3-1.5 2.1-.5 3.5-2.1 3.5-4.3 0-2.3-1.3-3.3-2.5-4.2-.5-.4-1.1-.7-1.5-1.2-.3-.4-.4-.9-.2-1.6.5-1.8.6-3.1.1-4.1-.4-.8-1.2-1.3-2-1.3h-.6z" />
  </Svg>
);

const GithubIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </Svg>
);

const GenericIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      d="M8 4h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2zm1 3v2h6V7H9zm0 4v2h6v-2H9zm0 4v2h4v-2H9z"
      fillRule="evenodd"
    />
  </Svg>
);

const iconMap: Record<string, (p: IconProps) => ReactElement> = {
  React: ReactIcon,
  "Next.js": NextIcon,
  "Node.js": NodeIcon,
  TypeScript: TypeScriptIcon,
  AWS: AwsIcon,
  PostgreSQL: PostgresIcon,
  Docker: DockerIcon,
  "Docker Compose": DockerIcon,
  "Tailwind CSS": TailwindIcon,
  Git: GitIcon,
  GitHub: GithubIcon,
  "GitHub Actions": GithubIcon,
  MongoDB: MongoIcon,
  Redis: RedisIcon,
  "Express.js": ExpressIcon,
  JavaScript: JsIcon,
  Redux: ReduxIcon,
  Nginx: NginxIcon,
  Linux: LinuxIcon,
  EC2: AwsIcon,
  S3: AwsIcon,
  CloudFront: AwsIcon,
  RDS: AwsIcon,
  Route53: AwsIcon,
  "Load Balancer": AwsIcon,
  CI: GenericIcon,
  "CI/CD": GenericIcon,
  PM2: NodeIcon,
  WebSockets: GenericIcon,
  "REST APIs": GenericIcon,
  "Type-safe APIs": TypeScriptIcon,
  "Component Architecture": ReactIcon,
  "Clean Architecture": GenericIcon,
  "Repository Pattern": GenericIcon,
  "Service Layer Pattern": GenericIcon,
  "Event-Driven Systems": GenericIcon,
  "Rate Limiting": GenericIcon,
  "Scalable Auth": GenericIcon,
  "SQL & Migrations": PostgresIcon,
  "Background Jobs": GenericIcon,
  "Queue Systems": RedisIcon,
  "Notification Services": GenericIcon,
  Notifications: GenericIcon,
  "Real-time Chat": GenericIcon,
  "Queue-based Email": GenericIcon,
  Razorpay: GenericIcon,
  "Social Media APIs": GenericIcon,
  "AI Integration": GenericIcon,
  "AI-assisted Development": GenericIcon,
  Python: GenericIcon,
  "Real-time": GenericIcon,
  "Event-Driven": GenericIcon,
  CRM: GenericIcon,
  "Service Layer": GenericIcon,
  RBAC: GenericIcon,
  "AWS S3": AwsIcon,
};

const colorMap: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#334155",
  "Node.js": "#68A063",
  TypeScript: "#3178C6",
  AWS: "#FF9900",
  PostgreSQL: "#336791",
  Docker: "#2496ED",
  "Docker Compose": "#2496ED",
  "Tailwind CSS": "#38BDF8",
  Git: "#F05032",
  GitHub: "#334155",
  "GitHub Actions": "#2088FF",
  MongoDB: "#47A248",
  Redis: "#DC382D",
  "Express.js": "#334155",
  JavaScript: "#F7DF1E",
  Redux: "#764ABC",
  Nginx: "#009639",
  Linux: "#FCC624",
  EC2: "#FF9900",
  S3: "#569A31",
  CloudFront: "#FF9900",
  RDS: "#527FFF",
  Route53: "#FF9900",
  "Load Balancer": "#FF9900",
};

export function SkillIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? GenericIcon;
  const color = colorMap[name] ?? "var(--accent-tertiary)";
  return <Icon className={className} style={{ color }} />;
}

export function getSkillColor(name: string) {
  return colorMap[name] ?? "#3b82f6";
}
