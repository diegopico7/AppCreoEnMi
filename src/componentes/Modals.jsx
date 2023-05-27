import React from "react";
import Modal from "./Modal";
import "../componentes/modal.css";
import "../componentes/estado.css";
import { UseModal } from "../Hooks/UseModal";
import imgModal1 from "../img/agradecido.jpg";
import imgModal6 from "../img/felicidad1.jpg";

export const Modals = () => {
  //aqui vamos invocar esta variable de estado con el modal
  const [isOpenModal1, openModal1, closeModal1] = UseModal(false);
  const [isOpenModal2, openModal2, closeModal2] = UseModal(false);
  const [isOpenModal3, openModal3, closeModal3] = UseModal(false);
  const [isOpenModal4, openModal4, closeModal4] = UseModal(false);
  const [isOpenModal5, openModal5, closeModal5] = UseModal(false);
  const [isOpenModal6, openModal6, closeModal6] = UseModal(false);

  return (
    <div className="contenedor-modales">
      <button onClick={openModal1} className="estado">
        <h4> Agradecida</h4>
      </button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Agradecida/o</h3>
        <p>
          Cuando comienzas a agradecer, todo se multiplica, si continuas
          desarrollando el agradecimiento diario puedes traer sentimientos mas
          agradables El agradecimiento es una de las cualidades más
          indispensable para tener una vida llena de <b> Felicidad</b>
        </p>
        <img className="img-modales" src={imgModal1} alt="FondoPaisaje" />
      </Modal>
      <button className="estado" onClick={openModal2}>
        <h4> Ansiosa/o</h4>
      </button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Ansiosa/o</h3>
        <p>
          Sentir ansiedad puede ser desagradable e incomodo. Es un mecanismo de
          defensa natural del organismo frente a estimulos externos o internos
          que son percibidos por el individuo como amenazantes o peligrosos.
          Consejos: Practica la respiración profunda, identifica y desafía los
          pensamientos negativos, establece rutinas y estructuras, practica
          técnica de relajación, manten un estilo de vida saludable, practica la
          autorreflexión y el autocuidado. Recuerda en nuestra app encuentras
          meditaciones, audios y videos para poner en práctica.
        </p>
        {/* <img className="img-modales" src={imgModal4} alt="Meditando" /> */}
      </Modal>

      <button className="estado" onClick={openModal3}>
        <h4>Cansada/o </h4>
      </button>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <h3>Cansada/o</h3>
        <p>
          Aprender a reconocer el cansancio es saber escuchar a nuestro cuerpo,
          el cuerpo habla y hay que prestarle atención, hay que tomarnos un
          momento para parar, descansar, tener un tiempo de tranquilidad y hacer
          una pausa. Concejos: Prioriza el descanso y el sueño adecuado, mantén
          una alimentación adecuada, haz ejercicios regularmente, gestiona el
          estrés, descansa y recarga durante el día, establece límites y
          prioridades.
        </p>
        {/* <img className="img-modales" src={imgModal2} alt="FondoPaisaje" /> */}
      </Modal>

      <button className="estado" onClick={openModal4}>
        <h4> Triste</h4>
      </button>
      <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
        <h3>Triste</h3>
        <p>
          Aunque sea difícil y cueste entender, podemos comprender que sentir
          tristeza puede ser util, mas haya que sea dolorosa o incomoda debemos
          intentar que sea el punto de partida para empezar un proceso de
          aceptación de la realidad. Consejos: Permítete sentir y aceptar la
          tristeza, busca apoyo emocional, mantén una rutina saludable, practica
          el atocuidado, establece metas realistas, encuentra actividades que te
          brinden alegría, practica la autocompasión.
        </p>
        {/* <img className="img-modales" src={imgModal3} alt="FondoPaisaje" /> */}
      </Modal>

      <button className="estado" onClick={openModal5}>
        <h4>Enojada/o </h4>
      </button>
      <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
        <h3>Enojado </h3>
        <p>
          El enojo es una emoción natural,que suele surgir como respuesta a una
          situación o evento que percibimos como injusto, frustrante o
          irritante, es importante reconocerlo, y buscar formas saludables de
          manejarlo, y expresarlo. Consejos: Reconoce y acepta tus emociones,
          practica tu autorregulación emocional, comunícate de manera acertiva,
          busca soluciones constructivas, practica técnicas de relajación,
          Medita con nuestra app <b> CreoEnMi </b>
        </p>
        {/* <img className="img-modales" src={imgModal5} alt="FondoPaisaje" /> */}
      </Modal>

      <button className="estado" onClick={openModal6}>
        <h4>Felicidad </h4>
      </button>
      <Modal isOpen={isOpenModal6} closeModal={closeModal6}>
        <h3>Felicidad</h3>
        <p className="felicidad">
          La felicidad es un estado emocional positivo, no es algo que se
          alcanza facilmente, es algo que va mas haya de lo que podemos ver,
          tocar o soñar, ya que esta relacionada con nuesra propia manera de ver
          la vida y vivir las situaciones que se presentan. Consejos: ❤Cultiva
          relaciones positivas, practica la gratitud, encuentra significado y
          propósito, haz actividades que te apasionen, contribuye a los demas.
        </p>
        <img className="img-modales" src={imgModal6} alt="FondoPaisaje" />
      </Modal>
    </div>
  );
};
