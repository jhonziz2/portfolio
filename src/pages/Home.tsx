import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
                    <ul className="tech-list">
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Flask</li>
                        <li>PostgreSQL</li>
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