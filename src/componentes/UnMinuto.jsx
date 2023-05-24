import React from "react";
import "./unminuto.css";
import video1 from "../img/incienso.mp4";
import Titulo from "../componentes/Titulo";
import Footer from "../componentes/Footer";

const UnMinuto = () => {
  return (
    <>
      <section className="unminuto-conteiner">
        <Titulo />
        <article className="card">
          <h2>Gratitud</h2>
          <video src={video1} width="80%" controls></video>
          <p>Durante el próximo minuto agradece todo lo que tienes</p>
        </article>
        <article className="card">
          <h2>Sueños</h2>
          <video src={video1} width="80%" controls></video>
          <p>Durante el próximo minuto concéntrate en los sueños que tienes</p>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default UnMinuto;
