import { Button, Typography, Box, Container, useTheme, Fade, useMediaQuery } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import { useState, useEffect } from 'react';

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "I build performant web applications with modern technologies";
  
  // Animation for entrance
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Typing animation effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  return (
    <Container maxWidth="lg">
      <Box 
        component="section"
        sx={{
          minHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          py: 4
        }}
      >
        {/* Background decorative element */}
        <Box 
          sx={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.primary.light}22, transparent 70%)`,
            zIndex: -1,
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        
        <Fade in={isVisible} timeout={1000}>
          <Box>
            {/* Small headline above main title */}
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: theme.palette.primary.main,
                mb: 1,
                fontWeight: 500,
                letterSpacing: 1.2,
                textTransform: 'uppercase'
              }}
            >
              Hello, I'm a
            </Typography>
            
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '3rem', sm: '3.5rem', md: '4.5rem' },
                mb: 2,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '0px 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              Full Stack Developer
            </Typography>
            
            <Box 
              sx={{ 
                position: 'relative',
                height: isMobile ? '3.5rem' : '3rem',
                mb: 6
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  maxWidth: '40rem',
                  position: 'relative',
                  borderRight: typedText.length < fullText.length ? '2px solid' : 'none',
                  animation: typedText.length < fullText.length ? 'blink 1s step-end infinite' : 'none'
                }}
              >
                {typedText}
              </Typography>
            </Box>
            
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 3,
                flexDirection: isMobile ? 'column' : 'row'
              }}
            >
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                startIcon={<VisibilityIcon />}
                sx={{
                  py: 1.5,
                  px: 3,
                  borderRadius: '30px',
                  boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 6px 20px rgba(0,118,255,0.45)'
                  }
                }}
              >
                View Projects
              </Button>
              <Button 
                variant="outlined" 
                color="primary" 
                size="large"
                startIcon={<EmailIcon />}
                sx={{
                  py: 1.5,
                  px: 3,
                  borderRadius: '30px',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderWidth: '2px',
                    backgroundColor: `${theme.palette.primary.main}10`
                  }
                }}
              >
                Contact Me
              </Button>
            </Box>
            
            {/* Social proof or expertise indicators */}
            <Box sx={{ mt: 8, display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span" sx={{ 
                  width: 8, 
                  height: 8, 
                  borderRadius: '50%', 
                  backgroundColor: theme.palette.success.main,
                  display: 'inline-block'
                }} />
                Available for new projects
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Box>
      
      {/* Add CSS keyframes for animations */}
      <style jsx global>{`
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: currentColor }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) }
          50% { transform: translateY(-20px) }
          100% { transform: translateY(0px) }
        }
      `}</style>
    </Container>
  );
}