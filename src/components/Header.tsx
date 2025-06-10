import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a separate CSS file for header styles

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Mi Portfolio</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/projects">Proyectos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;