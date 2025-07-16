import React from 'react';

function GalleryImage({ image, onImageClick }) {
    
    const handleImageClick = () => {
        onImageClick(image.src, image.title);
    };

    const handleButtonClick = (e) => {
        e.stopPropagation();
        onImageClick(image.src, image.title);
    };

    return (
        <div 
            className={`gallery-img-wrap polygon-clip-border`}
            onClick={handleImageClick}
        >
            <div className='relative z-2'>
                <div className={`gallery-img polygon-clip relative`}>
                    <img src={image.src} alt={image.alt || image.title} />
                </div>

                <div className='flex justify-between items-center gallery-title-container'>
                    <p>{image.title}</p>
                    <a
                        href='#'
                        className='btn'
                        style={{ paddingRight: "0" }}
                        onClick={handleButtonClick}
                    >
                        View Larger
                        <span className="material-symbols-outlined">
                            arrow_outward
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default GalleryImage;