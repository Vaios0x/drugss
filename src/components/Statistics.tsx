import { Box, Typography, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Statistics = () => {
  const stats = [
    {
      value: '1.4 M',
      label: 'Personas con Adicción en México',
      description: 'Según la Encuesta Nacional de Consumo de Drogas 2021'
    },
    {
      value: '53%',
      label: 'Consumo de Alcohol',
      description: 'Población entre 18 y 65 años'
    },
    {
      value: '17%',
      label: 'Consumo de Drogas Ilícitas',
      description: 'Incremento en los últimos 5 años'
    }
  ];

  return (
    <Box 
      id="estadisticas"
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
          Estadísticas de Consumo
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
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
                <Typography variant="h3" color="primary" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {stat.label}
                </Typography>
                <Typography variant="body1">
                  {stat.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Statistics; 