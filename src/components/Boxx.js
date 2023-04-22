import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Overlay from './Overlay';
import data from '../Data/data';
import styles from './Boxx.module.css';
import Button_LearnMore from './ButtonLm';

const Boxx = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - (isMobile ? 4 : 6)));
  };

  const handleNext = () => {
    setStartIndex(
      Math.min(
        data.length - (isMobile ? 4 : 6),
        startIndex + (isMobile ? 4 : 6)
      )
    );
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseOverlay = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setStartIndex(0);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedData = data.slice(startIndex, startIndex + (isMobile ? 6 : 6));

  return (
    <>
      <div className={styles.container}>
        <div className={styles.arrowContainer}>
          <IoIosArrowBack onClick={handlePrev} className={styles.arrow} />
        </div>
        <div className={styles.boxRowContainer}>
          <div className={styles.boxRow}>
            {displayedData.map((item) => (
              <div key={item.id} className={styles.box}>
                <h2 className={styles.boxTitle}>{item.title}</h2>
                <ul className={styles.boxList}>
                  {item.items
                    .slice(0, isMobile ? 2 : 5)
                    .map((listItem, index) => (
                      <li key={index}>{listItem}</li>
                    ))}
                </ul>
                {isMobile ? (
                  <button
                    className={styles.mobileButton}
                    onClick={() => handleItemClick(item)}
                  >
                    Свяжись с нами
                  </button>
                ) : (
                  <Button_LearnMore
                    className={styles.boxButton}
                    onClick={() => handleItemClick(item)}
                    text='Свяжись с нами'
                  />
                )}
              </div>
            ))}
          </div>

          {selectedItem && (
            <Overlay item={selectedItem} onClose={handleCloseOverlay} />
          )}
        </div>
        <div className={styles.arrowContainer}>
          <IoIosArrowForward onClick={handleNext} className={styles.arrow} />
        </div>
      </div>
    </>
  );
};

export default Boxx;
