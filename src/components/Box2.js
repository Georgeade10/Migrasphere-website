import React from 'react';
import style from './Box2.module.css';
import Button from './Button';

const Box2 = (props) => {
  return (
    <div className={style.box2}>
      {props.text}
      <Button text='Узнать больше' className={style.box} />
    </div>
  );
};

export default Box2;
