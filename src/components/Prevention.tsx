import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SportsIcon from '@mui/icons-material/Sports';

const Prevention = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const strategies = [
    {
      icon: <PeopleIcon fontSize="large" color="primary" />,
      title: 'Conoce a sus Amistades',
      description: 'Mantén una comunicación abierta sobre las amistades de tus hijos y sus actividades.',
      gradient: ['#FF6B6B', '#4ECDC4']
    },
    {
      icon: <SchoolIcon fontSize="large" color="primary" />,
      title: 'Educación y Valores',
      description: 'Inculca valores positivos y fortalece su capacidad para tomar decisiones responsables.',
      gradient: ['#4ECDC4', '#45B7D1']
    },
    {
      icon: <FavoriteIcon fontSize="large" color="primary" />,
      title: 'Fortalece la Autoestima',
      description: 'Ayuda a desarrollar una autoestima sólida y la confianza en sí mismos.',
      gradient: ['#45B7D1', '#FF6B6B']
    },
    {
      icon: <SportsIcon fontSize="large" color="primary" />,
      title: 'Actividades Saludables',
      description: 'Promueve la participación en deportes y actividades recreativas positivas.',
      gradient: ['#FF6B6B', '#4ECDC4']
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
    <>
      <Box
        id="prevencion"
        sx={{
          bgcolor: 'background.default',
          py: { xs: 4, md: 8 },
          overflow: 'hidden',
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
              Estrategias de Prevención
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
              sx={{ 
                mb: 6,
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              Acciones concretas para prevenir el consumo de drogas en jóvenes
            </Typography>
            <Grid 
              container 
              spacing={{ xs: 3, md: 4 }}
              justifyContent="center"
              alignItems="stretch"
              component={motion.div}
              variants={containerVariants}
            >
              {strategies.map((strategy, index) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  md={6} 
                  lg={6}
                  xl={6}
                  key={index}
                  component={motion.div}
                  variants={itemVariants}
                  sx={{ display: 'flex' }}
                >
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
                        background: `linear-gradient(135deg, ${strategy.gradient[0]}, ${strategy.gradient[1]})`,
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
                    <Box 
                      sx={{ 
                        my: 1.5, 
                        color: theme.palette.primary.main,
                        transition: 'transform 0.3s ease',
                        fontSize: 44,
                        zIndex: 2
                      }}
                    >
                      {strategy.icon}
                    </Box>
                    <CardContent sx={{ 
                      textAlign: 'center', 
                      position: 'relative', 
                      zIndex: 2,
                      p: 0,
                    }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        sx={{ 
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          mb: 1,
                        }}
                      >
                        {strategy.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontSize: { xs: 15, md: 16 } }}
                      >
                        {strategy.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Nueva sección: Prevención Integral de Adicciones */}
      <Box
        id="prevencion-integral"
        sx={{
          bgcolor: 'background.paper',
          py: { xs: 4, md: 8 },
          mt: { xs: 2, md: 6 },
          borderRadius: 6,
          boxShadow: 3,
          mx: { xs: 0, md: 4 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >
            <Typography
              component="h2"
              variant="h3"
              align="center"
              sx={{
                background: 'linear-gradient(90deg, #43cea2, #185a9d, #42a5f5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
                mb: 2,
              }}
            >
              Prevención Integral de Todas las Adicciones
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
              sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
            >
              La prevención de adicciones abarca no solo sustancias, sino también conductas como el juego, la tecnología y el alcohol. Aquí tienes consejos clave para una vida saludable y libre de adicciones.
            </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="stretch">
              {/* Tarjeta 1 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.04, boxShadow: '0 15px 30px rgba(0,0,0,0.13)' }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
                    color: 'white',
                    boxShadow: theme.shadows[3],
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                  }}
                >
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    Fomenta Habilidades para la Vida
                  </Typography>
                  <Typography variant="body1">
                    Enseña a niños y jóvenes a tomar decisiones, resolver problemas, manejar emociones y resistir la presión social.
                  </Typography>
                </Card>
              </Grid>
              {/* Tarjeta 2 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.04, boxShadow: '0 15px 30px rgba(0,0,0,0.13)' }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'linear-gradient(135deg, #42a5f5 0%, #7B4397 100%)',
                    color: 'white',
                    boxShadow: theme.shadows[3],
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                  }}
                >
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    Promueve Actividades Alternativas
                  </Typography>
                  <Typography variant="body1">
                    Fomenta deportes, arte, música y actividades recreativas que fortalezcan la autoestima y el sentido de pertenencia.
                  </Typography>
                </Card>
              </Grid>
              {/* Tarjeta 3 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.04, boxShadow: '0 15px 30px rgba(0,0,0,0.13)' }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
                    color: 'white',
                    boxShadow: theme.shadows[3],
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                  }}
                >
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    Comunicación Abierta y Apoyo Familiar
                  </Typography>
                  <Typography variant="body1">
                    Mantén canales de comunicación sinceros, escucha activa y apoyo emocional en el hogar.
                  </Typography>
                </Card>
              </Grid>
              {/* Tarjeta 4 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.04, boxShadow: '0 15px 30px rgba(0,0,0,0.13)' }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'linear-gradient(135deg, #7B4397 0%, #43cea2 100%)',
                    color: 'white',
                    boxShadow: theme.shadows[3],
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                  }}
                >
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    Limita el Acceso y Supervisa
                  </Typography>
                  <Typography variant="body1">
                    Supervisa el uso de tecnología, dinero y acceso a sustancias o situaciones de riesgo.
                  </Typography>
                </Card>
              </Grid>
              {/* Tarjeta 5 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.04, boxShadow: '0 15px 30px rgba(0,0,0,0.13)' }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'linear-gradient(135deg, #45B7D1 0%, #FF6B6B 100%)',
                    color: 'white',
                    boxShadow: theme.shadows[3],
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                  }}
                >
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    Infórmate y Educa
                  </Typography>
                  <Typography variant="body1">
                    Mantente actualizado sobre los riesgos de todas las adicciones y comparte información confiable con tu familia.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default Prevention; 