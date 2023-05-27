import React from "react";
import "./audio.css";
import Titulo from "../componentes/Titulo";
import AudiosMeditaciones, {
  AudiosMeditaciones1,
  AudiosMeditaciones3,
} from "../componentes/AudiosMeditaciones";
import Footer from "../componentes/Footer";

const Audios = () => {
  return (
    <>
      <main className="contenedor-audios">
        <Titulo />
        <h1 className="titulo-audio">Relajate y escucha</h1>
        <h4 className="subtitulo-audio">
          Aqui vas a encontrar diferentes sonidos para relajar tu mente,
          transportate hacia ese lugar soñado
        </h4>
        <AudiosMeditaciones />
        <AudiosMeditaciones1 />
        <AudiosMeditaciones3 />

        <Footer />
      </main>
    </>
  );
};

export default Audios;
