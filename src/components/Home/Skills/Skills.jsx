import React from 'react';
import "./skills.css"
// import { programIcons, programNames } from '../../ProgramIcons/ProgramIcons';
import ProgramIcon from '../../ProgramIcons/ProgramIcons';


function Skills() {
    return (
        <>
            <section class="my-skills grey-bg-lines-darker text-center" id='skills'>


                <div className='container'>

                    <h2 class="font-semibold" >My Skills</h2>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">

                        {/* <!-- WEB SKILL CARD --> */}
                        <div class="skills-card gradient-border">


                            {/* <!-- Front --> */}
                            <div class="card-front">
                                <h3 class="font-semibold">Web</h3>
                                <div class="bg-text font-semibold">Web</div>
                                <div className='card-bg'>
                                    <div className='circle'></div>
                                    <div className='stripes'></div>
                                </div>
                            </div>



                            {/* <!-- Back --> */}
                            <div class="card-back">

                                {/* icons */}

                                <div className='icons-card-back-web'>
                                    <ProgramIcon name="html" template="raw" className="ico " />
                                    <ProgramIcon name="css" template="raw" className="ico" />
                                    <ProgramIcon name="js" template="raw" className="ico" />
                                    <ProgramIcon name="react" template="raw" className="ico" />
                                    <ProgramIcon name="tailwind" template="raw" className="ico" />
                                    <ProgramIcon name="bs" template="raw" className="ico" />
                                    <ProgramIcon name="gsap" template="raw" className="ico" />
                                    <ProgramIcon name="vite" template="raw" className="ico" />
                                    <ProgramIcon name="wp" template="raw" className="ico" />
                                </div>


                                {/* <div className='back-txt'> */}
                                <h3 class="font-bold">Web</h3>
                                <span>Frontend:</span>
                                <p>HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, GSAP  </p>
                                <span>Dev Tools:</span>
                                <p>Vite, Git, VS Code </p>
                                <a href="/projects?filter=web" class="btn btn-white">
                                    View Web Projects
                                </a>
                                {/* </div> */}
                            </div>
                        </div>

                        {/* Design Skill Card */}
                        <div className="skills-card gradient-border">
                            {/* Front */}
                            <div className="card-front">
                                <h3 className="font-semibold">Design</h3>
                                <div className="bg-text font-semibold">Design</div>
                                <div className='card-bg'>
                                    <div className='circle'></div>
                                    <div className='stripes'></div>
                                </div>
                            </div>
                            {/* Back */}
                            <div className="card-back">
                                <div className='icons-card-back-web others'>
                                    <ProgramIcon name="ps" template="raw" className="ico" />
                                    <ProgramIcon name="ai" template="raw" className="ico" />
                                    <ProgramIcon name="figma" template="raw" className="ico" />
                                    <ProgramIcon name="id" template="raw" className="ico" />
                                </div>
                                <h3 className="font-bold">Design</h3>
                                <span>Skills:</span>
                                <p>Branding, print & digital design, photo manipulation</p>
                                <span>Tools:</span>
                                <p>Photoshop, Illustrator, InDesign, Figma</p>
                                <a href="/projects?filter=design" className="btn btn-white">View Design Projects</a>
                            </div>
                        </div>

                        {/* Video Skill Card */}
                        <div className="skills-card gradient-border">
                            {/* Front */}
                            <div className="card-front">
                                <h3 className="font-semibold">Video</h3>
                                <div className="bg-text font-semibold">Video</div>
                                <div className='card-bg'>
                                    <div className='circle'></div>
                                    <div className='stripes'></div>
                                </div>
                            </div>
                            {/* Back */}
                            <div className="card-back">
                                <div className='icons-card-back-web others'>
                                    <ProgramIcon name="an" template="raw" className="ico" />
                                    <ProgramIcon name="pr" template="raw" className="ico" />
                                    <ProgramIcon name="ae" template="raw" className="ico ico-down" />
                                </div>
                                <h3 className="font-bold">Video</h3>
                                <span>Skills:</span>
                                <p>Motion graphics, video editing, Lottie, ads</p>
                                <span>Tools:</span>
                                <p>After Effects, Premiere Pro, Animate</p>
                                <a href="/projects?filter=video" className="btn btn-white">View Video Projects</a>
                            </div>
                        </div>

                        {/* 3D Skill Card */}
                        <div className="skills-card gradient-border">
                            {/* Front */}
                            <div className="card-front">
                                <h3 className="font-semibold">3D</h3>
                                <div className="bg-text font-semibold">3D</div>
                                <div className='card-bg'>
                                    <div className='circle'></div>
                                    <div className='stripes'></div>
                                </div>
                            </div>
                            {/* Back */}
                            <div className="card-back">
                                <div className='icons-card-back-web others'>
                                    <ProgramIcon name="max3" template="raw" className="ico" />
                                    <ProgramIcon name="sw" template="raw" className="ico" />
                                    <ProgramIcon name="c4d" template="raw" className="ico" />
                                    <ProgramIcon name="maya" template="raw" className="ico" />
                                </div>
                                <h3 className="font-bold">3D</h3>
                                <span>Skills:</span>
                                <p>Product design, modeling, VFX</p>
                                <span>Tools:</span>
                                <p>SolidWorks, Cinema 4D, 3ds Max, Maya</p>
                                <a href="/projects?filter=3d" className="btn btn-white">View 3D Projects</a>
                            </div>
                        </div>


                    </div>
                </div>

            </section>

        </>
    );
};

export default Skills;