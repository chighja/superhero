import React from 'react';

import { GroupItem } from '../groupItem/groupItem';

import styles from './groupTab.module.css';

export const GroupTab = ({ heroData, groupData }) => {
  return (
    <div className={styles.groupTab}>
      {groupData.map((groupItem, index) => {
        return (
          <GroupItem key={index} heroData={heroData} groupItem={groupItem} />
        );
      })}
    </div>
  );
};
