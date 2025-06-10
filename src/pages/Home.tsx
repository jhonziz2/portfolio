import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiFlask,
  SiPostgresql
} from 'react-icons/si';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="about-section">
                    <h1>Sobre mí</h1>
                    <p>
                        Soy un desarrollador apasionado por crear soluciones innovadoras y efectivas. Me especializo en el desarrollo web y disfruto trabajar con tecnologías modernas.
                    </p>
                </section>
                <section className="technologies-section">
                    <h2>Tecnologías que utilizo</h2>
                    <ul className="tech-list tech-icons">
                        <li><SiPython size={48} title="Python" /></li>
                        <li><SiJavascript size={48} title="JavaScript" /></li>
                        <li><SiReact size={48} title="React" /></li>
                        <li><SiFlask size={48} title="Flask" /></li>
                        <li><SiPostgresql size={48} title="PostgreSQL" /></li>
                    </ul>
                </section>
                <section className="contact-section">
                    <h2>Contacto</h2>
                    <p>Correo: <a href="mailto:jhon.shaco@gmail.com">jhon.shaco@gmail.com</a></p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;