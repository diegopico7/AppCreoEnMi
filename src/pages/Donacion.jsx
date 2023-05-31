import React from "react";
import Titulo from "../componentes/Titulo";
import "../pages/donacion.css";
import { Link } from "react-router-dom";
import Footer from "../componentes/Footer";

export const Donacion = () => {
  return (
    <section className="contenedor-donacion">
      <Titulo />

      <span className="descripcion-donacion">
        Si te sirvio el contenido y aporto valor a tu vida podes ayudarnos y
        donarnos para mejorar la app y el canal recuerda que también estamos en
        tiktok e instagram.{" "}
      </span>
      <p className="descripcion-donacion">
        Abajo te dejamos el link para aportarnos lo que puedas y desees te
        agradeceremos de 💖
      </p>
      <Link
        to="https://link.mercadopago.com.ar/creoenmi25"
        target="_blank"
        className="link-donacion hit-the-floor"
      >
        Apoyanos
      </Link>
      <Footer />
    </section>
  );
};
