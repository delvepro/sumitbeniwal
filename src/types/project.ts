export interface ProjectArchitecture {
  scale: string;
  backendArchitecture: string;
  authFlow: string;
  caching: string;
  deploymentInfra: string;
  apis: string;
  databaseDesign: string;
}

export interface ProjectCaseStudy {
  problem: string;
  architecture: string;
  challenges: string[];
  optimization: string[];
  scalability: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  stack: string[];
  gradient: string;
  href: string;
  architecture: ProjectArchitecture;
  caseStudy: ProjectCaseStudy;
}
