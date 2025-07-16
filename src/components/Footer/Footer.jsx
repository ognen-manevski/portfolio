import React from 'react';
import "./footer.css"

function Footer() {
    return (
        <>
            <footer>

                <div className='container'>



                    <div className='footer-txt'>
                        <h3 className='font-semibold text-[2rem]'>Ognen Manevski</h3>
                        <p>Designer & Front-End Developer</p>
                        <p>
                            <a
                                href="mailto: ognen.manevski@gmail.com"
                                target="_blank">
                                ognen.manevski@gmail.com
                            </a>
                        </p>
                    </div>


                    <nav>
                        <a
                            className='btn'
                            href="https://www.linkedin.com/in/ognen-manevski-design/"
                            target="_blank"
                            rel="noopener noreferrer">
                            LinkedIn <span className="material-icons-outlined">arrow_outward</span>
                        </a>
                        <a
                            className='btn'
                            href="https://github.com/ognen-manevski"
                            target="_blank"
                            rel="noopener noreferrer">
                            GitHub <span className="material-icons-outlined">arrow_outward</span>
                        </a>
                        <a
                            className='btn'
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer">
                            Discord <span className="material-icons-outlined">arrow_outward</span>
                        </a>
                        <a
                            className='btn'
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer">
                            Viber <span className="material-icons-outlined">arrow_outward</span>
                        </a>
                    </nav>

                </div>

                <div className='copy'>
                    <p>©Ognen Manevski - <a>Avenga Academy.</a><br />Crafted with passion.</p>
                </div>

            </footer >


        </>
    );
};

export default Footer;