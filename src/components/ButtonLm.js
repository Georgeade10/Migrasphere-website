import React from 'react';

function Button_LearnMore(props) {
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
    <button
      className={props.className}
      onClick={props.onClick}
      style={buttonStyle}
    >
      {props.text}
    </button>
  );
}

export default Button_LearnMore;
