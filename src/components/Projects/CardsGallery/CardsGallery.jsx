import React from 'react';
import { Link } from 'react-router-dom';
import "./cardsGallery.css"
import ArrowIcon from '../../../imgs/strelka.svg?react';
import { projects } from '../../../data/projectData';

function CardsGallery({ activeFilter }) {
    // Filter projects based on active filter
    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.type_id === activeFilter);

    return (
        <>
            <section className="contact-me relative grey-bg-lines-darker text-center">
                <div className='bottom-blue'></div>

                <div className='container'>
                    {/* Projects grid */}
                    <div className="projects-grid">
                        {filteredProjects.map(project => (
                            <Link 
                                key={project.slug} 
                                to={`/project/${project.slug}`}
                                className="project-card polygon-clip-border overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
                            >
                                <div className='card-content'>
                                    {/* Image */}
                                    <img 
                                        src={project.thumbnail} 
                                        alt={project.title}
                                        className="polygon-clip-top w-full object-cover" 
                                    />

                                    {/* Content */}
                                    <div className="card-text text-left">
                                        <div className='bg-text font-semibold'>Project</div>
                                        <h3 className="font-semibold">{project.title}</h3>
                                        <p>
                                            {project.client.includes('Client') ? (
                                                <>Designed for <span className="text-blue">{project.client}</span></>
                                            ) : (
                                                project.client
                                            )}
                                        </p>

                                        <div className="card-bottom flex justify-between items-center">
                                            <div className="txt-blue">
                                                {project.type}
                                            </div>
                                            <div className='arrow'>
                                                <ArrowIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Show message if no projects found */}
                    {filteredProjects.length === 0 && (
                        <div className="no-projects text-center py-8">
                            <p className="text-gray-500">No projects found for this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default CardsGallery;