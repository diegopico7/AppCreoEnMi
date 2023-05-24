import React from "react";
import Modal from "./Modal";
import "../componentes/modal.css";
import "../componentes/estado.css";
import { UseModal } from "../Hooks/UseModal";
import imgModal1 from "../img/fondofelicidad.jpg";
import imgModal2 from "../img/fondofelicidad2.jpg";
import imgModal3 from "../img/fondofelicidad3.jpg";
import imgModal4 from "../img/fondofelicidad4.jpg";
import imgModal5 from "../img/felicidad1.jpg";
import imgModal6 from "../img/fondo1.jpg";

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
        <h4> Ansiosa/o</h4>
      </button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img className="img-modales" src={imgModal1} alt="FondoPaisaje" />
      </Modal>
      <button className="estado" onClick={openModal2}>
        <h4> Triste</h4>
      </button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          laboriosam labore et natus adipisci iure fugiat beatae? Repellendus,
          facilis, delectus commodi in laudantium culpa quo, ab accusamus
          cupiditate adipisci corporis!
        </p>
        <img className="img-modales" src={imgModal4} alt="Meditando" />
      </Modal>

      <button className="estado" onClick={openModal3}>
        <h4>Cansada/o </h4>
      </button>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <h3>Modal 3</h3>
        <p>Hola este es el contenido de mi modal 3</p>
        <img className="img-modales" src={imgModal2} alt="FondoPaisaje" />
      </Modal>

      <button className="estado" onClick={openModal4}>
        <h4> Agradecida</h4>
      </button>
      <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
        <h3>Modal 4</h3>
        <p>Hola este es el contenido de mi modal 4</p>
        <img className="img-modales" src={imgModal3} alt="FondoPaisaje" />
      </Modal>

      <button className="estado" onClick={openModal5}>
        <h4>Insomnio </h4>
      </button>
      <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
        <h3>Modal 5 </h3>
        <p>Hola este es el contenido de mi modal 5</p>
        <img className="img-modales" src={imgModal5} alt="FondoPaisaje" />
      </Modal>

      <button className="estado" onClick={openModal6}>
        <h4>Enojada/o </h4>
      </button>
      <Modal isOpen={isOpenModal6} closeModal={closeModal6}>
        <h3>Modal 6 </h3>
        <p>Hola este es el contenido de mi modal 6</p>
        <img className="img-modales" src={imgModal6} alt="FondoPaisaje" />
      </Modal>
    </div>
  );
};
