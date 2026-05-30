import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/common/footer/Footer";
import { Header } from "../components/common/header/Header";
import { AlturaRealtyHomeRoutes } from "../routes/AlturaRealtyHomeRoutes";
import { AlturaRealtyProperties } from "../routes/AlturaRealtyProperties";

export const AlturaRealtyApp = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <Header />
            <AlturaRealtyHomeRoutes />
            <Footer />
          </>
        }
      />
      <Route path="/propiedades/*" element={<AlturaRealtyProperties />} />
    </Routes>
  );
};
