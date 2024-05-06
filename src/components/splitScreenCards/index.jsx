import './styles.css'
import { Grid, Card, Box, CardContent, Typography } from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import GoogleIcon from '@mui/icons-material/Google';
import BackupIcon from '@mui/icons-material/Backup';
import DevicesIcon from '@mui/icons-material/Devices';
import TranslateIcon from '@mui/icons-material/Translate';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
const cardInfo = [
  {
    icon: <PhonelinkLockIcon id="NeonIconVPN" />,
    title: 'Seguridad',
    description: 'Todos nuestros sitios siguen las mejores prácticas de seguridad para darte tranquilidad y a tus clientes.'
  },
  {
    icon: <TranslateIcon id="NeonIconVPN" />,
    title: 'Sitio multilenguaje',
    description: 'Expande tu negocio hacia otros mercados sin que el lenguaje sea una frontera.'
  },
  {
    icon: <DevicesIcon id="NeonIconVPN" />,
    title: 'Multiplataforma',
    description: 'Podes ingresar a tu Aplicación web desde cualquier dispositivo sin barreras de compatibilidad.'
  },
  {
    icon: <BackupIcon id="NeonIconVPN" />,
    title: 'Respaldo de base de datos',
    description: 'Mantene seguro tus datos ante cualquier improvisto mediante un respaldo de tu base de datos en el intervalo de tiempo que necesites.'
  },
  {
    icon: <GoogleIcon id="NeonIconVPN" />,
    title: 'Optimizacion de busqueda en linea.',
    description: 'Aparezca primero cuando busquen el nombre de su negocio en linea.'
  },
  {
    icon: <EventAvailableIcon id="NeonIconVPN" />,
    title: 'Sistema de turnos online',
    description: 'Para gimnasios, consultorios, talleres mecanicos o el rubro que necesites ofrecemos un sistema optimizado de turnos online.'
  },
  {
    icon: <HandshakeIcon id="NeonIconVPN" />,
    title: 'Integración con mercado pago.',
    description: 'Recibe pagos de tus clientes con cualquier medio de pago.'
  },
  {
    icon: <PsychologyIcon id="NeonIconVPN" />,
    title: 'Optimización con inteligencia artificial',
    description: 'Optimizamos tu sitio con inteligencia artificial para la automatización de tareas, atencion al publico y envio de correos.'
  }
];

const SplitScreenCards = () => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ padding: 0 }}>
      {cardInfo.map((card, index) => (
        <Grid item xs={12} md={6} key={index} className="splitGridCard">
          <Card raised sx={{ display: 'flex', alignItems: 'center', height: 150, width: 500 }} className="splitCard">
            <Box className='neon-icon' sx={{ width: '30%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {card.icon}
            </Box>
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SplitScreenCards;