import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'Flor CSS',
        description: 'Un proyecto que muestra el uso de CSS para crear un diseño atractivo y responsivo.',
        link: 'https://jhonziz2.github.io/flor_css/'
    },
    // Puedes agregar más proyectos aquí
];

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <h1>Mis Proyectos</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        link={project.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;