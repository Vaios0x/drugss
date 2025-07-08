import { Box, Typography, Grid, Container, Link } from '@mui/material';
import { motion } from 'framer-motion';

const Resources = () => {
  const resources = [
    {
      title: 'Línea de la Vida',
      description: 'Servicio de atención psicológica gratuito',
      phone: '800 911 2000',
      url: 'tel:8009112000'
    },
    {
      title: 'CONADIC',
      description: 'Comisión Nacional contra las Adicciones',
      phone: '55 5062 1700',
      url: 'https://www.gob.mx/salud/conadic'
    },
    {
      title: 'Centros de Rehabilitación',
      description: 'Directorio de centros de ayuda',
      phone: 'Consulta en línea',
      url: 'https://www.gob.mx/salud/documentos/directorio-de-centros-de-tratamiento'
    }
  ];

  return (
    <Box 
      id="recursos"
      component={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        py: { xs: 4, md: 8 },
        mt: { xs: 2, md: 6 },
        borderRadius: 6,
        boxShadow: 3,
        mx: { xs: 0, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ mb: 4, fontWeight: 'bold' }}
        >
          Recursos de Ayuda
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {resources.map((resource, index) => (
            <Grid 
              item 
              xs={12} 
              sm={4} 
              key={index} 
              sx={{ textAlign: 'center' }}
            >
              <Box
                component={motion.div}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Typography variant="h5" gutterBottom>
                  {resource.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {resource.description}
                </Typography>
                <Link 
                  href={resource.url} 
                  variant="h6" 
                  color="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.phone}
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Resources; 