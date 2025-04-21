import { Box, Typography, Chip, Container, Tooltip, Fade, useTheme } from '@mui/material';
import { useState } from 'react';
// Import icons for each skill
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import LanguageIcon from '@mui/icons-material/Language';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

export default function SkillsSection() {
  const theme = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Map each skill to an appropriate icon and description
  const skillsData = [
    { 
      name: 'React', 
      icon: <CodeIcon />, 
      description: 'Building interactive UIs with React and its ecosystem',
      color: '#61dafb'
    },
    { 
      name: 'TypeScript', 
      icon: <CodeIcon />, 
      description: 'Type-safe JavaScript development with advanced features',
      color: '#3178c6'
    },
    { 
      name: 'Node.js', 
      icon: <StorageIcon />, 
      description: 'Server-side JavaScript runtime for building scalable applications',
      color: '#68a063'
    },
    { 
      name: 'Firebase', 
      icon: <CloudIcon />, 
      description: 'Google\'s platform for building web and mobile applications',
      color: '#ffca28'
    },
    { 
      name: 'GraphQL', 
      icon: <LanguageIcon />, 
      description: 'Query language for APIs and runtime for executing those queries',
      color: '#e535ab'
    },
    { 
      name: 'Docker', 
      icon: <DeveloperBoardIcon />, 
      description: 'Platform for developing, shipping, and running applications in containers',
      color: '#2496ed'
    }
  ];

  return (
    <Container>
      <Box 
        component="section"
        sx={{ 
          my: 8,
          position: 'relative'
        }}
      >
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 700,
            mb: 4,
            position: 'relative',
            display: 'inline-block',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '60px',
              height: '4px',
              backgroundColor: theme.palette.primary.main,
              borderRadius: '2px'
            }
          }}
        >
          Technical Skills
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 2,
          mt: 6
        }}>
          {skillsData.map((skill) => (
            <Tooltip
              key={skill.name}
              title={skill.description}
              placement="top"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              arrow
            >
              <Chip
                icon={skill.icon}
                label={skill.name}
                onClick={() => console.log(`${skill.name} clicked`)}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                sx={{ 
                  px: 1,
                  py: 2.5,
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderColor: hoveredSkill === skill.name ? skill.color : undefined,
                  backgroundColor: hoveredSkill === skill.name ? `${skill.color}1A` : undefined, // 10% opacity version of the color
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                  },
                  cursor: 'pointer'
                }}
              />
            </Tooltip>
          ))}
        </Box>

        {/* Optional Skill Description Section */}
        <Box sx={{ mt: 4, height: '60px', transition: 'all 0.3s ease' }}>
          {hoveredSkill && skillsData.find(s => s.name === hoveredSkill) && (
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {skillsData.find(s => s.name === hoveredSkill).description}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}