import React from "react";
import "./footer.css";
import receta from "../img/comida1.jpg";
import estirar from "../img/fondofelicidad4.jpg";
import meditar1 from "../img/meditar1.jpg";
import respirar1 from "../img/respirar.jpg";
import { Link } from "react-router-dom";
import MenuHamburguesa from "./Menu";
import "./menu.css";
import Instagram from "../img/instagram.svg";
import Tiktok from "../img/ticktock.svg";
import Donacion1 from "../img/agradecido.jpg";

const Footer = () => {
  return (
    <section className="contenedor-footer">
      <Link to="/Inicio" title="Inicio" className="link-footer">
        {" "}
        <img src={meditar1} alt="meditar" />
        <span className="subtitulos-footer">Inicio</span>
      </Link>
      <Link to="/Recetas" title="Recetas" className="link-footer">
        <img src={receta} alt="receta saludables" />
        <span className="subtitulos-footer">Recetas</span>
      </Link>
      <Link to="/Videos" title="Videos" className="link-footer">
        {" "}
        <img src={estirar} alt="estirar" />{" "}
        <span className="subtitulos-footer">Videos</span>
      </Link>
      <Link to="/Audios" title="Audios" className="link-footer">
        <img src={respirar1} alt="respirar" />
        <span className="subtitulos-footer">Audios</span>
      </Link>

      <MenuHamburguesa />
    </section>
  );
};
export default Footer;

export const FooterArriba = () => {
  return (
    <section className="contenedor-footer">
      <Link to="/Inicio" title="Inicio" className="link-footer">
        {" "}
        <img src={meditar1} alt="meditar" />
        <span className="subtitulos-footer">Inicio</span>
      </Link>
      <Link to="/Recetas" title="Recetas" className="link-footer">
        <img src={receta} alt="receta saludables" />
        <span className="subtitulos-footer">Recetas</span>
      </Link>
      <Link to="/Videos" title="Videos" className="link-footer">
        {" "}
        <img src={estirar} alt="estirar" />{" "}
        <span className="subtitulos-footer">Videos</span>
      </Link>
      <Link to="/Audios" title="Audios" className="link-footer">
        <img src={respirar1} alt="respirar" />
        <span className="subtitulos-footer">Audios</span>
      </Link>
      <Link to="/Donacion" title="Donacion" className="link-footer">
        <img src={Donacion1} alt="agradecido" />
        <span className="subtitulos-footer">Donación</span>
      </Link>
    </section>
  );
};

export const RedesSociales = () => {
  return (
    <>
      <section className="contenedor-rs">
        <h5 className="texto-rs">Nuestras redes sociales</h5>
        <article className="contenedor-link-img">
          <Link
            to="https://www.tiktok.com/@.creoenmi"
            target="_blank"
            className="link-rs"
            title="tiktok"
          >
            <img src={Tiktok} alt="instagram" className="img-rs" />
          </Link>
          <Link
            to="https://www.instagram.com/creoenmi25/"
            target="_blank"
            className="links-rs"
            title="instagram"
          >
            <img src={Instagram} alt="instagram" className="img-rs" />
          </Link>
        </article>
        <p className="copyright">Copyright 2023 - Pico Diego</p>
      </section>
    </>
  );
};
