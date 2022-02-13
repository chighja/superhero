import React from 'react';

import { ListItem } from '../listItem/listItem';

import styles from './listTab.module.css';

export const ListTab = ({ heroData }) => {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.heroList}>
        {heroData.map((heroItem) => {
          return (
            <ListItem
              key={heroItem.id}
              id={heroItem.id}
              superHeroName={heroItem.superHeroName}
            />
          );
        })}
      </ul>
    </div>
  );
};
