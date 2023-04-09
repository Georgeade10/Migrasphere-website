import React from 'react';
import { Link } from 'react-scroll';

function Button({ type, className, text, onClick }) {
  const isMobile = window.innerWidth <= 768; // added this line to check if it's mobile
  const buttonStyle = {
    height: '58px',
    width: '282px',
    border: 'none',
    background: '#405578',
    color: 'white',
    fontSize: '24px',
  };

  // update button style for mobile devices
  if (isMobile) {
    buttonStyle.height = '40px';
    buttonStyle.width = '158px';
    buttonStyle.fontSize = '18px';
  }

  return (
    <Link to='section4' smooth={true} duration={500} offset={-50}>
      <button
        type={type}
        className={className}
        onClick={onClick}
        style={buttonStyle}
      >
        {text}
      </button>
    </Link>
  );
}

export default Button;
