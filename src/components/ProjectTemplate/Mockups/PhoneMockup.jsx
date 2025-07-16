import React, { forwardRef, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import phoneBase from '../../../imgs/projects/!mockups/phone/phone-min.png';
import "./allMockups.css"

gsap.registerPlugin(ScrollTrigger);

const PhoneMockup = forwardRef(function PhoneMockup(props, ref) {
    const { imgSrc = "src/imgs/projects/Figma/PC-Home.png", ...rest } = props;

    //ref || fwref
    const localWrapperRef = useRef(null);
    const wrapperRef = ref || localWrapperRef;
    const imgRef = useRef(null);

    useEffect(() => {
        // ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        if (wrapperRef && wrapperRef.current && imgRef.current) {
            gsap.fromTo(
                wrapperRef.current,
                { y: "50%" },
                {
                    y: "0%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top 100%",
                        end: "top 50%",
                        scrub: true,
                    }
                }
            );

            gsap.fromTo(
                imgRef.current,
                { y: "0%" },
                {
                    y: "-19%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top 60%",
                        end: "top -20%",
                        scrub: true,
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [imgSrc, wrapperRef]);

    return (
        <div className="phone-mockup-wrapper" ref={wrapperRef} {...rest}>
            <img src={phoneBase} alt="Phone base" className="mockup-base" />
            <div className="mockup-screen phone-mask">
                <div className="phone-sweep"></div>
                <div className="mockup-phone-img">
                    <img
                        ref={imgRef}
                        src={imgSrc}
                        alt="App screenshot"
                        className="mockup-img"
                    />
                </div>
            </div>
        </div>
    );
});

export default PhoneMockup;