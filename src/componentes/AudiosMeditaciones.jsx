import React from "react";
import "./audiosmeditaciones.css";
import meditacion1 from "../img/musicarelax.mp3";
import meditacion2 from "../img/relax1.mp3";
import meditacion3 from "../img/relax2.mp3";
import foto1 from "../img/meditacion2.jpg";

const AudiosMeditaciones = (props) => {
  // const audioList = audios.map((v) => {
  //   return <h2 title={v.name} descripcion={v.descripcion} />;
  // });

  return (
    <article className="contenedor-audio1">
      <h2>¡Tu lugar, tu paz!</h2>
      <h3>Meditacion 1</h3>
      <h5>Consejo, busca un lugar silencioso y tranquilo</h5>
      <audio src={meditacion1} controls preload="auto" poster={foto1}>
        {foto1}
      </audio>
    </article>
  );
};

export default AudiosMeditaciones;

export const AudiosMeditaciones1 = () => {
  return (
    <article className="contenedor-audio1">
      <h2>¡Tu lugar, tu paz!</h2>
      <h3>Meditacion 1</h3>
      <h5>Consejo, busca un lugar silencioso y tranquilo</h5>
      <audio src={meditacion2} controls preload="auto" poster={foto1}>
        {foto1}
      </audio>
    </article>
  );
};

export const AudiosMeditaciones3 = () => {
  return (
    <article className="contenedor-audio1">
      <h2>¡Tu lugar, tu paz!</h2>
      <h3>Meditacion 1</h3>
      <h5>Consejo, busca un lugar silencioso y tranquilo</h5>
      <audio src={meditacion3} controls preload="auto" poster={foto1}>
        {foto1}
      </audio>
    </article>
  );
};
