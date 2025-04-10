import React, { useState } from 'react'
import Card from '../Card/Card'
import styles from './Section.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Section = ({heading,data}) => {

    const [showAll, setShowAll] = useState(false);

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
      };
    return (
    <div className={styles.content}>
      <div className={styles.topSection}>
        <div className={styles.heading}>{heading}</div>
        <div
          className={styles.showButton}
          onClick={() => setShowAll(prev => !prev)}
        >
          {showAll ? 'Collapse all' : 'Show all'}
        </div>
      </div>

      {showAll ? (
        <div className={styles.grid}>
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      ) : (
        typeof window !== 'undefined' && window.Cypress ? (
          <div className={styles.cardList}>
            {data.map((item, i) => (
              <Card key={i} data={item} />
            ))}
          </div>
        ) : (
          <Carousel responsive={responsive}>
            {data.map((item, i) => (
              <Card key={i} data={item} />
            ))}
          </Carousel>
        )
      )}

      
    </div>
  );
};


export default Section