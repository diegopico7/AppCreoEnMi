import React from "react";
import "./Portada.css";
import { Link } from "react-router-dom";
Link;

const Portada = () => {
  return (
    <div className="fondo-portada">
      <h1 className="titulo-portada">Creo en Mi</h1>
      <Link to="/inicio">
        {" "}
        <button className="ingreso-portada">Ingresar</button>
      </Link>
    </div>
  );
};

export default Portada;
