import NeonButton from '../neonbutton';
import './styles.css'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Navbar() {
    return (
        <div>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} className='NavbarContainer'>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo y Nombre a la izquierda */}
                    
                    
                    {/* Opciones de Navegación en el centro */}
                    <Box sx={{ flexGrow:1, display: 'flex', justifyContent: 'left' }}>
                        <Button color="inherit">Nosotros</Button>
                        <Button color="inherit">Diseños</Button>
                        <Button color="inherit">tiendas</Button>
                        <Button color="inherit">blog</Button>
                    </Box>

                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <img src="/images/Logo.png" alt="" className='navbarLogo' />
                    </Typography>
                    
                    {/* Botón a la derecha */}
                    <NeonButton nombreBoton='Contacto' />
                </Toolbar>
            </AppBar>
            <Toolbar /> {/* Este Toolbar es necesario para agregar un espacio debajo del AppBar fijo */}
        </div>
        
    );
}

export default Navbar;