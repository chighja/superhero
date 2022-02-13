import React from 'react';

import styles from './listItem.module.css';

export const ListItem = ({ id, superHeroName }) => {
  return (
    <li className={styles.heroListItem}>
      <div>
        <h2>ID: {id}</h2>
        <h1>{superHeroName}</h1>
      </div>
    </li>
  );
};
