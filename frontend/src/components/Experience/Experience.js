import React from 'react';
import HorizontalTimeline from './HorizontalTimeline';
import './Experience.css'
const Experience = () => {
  return (
    <div id='experience' className='experience-container'>
      <h2 className='experience-header'>Experience Timeline</h2>
      <HorizontalTimeline />
    </div>
  );
};

export default Experience;
