import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./projectBody.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// PROJECT DATA
import { projects } from '../../../data/projectData.js';

import ProgramIcon from '../../ProgramIcons/ProgramIcons';
import PhoneMockup from '../Mockups/PhoneMockup';
import PcMockups from '../Mockups/PcMockups';
import Modal from '../Modal/Modal';
import GalleryImage from "../GalleryImage/GalleryImage.jsx"
import GalleryVideo from "../GalleryImage/GalleryVideo.jsx"

gsap.registerPlugin(ScrollTrigger);

function ProjectBody() {
    const iconRefs = useRef([]);
    const { projectSlug } = useParams();

    // Find current project
    const currentProject = projects.find(project => project.slug === projectSlug);

    // MODAL state
    const [modalData, setModalData] = useState({
        isOpen: false,
        imageSrc: '',
        title: ''
    });

    useEffect(() => {

        // ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // programs animation
        if (iconRefs.current.length && currentProject && currentProject.madeUsing) {
            gsap.fromTo(
                iconRefs.current,
                { y: "50%", opacity: 0 },
                {
                    y: "0%",
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".programs-section",
                        start: "top 80%",
                        end: "top 40%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [projectSlug, currentProject]); // Add dependencies

    // if no project found
    if (!currentProject) {
        return (
            <div className="project-not-found">
                <h2>Project not found</h2>
                <p>The requested project could not be found.</p>
            </div>
        );
    }

    // Open modal
    const openModal = (imageSrc, title) => {
        setModalData({
            isOpen: true,
            imageSrc,
            title
        });
    };

    // Close modal
    const closeModal = () => {
        setModalData({
            isOpen: false,
            imageSrc: '',
            title: ''
        });
    };

    return (
        <>
            <section className="project-body-template relative grey-bg-lines-repeat text-center">
                <div className='bottom-blue'></div>
                <div className='container'>

                    {/* Section 1 */}
                    {currentProject.section1 && (
                        <div className='div-half flex gap-[4rem] justify-center'>
                            <div className='flex w-[100%] justify-around'>
                                <div className='project-text text-left'>
                                    <h3 className='font-semibold'>
                                        {currentProject.section1.title}
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: currentProject.section1.content }} />
                                </div>
                            </div>
                            <div className='flex w-[100%] justify-around'>
                                {currentProject.section1.imageType === 'mockup' ? (
                                    <PcMockups imgSrc={currentProject.section1.image} />
                                ) : (
                                    <div className='w-[100%] polygon-clip hover-s'>
                                        <img src={currentProject.section1.image} alt={currentProject.section1.title} />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Section 2 */}
                    {currentProject.section2 && (
                        <div className='div-half second-h flex gap-[4rem] justify-center'>
                            <div className='flex w-[100%] justify-around'>
                                {currentProject.section2.imageType === 'mockup' ? (
                                    <PhoneMockup imgSrc={currentProject.section2.image} />
                                ) : (
                                    <div className='w-[100%] polygon-clip hover-s'>
                                        <img src={currentProject.section2.image} alt={currentProject.section2.title} />
                                    </div>
                                )}
                            </div>
                            <div className='flex w-[100%] justify-around'>
                                <div className='project-text text-left'>
                                    <h3 className='font-semibold'>
                                        {currentProject.section2.title}
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: currentProject.section2.content }} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Programs */}
                    {currentProject.madeUsing && currentProject.madeUsing.length > 0 && (
                        <div className='programs-section'>
                            <h3 className='font-semibold'>Made Using:</h3>
                            <div className='programs-grid'>
                                {currentProject.madeUsing.map((name, i) => (
                                    <ProgramIcon
                                        key={name}
                                        name={name}
                                        template="frame"
                                        className="hover:scale-[1.05] transition"
                                        ref={el => iconRefs.current[i] = el}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Gallery */}
                    {currentProject.galleryImages && currentProject.galleryImages.filter(item => item.type !== "video" || item.type === "video").length > 0 && (
                        <div className='gallery-section'>
                            <h3 className='font-semibold'>Gallery:</h3>
                            <div className='gallery-grid'>
                                {/* videos */}
                                {currentProject.galleryImages
                                    .filter(item => item.type === "video" && item.url)
                                    .map(videoItem => (
                                        <GalleryVideo key={videoItem.id} video={videoItem} />
                                    ))}
                                {/* images */}
                                {currentProject.galleryImages
                                    .filter(item => item.type !== "video")
                                    .map((image) => (
                                        <GalleryImage
                                            key={image.id}
                                            image={image}
                                            onImageClick={openModal}
                                        />
                                    ))}
                            </div>
                            <div className='flex justify-center gap-4'>
                                {/* buttons */}
                                {currentProject.btns && currentProject.btns.map((btn, index) => {
                                    if (!btn.url) return null;
                                    let buttonText = '';
                                    let icon = 'arrow_outward';

                                    // defaults
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

                                    // 1st blue
                                    const shouldBeBlue = btn.blue === "yes" || (currentProject.btns.length >= 2 && index === 0);
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
                                })}
                            </div>
                        </div>
                    )}

                </div>
            </section>

            {/* Modal */}
            <Modal
                isOpen={modalData.isOpen}
                closeModal={closeModal}
                imageSrc={modalData.imageSrc}
                title={modalData.title}
            />
        </>
    );
}

export default ProjectBody;