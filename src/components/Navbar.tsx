// Declaración de tipos para react-scroll
declare module 'react-scroll';

import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { label: 'Inicio', to: 'home' },
    { label: 'Prevención', to: 'prevencion-integral' },
    { label: 'Recursos', to: 'recursos' },
    { label: 'Estadísticas', to: 'estadisticas' }
  ];

  return (
    <AppBar 
      position="fixed" 
      color="transparent" 
      elevation={0}
      component={motion.header}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              smooth={true} 
              duration={500} 
              offset={-70}
            >
              <Button 
                color="primary" 
                variant="text"
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 