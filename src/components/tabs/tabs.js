import React from 'react';

import { GridTab } from '../gridTab/gridTab';
import { GroupTab } from '../groupTab/groupTab';
import { ListTab } from '../listTab/listTab';
import { SearchBox } from '../searchBox/searchBox';

import styles from './tabs.module.css';

export class TabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'listView',
      searchField: ''
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(newTab) {
    this.setState({
      currentTab: newTab
    });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { searchField } = this.state;
    const groupData = this.props.groupData;
    const filteredHeroes = this.props.heroData.filter((hero) =>
      hero.superHeroName.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className={styles.tabContainer}>
        <SearchBox
          className={styles.searchBox}
          placeholder='Search Heroes...'
          handleChange={this.handleChange}
        />
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
              this.state.currentTab === 'gridView' ? `${styles.currentTab}` : ''
            } ${styles.tabButton}`}>
            Grid View
          </li>
          <li
            onClick={() => this.changeTab('groupView')}
            className={`${
              this.state.currentTab === 'groupView'
                ? `${styles.currentTab}`
                : ''
            } ${styles.tabButton}`}>
            Group-Affilliation View
          </li>
        </ul>
        {this.state.currentTab === 'listView' ? (
          <ListTab heroData={filteredHeroes} />
        ) : null}
        {this.state.currentTab === 'gridView' ? (
          <GridTab heroData={filteredHeroes} />
        ) : null}
        {this.state.currentTab === 'groupView' ? (
          <GroupTab groupData={groupData} />
        ) : null}
      </div>
    );
  }
}
