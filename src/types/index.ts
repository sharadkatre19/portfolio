export interface PortfolioItem {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    liveUrl?: string;
    sourceCodeUrl?: string;
    featured?: boolean;
    createdAt?: Date;
    githubUrl?: string;
    features?: string[];
  }
  