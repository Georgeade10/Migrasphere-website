import React from 'react';
import { MdClose } from 'react-icons/md';
import styles from './Overlay.module.css';
import Button from './Button';
import { Link } from 'react-scroll';

const Overlay = ({ item, onClose }) => {
  const handleOverlayClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.overlayContent} onClick={handleOverlayClick}>
        <button className={styles.closeButton} onClick={onClose}>
          <MdClose />
        </button>
        <div className={styles.columnContainer}>
          <div className={styles.columnLeft}>
            <h2 className={styles.overlayTitle}>{item.title}</h2>
            <ul className={styles.overlayList}>
              {item.items.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
            <p className={styles.overlayDescription}>{item.description}</p>
          </div>
          <div className={styles.columnRight}>
            <Link to='section4' smooth={true} duration={500} offset={-50}>
              <Button text='Свяжись с нами' onClick={onClose} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
