import {
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "./styles.css";
import NeonButton from "../neonbutton";

const plans = [
  {
    title: "Landing Page",
    price: "$95.000/ unico pago",
    features: [
      "Diseño a elección",
      "Página única",
      "Secciones: Empresa, Productos o Servicios, Novedades, Contacto",
      "Chat de Whatsapp",
      "Galeria de fotos",
      "Ubicación en mapa de Google",
      "Adaptado a pc, tablets y dispositivos moviles",
      "Diseño a elección",
    ],
  },
  {
    title: "Profesional",
    price: "$170.000/ hasta dos pagos.",
    features: [
      "Diseño a elección",
      "Multiples pestañas: Empresa, Productos o Servicios, Novedades, Contacto",
      "Seccion de producto autogestionable",
      "Optimización en busqueda de Google",
      "correos @tumarca.com personalizado ilimitados",
      "Chat de Whatsapp",
      "Galeria de fotos",
      "Ubicación en mapa de Google",
      "Adaptado a pc, tablets y dispositivos moviles",
      "Diseño a elección",
      "Servicio de email desde tu pagina",
    ],
  },
  {
    title: "Empresarial",
    price: "$350.000/ hasta tres pagos",
    features: [
      "Diseño a elección",
      "Multiples pestañas: Empresa, Productos o Servicios, Novedades, Contacto",
      "Tienda en linea autogestionable con carrito de ventas",
      "Sincronización de stock disponible",
      "Métricas de Venta",
      "Integración de mercadopago cobro sin comisión, acreditación instantanea",
      "Optimización en busqueda de Google",
      "correos @tumarca.com personalizado ilimitados",
      "Chat de Whatsapp",
      "Galeria de fotos",
      "Ubicación en mapa de Google",
      "Adaptado a pc, tablets y dispositivos moviles",
      "Diseño a elección",
      "Servicio de email desde tu pagina",
    ],
  },
  {
    title: "Ultimate",
    price: "$ Solicitar cotización",
    features: [
      "Diseño a elección",
      "Panel de control",
      "Diferentes niveles de acceso",
      "Generación automatica de informes",
      "Automatización de tareas",
      "Control de insumos/stock",
      "Multiples pestañas: Empresa, Productos o Servicios, Novedades, Contacto",
      "Tienda en linea autogestionable con carrito de ventas",
      "Métricas de Venta",
      "Integración de mercadopago cobro sin comisión, acreditación instantanea",
      "Optimización en busqueda de Google",
      "correos @tumarca.com personalizado ilimitados",
      "Chat de Whatsapp",
      "Galeria de fotos",
      "Ubicación en mapa de Google",
      "Adaptado a pc, tablets y dispositivos moviles",
      "Diseño a elección",
    ],
  },
];

const PlansGrid = () => {
  return (
    <Grid container spacing={4} padding={5} justifyContent="center">
      {plans.map((plan, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card raised className="planCardContainer">
            <CardContent>
              <Typography variant="h5" component="h2" className="planTitle">
                {plan.title}
              </Typography>
              <Typography variant="h6" className="planPrice">
                {plan.price}
              </Typography>
              <List>
                {plan.features.map((feature, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
              <div className="planButtonContainer">
                <NeonButton nombreBoton="Solicitar información" />
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PlansGrid;
