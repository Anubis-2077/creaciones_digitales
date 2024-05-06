import "./styles.css";
import {
  Box,
 
  Typography,
} from "@mui/material";



const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        background: '#000', 
      }}
      className="heroSectionContainer"
    >
      <Typography
        variant="h1"
        component="h1"
        className="heroTitle"
      >
        Hello.
      </Typography>
      <Typography
        variant="body1"
        component="p"
        className="heroSubtitle"
        sx={{ maxWidth: '40%', textAlign: 'center', mt: 2 }}
      >
        Somos <span className="heroNeonText">Creaciones Digitales</span> ofrecemos un servicio rápido e innovador para hacer <span className="heroNeonText">Resaltar</span> tu negocio en <span className="heroNeonText">días</span>, no meses.
      </Typography>
    </Box>
  );
};

export default HeroSection;
