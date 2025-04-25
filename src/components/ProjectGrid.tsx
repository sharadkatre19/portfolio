import { useState } from 'react';
import { 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  CardActions, 
  Button,
  Chip,
  Box,
  Fade,
  IconButton,
  Tooltip,
  useTheme,
} from '@mui/material';
import { PortfolioItem } from '../types';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import { Link as RouterLink } from 'react-router-dom';

interface ProjectGridProps {
  projects: PortfolioItem[];
  loading: boolean;
}

export default function ProjectGrid({ projects, loading }: ProjectGridProps) {
  const theme = useTheme();
  const [isHovering, setIsHovering] = useState<string | null>(null);
  
  return (
    <>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid sx={{ 
            width: {
              md: '30%'
            },
            padding: 1.5 // This replaces the spacing from the Grid container
          }} key={project.id}>
            <Fade in={true} timeout={500} style={{ transitionDelay: `${projects.indexOf(project) * 100}ms` }}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.12)'
                  },
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px'
                }}
                onMouseEnter={() => setIsHovering(project?.id || null)}
                onMouseLeave={() => setIsHovering(null)}
                elevation={3}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.imageUrl || '/placeholder-project.jpg'}
                  alt={project.title}
                  sx={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                
                {/* Overlay that appears on hover */}
                <Box 
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '200px',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: isHovering === project.id ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    gap: 2
                  }}
                >
                  {project.githubUrl && (
                    <Tooltip title="View Source Code">
                      <IconButton 
                        color="primary" 
                        aria-label="github" 
                        component="a" 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          backgroundColor: 'white',
                          '&:hover': { backgroundColor: 'rgba(255,255,255,0.8)' }
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  
                  {project.liveUrl && (
                    <Tooltip title="View Live Demo">
                      <IconButton 
                        color="primary" 
                        aria-label="live demo" 
                        component="a" 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          backgroundColor: 'white',
                          '&:hover': { backgroundColor: 'rgba(255,255,255,0.8)' }
                        }}
                      >
                        <LaunchIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  
                  <Tooltip title="View Details">
                    <IconButton 
                      color="primary" 
                      aria-label="view details" 
                      component={RouterLink}
                      to={`/projects/${project.id}`}
                      sx={{ 
                        backgroundColor: 'white',
                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.8)' }
                      }}
                    >
                      <CodeIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
                
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description?.substring(0, 120)}{project.description?.length > 120 ? '...' : ''}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 'auto' }}>
                    {project.technologies?.slice(0, 3).map((tech, index) => (
                      <Chip 
                        key={index} 
                        label={tech} 
                        size="small" 
                        sx={{ 
                          fontSize: '0.7rem', 
                          height: '24px'
                        }} 
                      />
                    ))}
                    {project.technologies?.length > 3 && (
                      <Chip 
                        label={`+${project.technologies.length - 3}`} 
                        size="small"
                        sx={{ 
                          fontSize: '0.7rem', 
                          height: '24px',
                          backgroundColor: theme.palette.grey[200]
                        }} 
                      />
                    )}
                  </Box>
                </CardContent>
                
                <CardActions sx={{ padding: 2, paddingTop: 0 }}>
                  <Button 
                    size="small" 
                    component={RouterLink}
                    to={`/projects/${project.id}`}
                    sx={{
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: `${theme.palette.primary.main}20`
                      }
                    }}
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
      
      {/* Empty state if no projects */}
      {projects.length === 0 && !loading && (
        <Box 
          sx={{ 
            textAlign: 'center', 
            py: 10, 
            px: 2,
            backgroundColor: theme.palette.grey[100],
            borderRadius: 2
          }}
        >
          <Typography variant="h6" gutterBottom>
            No projects found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Try adjusting your filters or check back later for new projects.
          </Typography>
        </Box>
      )}
    </>
  );
}