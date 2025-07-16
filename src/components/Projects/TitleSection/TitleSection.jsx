import React from 'react';
import "./titleSection.css"

import ProgramIcon from '../../ProgramIcons/ProgramIcons';

function TitleSection({ activeFilter, setActiveFilter }) {
    const projectTypes = [
        { key: 'all', label: 'All' },
        { key: 'web', label: 'Web and UX/UI' },
        { key: 'design', label: 'Graphic Design' },
        { key: 'video', label: 'Video' },
        { key: '3d', label: '3D' }
    ];

    const categoryIcons = {
        all: ['html', 'css', 'js', 'ps', 'ai', 'figma', 'wp','ae'],
        web: ['html', 'css', 'js', 'react', 'tailwind', 'bs', 'wp', 'gsap', 'vite'],
        design: ['ps', 'ai', 'figma', 'id'],
        video: ['an', 'pr', 'ae'],
        '3d': ['max3', 'maya', 'c4d', 'sw']
    };

    const currentIcons = categoryIcons[activeFilter] || categoryIcons.all;

    return (
        <>
            <section className="title-section grey-bg-lines-darker text-center">
                <div className='container flex justify-around'>
                    <div className='flex flex-col'>
                        <h2 className="font-semibold h2-title">Projects</h2>
                        <h3 className='h3-subtitle font-semibold'>
                            {projectTypes.find(type => type.key === activeFilter)?.label || 'All Projects'}
                        </h3>
                    </div>

                    <div className='title-grid' data-category={activeFilter} key={activeFilter}>
                        {currentIcons.map((iconName) => (
                            <ProgramIcon 
                                key={iconName} 
                                name={iconName} 
                                template="raw" 
                                className="ico" 
                            />
                        ))}
                    </div>
                </div>
            </section>

            <div className='tabs-zero-h'>
                <div className='tabs-grp'>
                    {projectTypes.map(type => (
                        <a
                            key={type.key}
                            className={`tab ${activeFilter === type.key ? 'active' : ''}`}
                            onClick={() => setActiveFilter(type.key)}
                        >
                            {type.label}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

export default TitleSection;