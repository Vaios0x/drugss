import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

const socialLinks = [
  // CONADIC
  {
    icon: <FacebookIcon fontSize="medium" />, link: 'https://www.facebook.com/conadicmx/', label: 'Facebook CONADIC'
  },
  {
    icon: <XIcon fontSize="medium" />, link: 'https://twitter.com/conadicmx', label: 'X CONADIC'
  },
  {
    icon: <WhatsAppIcon fontSize="medium" />, link: 'https://wa.me/525533553333', label: 'WhatsApp CONADIC'
  },
  {
    icon: <PhoneIcon fontSize="medium" />, link: 'tel:8009112000', label: 'Línea de la Vida CONADIC'
  },
];

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      sx={{
        bgcolor: 'transparent',
        color: 'white',
        pt: 8,
        pb: 0,
        mt: 'auto',
        background: 'linear-gradient(120deg, #1976d2 60%, #42a5f5 100%)',
        boxShadow: '0 -2px 24px 0 rgba(25, 118, 210, 0.12)',
        position: 'relative',
        zIndex: 10,
        borderTopLeftRadius: { xs: 24, md: 48 },
        borderTopRightRadius: { xs: 24, md: 48 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Sobre Nosotros
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.92 }}>
              Trabajamos por un México libre de adicciones, promoviendo la prevención y el acceso a tratamiento para todos.
            </Typography>
            <Box sx={{ mt: 2 }}>
              {socialLinks.map((s, i) => (
                <IconButton
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.08)',
                    mr: 1,
                    mb: 1,
                    transition: 'all 0.2s',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.18)',
                      color: theme.palette.secondary.light,
                      transform: 'scale(1.15)'
                    }
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Enlaces Útiles
            </Typography>
            <Link
              href="https://www.gob.mx/salud"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1, fontWeight: 500 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Secretaría de Salud
            </Link>
            <Link
              href="https://www.gob.mx/salud/conadic"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1, fontWeight: 500 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              CONADIC
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Contacto de Emergencia
            </Typography>
            <Typography variant="body2" paragraph sx={{ opacity: 0.92 }}>
              Comisión Nacional de Salud Mental y Adicciones<br/>
              Tel: <Link href="tel:5550621700" color="inherit" underline="always" sx={{ fontWeight: 600 }}>55 5062 1700</Link> Ext. 52636 o 52321<br/>
              Línea de la Vida: <Link href="tel:8009112000" color="inherit" underline="always" sx={{ fontWeight: 600 }}>800 911 2000</Link>
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.92 }}>
              Disponible 24/7 para atención y orientación
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.18)' }} />
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="inherit" sx={{ opacity: 0.85 }}>
            {'© '}
            {new Date().getFullYear()}
            {' Prevención de Drogas MX. Todos los derechos reservados.'}
          </Typography>
        </Box>
      </Container>
      {/* Franja holográfica inferior */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        sx={{
          width: '100%',
          py: { xs: 2, md: 2.5 },
          px: 2,
          mt: 4,
          background: 'linear-gradient(90deg, #42a5f5 0%, #fff 50%, #1976d2 100%)',
          backgroundSize: '200% 100%',
          animation: 'holo-move 6s linear infinite',
          boxShadow: '0 -2px 24px 0 rgba(33,150,243,0.13)',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          position: 'relative',
          zIndex: 20,
          '@keyframes holo-move': {
            '0%': { backgroundPosition: '0% 50%' },
            '100%': { backgroundPosition: '200% 50%' },
          },
        }}
      >
        <Typography
          variant="subtitle1"
          component={motion.span}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          sx={{
            fontWeight: 700,
            color: '#0d2346',
            textShadow: '0 2px 8px rgba(66,165,245,0.10)',
            letterSpacing: 1,
            mx: 2,
            fontSize: { xs: 16, md: 18 },
          }}
        >
          Materia: Comunidades Virtuales · Maestro: Carlos Bastida Montes · Grado: 2 · Grupo: 1 · Nombre del Alumno: Luis Felipe Lopez Amador
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer; 