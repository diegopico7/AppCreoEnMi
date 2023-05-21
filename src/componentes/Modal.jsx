import React from "react";
import "../componentes/modal.css";

//vamos a trabajar con la propiedad por defecto children y vamos a pasarla como parametro esto se llama destructurar y podemos llamarla sin la props.children y va a hacer referencia el contenido que tengamos dentro del componente que esta en Modals.jsx <Modal><h3>Modal 1</h3><p>Hola este es el contenido de mi modal 1</p> <img src={foto13} alt="Animals" /> </Modal>
//const handleModalConteinerClick = (e) => e.stopPropagation(); con esto podemos hacer que no se cierre el modal si presionamos en el contenido del model, con esto detenemos la propagacion del cierre.

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalConteinerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalConteinerClick}>
        <button className="modal-closed" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
