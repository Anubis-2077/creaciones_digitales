import { Grid, Typography, } from "@mui/material";
import AnimatedNumber from "../animatedNumber";

const InfoNumbers = ()=>{
    return(
        <>
        <Grid container spacing={3} className="infoContainer">
          <Grid item xs={12} md={4}>
            <div className="infoContentContainer">
              <Typography variant="h3" gutterBottom>
                <AnimatedNumber end={200} />
              </Typography>
              <Typography variant="h5" gutterBottom className='infoNumberTitle'>
                DISEÑOS
              </Typography>
              <Typography className="infoNumberDescription">
                Más de 200 diseños listos para adaptarlos a tu marca.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="infoContentContainer">
              <Typography variant="h3" gutterBottom>
                <AnimatedNumber end={24} />
              </Typography>
              <Typography variant="h5" gutterBottom className='infoNumberTitle'>
                TIENDAS EN LINEA
              </Typography>
              <Typography className="infoNumberDescription">
                Tiendas en linea automatizadas y eficientes.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="infoContentContainer">
              <Typography variant="h3" gutterBottom>
                <AnimatedNumber end={13} />
              </Typography>
              <Typography variant="h5" gutterBottom className='infoNumberTitle'>
                WEB APPS
              </Typography>
              <Typography className="infoNumberDescription">
                Potenciadas mediante inteligencia artificial.
              </Typography>
            </div>
          </Grid>
        </Grid>
        </>
    )
}
export default InfoNumbers