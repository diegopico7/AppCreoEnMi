import React from "react";
import "./Inicio.css";
import ComoTeSientes from "../componentes/ComoTeSientes";
import Titulo from "../componentes/Titulo";
import Footer from "../componentes/Footer";
import meditacion2 from "../img/meditacion2.jpg";

const Inicio = () => {
  return (
    <main className="body-inicio">
      <Titulo />
      <section className="comoTeSientes">
        <ComoTeSientes />
      </section>
      <section className="fraseDiaria-contenedor">
        <h2 className="frase-diaria">
          ¡Pensamientos positivos atraen cosas buenas!
        </h2>
      </section>
      <section className="meditacion-contenedor">
        <h2 class="titulo-med">Meditación</h2>
        <h3 class="descripcion-med"> Tenés una meditación para vos!</h3>
        <img class="div3" src={meditacion2} alt="logo-meditacion" />
      </section>
      <Footer />
    </main>
  );
};

export default Inicio;
