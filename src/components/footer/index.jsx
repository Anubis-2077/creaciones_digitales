import "./styles.css";
import { Container, Grid, Typography, Link, Divider} from "@mui/material";
import { useState } from "react";
import AppModal from "../appModal";


const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ titulo: "", cuerpo: "" });

  const handleOpenModal = (titulo, cuerpo) => {
    setModalContent({ titulo, cuerpo });
    setModalOpen(true);
    console.log("modal Abierto");
  };
  const phoneNumber = '+5492644390627';
  const message = encodeURIComponent("Hola, necesito más información sobre: "); 

  return (
    <footer
      style={{ backgroundColor: "#282828", color: "white", padding: "20px 0" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={0} pb={5} pt={4}>
          <img src="/images/Logo.png" alt="" className="footerImagen" />
        </Grid>
        <Divider orientation="horizontal" color={"white"} />

        <Grid container spacing={8} pt={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom className="footerTitle">
              AYUDA
            </Typography>
            <Link href={`https://wa.me/${phoneNumber}?text=${message}`} color="inherit" style={{ display: "block" }} target='_blank'>
              Contáctanos
            </Link>
            <Link
              href="#"
              color="inherit"
              style={{ display: "block" }}
              onClick={(e) => {
                e.preventDefault();
                handleOpenModal(
                  "Métodos de pago",
                  "Puedes abonar a traves de transferencia bancaria o Mercado Pago, se abona un 50% al inicio del trabajo y el resto a la entrega del mismo."
                );
              }}
            >
              Metodos de pago
            </Link>

            <Link
              href="#"
              color="inherit"
              style={{ display: "block" }}
              onClick={(e) => {
                e.preventDefault();
                handleOpenModal(
                  "Preguntas Frecuentes",
                  <div >
                    <h4>¿Tiene costo de mantenimiento mensual?</h4>
                    <p>No, te entregamos tu página web lista para ser usada en un servidor de prueba que en el caso de que quieras contratar hosting por medio de nosotros lo puedes hacer. </p>
                    <h4>¿Cúanto demora la entrega?</h4>
                    <p>Depende de la complejidad del trabajo y la cola de pedidos pero usualmente estamos entregando el proyecto listo en 10 días hábiles.</p>
                    <h4>Necesito un sistema completo y automatizado de gestión para mi negocio.</h4>
                    <p>Se puede hacer, ya hemos desarrollado mas de 15 sistemas de gestión personalizados para distintas empresas, que incluyen funciones como: presentacion de informes, Login/out, informes automatizados de entregas a clientes, control de stock, insumos, entre otras funciones.</p>
                    <h4>¿Como es el servicio de soporte?</h4>
                    <p>Ofrecemos soporte dedicado, de de lunes a viernes de 8hs a 20hs, ya atendemos casos especiales fuera de ese horario</p>
                  </div>
                );
              }}
            >
              Preguntas Frecuentes
            </Link>
            <Link
              href="#"
              color="inherit"
              style={{ display: "block" }}
              onClick={(e) => {
                e.preventDefault();
                handleOpenModal(
                  "Promociones",
                  "Pronto sabrás de nuestras promociones."
                );
              }}
            >
              Promociones
            </Link>
            <Link
              href='/regret'
              color="inherit"
              style={{ display: "block" }}
              
            >
              Boton de arepentimiento
            </Link>
            <Link href="/legal" color="inherit" style={{ display: "block" }}>
              Términos y condiciones
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Typography variant="h6" gutterBottom className="footerTitle">
              ACERCA DE CREACIONES DIGITALES
            </Typography>
            <Link href="#" color="inherit" style={{ display: "block" }}>
              Compañía
            </Link>
            <Link href="#" color="inherit" style={{ display: "block" }}>
              Novedades
            </Link>
            <Link href="#" color="inherit" style={{ display: "block" }}>
              Inversionistas
            </Link>
            <Link href="#" color="inherit" style={{ display: "block" }}>
              Sostenibilidad
            </Link>
            <Link href="#" color="inherit" style={{ display: "block" }}>
              Empleos
            </Link>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="gray"
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          © Creaciones Digitales Web. Todos los derechos reservados.
        </Typography>
        <AppModal
          titulo={modalContent.titulo}
          cuerpo={modalContent.cuerpo}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </Container>
    </footer>
  );
};

export default Footer;
