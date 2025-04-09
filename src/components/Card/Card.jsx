import React from 'react'
import styles from './Card.module.css'


const Card = ({data}) => {
  return (
    <div className={styles.card}>
        <div className={styles.cardImage}>
            <img src={data.image} alt="Card Image" className={styles.image} />
            <div className={styles.chip}>{data.follows} Follows</div>
        </div>
        <div className={styles.cardContent}> 
            {data.title}
        </div>
    </div>
  )
}

export default Card