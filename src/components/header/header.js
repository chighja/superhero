import React from 'react';

import styles from './header.module.css';

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>Superhero Database</h1>
    </div>
  );
};
