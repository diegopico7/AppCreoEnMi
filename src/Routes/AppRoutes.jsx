import React from "react";
import Portada from "../pages/Portada";
import Inicio from "../pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recetas from "../pages/Recetas";
import Audios from "../pages/Audios";
import Videos from "../pages/Videos";
import UnMinuto from "../componentes/UnMinuto";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/audios" element={<Audios />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/unminuto" element={<UnMinuto />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
