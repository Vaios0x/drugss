import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const Statistics = () => {
  const theme = useTheme();
  const stats = [
    {
      value: '21.1%',
      description: 'de adolescentes entre 10-19 años consumen alcohol',
      gradient: ['#4ECDC4', '#1976d2']
    },
    {
      value: '4.6%',
      description: 'de adolescentes entre 10-19 años consumen tabaco',
      gradient: ['#42a5f5', '#FF6B6B']
    },
    {
      value: '6.4%',
      description: 'de jóvenes entre 12-17 años han consumido drogas',
      gradient: ['#FF6B6B', '#4ECDC4']
    },
    {
      value: '5.3%',
      description: 'de adolescentes han consumido marihuana',
      gradient: ['#45B7D1', '#FF6B6B']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Box
      id="estadisticas"
      sx={{
        bgcolor: 'background.default',
        py: 10,
        width: '100%',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{
              mb: 3,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Estadísticas en México
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ 
              mb: 8,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Datos actualizados sobre el consumo de sustancias en la población joven
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="stretch" component={motion.div} variants={containerVariants}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={index} component={motion.div} variants={itemVariants} sx={{ display: 'flex' }}>
                <Card
                  component={motion.div}
                  whileHover={{ 
                    scale: 1.04,
                    boxShadow: '0 15px 30px rgba(0,0,0,0.13)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    width: '100%',
                    minHeight: 170,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: { xs: 2, md: 3 },
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 4,
                    transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${stat.gradient[0]}, ${stat.gradient[1]})`,
                      opacity: 0.13,
                      zIndex: 1,
                    },
                    boxShadow: theme.shadows[2],
                    transform: 'translateY(0)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: theme.shadows[5],
                    }
                  }}
                >
                  <CardContent sx={{ 
                    textAlign: 'center', 
                    position: 'relative', 
                    zIndex: 2,
                    p: 0,
                  }}>
                    <Typography
                      component="h3"
                      variant="h2"
                      color="primary"
                      gutterBottom
                      sx={{
                        fontSize: { xs: '2.5rem', sm: '3rem' },
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: 15, md: 16 },
                        lineHeight: 1.5,
                      }}
                    >
                      {stat.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Statistics; 