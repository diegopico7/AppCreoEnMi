// MenuHamburguesa.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuHamburguesa = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="menu-hamburguesa">
      <button onClick={handleMenuToggle}>Menú</button>
      {menuVisible && (
        <ul className="menu-lista">
          <li>
            <Link to="/Inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/Recetas">Recetas</Link>
          </li>
          <li>
            <Link to="/Videos">Videos</Link>
          </li>
          <li>
            <Link to="/Donacion">Donación</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuHamburguesa;
