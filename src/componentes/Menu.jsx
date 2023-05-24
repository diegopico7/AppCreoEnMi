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
            <Link to="/inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/recetas">Recetas</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/audios">Audios</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuHamburguesa;
