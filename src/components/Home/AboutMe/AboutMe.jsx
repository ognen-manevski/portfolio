import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "./aboutMe.css"
import slika from "../../../imgs/slika-ognen.png"

function AboutMe() {
    return (
        <>
            <section class="about-me relative">

                <div className='lines-bg'></div>

                <div className='light-bg'></div>
                <div className='light-bg second'></div>

                <div className='container relative'>


                    <div className='content flex flex-row items-center justify-around'>


                        <div class="slika">
                            <img src={slika} alt="Ognen Manevski" class="max-w-[100%]" />
                        </div>


                        <div class="text-content max-w-xl">

                            <h2 class="font-bold">About Me</h2>
                            <p>
                                I'm a designer with <strong>8 years of experience</strong> in graphic design, specializing in print,
                                branding, motion graphics, and web assets.
                            </p>

                            <h3 class="font-semibold">Education</h3>

                            <p class="mb-6">
                                With a <strong>Bachelor’s in Industrial Design</strong>, I’ve worked across various creative fields and am now expanding
                                into <strong>UI/UX and front-end development at Qinshift Academy</strong>—blending creativity with functionality to craft
                                seamless digital experiences.
                            </p>

                            <p><strong>Let’s bring ideas to life.</strong></p>


                            <div class="btns">
                                <HashLink smooth to="/#contact" class="btn btn-white">
                                    Get in Touch
                                </HashLink>
                                <a href="#" class="btn btn-transparent">
                                    Download CV
                                    <span class="material-icons-outlined text-sm">arrow_outward</span>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutMe;