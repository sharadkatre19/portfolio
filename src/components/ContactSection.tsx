import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  Paper,
  IconButton,
  Snackbar,
  Alert,
  Tooltip,
  Fade,
  CircularProgress
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import DescriptionIcon from '@mui/icons-material/Description';
import SendIcon from '@mui/icons-material/Send';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });
  const [submitting, setSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setSubmitting(true);
      
      try {
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Here you would normally send the form data to your backend
        console.log('Form submitted:', formData);
        
        // Show success message
        setSnackbar({
          open: true,
          message: 'Message sent successfully! I\'ll get back to you soon.',
          severity: 'success'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        setSnackbar({
          open: true,
          message: 'There was an error sending your message. Please try again.',
          severity: 'error'
        });
      } finally {
        setSubmitting(false);
      }
    } else {
      setSnackbar({
        open: true,
        message: 'Please fix the errors in the form.',
        severity: 'error'
      });
    }
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const handleDownloadResume = () => {
    // In a real implementation, this would point to your actual resume file
    const resumeUrl = '/path-to-your-resume.pdf';
    
    // Create a temporary anchor element to download the file
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'YourName-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setSnackbar({
      open: true,
      message: 'Resume download started!',
      severity: 'success'
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
        Get In Touch
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 6, maxWidth: '800px' }}>
        Have a project in mind or want to discuss work opportunities? Feel free to reach out!
      </Typography>
      
      {/* Contact Content - Using sx flexbox styling */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4
      }}>
        {/* Contact Info */}
        <Box sx={{ 
          flexBasis: { xs: '100%', md: '40%' },
          flexShrink: 0
        }}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              height: '100%',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6
              }
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact Information
            </Typography>
            
            <Box sx={{ mt: 4 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateX(5px)'
                }
              }}>
                <EmailIcon color="primary" sx={{ mr: 2 }} />
                <Typography>
                  email@example.com
                </Typography>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateX(5px)'
                }
              }}>
                <PhoneIcon color="primary" sx={{ mr: 2 }} />
                <Typography>
                  +1 (123) 456-7890
                </Typography>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateX(5px)'
                }
              }}>
                <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                <Typography>
                  San Francisco, CA
                </Typography>
              </Box>
            </Box>
            
            {/* Resume Download */}
            <Box sx={{ 
              mt: 4, 
              p: 2, 
              border: '1px dashed', 
              borderColor: 'primary.light',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(33, 150, 243, 0.05)',
                borderColor: 'primary.main'
              }
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <DescriptionIcon color="primary" sx={{ mr: 2 }} />
                <Typography>
                  Want to see my resume?
                </Typography>
              </Box>
              <Button 
                variant="outlined" 
                size="small"
                onClick={handleDownloadResume}
                startIcon={<DescriptionIcon />}
              >
                Download CV
              </Button>
            </Box>
            
            {/* Social Media Icons */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Connect with me on social media:
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Tooltip title="LinkedIn Profile" arrow placement="top">
                  <IconButton 
                    color="primary" 
                    aria-label="LinkedIn" 
                    component="a" 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank"
                    sx={{
                      transition: 'transform 0.2s, background-color 0.2s',
                      '&:hover': {
                        backgroundColor: 'rgba(33, 150, 243, 0.1)',
                        transform: 'translateY(-3px)'
                      }
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
                
                <Tooltip title="GitHub Profile" arrow placement="top">
                  <IconButton 
                    color="primary" 
                    aria-label="GitHub" 
                    component="a" 
                    href="https://github.com/yourusername" 
                    target="_blank"
                    sx={{
                      transition: 'transform 0.2s, background-color 0.2s',
                      '&:hover': {
                        backgroundColor: 'rgba(33, 150, 243, 0.1)',
                        transform: 'translateY(-3px)'
                      }
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
                
                <Tooltip title="Twitter Profile" arrow placement="top">
                  <IconButton 
                    color="primary" 
                    aria-label="Twitter" 
                    component="a" 
                    href="https://twitter.com/yourhandle" 
                    target="_blank"
                    sx={{
                      transition: 'transform 0.2s, background-color 0.2s',
                      '&:hover': {
                        backgroundColor: 'rgba(33, 150, 243, 0.1)',
                        transform: 'translateY(-3px)'
                      }
                    }}
                  >
                    <TwitterIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Paper>
        </Box>
        
        {/* Contact Form */}
        <Box sx={{ 
          flexGrow: 1,
          flexBasis: { xs: '100%', md: '60%' },
        }}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4,
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6
              }
            }}
          >
            <form onSubmit={handleSubmit}>
              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    display: 'block', 
                    mb: 0.5, 
                    fontWeight: 500,
                    color: focusedField === 'name' ? 'primary.main' : 'text.secondary',
                    transition: 'color 0.2s'
                  }}
                >
                  Your Name*
                </Typography>
                <TextField
                  fullWidth
                  name="name"
                  placeholder="John Doe"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  error={!!errors.name}
                  helperText={errors.name}
                  InputProps={{
                    sx: {
                      borderRadius: 2,
                      transition: 'box-shadow 0.2s',
                      '&.Mui-focused': {
                        boxShadow: '0 0 0 3px rgba(33, 150, 243, 0.2)'
                      }
                    }
                  }}
                  size="small"
                />
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    display: 'block', 
                    mb: 0.5, 
                    fontWeight: 500,
                    color: focusedField === 'email' ? 'primary.main' : 'text.secondary',
                    transition: 'color 0.2s'
                  }}
                >
                  Email Address*
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    sx: {
                      borderRadius: 2,
                      transition: 'box-shadow 0.2s',
                      '&.Mui-focused': {
                        boxShadow: '0 0 0 3px rgba(33, 150, 243, 0.2)'
                      }
                    }
                  }}
                  size="small"
                />
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    display: 'block', 
                    mb: 0.5, 
                    fontWeight: 500,
                    color: focusedField === 'subject' ? 'primary.main' : 'text.secondary',
                    transition: 'color 0.2s'
                  }}
                >
                  Subject
                </Typography>
                <TextField
                  fullWidth
                  name="subject"
                  placeholder="Project Inquiry"
                  variant="outlined"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  InputProps={{
                    sx: {
                      borderRadius: 2,
                      transition: 'box-shadow 0.2s',
                      '&.Mui-focused': {
                        boxShadow: '0 0 0 3px rgba(33, 150, 243, 0.2)'
                      }
                    }
                  }}
                  size="small"
                />
              </Box>
              
              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    display: 'block', 
                    mb: 0.5, 
                    fontWeight: 500,
                    color: focusedField === 'message' ? 'primary.main' : 'text.secondary',
                    transition: 'color 0.2s'
                  }}
                >
                  Message*
                </Typography>
                <TextField
                  fullWidth
                  name="message"
                  placeholder="Hello! I'm interested in working with you on..."
                  multiline
                  rows={5}
                  variant="outlined"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  error={!!errors.message}
                  helperText={errors.message}
                  InputProps={{
                    sx: {
                      borderRadius: 2,
                      transition: 'box-shadow 0.2s',
                      '&.Mui-focused': {
                        boxShadow: '0 0 0 3px rgba(33, 150, 243, 0.2)'
                      }
                    }
                  }}
                />
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  size="large"
                  disabled={submitting}
                  endIcon={submitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  sx={{ 
                    py: 1.5,
                    px: 4,
                    fontWeight: 600,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateX(-100%)',
                      transition: 'transform 0.3s ease'
                    },
                    '&:hover::after': {
                      transform: 'translateX(0)'
                    }
                  }}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
      </Box>
      
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={Fade}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactSection;