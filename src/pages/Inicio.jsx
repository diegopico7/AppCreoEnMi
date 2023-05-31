import * as React from "react";
import "./Inicio.css";
import ComoTeSientes from "../componentes/ComoTeSientes";
import Titulo from "../componentes/Titulo";
import { FooterArriba, RedesSociales } from "../componentes/Footer";
import meditacion2 from "../img/1minuto.jpg";
import Receta111 from "../img/receta/receta111.jpg";
import video1 from "../img/meditacion02.jpg";
import audio1 from "../img/meditacion2.jpg";
import { Link } from "react-router-dom";
import EfectoRotacion from "../componentes/EfectoRotacion";

const Inicio = () => {
  return (
    <>
      <main className="body-inicio">
        <FooterArriba />
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
        <section className="rotacion">
          <EfectoRotacion />
        </section>

        <article className="receta-inicio">
          <h2 className="sub-rec">Comé Sano</h2>
          <h3>Recetas Saludables</h3>
          <Link to="/Recetas">
            <img src={Receta111} alt="Recetas" className="imgunminuto" />
          </Link>
        </article>

        <article className="receta-inicio">
          <h2 className="sub-rec">Visita otras secciones</h2>
          <h3>Videos, audios</h3>
          <div className="cont-otras">
            <Link to="/Videos">
              <img src={video1} alt="Recetas" className="otras-img" />
            </Link>
            <Link to="/Audios">
              <img src={audio1} alt="Recetas" className="otras-img" />
            </Link>
          </div>
        </article>

        <RedesSociales />
      </main>
    </>
  );
};

export default Inicio;
