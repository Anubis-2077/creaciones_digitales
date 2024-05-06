import InfoCards from "../infoCards";
import InfoNumbers from "../infoNumbers";
import "./styles.css";
import { Container } from "@mui/material";



const InfoSection = () => {
  return (
    <>
      <Container style={{ padding: "50px 0", color: "white" }}>
        <InfoNumbers/>
        <InfoCards/>
      </Container>
    </>
  );
};
export default InfoSection;
