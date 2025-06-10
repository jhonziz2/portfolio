import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a separate CSS file for header styles

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-logo">
                    <h1>Mi Portfolio</h1>
                </div>
                <ul className="navbar-links">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/projects">Proyectos</Link>
                    </li>
                    <li>
                        <a href="#about">Sobre mí</a>
                    </li>
                    <li>
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;