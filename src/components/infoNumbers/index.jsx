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
              <Typography variant="h5" gutterBottom>
                Diseños
              </Typography>
              <Typography>
                Las páginas diseñadas con los más altos estándares.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="infoContentContainer">
              <Typography variant="h3" gutterBottom>
                <AnimatedNumber end={24} />
              </Typography>
              <Typography variant="h5" gutterBottom>
                Tiendas
              </Typography>
              <Typography>
                Tiendas en linea automatizadas y eficientes.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="infoContentContainer">
              <Typography variant="h3" gutterBottom>
                <AnimatedNumber end={13} />
              </Typography>
              <Typography variant="h5" gutterBottom>
                Software para empresas
              </Typography>
              <Typography>
                Potenciados mediante inteligencia artifical.
              </Typography>
            </div>
          </Grid>
        </Grid>
        </>
    )
}
export default InfoNumbers