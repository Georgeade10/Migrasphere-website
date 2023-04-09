import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/*  <div className={styles.footerContainer}> */}
      <div className={styles.column}>
        <p className={styles.text}>Виды услуг</p>
        <p className={styles.text}>О нас </p>
        <p className={styles.text}>Наши партнеры</p>
      </div>
      <div className={styles.column}>
        <p className={styles.text}>Свяжитесь с нами</p>
        <p className={styles.text}>Контакты </p>
      </div>
      <div className={styles.column}>
        <p className={styles.text}>Телефон:</p>
        <p className={styles.text}>E-mail</p>
        <p className={styles.text}> Мы находимся </p>
      </div>
      {/*  </div> */}
    </footer>
  );
};

export default Footer;
