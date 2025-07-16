import React, { useState, useEffect } from 'react';
import './backToTop.css';

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // show/hide
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    //top 0
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="back-to-top">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="btn btn-blue">
                    <span className="material-symbols-outlined">
                        stat_2
                    </span>
                </button>
            )}
        </div>
    );
}

export default BackToTop;