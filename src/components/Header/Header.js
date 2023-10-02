import React from "react";
import "./Header.css";

function Header() {

    return (
        <header className="header">
            <nav>
                <ul className="menu">

                    <li> <a href="#">Inicio</a> </li>
                    <li className="dropdown">
                        <a href="#">Consumos</a>
                        <ul className="submenu">
                            <li> <a href="#">Agregar</a> </li>
                            <li> <a href="#">Ver</a> </li>
                            <li> <a href="#">Eliminar</a> </li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#">Tarjetas</a>
                        <ul className="submenu">
                            <li> <a href="#">Agregar</a> </li>
                            <li> <a href="#">Ver</a> </li>
                            <li> <a href="#">Eliminar</a> </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default Header;