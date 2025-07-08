import React from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardContent, CardActions, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';
import HelpIcon from '@mui/icons-material/Help';

const Resources = () => {
  const theme = useTheme();
  const resources = [
    {
      title: 'Línea de Ayuda CONADIC',
      description: 'Atención telefónica gratuita las 24 horas para orientación y apoyo.',
      action: 'Llamar',
      link: 'tel:8009112000',
      icon: <PhoneIcon fontSize="large" color="primary" />,
      gradient: ['#42a5f5', '#4ECDC4']
    },
    {
      title: 'Portal CONADIC',
      description: 'Información oficial y recursos de la Comisión Nacional contra las Adicciones.',
      action: 'Visitar',
      link: 'https://www.gob.mx/salud/conadic',
      icon: <WebIcon fontSize="large" color="primary" />,
      gradient: ['#FF6B6B', '#42a5f5']
    },
    {
      title: 'Centros de Atención',
      description: 'Encuentra el centro de atención más cercano a tu ubicación.',
      action: 'Buscar',
      link: 'https://www.gob.mx/salud/conadic/acciones-y-programas/centros-de-atencion-primaria-en-adicciones-capa',
      icon: <HelpIcon fontSize="large" color="primary" />,
      gradient: ['#4ECDC4', '#FF6B6B']
    },
    {
      title: 'CAPA Estado de México',
      description: 'Actualmente el portal oficial de los CAPA del Estado de México no está disponible. Consulta el directorio nacional de CAPA en el sitio de CONADIC.',
      action: 'Directorio Nacional',
      link: 'https://www.gob.mx/salud/conadic/acciones-y-programas/centros-de-atencion-primaria-en-adicciones-capa',
      icon: <WebIcon fontSize="large" color="primary" />,
      gradient: ['#7B4397', '#42a5f5']
    },
    {
      title: 'Ubica tu CAPA (IMSAMA)',
      description: 'Actualmente la herramienta de ubicación de CAPA en el Estado de México no está disponible. Consulta el directorio nacional de CAPA en el sitio de CONADIC.',
      action: 'Directorio Nacional',
      link: 'https://www.gob.mx/salud/conadic/acciones-y-programas/centros-de-atencion-primaria-en-adicciones-capa',
      icon: <HelpIcon fontSize="large" color="primary" />,
      gradient: ['#43cea2', '#185a9d']
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
      id="recursos"
      sx={{
        bgcolor: 'background.default',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
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
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            Recursos de Ayuda
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            Encuentra apoyo profesional y recursos para la prevención y tratamiento
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="stretch" component={motion.div} variants={containerVariants}>
            {resources.map((resource, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} component={motion.div} variants={itemVariants} sx={{ display: 'flex' }}>
                <Card
                  component={motion.div}
                  whileHover={{ 
                    scale: 1.04,
                    boxShadow: '0 15px 30px rgba(0,0,0,0.13)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    width: '100%',
                    minHeight: 210,
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
                      background: `linear-gradient(135deg, ${resource.gradient[0]}, ${resource.gradient[1]})`,
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
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center', position: 'relative', zIndex: 2, p: 0 }}>
                    <Box sx={{ my: 2, color: theme.palette.primary.main, fontSize: 44 }}>{resource.icon}</Box>
                    <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                      {resource.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 15, md: 16 } }}>
                      {resource.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 2, zIndex: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontWeight: 600,
                        borderRadius: 2,
                        px: 4,
                        boxShadow: '0 2px 8px rgba(33,150,243,0.08)',
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        transition: 'all 0.2s',
                        '&:hover': {
                          boxShadow: '0 4px 16px rgba(33,150,243,0.16)',
                        }
                      }}
                    >
                      {resource.action}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Resources; 