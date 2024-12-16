import React from 'react';

const ProjectCard = ({ title, description, link }) => {
    return (
        <div className="bg-white shadow-md p-4 rounded">
            <h3 className='text-xl font-bold'>{title}</h3>     
            <p className='mt-2 text-gray-600'>{description}</p>
            <a href={link} className='mt-4 inline-block text-blue-500 hover:underline'>View Project</a>   
        </div>
    );
};

export default ProjectCard;