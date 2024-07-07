import React from 'react';
import './Home.css';
import ComputerWithSmiley from '../ComputerWithSmiley/ComputerWithSmiley';
import ResumeIcon from '../../assets/resume-icon.svg';
import LinkedInIcon from '../../assets/linkedin-icon.svg';
import GitHubIcon from '../../assets/github-icon.svg';
import DownArrow from '../../assets/down-arrow.svg';

const About = () => {
  return (
    <div className='about-container'>
      <ComputerWithSmiley />
      <h1>Alexander Bao Trieu</h1>
      <h3>Software Engineer</h3>
      <ul>
        <li>
          <a href='https://drive.google.com/file/d/1SriyBWCdKKL503MxXnTa7nhK13LufsXH/view?usp=sharing' target="_blank" rel="noopener noreferrer">
            <img className='resume-icon' src={ResumeIcon} alt="Resume Icon" />
            <span className='resume-text'>Resume</span>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/alexander-trieu/' target="_blank" rel="noopener noreferrer">
            <img className='linkedin-icon' src={LinkedInIcon} alt="LinkedIn Icon" />
            <span className='linkedin-text'>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href='https://github.com/alex-trieu' target="_blank" rel="noopener noreferrer">
            <img className='github-icon' src={GitHubIcon} alt="GitHub Icon" />
            <span className='github-text'>GitHub</span>
          </a>
        </li>
      </ul>
      
      {/* Down arrow */}
      <div className="down-arrow-container">
          <button className='down-arrow' onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            <img src={DownArrow} alt="Down Arrow" className='down-arrow-img' />
          </button>
        </div>
    </div>
  );
};

export default About;
