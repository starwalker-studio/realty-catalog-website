import { Route, Routes } from "react-router-dom";
import { AlturaRealtyHomeRoutes } from "../routes/AlturaRealtyHomeRoutes";
import { AlturaRealtyProperties } from "../routes/AlturaRealtyProperties";

export const AlturaRealtyApp = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <AlturaRealtyHomeRoutes />
          </>
        }
      />
      <Route path="/propiedades/*" element={<AlturaRealtyProperties />} />
    </Routes>
  );
};
