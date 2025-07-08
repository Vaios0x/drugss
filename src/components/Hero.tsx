// Declaración de tipos para react-scroll
declare module 'react-scroll';

import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ fontWeight: 'bold', mb: 3 }}
        >
          Prevención de Adicciones
        </Typography>
        <Typography 
          variant="h6" 
          component="p" 
          sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
        >
          Información, recursos y estrategias para combatir las adicciones en México
        </Typography>
        
        <Link 
          to="prevencion-integral" 
          smooth={true} 
          duration={500} 
          offset={-70}
        >
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Conoce Más
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Hero; 