import React from 'react'
import Card from '../Card/Card'
import styles from './Section.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Section = ({heading,data}) => {
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
            <div className={styles.heading}>
                {heading}
            </div>
            <Carousel responsive={responsive}>
            {
                data.map((item,index) => {
                    return <Card key={index} data={item}/>
                })
            }
            </Carousel>
        </div>
        )
}

export default Section