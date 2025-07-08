import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Grid 
      container 
      spacing={2} 
      justifyContent="center" 
      sx={{ 
        backgroundColor: 'background.default', 
        py: 4, 
        px: 2 
      }}
    >
      <Grid 
        item
        xs={12} 
        md={4}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6">Contacto</Typography>
          {/* Contenido de contacto */}
        </Box>
      </Grid>
      
      <Grid 
        item
        xs={12} 
        md={4}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6">Redes Sociales</Typography>
          {/* Contenido de redes sociales */}
        </Box>
      </Grid>
      
      <Grid 
        item
        xs={12} 
        md={4}
      >
        <Box sx={{ 
          display: "flex", 
          justifyContent: "center" 
        }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Proyecto Contra las Drogas
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer; 