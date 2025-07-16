import React, { useEffect } from 'react';
import './modal.css';

function Modal({ isOpen, closeModal, imageSrc, title }) {
    // esc
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.classList.add('modal-open');
            document.documentElement.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.classList.remove('modal-open');
        };
    }, [isOpen, closeModal]);

    if (!isOpen) return null;

    return (
        <div
            className="image-modal"
            onClick={closeModal}
            onWheel={(e) => e.stopPropagation()} //scroll lock
        >

            <a className="image-modal-close btn btn-blue" onClick={closeModal}>
                <span className="material-symbols-outlined">close</span>
            </a>

            <div className='modal-img-wrap'>
                <img src={imageSrc}
                    alt={title || "Gallery image"}
                    onClick={e => e.stopPropagation()}
                />
            </div>


        </div>
    );
}

export default Modal;