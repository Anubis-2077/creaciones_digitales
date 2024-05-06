import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import RegretPage from "../pages/arrepentimiento";
import TerminosComponent from "../pages/legal";

const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/regret" element={<RegretPage />} />
          <Route path="/legal" element={<TerminosComponent/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRoutes;