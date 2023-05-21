import React from "react";
import "./estado.css";
import "../componentes/modal.css";
import { UseModal } from "../Hooks/UseModal";
import { Modals } from "./Modals";

const Estado = () => {
  const [isOpenModal1, openModal1, closeModal1] = UseModal(false);

  const [isOpenModal2, openModal2, closeModal2] = UseModal(false);
  const [isOpenModal3, openModal3, closeModal3] = UseModal(false);
  const [isOpenModal4, openModal4, closeModal4] = UseModal(false);
  const [isOpenModal5, openModal5, closeModal5] = UseModal(false);
  const [isOpenModal6, openModal6, closeModal6] = UseModal(false);

  return (
    <div>
      <h2 className="titulo-estado">Como te sientes</h2>
      <section className="estado-contenedor">
        <Modals />
      </section>
    </div>
  );
};

export default Estado;
