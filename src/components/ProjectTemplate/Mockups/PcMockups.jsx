import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./allMockups.css"

import pcBase from '../../../imgs/projects/!mockups/pc/pc-min.png';
import laptopBase from '../../../imgs/projects/!mockups/laptop/laptop-min.png';

gsap.registerPlugin(ScrollTrigger);

function PcMockups({ imgSrc = "src/imgs/projects/Figma/PC-Home.png", ...rest }) {

    const laptopRef = useRef(null);
    const pcRef = useRef(null);
    const laptopImgRef = useRef(null);
    const pcImgRef = useRef(null);

    useEffect(() => {

        // pop-up pc
        gsap.fromTo(
            [pcRef.current],
            { y: "50%" },
            {
                y: "0%",
                ease: "none",
                scrollTrigger: {
                    trigger: laptopRef.current,
                    start: "top 100%",
                    end: "top 50%",
                    scrub: true,
                }
            }
        );

        // pop-up laptop
        gsap.fromTo(
            [laptopRef.current],
            { y: "100%" },
            {
                y: "0%",
                ease: "none",
                scrollTrigger: {
                    trigger: laptopRef.current,
                    start: "top 100%",
                    end: "top 50%",
                    scrub: true,
                }
            }
        );

        // screen scroll
        gsap.fromTo(
            [laptopImgRef.current, pcImgRef.current],
            { y: "0%" },
            {
                y: "-19%",
                ease: "none",
                scrollTrigger: {
                    trigger: laptopRef.current,
                    start: "top 50%",
                    end: "top -20%",
                    scrub: true,
                }
            }
        );

        // cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className='flex w-[100%] justify-around relative' {...rest}>
            {/* laptop */}
            <div className="laptop-mockup-wrapper" ref={laptopRef}>
                {/* laptop base */}
                <img src={laptopBase} alt="Laptop base" className="mockup-base" />
                {/* mockup */}
                <div className="mockup-screen laptop-mask">
                    <div className='laptop-sweep'></div>
                    <div className='mockup-laptop-img'>
                        <img
                            ref={laptopImgRef}
                            src={imgSrc}
                            alt="App screenshot"
                            className="mockup-img"
                        />
                    </div>
                </div>
            </div>

            {/* pc */}
            <div className="pc-mockup-wrapper" ref={pcRef}>
                {/* pc base */}
                <img src={pcBase} alt="PC base" className="mockup-base" />
                {/* mockup */}
                <div className="mockup-screen pc-mask">
                    <div className='pc-sweep'></div>
                    <div className='mockup-pc-img'>
                        <img
                            ref={pcImgRef}
                            src={imgSrc}
                            alt="App screenshot"
                            className="mockup-img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PcMockups;