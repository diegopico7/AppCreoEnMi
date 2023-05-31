import React from "react";
import "./Portada.css";
import { Link } from "react-router-dom";
import Alerta from "../componentes/Alerta";
Link;

const Portada = () => {
  return (
    <div className="fondo-portada">
      <Alerta />
      <span className="bienvenido">Bienvenidos</span>
      <h1 className="titulo-portada">Creo en Mi</h1>
      <Link to="/Inicio">
        {" "}
        <button className="ingreso-portada">Ingresar</button>
      </Link>
    </div>
  );
};

export default Portada;
