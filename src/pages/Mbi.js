import React from 'react';
import styles from './Mbi.module.css';
import backgroundImage from '../assets/barcelona-city.jpg';

function Mbi() {
  return (
    <div className={styles.container}>
      <img
        className={styles.backgroundImage}
        src={backgroundImage}
        alt='Background'
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.circle}>1</div>
          <div className={styles.text}>
            <ul>
              <li>Приемлемые цены без наценок от</li>
            </ul>
            <p>
              посредников Мы сотрудничаем с ведущими компаниями напрямую и имеем
              более 80 партнеров в различных сферах.
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.circle}>2</div>
          <div className={styles.text}>
            <ul>
              <li> Решение задач под ключ</li>
            </ul>
            <p>
              Сопровождение Вашего дела от начала до самого конца, решая
              бюрократические процедуры на каждом этапе оперативно и качественно
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.circle}>3</div>
          <div className={styles.text}>
            <ul>
              <li> Оптимальные решения любой поставленной задачи Каждый</li>
            </ul>
            <p>
              специалист нашей команды специализируется на отдельной отрасли
              права, что помогает подобрать самое лучшее решение для вас, исходя
              из ваших потребностей и возможностей
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mbi;
