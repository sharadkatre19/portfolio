import { PortfolioItem } from '../types';

interface ProjectGridProps {
  projects: PortfolioItem[];
  loading: boolean;
}

export default function ProjectGrid({ projects, loading }: ProjectGridProps) {
  if (loading) return <div>Loading projects...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <div key={project.id} className="border rounded-lg overflow-hidden">
          <img 
            src={project.imageUrl || '/placeholder-project.jpg'} 
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
