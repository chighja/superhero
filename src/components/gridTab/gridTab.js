import React from 'react';

import { GridItem } from '../gridItem/gridItem';

import styles from './gridTab.module.css';

export const GridTab = ({ heroData }) => {
  return (
    <div className={styles.gridTab}>
      {heroData.map((heroItem) => {
        return (
          <GridItem
            className={styles.gridItem}
            key={heroItem.id}
            heroImage={heroItem.imageUrl}
            superHeroName={heroItem.superHeroName}
          />
        );
      })}
    </div>
  );
};
