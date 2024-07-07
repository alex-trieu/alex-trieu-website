import React from 'react';
import './Projects.css'; // Import your CSS file

const Experience = () => {
  return (
    <div id='projects' className='projects-container'>
      <h2 className='projects-header'>Featured Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <div className="project-content">
            Pickleball
          </div>
        </div>
        <div className="project-item">
          <div className="project-content">
            Intramuse
          </div>
        </div>
        <div className="project-item">
          <div className="project-content">
            Ring Chasing
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
