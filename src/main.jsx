import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./containers/Home";
import Sobre from "./containers/Sobre";
import Servicos from "./containers/Servicos";
import Clientes from "./containers/Clientes";
import Portfolio from "./containers/Portfolio";
import Instituto from "./containers/Instituto";
import Contato from "./containers/Contato";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/instituto" element={<Instituto />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
