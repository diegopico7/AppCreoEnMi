import React from "react";
import "./audio.css";
import Titulo from "../componentes/Titulo";
import AudiosMeditaciones from "../componentes/AudiosMeditaciones";
import Footer from "../componentes/Footer";

const Audios = () => {
  return (
    <>
      <main className="contenedor-audios">
        <Titulo />
        <h1 className="titulo-audio">Relajate y escucha</h1>
        <AudiosMeditaciones />
        <AudiosMeditaciones />
        <AudiosMeditaciones />

        <Footer />
      </main>
    </>
  );
};

export default Audios;
