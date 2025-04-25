import { useEffect, useState, useRef } from 'react';
import { getPortfolioItems } from '../services/firestoreService';
import { PortfolioItem } from '../types';
import HeroSection from '../components/HeroSection';
import ProjectGrid from '../components/ProjectGrid';
import SkillsSection from '../components/SkillsSection';
import Testimonials from '../components/Testimonials';
import { Container, Typography, Box } from '@mui/material';
import { sampleProjects } from '../static/data';
import Footer from '../components/Footer';

export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Create refs for scrolling to sections
  const projectsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getPortfolioItems()
      .then((projects: any[]) => {
        if(projects && projects.length > 0) {
            setFeaturedProjects(projects || []);
            setLoading(false);
        } else {
            setFeaturedProjects(sampleProjects || []);
            setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching portfolio items:", error);
        setFeaturedProjects(sampleProjects || []);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Hero Section with navigation handlers */}
      <HeroSection />
      <SkillsSection />

      {/* Featured Projects */}
      <div ref={projectsRef}>
        <Container maxWidth="lg">
          <Box sx={{ my: 6, pt: 2 }}>
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{ 
                fontWeight: 700,
                mb: 1,
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '60px',
                  height: '4px',
                  backgroundColor: 'primary.main',
                  borderRadius: '2px'
                }
              }}
            >
              My Projects
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px' }}>
              Here's a selection of my recent work. Each project demonstrates different skills and technologies.
            </Typography>
            
            <ProjectGrid 
              projects={featuredProjects.length > 0 ? featuredProjects : sampleProjects} 
              loading={loading} 
            />
          </Box>
        </Container>
      </div>

      {/* Testimonials */}
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>

      <Footer />
    </>
  );
}