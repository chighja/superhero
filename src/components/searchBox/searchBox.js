import React from 'react';

import styles from './searchBox.module.css';

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className={styles.searchBox}
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
