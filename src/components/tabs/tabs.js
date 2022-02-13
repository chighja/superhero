import React from 'react';

import { GridTab } from '../gridTab/gridTab';
import { ListTab } from '../listTab/listTab';

import styles from './tabs.module.css';

export class TabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'listView'
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(newTab) {
    this.setState({
      currentTab: newTab
    });
  }

  render() {
    return (
      <div className={styles.tabContainer}>
        <ul className={styles.tabHeader}>
          <li
            onClick={() => this.changeTab('listView')}
            className={`${
              this.state.currentTab === 'listView' ? `${styles.currentTab}` : ''
            } ${styles.tabButton}`}>
            List View
          </li>
          <li
            onClick={() => this.changeTab('gridView')}
            className={`${
              this.state.currentTab !== 'listView' ? `${styles.currentTab}` : ''
            } ${styles.tabButton}`}>
            Grid View
          </li>
        </ul>
        {this.state.currentTab === 'listView' ? (
          <ListTab heroData={this.props.heroData} />
        ) : (
          <GridTab heroData={this.props.heroData} />
        )}
      </div>
    );
  }
}
