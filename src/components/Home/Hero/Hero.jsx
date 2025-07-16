import React, { useEffect, useRef, useState } from "react";
import { HashLink } from 'react-router-hash-link';
import "./hero.css";
import bgLoop from "../../../videos/bg-loop.mp4";
import heroBG from "../../../imgs/hero-banner-precomp.jpg";
import stars from "../../../imgs/stars-12.jpg";

function Hero() {
    const cursorRef = useRef(null);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const heroRect = cursorRef.current.parentElement.getBoundingClientRect();
            const x = e.clientX - heroRect.left;
            const y = e.clientY - heroRect.top;
            setCursor({ x, y });
            if (cursorRef.current) {
                cursorRef.current.style.left = `${x}px`;
                cursorRef.current.style.top = `${y}px`;
            }
        };

        const heroEl = cursorRef.current?.parentElement;
        if (heroEl) {
            heroEl.addEventListener("mousemove", handleMouseMove);
        }
        return () => {
            if (heroEl) {
                heroEl.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, []);

    // mask
    const maskStyle = {
        WebkitMaskImage: `radial-gradient(300px at ${cursor.x}px ${cursor.y}px, #fff -50%, transparent 100%)`,
        maskImage: `radial-gradient(300px at ${cursor.x}px ${cursor.y}px, #fff -50%, transparent 100%)`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
    };

    return (
        <>
            <div className='hero relative overflow-hidden'>
                <div
                    className="hero-bg"
                    style={{ backgroundImage: `url(${heroBG})` }}
                >
                    <div className="bg-gradient"></div>
                    <div
                        className="bg-stars"
                        style={{
                            backgroundImage: `url(${stars})`,
                            ...maskStyle,
                        }}
                    ></div>
                </div>

                <div className="hero-cursor" ref={cursorRef}></div>


                <video src={bgLoop} playsInline muted autoPlay loop></video>

                <div className="container">
                    <h1 className="font-semibold">Design Portfolio</h1>
                    <div className="paragraph">
                        I craft immersive visuals, seamless user experiences and dynamic digital interactions.
                    </div>
                    <HashLink smooth to="/#skills" className="btn btn-blue">Discover More</HashLink>
                </div>
            </div>
        </>
    );
}

export default Hero;