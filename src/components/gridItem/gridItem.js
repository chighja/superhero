import React from 'react';

import styles from './gridItem.module.css';

export const GridItem = ({ heroImage, superHeroName }) => {
  return (
    <div className={styles.heroCard}>
      <div className={styles.heroImageContainer}>
        <img className={styles.heroImage} src={heroImage} alt='' />
      </div>
      <h2 className={styles.superHeroName}>{superHeroName}</h2>
    </div>
  );
};
