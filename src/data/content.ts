export const siteConfig = {
  name: "Sumit Beniwal",
  role: "Senior Software Developer & Team Lead",
  tagline:
    "Leading teams to ship scalable MERN & Next.js products — clean architecture, event-driven backends, DevOps, and cloud on AWS.",
  profile:
    "Senior Software Developer and Team Lead with hands-on experience building scalable web applications, REST APIs, and production backend systems. Strong expertise in JavaScript, TypeScript, React, Next.js, Node.js, Express, and MongoDB — with clean architecture, repository & service-layer patterns, Redis, WebSockets, queues, and event-driven design. Experienced shipping notification services, real-time chat, queue-based email, and scalable auth. DevOps across Docker, Docker Compose, Nginx, CI/CD, GitHub Actions, AWS (EC2, S3, CloudFront, RDS, Route53, load balancers), Linux, and PM2.",
  location: "Rohtak, India",
  email: "",
  availability: "Open to senior roles, consulting & technical leadership",
  social: {
    linkedin: "https://www.linkedin.com/in/sumit-beniwal-7b25462b0/",
    github: "",
    twitter: "",
  },
  resume: {
    href: "/sumit_resume%20(2).pdf",
    downloadName: "Sumit_Beniwal_Resume.pdf",
  },
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "9+", label: "Production Apps" },
  { value: "400K+", label: "Assets Handled" },
  { value: "4K+", label: "Platform Users" },
  { value: "230M+", label: "Views Delivered" },
];

export const aboutHighlights = [
  {
    title: "Backend & System Design",
    text: "Clean architecture, repository & service-layer patterns, event-driven systems, rate limiting, Redis queues, WebSockets, and background jobs.",
  },
  {
    title: "DevOps & Cloud (AWS)",
    text: "Docker, Docker Compose, Nginx, CI/CD, GitHub Actions, EC2, S3, CloudFront, RDS, Route53, load balancers, Linux, and PM2.",
  },
  {
    title: "Team Lead & Production Systems",
    text: "Leading squads to ship notification services, real-time chat, queue-based email, scalable auth, MERN/Next.js apps, and AI integrations.",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Redux",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend & Architecture",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "REST APIs",
      "Clean Architecture",
      "Repository Pattern",
      "Service Layer Pattern",
      "Scalable Backend Structure",
      "Event-Driven Systems",
      "Rate Limiting",
      "Scalable Auth",
    ],
  },
  {
    category: "Real-time, Queues & Systems",
    items: [
      "Redis",
      "WebSockets",
      "Background Jobs",
      "Queue Systems",
      "Notification Services",
      "Real-time Chat",
      "Queue-based Email",
    ],
  },
  {
    category: "DevOps & Cloud (AWS)",
    items: [
      "Docker",
      "Docker Compose",
      "Nginx",
      "CI/CD",
      "GitHub Actions",
      "Linux",
      "PM2",
      "EC2",
      "S3",
      "CloudFront",
      "RDS",
      "Route53",
      "Load Balancer",
    ],
  },
  {
    category: "Tools & Integrations",
    items: [
      "Git",
      "GitHub",
      "Razorpay",
      "Social Media APIs",
      "AI Integration",
      "AI-assisted Development",
    ],
  },
];

export const experience = [
  {
    period: "Present",
    title: "Senior Software Developer / Team Lead",
    company: "Delve Professionals LLC",
    description:
      "Leading engineering delivery with clean architecture, repository & service-layer patterns, and event-driven backends. Owning Redis queues, WebSockets, background jobs, rate limiting, and systems such as notifications, real-time chat, and scalable auth. AWS (EC2, S3, CloudFront, RDS, Route53), Docker, Docker Compose, Nginx, CI/CD via GitHub Actions, Linux, and PM2.",
  },
  {
    period: "May 2025 — Feb 2026",
    title: "MERN Stack Developer",
    company: "Inventcolab Pvt Ltd, Jaipur",
    description:
      "Built scalable MERN & Next.js apps with service-layer APIs, Redis caching, queue-based tasks, and Dockerized deployments. Feature delivery, performance tuning, and production bug fixes.",
  },
  {
    period: "Sep 2024 — Mar 2025",
    title: "Junior MERN Developer",
    company: "Ebizneeds Solution Pvt Ltd, Jaipur",
    description:
      "Shipped production apps with React, Node.js, Express & MongoDB. REST APIs, auth flows, GitHub Actions CI/CD basics, and Linux/Nginx deployments.",
  },
  {
    period: "6 Months",
    title: "Trainee",
    company: "Qspider, Gurugram",
    description:
      "Training in Web Development, Java, SQL, and automation fundamentals.",
  },
];

export const education = [
  {
    period: "2022 — 2024",
    degree: "Masters in Computer Science",
    institution: "Maharishi Dayanand University, Rohtak",
  },
  {
    period: "2019 — 2021",
    degree: "Bachelor of Computer Science",
    institution: "Maharishi Dayanand University, Rohtak",
  },
];

export const projects = [
  {
    title: "DelvePro — SaaS & IT Services",
    description:
      "Modern SaaS and IT services site with scalable frontend structure, SEO, and performance tuning. Deployed with Docker, Nginx reverse proxy, and CI/CD via GitHub Actions on AWS (EC2, S3, CloudFront).",
    tags: ["Next.js", "Docker", "Nginx", "GitHub Actions", "AWS", "SEO"],
    gradient: "from-indigo-500 to-violet-500",
    href: "https://www.delvepro.in/",
  },
  {
    title: "Telegram Channel Analyzer",
    description:
      "Analytics platform with real-time dashboards and event-driven data pipelines. Python backend for extraction and reporting; React frontend for live engagement metrics, growth insights, and visualization.",
    tags: ["React", "Python", "Real-time", "Event-Driven", "Analytics"],
    gradient: "from-sky-500 to-cyan-500",
    href: "https://telegramagentfrontend.vercel.app/",
  },
  {
    title: "ONNFX — Forex Trading Platform",
    description:
      "Forex platform with service-layer backend, scalable auth, rate-limited APIs, Redis caching, and WebSockets for live market updates. MongoDB for trade data; deployed on Linux with PM2, Nginx, and Docker.",
    tags: ["Next.js", "Redis", "WebSockets", "Scalable Auth", "Rate Limiting", "Docker"],
    gradient: "from-emerald-500 to-teal-500",
    href: "https://www.onnfx.com/",
  },
  {
    title: "MyCompass UAE — IT Services Platform",
    description:
      "IT services platform with clean architecture, repository-pattern APIs, and employee CRM workflows. Admin panel, role-based access, and scalable backend structure for multi-tenant operations.",
    tags: ["Next.js", "Clean Architecture", "Repository Pattern", "CRM", "MongoDB"],
    gradient: "from-blue-500 to-indigo-500",
    href: "https://www.mycompassuae.com/",
  },
  {
    title: "Bluefin Realty — Real Estate Platform",
    description:
      "99acres-style real-estate platform with Admin, Agent, and User panels. CRM modules, lead management, scalable auth, and service-layer APIs for listings, inquiries, and role-based workflows.",
    tags: ["React", "Node.js", "Service Layer", "Scalable Auth", "CRM", "MongoDB"],
    gradient: "from-cyan-500 to-blue-600",
    href: "https://www.realbluefin.com/",
  },
  {
    title: "PromoAds — Digital Marketing Website",
    description:
      "Digital marketing site with SEO-optimized pages, reusable UI components, and cloud-ready deployment. Performance-focused frontend with scalable structure for campaigns and service pages.",
    tags: ["Next.js", "SEO", "AWS S3", "CloudFront", "CI/CD"],
    gradient: "from-orange-500 to-pink-500",
    href: "https://www.promoadsreal.com/",
  },
  {
    title: "Tune Plus — Music Distribution Platform",
    description:
      "Full-stack distribution platform (400K+ assets, 4K+ users, 230M+ views) with clean architecture, Redis queues, background jobs, queue-based email for release updates, scalable auth, in-app notifications, and royalty analytics at scale.",
    tags: [
      "React",
      "Redis",
      "Queue Systems",
      "Background Jobs",
      "Queue-based Email",
      "Notifications",
    ],
    gradient: "from-violet-500 to-fuchsia-500",
    href: "https://tuneplus.org/",
  },
  {
    title: "Imergey — Social Media Management Platform",
    description:
      "LinkedIn management with Redis-backed job queues, background publishing, real-time dashboards via WebSockets, team chat for collaboration, queue-based email alerts, API integrations, AI insights, and role-based access.",
    tags: [
      "React",
      "Redis",
      "WebSockets",
      "Real-time Chat",
      "Queue-based Email",
      "Event-Driven",
    ],
    gradient: "from-cyan-500 to-blue-500",
    href: "http://103.189.173.7:2367/",
  },
  {
    title: "Rajat Ganga Jewellery — E-Commerce",
    description:
      "Jewellery e-commerce with catalog management, inquiry workflows, secure admin APIs, and production stack — Docker, Nginx, rate-limited public endpoints, and MongoDB-backed content management.",
    tags: ["Next.js", "Node.js", "Docker", "Nginx", "Rate Limiting", "E-Commerce"],
    gradient: "from-amber-500 to-rose-500",
    href: "https://www.rajatgangajewelsstudio.com/",
  },
];

export const marqueeTech = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Redis",
  "WebSockets",
  "Clean Architecture",
  "Docker",
  "GitHub Actions",
  "AWS EC2",
  "S3",
  "CloudFront",
  "Nginx",
  "CI/CD",
  "TypeScript",
  "Event-Driven",
];
