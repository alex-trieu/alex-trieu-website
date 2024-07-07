import React from 'react';
import './HorizontalTimeline.css';

const HorizontalTimeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">May 2021 - November 2021</div>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>Technology Consultant</h4>
            <p>Target</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">February 2023 - May 2023</div>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>Data Science Research Intern</h4>
            <p>Aspiranet</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">May 2023 - August 2023</div>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>Technology Specialist</h4>
            <p>MediZen Advanced Imaging</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">June 2024 - August 2024</div>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>Software Engineer Intern - Backend</h4>
            <p>Fluxergy</p>
          </div>
        </div>
        <div className="timeline-line"></div> {/* Moved inside the timeline */}
      </div>
    </div>
  );
};

export default HorizontalTimeline;
