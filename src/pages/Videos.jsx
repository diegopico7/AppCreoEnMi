import React from "react";

import Footer from "../componentes/Footer";
import "./video.css";
import Titulo from "../componentes/Titulo";
import PaginaVideo from "./VideoPagina";

const Videos = () => {
  return (
    <div className="conteiner-video">
      <Titulo />

      <PaginaVideo />

      <Footer />
    </div>
  );
};

export default Videos;
