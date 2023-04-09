import React from 'react';
import style from './OverlaySection.module.css';

const OverlaySection = () => {
  return (
    <section className={style['section-container']}>
      <div className={style['background-image']}></div>
      <div className={style.overlay}>
        <p className={style['white-text']}>
          предоставление всех видов услуг при иммиграции в Испанию и полное
          сопровождение на каждом этапе.
        </p>
      </div>
    </section>
  );
};

export default OverlaySection;
