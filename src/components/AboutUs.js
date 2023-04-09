import styles from './AboutUs.module.css';
import logo from '../assets/migra_logo.png';

function AboutUs() {
  return (
    <section className={styles.aboutUsSection} id='section1'>
      <div className={styles.column}>
        <h2>About Us</h2>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            <li>Telephone:</li>
            <li>E-mail:</li>
            <li>Social:</li>
            <li>Instagram:</li>
          </ul>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.imageContainer}>
          <img className={styles.Logo} src={logo} alt='Logo' />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
