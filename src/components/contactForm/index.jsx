import emailjs from "emailjs-com";
import './styles.css'
import { useState } from 'react';
import { TextField,  Box, Typography, Container, Grid, } from '@mui/material';
import NeonButton from '../neonbutton';

import Swal from 'sweetalert2';


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

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      
      Swal.fire({
        title: 'Error!',
        text: 'Por favor, completa todos los campos.',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          container: 'my-swal'
        }
      });
      return;
    }
  
    const templateParams = {
      from_name: formData.fullName, 
      user_email: formData.email,   
      message: formData.message
    };
  
    // EmailJS 
    
    emailjs.send('service_hs9f7fi', 'template_0ssi4vs', templateParams, 'YbloC4wjpY94vIYo8')
    .then((response) => {
      console.log('Email successfully sent!', response);
      Swal.fire({
        title: 'Exito!',
        text: 'Formulario enviado exitosamente.',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          container: 'my-swal'
        }
      });
        
        setFormData({
          fullName: '',
          email: '',
          message: ''
        });

        
      }, () => {
        
        
      });
  };
  

  return (
    <Container maxWidth="lg" id='contactContainer' alignItems="center" >
      <Box my={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} p={5} className='contactImageContainer'>
            <img src="https://i.pinimg.com/564x/25/a9/33/25a933cb292655ef612aed225359f5ed.jpg" alt=""  className='contactImage'/>
          </Grid>
          <Grid item s={12} md={6}>
            <Typography variant="h4" gutterBottom className="digital">Contacto</Typography>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
              <TextField
                fullWidth
                required
                id="fullName"
                label="Nombre o empresa"
                name="fullName"
                margin="normal"
                variant="standard" 
                value={formData.name}
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
                autoComplete="true"
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
