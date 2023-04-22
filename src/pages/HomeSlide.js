import React from 'react';
import Button from '../components/Button';
import style from './HomePage.module.css';
import VerticalButton from '../components/VerticalButton';
import mapImage from '../assets/migra_map.png';

function HomeSlide(props) {
  return (
    <div className={style.HomePage}>
      <div className={style.leftColumn2}>
        <img src={mapImage} alt='' className={style.image2} />
        <VerticalButton
          className={style.verticalButtonSlide}
          onClick={props.onClick}
        />
      </div>
      <div className={style.rightColumn2}>
        <h1>Migra Sphere</h1>
        <p>
          предоставление всех видов услуг при иммиграции в Испанию и полное
          сопровождение на каждом этапе.
        </p>
        <Button className={style.SlideButton} text='Свяжись с нами' />
      </div>
    </div>
  );
}

export default HomeSlide;
