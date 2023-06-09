import React from "react";
import "./receta.css";
import RecetasIndividual from "../componentes/RecetasIndividual";
import Footer from "../componentes/Footer";
import { recetario } from "../data/recetario";

const Recetas = () => {
  const recetarioList = recetario.map((r) => {
    return (
      <>
        <RecetasIndividual
          titulo={r.nombre}
          ingrediente1={r.producto1}
          ingrediente2={r.producto2}
          ingrediente3={r.producto3}
          ingrediente4={r.producto4}
          ingrediente5={r.producto5}
          prepar={r.prepara1}
          prepar1={r.prepara2}
          prepar2={r.prepara3}
          prepar3={r.prepara4}
          imagen={r.img}
        />
      </>
    );
  });

  return (
    <>
      <main className="contenedor-recetas">
        <h1 className="titulo1">Creo en Mi</h1>
        <h2 className="subtitulo-receta">
          Come sano, cambia tus malos habitos, aqui encontraras recetas
          saludables y ¡ricas!
        </h2>
        <br />
        {recetarioList}
        <br />
        <Footer />
      </main>
    </>
  );
};

export default Recetas;
