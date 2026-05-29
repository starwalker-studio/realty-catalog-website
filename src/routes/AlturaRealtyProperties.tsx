import { Route, Routes } from "react-router-dom";
import { PropertyDetail } from "../components/PropertyDetail/PropertyDetail";

export const AlturaRealtyProperties = () => {
  return (
    <Routes>
      <Route
        path="/detalle/:propertySlug"
        element={<PropertyDetail />}
      />
    </Routes>
  );
};
