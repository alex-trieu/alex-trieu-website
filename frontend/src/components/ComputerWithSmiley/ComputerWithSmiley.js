import React, { useState, useEffect, useRef } from 'react';
import './ComputerWithSmiley.css';

const ComputerWithSmiley = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const monitorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (monitorRef.current) {
        const monitorRect = monitorRef.current.getBoundingClientRect();
        const monitorCenterX = monitorRect.left + monitorRect.width / 2;
        const monitorCenterY = monitorRect.top + monitorRect.height / 2;

        // Calculate relative position to the center of the monitor
        const relativeX = e.clientX - monitorCenterX;
        const relativeY = e.clientY - monitorCenterY;

        // Adjust these values to control the movement bounds
        const maxXMovement = 135; // Maximum horizontal movement (increase or decrease this value)
        const maxYMovement = 50; // Maximum vertical movement (increase or decrease this value)

        // Ensure the cursor values are clamped within the screen bounds
        const clampedX = Math.max(Math.min(relativeX, maxXMovement), -maxXMovement);
        const clampedY = Math.max(Math.min(relativeY, maxYMovement), -maxYMovement);

        setCursor({ x: clampedX, y: clampedY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const eyeOffsetX = cursor.x / 8;
  const eyeOffsetY = cursor.y / 8;

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className="computer-svg"
    ref={monitorRef}
  >
    
    <g id="PC">
      <path
        d="M57,4H7A1,1,0,0,0,6,5V33a1,1,0,0,0,1,1H57a1,1,0,0,0,1-1V5A1,1,0,0,0,57,4ZM56,32H8V6H56Z"
        style={{ fill: "#1b1a1e" }}
      />
      <path
        d="M57,0H7A5.0059,5.0059,0,0,0,2,5V41a5.0059,5.0059,0,0,0,5,5H24v4H14a1,1,0,0,0-.8945.5527l-5,10A1,1,0,0,0,9,62H55a1,1,0,0,0,.8945-1.4473l-5-10A1,1,0,0,0,50,50H40V46H57a5.0059,5.0059,0,0,0,5-5V5A5.0059,5.0059,0,0,0,57,0ZM4,5A3.0033,3.0033,0,0,1,7,2H57a3.0033,3.0033,0,0,1,3,3V36H4ZM38,51a6.0066,6.0066,0,0,0,6,6,1,1,0,0,0,0-2,3.9958,3.9958,0,0,1-3.858-3h9.24l4,8H10.6182l4-8h9.24A3.9958,3.9958,0,0,1,20,55a1,1,0,0,0,0,2,6.0066,6.0066,0,0,0,6-6V46H38ZM60,41a3.0033,3.0033,0,0,1-3,3H7a3.0033,3.0033,0,0,1-3-3V38H60Z"
        style={{ fill: "#1b1a1e" }}
      />
      <path d="M7,42h6a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z" style={{ fill: "#1b1a1e" }} />
      <path d="M16,42h2a1,1,0,0,0,0-2H16a1,1,0,0,0,0,2Z" style={{ fill: "#1b1a1e" }} />
      <circle cx={30 + eyeOffsetX - 3} cy={16 + eyeOffsetY - 1} r="2" fill="#000000" /> {/* Left Eye */}
      <circle cx={38 + eyeOffsetX - 3} cy={16 + eyeOffsetY - 1} r="2" fill="#000000" /> {/* Right Eye */}
      <path
        d={`M${28 + eyeOffsetX},${24 + eyeOffsetY - 2} Q${32 + eyeOffsetX},${30 + eyeOffsetY - 2} ${36 + eyeOffsetX - 2},${24 + eyeOffsetY - 2}`}
        stroke="#000000"
        strokeWidth="2"
        fill="none"
      /> {/* Smile */}
    </g>
  </svg>
  );
};

export default ComputerWithSmiley;
