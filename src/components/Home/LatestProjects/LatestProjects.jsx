import React from 'react';
import { Link } from 'react-router-dom';
import "./latestProjects.css"
import ProjectCard from '../../ProjectCard/ProjectCard';
import { projects } from '../../../data/projectData';

function LatestProjects() {
    // get projects
    const latestProjects = projects.slice(0,4);

    return (
        <>
            <section class="latest-projects relative grey-bg-lines-darker text-center">

                <div className='stars-bottom'></div>

                <div className='precomp-bottom'></div>

                <div className='light-bottom'></div>


                <div className='container relative z-2'>

                    <h2 class="font-bold">My Latest Projects</h2>
                    <p class="max-w-xl">
                        A showcase of my work, from branding & motion graphics to interactive UI designs.
                    </p>


                    {/* <!-- grid wrapper --> */}
                    <div class="projects-grid">

                        {latestProjects.map(project => (
                            <ProjectCard
                                key={project.slug}
                                image={project.thumbnail}
                                title={project.title}
                                client={project.client}
                                tag={project.type}
                                link={`/project/${project.slug}`}
                            />
                        ))}

                    </div>

                    {/* <!-- btn --> */}

                    <Link to="/projects" className="btn btn-white">
                        Discover More
                        <span className="material-icons-outlined text-sm">arrow_outward</span>
                    </Link>

                </div>


            </section>

        </>
    );
};

export default LatestProjects;