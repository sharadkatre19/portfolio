import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  Breadcrumbs,
  Link,
  CircularProgress,
  useTheme,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { PortfolioItem } from '../types';
import { Link as RouterLink } from 'react-router-dom';
import { sampleProjects } from '../static/data';

// You'd need to implement this function to fetch the project by ID
// This is just a placeholder
const fetchProjectById = async (id: string): Promise<PortfolioItem | null> => {
  // Replace with your actual API call or data fetching logic
  return sampleProjects.find((project) => project.id === id) || null;
};

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const [project, setProject] = useState<PortfolioItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProject = async () => {
      if (!projectId) {
        setError('Project ID is missing');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const projectData = await fetchProjectById(projectId);
        
        if (!projectData) {
          setError('Project not found');
        } else {
          setProject(projectData);
        }
      } catch (err) {
        setError('Failed to load project details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProject();
  }, [projectId]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error || !project) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <Typography variant="h5" gutterBottom>
            {error || 'Project not found'}
          </Typography>
          <Button
            startIcon={<ArrowBackIcon />}
            variant="contained"
            onClick={handleBack}
            sx={{ mt: 2 }}
          >
            Back to Projects
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Breadcrumb navigation */}
      <Breadcrumbs sx={{ mb: 4 }}>
        <Link component={RouterLink} to="/" underline="hover" color="inherit">
          Home
        </Link>
        <Link component={RouterLink} to="/projects" underline="hover" color="inherit">
          Projects
        </Link>
        <Typography color="text.primary">{project.title}</Typography>
      </Breadcrumbs>

      {/* Back button */}
      <Button
        startIcon={<ArrowBackIcon />}
        variant="outlined"
        onClick={handleBack}
        sx={{ mb: 4 }}
      >
        Back to Projects
      </Button>

      <Grid container spacing={4}>
        {/* Project image */}
        <Grid>
          <Box
            sx={{
              width: '100%',
              height: { xs: 250, md: 400 },
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
            }}
          >
            <img
              src={project.imageUrl || '/placeholder-project.jpg'}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>

        {/* Project details */}
        <Grid>
          <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              {project.title}
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              {project.githubUrl && (
                <Button
                  startIcon={<GitHubIcon />}
                  variant="outlined"
                  component="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </Button>
              )}

              {project.liveUrl && (
                <Button
                  startIcon={<LaunchIcon />}
                  variant="contained"
                  component="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Button>
              )}
            </Box>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Project Overview
            </Typography>

            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              {project.description}
            </Typography>

            {project.features && project.features.length > 0 && (
              <>
                <Typography variant="h6" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                  Key Features
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <ul style={{ paddingLeft: '1.5rem', marginTop: 0 }}>
                    {project.features.map((feature, index) => (
                      <li key={index}>
                        <Typography variant="body1" paragraph>
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </>
            )}

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Technologies Used
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {project.technologies?.map((tech, index) => (
                <Chip key={index} label={tech} sx={{ fontWeight: 500 }} />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}