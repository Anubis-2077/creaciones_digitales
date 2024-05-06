import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
  
} from "@mui/material";
import { useState } from "react";
import "./styles.css";

const RegretPage = () => {
  const [formData, setFormData] = useState({
    motivo: "",
    numeroTransferencia: "",
    monto: "",
    detalles: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); 
    alert("Formulario enviado");}

    return (
      <>
        <div className="regretContainer">
          <Card sx={{ maxWidth: 450, mx: "auto", mt: 5 }}>
            <form onSubmit={handleSubmit}>
              <CardContent>
                <Typography variant="h5" component="div" textAlign={'center'}>
                  Formulario de Arrepentimiento
                </Typography>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Motivo del arrepentimiento"
                  name="motivo"
                  multiline
                  rows={4}
                  value={formData.motivo}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Número de transferencia"
                  name="numeroTransferencia"
                  value={formData.numeroTransferencia}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Monto"
                  name="monto"
                  type="number"
                  value={formData.monto}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Detalles adicionales"
                  name="detalles"
                  multiline
                  rows={2}
                  value={formData.detalles}
                  onChange={handleChange}
                />
              </CardContent>
              <CardActions>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Enviar
                </Button>
              </CardActions>
            </form>
            <Typography variant="body2" color="textSecondary" sx={{ p: 2 }} textAlign={'center'}>
              Una vez comenzado el trabajo, no será posible el 50% del reintegro
              de la seña.
            </Typography>
          </Card>
        </div>
      </>
    );
  };

export default RegretPage;
