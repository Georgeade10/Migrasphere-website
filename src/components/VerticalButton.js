import React from 'react';
import style from './VerticalButton.module.css';

function VerticalButton(props) {
  return (
    <button
      className={`${props.className} ${style['vertical-button']}`}
      onClick={props.onClick}
    >
      <span>Click Here</span>
    </button>
  );
}

export default VerticalButton;
