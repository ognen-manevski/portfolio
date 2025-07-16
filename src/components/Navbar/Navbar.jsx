import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
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

                        <Link to="/" className={`btn ${styles["logo-main"]}`}>
                            Ognen Manevski
                        </Link>

                        <div>
                            <HashLink smooth to="/#skills" className="btn">
                                Skills
                            </HashLink>

                            <div className={styles["nav-dropdown-wrapper"]}>

                                {/* navbar 2  */}
                                <div className={styles["navbar-2"]}>

                                    <div className={styles["nav-dropdown"]} >

                                        <Link to="/projects?filter=web" className="btn">
                                            Web
                                            <span className="material-symbols-outlined">
                                                arrow_outward
                                            </span>
                                        </Link>

                                        <Link to="/projects?filter=design" className="btn">
                                            Design
                                            <span className="material-symbols-outlined">
                                                arrow_outward
                                            </span>
                                        </Link>

                                        <Link to="/projects?filter=video" className="btn">
                                            Video
                                            <span className="material-symbols-outlined">
                                                arrow_outward
                                            </span>
                                        </Link>

                                        <Link to="/projects?filter=3d" className="btn">
                                            3D
                                            <span className="material-symbols-outlined">
                                                arrow_outward
                                            </span>
                                        </Link>

                                    </div>

                                </div>

                                <Link to="/projects" className="btn projects-btn">
                                    Projects
                                </Link>

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

                            <Link 
                                to="/projects" 
                                className="btn"
                                onClick={() => setBurgerClicked(false)}
                            >
                                Projects
                            </Link>

                            <Link 
                                to="/projects?filter=web" 
                                className="btn"
                                onClick={() => setBurgerClicked(false)}
                            >
                                Web
                            </Link>

                            <Link 
                                to="/projects?filter=design" 
                                className="btn"
                                onClick={() => setBurgerClicked(false)}
                            >
                                Design
                            </Link>

                            <Link 
                                to="/projects?filter=video" 
                                className="btn"
                                onClick={() => setBurgerClicked(false)}
                            >
                                Video
                            </Link>

                            <Link 
                                to="/projects?filter=3d" 
                                className="btn"
                                onClick={() => setBurgerClicked(false)}
                            >
                                3D
                            </Link>

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