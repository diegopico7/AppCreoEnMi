import React from "react";
import "./Inicio.css";
import ComoTeSientes from "../componentes/ComoTeSientes";
import Titulo from "../componentes/Titulo";
import Footer from "../componentes/Footer";
import meditacion2 from "../img/felicidad1.jpg";
import UnMinuto from "../componentes/UnMinuto";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <main className="body-inicio">
      <Titulo />
      <ComoTeSientes />
      <h2 className="frase-diaria">
        ¡Pensamientos positivos atraen cosas buenas!
      </h2>
      <article className="contenedor-unMinuto">
        <h2>1 minuto para vos!</h2>
        <h3>Haz una pausa</h3>
        <Link to="/unminuto">
          <img
            src={meditacion2}
            alt="meditacion1minuto"
            className="imgunminuto"
          />
        </Link>
      </article>
      <Footer />
    </main>
  );
};

export default Inicio;
