import { useEffect, useState } from 'react';
import { getPortfolioItems } from '../services/firestoreService';
import { PortfolioItem } from '../types';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import SkillsSection from '../components/SkillsSection';
import Testimonials from '../components/Testimonials';

export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPortfolioItems()
      .then((projects: any[]) => {
        if(projects && projects.length > 0) {
            setFeaturedProjects(projects || []); // Show 4 featured projects
            setLoading(false);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <main className="container mx-auto px-4">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Projects */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
        <ProjectGrid projects={featuredProjects} loading={loading} />
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
}
