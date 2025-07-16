import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import styles from "./styles/Navbar.module.css";

function Navbar() {

    const [burgerClicked, setBurgerClicked] = useState(false);

    const handleBurgerClick = () => {
        setBurgerClicked(!burgerClicked);
    };

    return (
        <>
            <nav className={styles["navbar"]}>

                {/* container  */}

                <div className="container">

                    {/* navbar 1 */}

                    <div className={styles["navbar-1"]}>

                        <a href="/" className={`btn ${styles["logo-main"]}`}>
                            Ognen Manevski
                        </a>

                        <div>
                            <HashLink smooth to="/#skills" className="btn">
                                Skills
                            </HashLink>

                            <div className={styles["nav-dropdown-wrapper"]}>

                                {/* navbar 2  */}
                                <div className={styles["navbar-2"]}>

                                    <div className={styles["nav-dropdown"]} >

                                        <a href="/projects?filter=web" className="btn">
                                            Web
                                            <span className="material-symbols-outlined">
                                                arrow_outward
                                            </span>
                                        </a>

                                        <a href="/projects?filter=design" className="btn">
                                            Design
                                            <span className="material-symbols-outlined">
                                                arrow_outward
                                            </span>
                                        </a>

                                        <a href="/projects?filter=video" className="btn">
                                            Video
                                            <span className="material-symbols-outlined">
                                                arrow_outward
                                            </span>
                                        </a>

                                        <a href="/projects?filter=3d" className="btn">
                                            3D
                                            <span className="material-symbols-outlined">
                                                arrow_outward
                                            </span>
                                        </a>

                                    </div>

                                </div>

                                <a href="/projects" className="btn projects-btn">
                                    Projects
                                </a>

                            </div>

                            <HashLink smooth to="/#contact" className="btn">
                                Contact
                            </HashLink>
                        </div>

                        {/* burger */}
                        <div className={styles["burger-wrapper"]} onClick={handleBurgerClick}>
                            <div className={styles["burger"]}>
                                <div className={`${styles["burger-line"]} ${styles.b1} ${burgerClicked ? styles.clicked : ""}`}></div>
                                <div className={`${styles["burger-line"]} ${styles.b2} ${burgerClicked ? styles.clicked : ""}`}></div>
                                <div className={`${styles["burger-line"]} ${styles.b3} ${burgerClicked ? styles.clicked : ""}`}></div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Mob */}
                <div className={`${styles["mobile-menu"]} ${burgerClicked ? styles["mobile-menu-open"] : ""}`}>
                    <div className="container">
                        <div className={styles["mobile-menu-content"]}>
                            <HashLink 
                                smooth 
                                to="/#skills" 
                                className="btn"
                                onClick={() => setBurgerClicked(false)}
                            >
                                Skills
                            </HashLink>

                            <a 
                                href="/projects" 
                                className="btn"
                                onClick={() => setBurgerClicked(false)}
                            >
                                Projects
                            </a>

                            <a 
                                href="/projects?filter=web" 
                                className="btn"
                                onClick={() => setBurgerClicked(false)}
                            >
                                Web
                            </a>

                            <a 
                                href="/projects?filter=design" 
                                className="btn"
                                onClick={() => setBurgerClicked(false)}
                            >
                                Design
                            </a>

                            <a 
                                href="/projects?filter=video" 
                                className="btn"
                                onClick={() => setBurgerClicked(false)}
                            >
                                Video
                            </a>

                            <a 
                                href="/projects?filter=3d" 
                                className="btn"
                                onClick={() => setBurgerClicked(false)}
                            >
                                3D
                            </a>

                            <HashLink 
                                smooth 
                                to="/#contact" 
                                className="btn"
                                onClick={() => setBurgerClicked(false)}
                            >
                                Contact
                            </HashLink>
                        </div>
                    </div>
                </div>

            </nav>

        </>
    )

}

export default Navbar;