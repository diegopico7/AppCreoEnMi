import React from "react";
import "./unminuto.css";
import video1 from "../img/videominuto1.mp4";
import Titulo from "../componentes/Titulo";
import Footer from "../componentes/Footer";

const UnMinuto = () => {
  return (
    <>
      <section className="unminuto-conteiner">
        <Titulo />
        <article className="card">
          <h4 className="instrucciones">
            En esta sección vas a tener tu minuto para hacer una pausa y
            agradecer todo lo que tienes.
          </h4>
          <h2>Gratitud</h2>
          <p>Durante el próximo minuto agradece todo lo que tienes</p>
        </article>
        <article className="card">
          <video src={video1} width="90%" controls></video>
          <h2>Sueños</h2>
          <p>
            ¡Durante 1 minuto concéntrate en los sueños que tienes, atraelos
            hacia tí
          </p>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default UnMinuto;
