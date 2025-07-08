import { Grid, Typography, Box, Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const socialLinks = [
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/luisfelipelop/' },
    { icon: <GitHubIcon />, url: 'https://github.com/Vaios0x' },
    { icon: <InstagramIcon />, url: 'https://www.instagram.com/luisfelipelop/' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        py: 4,
        mt: 4
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Luis Felipe Lopez Amador
            </Typography>
            <Typography variant="body2">
              Proyecto de Comunidades Virtuales
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Typography variant="body2">
              © {new Date().getFullYear()} Todos los derechos reservados
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box>
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: 'inherit', margin: '0 10px' }}
                >
                  {link.icon}
                </a>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer; 