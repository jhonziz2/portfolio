import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
                <div className="social-links">
                    <a href="https://github.com/jhonziz2" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com/tu-perfil" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;