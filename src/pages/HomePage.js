import React from 'react';
import Button from '../components/Button';
import style from './HomePage.module.css';
import VerticalButton from '../components/VerticalButton';
import mapImage from '../assets/migra_map.png';
import imgLogo from '../assets/migrasphere-logo-white.png';

function HomePage(props) {
  return (
    <div className={style.HomePage}>
      <div className={style.leftColumn}>
        <h1>Migra Sphere</h1>
        <p>
          предоставление всех видов услуг при иммиграции в Испанию и полное
          сопровождение на каждом этапе.
        </p>
        <Button text='Свяжись с нами' className={style.HomePage__button} />
      </div>
      <div
        className={style.rightColumn}
        style={{
          backgroundImage: `url(${mapImage})`,
          backgroundSize: 'cover',
          height: '90vh',
        }}
      >
        <img
          src={imgLogo}
          alt='migrasphere Logo'
          width={306}
          height={219}
          className={style.migralogo}
        />

        <VerticalButton
          className={style.verticalButton}
          onClick={props.onClick}
        />
      </div>
    </div>
  );
}

export default HomePage;
