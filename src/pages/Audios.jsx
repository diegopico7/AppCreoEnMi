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
        <br />
        <br />
        <br />
        <br />
        <AudiosMeditaciones />
        <AudiosMeditaciones />
        <AudiosMeditaciones />
        <AudiosMeditaciones />
        <AudiosMeditaciones />

        <Footer />
      </main>
    </>
  );
};

export default Audios;
