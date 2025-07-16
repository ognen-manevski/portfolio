import React from 'react';
import "./clients.css";

// import bg_lines from '../../../imgs/bg-precomp-freeze.png';

// logos import
import Vector0 from '../../../imgs/client_logos/client_logo-0.svg';
import Vector1 from '../../../imgs/client_logos/client_logo-1.svg';
import Vector2 from '../../../imgs/client_logos/client_logo-2.svg';
import Vector3 from '../../../imgs/client_logos/client_logo-3.svg';
import Vector4 from '../../../imgs/client_logos/client_logo-4.svg';
import Vector5 from '../../../imgs/client_logos/client_logo-5.svg';
import Vector6 from '../../../imgs/client_logos/client_logo-6.svg';
import Vector7 from '../../../imgs/client_logos/client_logo-7.svg';
import Vector8 from '../../../imgs/client_logos/client_logo-8.svg';
import Vector9 from '../../../imgs/client_logos/client_logo-9.svg';
import Vector10 from '../../../imgs/client_logos/client_logo-10.svg';

// logos array
const logos = [
    { src: Vector0, url: "https://client0.com", alt: "Client 0" },
    { src: Vector1, url: "https://client1.com", alt: "Client 1" },
    { src: Vector2, url: "https://client2.com", alt: "Client 2" },
    { src: Vector3, url: "https://client3.com", alt: "Client 3" },
    { src: Vector4, url: "https://client4.com", alt: "Client 4" },
    { src: Vector5, url: "https://client5.com", alt: "Client 5" },
    { src: Vector6, url: "https://client6.com", alt: "Client 6" },
    { src: Vector7, url: "https://client7.com", alt: "Client 7" },
    { src: Vector8, url: "https://client8.com", alt: "Client 8" },
    { src: Vector9, url: "https://client9.com", alt: "Client 9" },
    { src: Vector10, url: "https://client10.com", alt: "Client 10" },
];

function Clients() {
    const allLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className="clients-section grey-bg-lines flex flex-col items-center justify-center overflow-hidden">

            <div className="cleints-gap-bg">

                <h2 className='text-center font-bold text-[5rem]'>Clients I worked with</h2>


                <div className="carousel-track flex gap-16">
                    {allLogos.map((logo, i) => (
                        <a
                            href={logo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gradient-border flex w-[200px]"
                            key={i}
                            tabIndex={0}
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className='position-relative z-1 w-[100%] h-[100%]' />
                        </a>
                    ))}

                </div>

            </div>


        </div>

    );
}

export default Clients;
