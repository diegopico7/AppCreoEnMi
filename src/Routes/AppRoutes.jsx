import React from "react";
import Portada from "../pages/Portada";
import Inicio from "../pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recetas from "../pages/Recetas";
import Audios from "../pages/Audios";
import Videos from "../pages/Videos";
import UnMinuto from "../componentes/UnMinuto";
import { Donacion } from "../pages/Donacion";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Recetas" element={<Recetas />} />
        <Route path="/Audios" element={<Audios />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/UnMinuto" element={<UnMinuto />} />
        <Route path="/Donacion" element={<Donacion />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
