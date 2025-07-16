import React from 'react';

function GalleryVideo({ video }) {
    let videoId = '';
    if (video.url.includes('youtu.be/')) {
        videoId = video.url.split('youtu.be/')[1];
    } else if (video.url.includes('v=')) {
        videoId = video.url.split('v=')[1].split('&')[0];
    }

    return (
        <div className={`gallery-img-wrap polygon-clip-border`}>
            <div className='relative z-2'>
                <div className={`gallery-img polygon-clip relative`}>
                    <iframe
                        width="100%"
                        height="auto"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className='flex justify-between items-center gallery-title-container-video'>
                    <p>Project Demo Video</p>
                </div>
            </div>
        </div>
    );
}

export default GalleryVideo;
