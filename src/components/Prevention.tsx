import { Box, Typography, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Prevention = () => {
  const preventionSteps = [
    {
      title: 'Comunicación Abierta',
      description: 'Fomenta el diálogo honesto y sin prejuicios con familiares y amigos.',
      icon: '💬'
    },
    {
      title: 'Educación',
      description: 'Infórmate sobre los riesgos y consecuencias del consumo de sustancias.',
      icon: '📚'
    },
    {
      title: 'Apoyo Profesional',
      description: 'Busca ayuda de especialistas en salud mental y adicciones.',
      icon: '🤝'
    }
  ];

  return (
    <Box 
      id="prevencion-integral"
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
          Prevención Integral de Adicciones
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {preventionSteps.map((step, index) => (
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
                <Typography variant="h2" sx={{ mb: 2 }}>
                  {step.icon}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {step.title}
                </Typography>
                <Typography variant="body1">
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Prevention; 