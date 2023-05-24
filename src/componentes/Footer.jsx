import React from "react";
import "./footer.css";
import receta from "../img/comida1.jpg";
import estirar from "../img/estirar1.jpg";
import meditar1 from "../img/meditar1.jpg";
import respirar1 from "../img/respirar.jpg";
import { Link } from "react-router-dom";
import MenuHamburguesa from "./Menu";
import "./menu.css";

const Footer = () => {
  return (
    <section className="contenedor-footer">
      <Link to="/inicio">
        {" "}
        <img src={meditar1} alt="meditar" />
      </Link>
      <Link to="/recetas">
        <img src={receta} alt="receta saludables" />
      </Link>
      <Link to="/videos">
        {" "}
        <img src={estirar} alt="estirar" />{" "}
      </Link>
      <Link to="/audios">
        <img src={respirar1} alt="respirar" />
      </Link>

      <MenuHamburguesa />
    </section>
  );
};

export default Footer;
