
import './styles.css'
import { useState } from 'react';
import { TextField,  Box, Typography, Container, Grid, } from '@mui/material';
import NeonButton from '../neonbutton';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí iría la lógica para enviar el formulario a un servidor o API
    alert('Request submitted.');
  };

  return (
    <Container maxWidth="lg" id='contactContainer' alignItems="center" >
      <Box my={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} p={5} className='contactImageContainer'>
            <img src="https://i.pinimg.com/564x/25/a9/33/25a933cb292655ef612aed225359f5ed.jpg" alt=""  className='contactImage'/>
          </Grid>
          <Grid item s={12} md={6}>
            <Typography variant="h4" gutterBottom>Contact</Typography>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
              <TextField
                fullWidth
                required
                id="fullName"
                label="Nombre o empresa"
                name="fullName"
                margin="normal"
                variant="standard" 
                value={formData.fullName}
                onChange={handleChange}
                
                
              />
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                name="email"
                type="email"
                margin="normal"
                variant="standard" 
                value={formData.email}
                
                onChange={handleChange}
              />
              <TextField
                fullWidth
                required
                id="message"
                label="Escriba aquí su mensaje."
                name="message"
                margin="normal"
                variant="standard" 
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
              <div className="contactButtonContainer">

              <NeonButton nombreBoton='Enviar consulta'  />
              
              </div>

              
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactForm;
