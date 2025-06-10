import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'Flor CSS',
        description: 'Un proyecto que muestra el uso de CSS para crear un diseño atractivo y responsivo.',
        link: 'https://jhonziz2.github.io/flor_css/'
    },
    {
        title: 'Portfolio Personal',
        description: 'Sitio web personal construido con React y Vite.',
        link: '#'
    },
    {
        title: 'API REST con Flask',
        description: 'Backend desarrollado con Flask y PostgreSQL.',
        link: '#'
    }
];

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <main>
                <h1>Mis Proyectos</h1>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            title={project.title} 
                            description={project.description} 
                            link={project.link} 
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Projects;