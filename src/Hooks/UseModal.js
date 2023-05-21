import { useState } from "react";

export const UseModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);
  return [isOpen, openModal, closeModal];
};

//vamos a retornar en modo arreglo
