import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        pt: 20,
        pb: 8,
        width: '100%',
        backgroundImage: `linear-gradient(rgba(25, 118, 210, 0.92), rgba(25, 118, 210, 0.88)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem' },
            fontWeight: 700,
            mb: 4,
          }}
        >
          Juntos por un México Libre de Drogas
        </Typography>
        <Typography 
          variant="h5" 
          align="center" 
          paragraph
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            mb: 6,
            opacity: 0.9,
          }}
        >
          La prevención comienza con información y acción. Conoce las estadísticas,
          estrategias de prevención y recursos disponibles para combatir el consumo
          de drogas en México.
        </Typography>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="prevencion"
            smooth={true}
            duration={500}
            sx={{ 
              mr: 2,
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }
            }}
          >
            Conoce Más
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            to="recursos"
            smooth={true}
            duration={500}
            sx={{ 
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            Buscar Ayuda
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 