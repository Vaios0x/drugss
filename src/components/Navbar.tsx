import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

// Función de scroll suave nativo
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Logo animado
const Logo = () => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', userSelect: 'none' }}
  >
    <Box
      component={motion.svg}
      width={38}
      height={38}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 180, damping: 10 }}
      sx={{ mr: 1 }}
    >
      {/* Escudo con corazón */}
      <motion.path
        d="M20 4 L36 10 V20 C36 30 20 36 20 36 C20 36 4 30 4 20 V10 Z"
        fill="url(#grad1)"
        stroke="#fff"
        strokeWidth={1.5}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <motion.path
        d="M20 18 C22 14 28 16 20 26 C12 16 18 14 20 18 Z"
        fill="#fff"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />
      <defs>
        <linearGradient id="grad1" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1976d2" />
          <stop offset="1" stopColor="#42a5f5" />
        </linearGradient>
      </defs>
    </Box>
    <Typography
      variant="h6"
      component={motion.span}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      sx={{
        fontWeight: 700,
        background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        fontSize: { xs: '1.1rem', md: '1.25rem' },
        letterSpacing: 0.5,
        ml: 0.5,
      }}
    >
      Prevención de Drogas MX
    </Typography>
  </Box>
);

// Franja holográfica superior
const HOLO_HEIGHT = 48; // altura en px para desktop
const HoloBar = () => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    sx={{
      width: '100%',
      height: { xs: 38, md: HOLO_HEIGHT },
      py: 0,
      px: 2,
      background: 'linear-gradient(90deg, #42a5f5 0%, #fff 50%, #1976d2 100%)',
      backgroundSize: '200% 100%',
      animation: 'holo-move 6s linear infinite',
      boxShadow: '0 2px 24px 0 rgba(33,150,243,0.13)',
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1302,
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
      transition={{ delay: 0.5, duration: 1 }}
      sx={{
        fontWeight: 700,
        color: '#0d2346',
        textShadow: '0 2px 8px rgba(66,165,245,0.10)',
        letterSpacing: 1,
        mx: 2,
        fontSize: { xs: 15, md: 17 },
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Materia: Comunidades Virtuales · Maestro: Carlos Bastida Montes · Grado: 2 · Grupo: 1 · Nombre del Alumno: Luis Felipe Lopez Amador
    </Typography>
  </Box>
);

interface NavItem {
  title: string;
  to: string;
}

const navItems: NavItem[] = [
  { title: 'Estadísticas', to: 'estadisticas' },
  { title: 'Prevención', to: 'prevencion' },
  { title: 'Recursos', to: 'recursos' }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (sectionId: string) => {
    smoothScrollTo(sectionId);
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.to);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Logo />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemText
              primary={item.title}
              onClick={() => handleNavClick(item.to)}
              sx={{
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': {
                  color: 'primary.main',
                },
                color: activeSection === item.to ? 'primary.main' : 'inherit',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Franja holográfica superior fixed */}
      <HoloBar />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: trigger ? 'background.default' : 'transparent',
          backdropFilter: trigger ? 'blur(10px)' : 'none',
          boxShadow: trigger ? 1 : 0,
          transition: 'all 0.3s ease',
          top: { xs: 38, md: HOLO_HEIGHT },
          zIndex: 1301,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Logo animado */}
            <Logo />
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.to}
                    onClick={() => handleNavClick(item.to)}
                    sx={{
                      color: activeSection === item.to ? 'primary.main' : 'inherit',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: activeSection === item.to 
                          ? 'translateX(-50%) scaleX(1)'
                          : 'translateX(-50%) scaleX(0)',
                        width: '100%',
                        height: '2px',
                        bgcolor: 'primary.main',
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
      {/* Espaciador para compensar ambas barras fixed */}
      <Box sx={{ height: { xs: 38 + 56, md: HOLO_HEIGHT + 64 } }} />
    </>
  );
};

export default Navbar; 