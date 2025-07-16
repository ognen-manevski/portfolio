import React from 'react';
import ArrowIcon from '../../imgs/strelka.svg?react';
import './projectCard.css';

function ProjectCard({
    image,
    title,
    client,
    clientLink,
    tag,
    link
}) {
    return (
        <>

            {/* <!-- project card --> */}
            <a
                href={link}
                class="project-card polygon-clip-border overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-[1.01]">

                <div className='card-content'>

                    {/* <!-- img --> */}
                    <img src={image} alt={title} class="polygon-clip-top  w-full object-cover " />

                    {/* <!-- content --> */}
                    <div class="card-text text-left">

                        <div className='bg-text font-semibold'>Project</div>

                        <h3 class="font-semibold">{title}</h3>

                        <p>Designed for <a href={clientLink}>{client}</a></p>

                        <div class="card-bottom flex justify-between items-center">

                            <div class="txt-blue">
                                {tag}
                            </div>

                            <div className='arrow'>
                                <ArrowIcon />
                            </div>

                        </div>
                    </div>

                </div>
            </a>
            {/* <!-- project card end --> */}


        </>
    );
}

export default ProjectCard;