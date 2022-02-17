import React from 'react';

import styles from './groupItem.module.css';

export const GroupItem = ({ groupItem }) => {
  return (
    <div className={styles.groupCard}>
      <h1>{groupItem}</h1>
    </div>
  );
};
