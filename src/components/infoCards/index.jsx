import { Grid, Typography, Card, CardContent } from "@mui/material";

const InfoCards = ()=>{
    return(
        <>
        <Grid container spacing={3} className="infoCardContainer">
          <Grid item xs={12} md={4}>
          <div className="infoContentContainer">
              <Card sx={{ minWidth: 275 }} className='infoCard infoCard3'>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 25 }}
                    className='infoCardTitle'
                    gutterBottom
                  >
                    Diseño
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  
                  <Typography variant="body2">
                    Diseños innovadores que te diferenciaran de la competencia destacando la calidad de tus productos.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="infoContentContainer">
              <Card sx={{ minWidth: 275 }} className='infoCard infoCard2'>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 25 }}
                    className='infoCardTitle'
                    gutterBottom
                  >
                    Desarrollo
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  
                  <Typography variant="body2">
                    Contamos con un equipo especializado en cada área de desarrollo de software para asegurar calidad en cada liena de codigo.
                    
                    
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
          <div className="infoContentContainer">
              <Card sx={{ minWidth: 275 }} className='infoCard infoCard1'>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 25 }}
                    className='infoCardTitle'
                    gutterBottom
                  >
                    Producción
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  
                  <Typography variant="body2">
                    Puedes optar contratar hosting o si ya tienes un servicio puedes migrar tu nuevo sitio web a tu antiguo proveedor de hosting.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
        </>
    )
}
export default InfoCards