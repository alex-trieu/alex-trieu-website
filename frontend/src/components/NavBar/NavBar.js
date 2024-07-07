import React from 'react';
import './NavBar.css';
import PeaksIcon from '../../assets/peaks-icon.svg';

const NavBar = () => {
  return (
    <nav className='nav'>
        <a href='/' className='site-title'>
          <img src={PeaksIcon} alt='Peaks Icon' className='peaks-icon' />
          ABT
        </a>
        <ul>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#experience'>Experience</a>
            </li>
            <li>
                <a href='/projects'>Projects</a>
            </li>
        </ul>
    </nav>
  );
}

export default NavBar;
