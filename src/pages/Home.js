import React, { useState } from 'react';
import styles from './HomePage.module.css';
import HomePage from './HomePage';
import HomeSlide from './HomeSlide';

function Home() {
  const [pageIndex, setPageIndex] = useState(0);
  const handleNextPage = () => {
    setPageIndex((prevIndex) => prevIndex + 1);
  };
  const handlePreviousPage = () => {
    setPageIndex((prevIndex) => prevIndex - 1);
  };
  let pageContent;
  if (pageIndex === 0) {
    pageContent = (
      <div
        className={`${styles.page} ${styles[`page-${pageIndex}`]}`}
        key={pageIndex}
      >
        <HomePage onClick={handleNextPage} />
      </div>
    );
  } else if (pageIndex === 1) {
    pageContent = (
      <div
        className={`${styles.page} ${styles[`page-${pageIndex}`]}`}
        key={pageIndex}
      >
        <HomeSlide onClick={handlePreviousPage} />
      </div>
    );
  }

  return <div className={styles['home-page']}>{pageContent}</div>;
}

export default Home;
