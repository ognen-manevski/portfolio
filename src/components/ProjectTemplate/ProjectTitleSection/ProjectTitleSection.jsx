import React from 'react';
import { useParams } from 'react-router-dom';
import "./projectTitleSection.css"

import ArrowIcon from '../../../imgs/strelka.svg?react';
import { projects } from '../../../data/projectData.js';



function ProjectTitleSection() {
    const { projectSlug } = useParams();

    // Find 
    const currentProject = projects.find(project => project.slug === projectSlug);


    if (!currentProject) {
        return (
            <section className="project-title-section grey-bg-lines-darker text-center relative">
                <div className='container'>
                    <h2>Project not found</h2>
                </div>
            </section>
        );
    }

    //button
    const renderButton = (btn, index, totalButtons) => {
        if (!btn.url) return null; // if no url

        let buttonText = '';
        let icon = 'arrow_outward';

        // default
        switch (btn.type) {
            case 'figma':
                buttonText = 'View in Figma';
                break;
            case 'page':
                buttonText = 'View Live Site';
                break;
            case 'git':
            case 'github':
                buttonText = 'View on GitHub';
                break;
            default:
                buttonText = 'View Project';
        }

        // ovr
        if (btn.text) {
            buttonText = btn.text;
        }

        // 1st btn blue
        const shouldBeBlue = btn.blue === "yes" || (totalButtons >= 2 && index === 0);
        const buttonClass = shouldBeBlue ? 'btn btn-blue' : 'btn btn-white';

        return (
            <a
                key={btn.type}
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}>
                {buttonText}
                <span className="material-symbols-outlined">
                    {icon}
                </span>
            </a>
        );
    };
    return (
        <>
            <section className="project-title-section grey-bg-lines-darker text-center relative">

                <div className='bg-text-project-title font-semibold' >
                    Case&nbsp;Study
                </div>

                <div className='container flex justify-around relative z-2 gap-[4rem]'>

                    <div className=' flex flex-col justify-between gap-[1rem]'>

                        <a href="/projects"
                            className='btn back-btn
                             hover:scale-[1.1] hover-div:translateX-[-10px] transition text-[2rem] group'
                        >
                            <div className='arrow-to-gallery scale-x-[-1] w-[40px] group-hover:translate-x-[-10px] transition'>
                                <ArrowIcon />
                            </div>
                            Back To Gallery
                        </a>

                        {/*buttons*/}
                        <div className='btns-div'>
                            {currentProject.btns && currentProject.btns.map((btn, index) => renderButton(btn, index, currentProject.btns.length))}
                        </div>

                    </div>

                    <div className='title-left flex flex-col'>
                        <h2 className="font-semibold h2-title" >{currentProject.title}</h2>
                        <h3 className='h3-subtitle font-semibold'>{currentProject.type}</h3>
                    </div>

                </div>

            </section>
        </>
    );
};

export default ProjectTitleSection;