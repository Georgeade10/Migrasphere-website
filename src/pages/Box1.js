import React from 'react';
import style from './Box.module.css';

const Box1 = ({ item }) => {
  return (
    <div className={style.box}>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <button>{item.link}</button>
    </div>
  );
};

export default Box1;
