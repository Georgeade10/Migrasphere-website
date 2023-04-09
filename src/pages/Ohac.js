import React from 'react';
import Button from '../components/Button';
import styles from './Ohac.module.css';
import logo from '../assets/migra_logo.png';

const Ohac = () => {
  return (
    <div className={styles.containerOh}>
      <div className={styles.bg}>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <img src={logo} alt='Logo' className={styles.logo} />
          <Button className={styles.button} text='Свяжись с нами' />
        </div>
        <div className={styles.column}>
          <p className={styles.paragraph}>
            <p>
              Мы поможем Вам в получении любого типа ВНЖ, а также в решении
              различных вопросов, связанных с переездом для граждан со всего
              мира.
            </p>
            <p>
              Наша команды состоит из профессиональных юристов и экспертов,
              обладающих высокой квалификацией в сфере иммиграции, образования,
              бизнеса и недвижимости. Сотрудничая с нами, вы избавляете себя от
              всех хлопот, связанных с иммиграцией и адаптацией в новой стране,
              до и после переезда.
            </p>
            <p>
              Наши специалисты помогут вам не только в получении ВНЖ Испании, но
              также помогут решить любые сопутствующие вопросы, как: аренда
              жилья, открытие банковского счета, переводы официальных
              документов, подбор учебных центров, страховых компании для вас и
              ваших детей, вплоть до покупки сим-карты и обмена валют.
            </p>
            С первого дня сотрудничества с нами к вам будет прикреплен личный
            помощников, к которому всегда можно обратиться по любому вопросу.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ohac;

/* const Ohac = () => {
  return (
    <div className={styles.ohacContainer}>
      <div className={styles.ohacColumn}>
        <h1 className={styles.whiteH1}>О Нас </h1>
        <p>
          предоставление всех видов услуг при иммиграции в Испанию и полное
          сопровождение на каждом этапе.
        </p>
      </div>
      <div className={styles.ohacColumn}>
        <Button text='Свяжись с нами ' />
      </div>
    </div>
  );
};

export default Ohac; */
