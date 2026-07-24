import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "delvepro",
    title: "DelvePro — SaaS & IT Services",
    description:
      "Modern SaaS and IT services site with scalable frontend structure, SEO, and performance tuning. Deployed with Docker, Nginx reverse proxy, and CI/CD via GitHub Actions on AWS (EC2, S3, CloudFront).",
    category: "SaaS & Platform",
    tags: ["Next.js", "TypeScript", "Docker", "Nginx", "GitHub Actions", "AWS"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "Nginx", "AWS EC2", "S3", "CloudFront"],
    gradient: "from-blue-500 to-cyan-500",
    href: "https://www.delvepro.in/",
    architecture: {
      scale: "Marketing site with global CDN delivery; optimized for Core Web Vitals and SEO crawlability.",
      backendArchitecture:
        "Next.js App Router with static generation and ISR where needed; component-driven UI with shared layout primitives.",
      authFlow: "Public-facing site; admin content updates via secure internal workflows (no public user auth).",
      caching: "CloudFront edge caching for static assets; browser cache headers for images and fonts.",
      deploymentInfra:
        "AWS EC2 + S3 asset storage, CloudFront CDN, Nginx reverse proxy, Docker containers, GitHub Actions CI/CD pipeline.",
      apis: "Minimal server actions / API routes for forms and contact flows; REST-style endpoints for dynamic snippets.",
      databaseDesign: "Lightweight content model; headless-friendly structure for pages, services, and blog-ready sections.",
    },
    caseStudy: {
      problem:
        "The business needed a credible SaaS-grade web presence with fast load times, strong SEO, and a deployment pipeline that could ship updates safely.",
      architecture:
        "TypeScript-first Next.js frontend on AWS with CDN-backed static delivery, containerized builds, and Nginx terminating TLS at the edge server.",
      challenges: [
        "Balancing rich animations with Lighthouse performance scores.",
        "Setting up repeatable deployments without downtime.",
        "Structuring reusable components across service and landing pages.",
      ],
      optimization: [
        "Image optimization and route-level code splitting.",
        "CloudFront cache policies for static bundles.",
        "CI/CD checks before production promote.",
      ],
      scalability: [
        "Horizontal scaling via additional EC2 instances behind Nginx.",
        "CDN offloads global traffic from origin.",
        "Docker images versioned per release for rollbacks.",
      ],
    },
  },
  {
    slug: "telegram-analyzer",
    title: "Telegram Channel Analyzer",
    description:
      "Analytics platform with real-time dashboards and event-driven data pipelines. Python backend for extraction and reporting; React frontend for live engagement metrics.",
    category: "Analytics Platform",
    tags: ["React", "TypeScript", "Python", "Real-time", "Event-Driven"],
    stack: ["React", "TypeScript", "Python", "REST APIs", "WebSockets", "PostgreSQL"],
    gradient: "from-sky-500 to-blue-600",
    href: "https://telegramagentfrontend.vercel.app/",
    architecture: {
      scale: "Multi-channel analytics with near real-time dashboard updates for growth and engagement KPIs.",
      backendArchitecture:
        "Event-driven Python services for ingestion; React SPA consuming aggregated metrics APIs; separation of extract vs. present layers.",
      authFlow: "Session-based access to dashboards; API keys for internal data fetch jobs.",
      caching: "In-memory aggregation cache for hot metrics; Redis-ready layer for repeated channel queries.",
      deploymentInfra: "Containerized Python workers; frontend on Vercel; PostgreSQL for persisted analytics snapshots.",
      apis: "REST endpoints for channel stats, time-series engagement, and export-ready report payloads.",
      databaseDesign:
        "PostgreSQL schemas for channels, daily rollups, and engagement events; indexed time-series queries for dashboard charts.",
    },
    caseStudy: {
      problem:
        "Channel owners lacked a unified view of performance, audience growth, and content engagement across Telegram data sources.",
      architecture:
        "Pipeline architecture: ingest events → normalize in PostgreSQL → expose typed REST/WebSocket feeds → React dashboards with TypeScript models.",
      challenges: [
        "Handling bursty Telegram API rate limits during sync.",
        "Keeping dashboard queries fast on growing historical data.",
        "Aligning Python extraction schemas with frontend chart contracts.",
      ],
      optimization: [
        "Pre-aggregated daily rollups to avoid full-table scans.",
        "Pagination and date-range filters on all list endpoints.",
        "Debounced real-time UI updates to reduce render churn.",
      ],
      scalability: [
        "Background workers scale independently from the web tier.",
        "PostgreSQL partitioning strategy for time-series tables.",
        "Read replicas path for analytics-heavy reporting.",
      ],
    },
  },
  {
    slug: "onnfx",
    title: "ONNFX — Forex Trading Platform",
    description:
      "Forex platform with service-layer backend, scalable auth, rate-limited APIs, Redis caching, and WebSockets for live market updates.",
    category: "Trading Platform",
    tags: ["Next.js", "TypeScript", "Redis", "WebSockets", "MongoDB", "Docker"],
    stack: ["Next.js", "TypeScript", "Node.js", "Redis", "WebSockets", "MongoDB", "PostgreSQL", "Docker", "Nginx"],
    gradient: "from-cyan-500 to-sky-500",
    href: "https://www.onnfx.com/",
    architecture: {
      scale: "Multi-role trading platform with admin dashboards, user accounts, and live market-sensitive UI updates.",
      backendArchitecture:
        "Service-layer Node.js APIs with repository pattern; domain modules for users, trades, and admin operations; rate limiting at gateway.",
      authFlow:
        "JWT + refresh rotation; role-based access (admin, trader); protected admin routes and scoped API tokens.",
      caching: "Redis caching for session adjacency data, market snapshots, and rate-limit counters.",
      deploymentInfra:
        "Linux VPS / AWS EC2, Docker, Nginx reverse proxy, PM2 process management, environment-based config.",
      apis: "Versioned REST APIs for accounts, positions, admin CRUD; WebSocket channel for live quote ticks.",
      databaseDesign:
        "MongoDB document stores for flexible trade/user payloads; PostgreSQL for audit logs and financial reporting tables where relational integrity matters.",
    },
    caseStudy: {
      problem:
        "The product needed secure user management, responsive trading UI, and reliable delivery of near real-time market movement to clients.",
      architecture:
        "TypeScript Next.js client over Express service layer, Redis-backed caching, WebSocket fan-out for live data, and dual-database strategy (MongoDB + PostgreSQL).",
      challenges: [
        "Preventing API abuse under traffic spikes (rate limiting).",
        "Keeping WebSocket connections stable on mobile networks.",
        "Separating admin privileges from end-user trading actions.",
      ],
      optimization: [
        "Redis TTL caches for frequently requested market summaries.",
        "Indexed MongoDB queries on user and trade collections.",
        "Nginx gzip and HTTP/2 for API payload efficiency.",
      ],
      scalability: [
        "Stateless API nodes behind Nginx load balancing.",
        "Horizontal Redis for shared session and cache layers.",
        "Queue-ready architecture for async trade confirmations.",
      ],
    },
  },
  {
    slug: "mycompass-uae",
    title: "MyCompass UAE — IT Services Platform",
    description:
      "IT services platform with clean architecture, repository-pattern APIs, employee CRM workflows, and multi-tenant admin operations.",
    category: "IT Services",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Clean Architecture", "CRM"],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "Nginx", "GitHub Actions"],
    gradient: "from-blue-600 to-sky-500",
    href: "https://www.mycompassuae.com/",
    architecture: {
      scale: "B2B operations platform with admin panel, employee CRM, and workflow modules across teams.",
      backendArchitecture:
        "Clean architecture: controllers → services → repositories; feature modules for CRM, employees, and service tickets.",
      authFlow: "Role-based auth (super admin, manager, employee); permission guards on API routes and UI routes.",
      caching: "Redis for session store and frequently accessed lookup tables (departments, statuses).",
      deploymentInfra: "Docker Compose stack, Nginx, PM2/Node services, AWS EC2, GitHub Actions deploy hooks.",
      apis: "RESTful JSON APIs with validation middleware; consistent error contracts for admin SPA consumers.",
      databaseDesign:
        "PostgreSQL normalized schema for employees, clients, tickets, and assignments; foreign keys and audit columns for CRM traceability.",
    },
    caseStudy: {
      problem:
        "The company needed a single system to manage employees, client workflows, and internal IT service operations instead of scattered spreadsheets.",
      architecture:
        "TypeScript full-stack with PostgreSQL as source of truth, repository abstractions, and Redis-backed session/cache layer behind Nginx.",
      challenges: [
        "Modeling flexible CRM workflows without schema chaos.",
        "Enforcing RBAC across admin and employee portals.",
        "Keeping list views fast as ticket volume grew.",
      ],
      optimization: [
        "Composite indexes on status + assignee queries.",
        "DTO validation at API boundary to prevent bad writes.",
        "Lazy-loaded admin modules in Next.js.",
      ],
      scalability: [
        "Service-layer boundaries allow extracting CRM into microservice later.",
        "Read-heavy endpoints cacheable in Redis.",
        "Database connection pooling for concurrent admin users.",
      ],
    },
  },
  {
    slug: "bluefin-realty",
    title: "Bluefin Realty — Real Estate Platform",
    description:
      "99acres-style platform with Admin, Agent, and User panels, CRM, lead management, and service-layer APIs.",
    category: "Real Estate",
    tags: ["React", "TypeScript", "PostgreSQL", "Service Layer", "RBAC"],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "MongoDB", "Docker", "Nginx"],
    gradient: "from-sky-400 to-blue-600",
    href: "https://www.realbluefin.com/",
    architecture: {
      scale: "Three-sided marketplace: public listings, agent workflows, and admin oversight with lead pipeline tracking.",
      backendArchitecture:
        "Service layer with repositories for listings, leads, agents; event hooks on lead status changes for notifications.",
      authFlow: "Role-based auth — Admin, Agent, User; route-level guards; agents scoped to assigned listings/leads only.",
      caching: "Redis cache for featured listings and search facets; cache invalidation on listing publish.",
      deploymentInfra: "Node.js API on Linux, Nginx reverse proxy, Docker, PM2 cluster mode for API processes.",
      apis: "REST APIs for search, CRUD listings, lead capture, CRM notes; pagination on all list endpoints.",
      databaseDesign:
        "PostgreSQL for relational core (users, agents, leads, inquiries); MongoDB optional for rich property media metadata.",
    },
    caseStudy: {
      problem:
        "Real estate operations required listing management, agent coordination, and lead tracking comparable to major property portals.",
      architecture:
        "React + TypeScript SPA with Node service layer, PostgreSQL relational core, Redis caching for search, and RBAC across three portals.",
      challenges: [
        "Complex search filters without degrading query performance.",
        "Lead assignment rules across multiple agents.",
        "Preventing unauthorized access to competitor agent data.",
      ],
      optimization: [
        "Indexed search columns and denormalized facet counts.",
        "Image CDN paths for property galleries.",
        "Bulk admin actions via background jobs.",
      ],
      scalability: [
        "API tier scales horizontally; PostgreSQL vertical + read replica path.",
        "Redis shields database from repeated homepage queries.",
        "Queue-based email for lead notifications.",
      ],
    },
  },
  {
    slug: "promoads",
    title: "PromoAds — Digital Marketing Website",
    description:
      "Digital marketing site with SEO-optimized pages, reusable UI components, and cloud-ready AWS deployment.",
    category: "Marketing",
    tags: ["Next.js", "TypeScript", "AWS S3", "CloudFront", "CI/CD"],
    stack: ["Next.js", "TypeScript", "AWS S3", "CloudFront", "GitHub Actions", "PostgreSQL"],
    gradient: "from-blue-500 to-cyan-400",
    href: "https://www.promoadsreal.com/",
    architecture: {
      scale: "Campaign-focused marketing site with multiple service landing pages and SEO targets.",
      backendArchitecture: "Next.js TypeScript pages with shared layout system and content sections as composable blocks.",
      authFlow: "Public site; no end-user authentication.",
      caching: "S3 + CloudFront for static assets; ISR/SSG for page HTML where applicable.",
      deploymentInfra: "AWS S3 static hosting, CloudFront CDN, GitHub Actions CI/CD, optional EC2 for SSR routes.",
      apis: "Contact and inquiry endpoints with validation; lightweight server routes for form handling.",
      databaseDesign: "Form submissions to structured store or email queue; optional PostgreSQL for lead inbox if enabled.",
    },
    caseStudy: {
      problem: "The brand needed a fast, SEO-strong site to capture leads across multiple service lines.",
      architecture: "TypeScript Next.js deployed on AWS CDN stack with automated CI/CD and performance-first page structure.",
      challenges: [
        "Maintaining SEO across many similar service pages.",
        "Fast first paint on image-heavy marketing sections.",
      ],
      optimization: [
        "Semantic HTML and meta templates per route.",
        "CloudFront cache tuning for global visitors.",
      ],
      scalability: [
        "CDN-first architecture absorbs traffic spikes from campaigns.",
        "Component library speeds new landing page launches.",
      ],
    },
  },
  {
    slug: "tune-plus",
    title: "Tune Plus — Music Distribution Platform",
    description:
      "Distribution platform (400K+ assets, 4K+ users, 230M+ views) with queues, background jobs, scalable auth, and royalty analytics.",
    category: "Music Platform",
    tags: ["React", "TypeScript", "Redis", "Queue Systems", "MongoDB", "Notifications"],
    stack: ["React", "TypeScript", "Node.js", "Redis", "MongoDB", "PostgreSQL", "AWS S3", "Docker", "Nginx"],
    gradient: "from-cyan-500 to-blue-500",
    href: "https://tuneplus.org/",
    architecture: {
      scale: "400K+ assets, 4K+ users, 230M+ views — high-volume uploads, metadata processing, and royalty reporting.",
      backendArchitecture:
        "Layered Node.js services: upload ingestion → queue workers → distributor integrations; clean separation of API vs. worker processes.",
      authFlow:
        "Scalable auth with JWT, role tiers (artist, label, admin); email verification; session invalidation on password reset.",
      caching: "Redis for job queues, rate limits, and hot dashboard aggregates; TTL caches for royalty summary cards.",
      deploymentInfra:
        "AWS EC2, Docker, Nginx, PM2 multi-process (API + workers), S3 for media assets, GitHub Actions deployments.",
      apis: "REST APIs for releases, assets, royalties, admin moderation; webhook handlers for distributor callbacks.",
      databaseDesign:
        "MongoDB for flexible release/metadata documents; PostgreSQL reporting tables for royalty settlements and audit trails.",
    },
    caseStudy: {
      problem:
        "Artists and labels needed reliable distribution to 200+ platforms with tracking for uploads, royalties, and rights metadata at scale.",
      architecture:
        "Event-driven workers on Redis queues, TypeScript/React admin UX, MongoDB primary store, PostgreSQL for financial-grade reporting, S3 media pipeline.",
      challenges: [
        "Processing large audio uploads without blocking API threads.",
        "Accurate royalty aggregation across millions of stream events.",
        "Notification storms during bulk release windows.",
      ],
      optimization: [
        "Background jobs for transcode, metadata validation, and distributor push.",
        "Queue-based email instead of synchronous SMTP in request path.",
        "Indexed queries and pagination on all admin tables.",
      ],
      scalability: [
        "Worker pool scales independently from API tier.",
        "S3 + CDN for asset delivery; DB read patterns optimized per workload.",
        "Rate limiting protects ingestion endpoints during peak uploads.",
      ],
    },
  },
  {
    slug: "imergey",
    title: "Imergey — Social Media Management Platform",
    description:
      "LinkedIn management with Redis queues, WebSockets, background publishing, team collaboration, and queue-based email alerts.",
    category: "Social Media",
    tags: ["React", "TypeScript", "Redis", "WebSockets", "PostgreSQL", "Event-Driven"],
    stack: ["React", "TypeScript", "Node.js", "Redis", "WebSockets", "PostgreSQL", "MongoDB", "Docker", "Nginx"],
    gradient: "from-sky-500 to-cyan-500",
    href: "http://103.189.173.7:2367/",
    architecture: {
      scale: "Team workspaces scheduling posts, analytics, and AI-assisted research for LinkedIn-focused campaigns.",
      backendArchitecture:
        "Event-driven Node services: scheduler → queue → publisher worker; WebSocket gateway for live dashboard updates.",
      authFlow: "Organization/workspace RBAC; OAuth-linked LinkedIn accounts; API tokens scoped per workspace.",
      caching: "Redis for schedule queues, deduplication locks, and real-time presence; short TTL on analytics snapshots.",
      deploymentInfra: "Dockerized services, Nginx reverse proxy, Linux host, PM2, environment secrets for social API keys.",
      apis: "REST for posts, calendars, analytics; WebSocket for live feed; internal worker APIs for publish pipeline.",
      databaseDesign:
        "PostgreSQL for users, workspaces, schedules, and permissions; MongoDB for flexible post draft payloads and AI insight blobs.",
    },
    caseStudy: {
      problem:
        "Marketing teams needed centralized LinkedIn scheduling, analytics, and collaboration without manual posting overhead.",
      architecture:
        "TypeScript React app with Redis-backed job queues, WebSocket real-time UI, PostgreSQL relational core, and event-driven publish workers.",
      challenges: [
        "LinkedIn API rate limits and token refresh handling.",
        "Reliable scheduled publish despite server restarts.",
        "Real-time dashboard sync across multiple team members.",
      ],
      optimization: [
        "Idempotent job IDs prevent duplicate publishes.",
        "WebSocket rooms per workspace reduce broadcast noise.",
        "Queue-based email digests instead of per-event SMTP.",
      ],
      scalability: [
        "Publisher workers scale horizontally with shared Redis queue.",
        "PostgreSQL indexes on schedule_time + workspace_id.",
        "Notification service decoupled from HTTP request cycle.",
      ],
    },
  },
  {
    slug: "rajat-ganga-jewellery",
    title: "Rajat Ganga Jewellery — E-Commerce",
    description:
      "Jewellery e-commerce with catalog management, inquiry workflows, secure admin APIs, Docker, and Nginx production stack.",
    category: "E-Commerce",
    tags: ["Next.js", "TypeScript", "Docker", "Nginx", "MongoDB", "Rate Limiting"],
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Docker", "Nginx", "Redis"],
    gradient: "from-blue-600 to-cyan-500",
    href: "https://www.rajatgangajewelsstudio.com/",
    architecture: {
      scale: "Product catalog, collections, and inquiry-driven sales funnel for a premium jewellery brand.",
      backendArchitecture:
        "Next.js TypeScript app with API routes for catalog and inquiries; admin module for collections and inventory flags.",
      authFlow: "Admin-only JWT auth for CMS; public catalog requires no login; rate-limited inquiry endpoints.",
      caching: "CDN + browser caching for product imagery; Redis optional for inquiry throttling counters.",
      deploymentInfra: "Docker containers, Nginx reverse proxy, TLS termination, PM2/Node, Linux VPS deployment.",
      apis: "REST APIs for products, collections, inquiries; admin CRUD with validation middleware.",
      databaseDesign:
        "MongoDB for catalog documents and collection groupings; PostgreSQL path for order/inquiry CRM if extended.",
    },
    caseStudy: {
      problem:
        "The brand needed a premium digital showroom with fast catalog browsing and reliable inquiry capture for high-value items.",
      architecture:
        "TypeScript Next.js storefront with secure admin APIs, MongoDB catalog store, Dockerized deployment behind Nginx with rate limiting.",
      challenges: [
        "High-resolution imagery vs. mobile performance.",
        "Spam inquiry protection on public forms.",
        "Admin UX for non-technical staff updating collections.",
      ],
      optimization: [
        "Responsive images and lazy loading on catalog grids.",
        "Rate limiting + honeypot on inquiry API.",
        "Reusable collection components for seasonal launches.",
      ],
      scalability: [
        "Static/ISR pages for catalog SEO at scale.",
        "Horizontal API scaling behind Nginx.",
        "Asset offload to object storage as catalog grows.",
      ],
    },
  },
  {
    slug: "rtde",
    title: "RTDE — Rajasthan Tourism & Development",
    description:
      "Tourism platform for Rajasthan covering tours, trips, events, ticketing, and end-to-end management — built for travelers, operators, and admins.",
    category: "Tourism Platform",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Nginx",
      "AWS",
    ],
    gradient: "from-sky-500 to-blue-600",
    href: "#projects",
    architecture: {
      scale:
        "Statewide tourism platform for destinations, packaged tours, trips, cultural events, ticket sales, and operator/admin management.",
      backendArchitecture:
        "Service-layer Node.js APIs with modules for tours, trips, events, bookings, payments, and admin operations; Next.js TypeScript frontend for travelers and dashboards.",
      authFlow:
        "Role-based auth for travelers, tour operators, event organizers, and admins; JWT + refresh tokens with permission-guarded booking and management routes.",
      caching:
        "Redis for session data, popular tour/event listings, seat/ticket availability snapshots, and rate-limit counters on booking APIs.",
      deploymentInfra:
        "Dockerized services behind Nginx, CI/CD deployments, AWS-ready hosting (EC2/S3/CloudFront) for media and static assets.",
      apis:
        "REST APIs for catalog (tours/trips/events), inventory & ticketing, bookings, payments callbacks, and admin CRM/management endpoints.",
      databaseDesign:
        "PostgreSQL for bookings, tickets, payments, and relational inventory; MongoDB for flexible destination/tour content and media metadata.",
    },
    caseStudy: {
      problem:
        "Rajasthan needed a unified digital platform to showcase tourism offerings, sell tickets for tours/trips/events, and give operators a single place to manage inventory, schedules, and bookings.",
      architecture:
        "TypeScript full-stack: Next.js traveler & admin UIs over service-layer APIs, Redis-backed availability caching, dual-database design for bookings vs content, containerized deployment.",
      challenges: [
        "Handling concurrent ticket inventory without overselling seats.",
        "Modeling diverse products — day tours, multi-day trips, and timed events — in one booking flow.",
        "Building operator/admin tools for schedules, pricing, and booking management.",
      ],
      optimization: [
        "Pre-cached availability windows for hot events and popular tours.",
        "Indexed booking queries by date, destination, and operator.",
        "CDN-ready media delivery for destination and event imagery.",
      ],
      scalability: [
        "Horizontal API scaling behind Nginx for peak festival/ticket rushes.",
        "Queue-ready path for booking confirmations and email/SMS notifications.",
        "Modular services allow splitting ticketing and catalog into dedicated workers later.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectSlugs = projects.map((p) => p.slug);
