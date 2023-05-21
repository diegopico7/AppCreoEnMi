import React from "react";
import "./recetaindividual.css";
import comida2 from "../img/comida1.jpg";

const RecetasIndividual = (props) => {
  return (
    <section className="contenedor-receta">
      <h2>
        {props.titulo}
        {props.title2}
        {props.title3}
        {props.title4}
      </h2>
      <article className="receta">
        <img src={comida2} alt="receta1" />
        <ul className="lista-ingredientes">
          <li>Ingredientes</li>
          <li>{props.ingredientes1}</li>
          <li>{props.ingrediente2}</li>
          <li>{props.ingrediente3}</li>
          <li>{props.ingrediente4}</li>
          <li> {props.ingrediente5}</li>
        </ul>
      </article>
      <dl className="preparacion">
        <dt className="lista-preparacion">Preparación: </dt>
        <dd className="lista-preparacion1">
          {props.prepar}
          {props.prepar1}
          {props.prepar2}
          {props.prepar3}
        </dd>
      </dl>
    </section>
  );
};

export default RecetasIndividual;
