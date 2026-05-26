import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AlturaRealtyApp } from "./app/AlturaRealtyApp";
import "./scss/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AlturaRealtyApp />
    </BrowserRouter>
  </StrictMode>,
);
