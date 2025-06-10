import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Bienvenido a mi Portfolio</h1>
                <p>
                    Soy un desarrollador apasionado por crear soluciones innovadoras y efectivas. 
                    Aquí podrás encontrar algunos de mis proyectos más destacados.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;