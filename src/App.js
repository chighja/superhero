import React from 'react';

import { TabsComponent } from './components/tabs/tabs';

import { Header } from './components/header/header';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      heroData: [],
      dataLoaded: false,
      groupData: []
    };
  }

  componentDidMount() {
    const newHeroArray = [];
    const newGroupArray = [];
    fetch('https://tppublic.blob.core.windows.net/test-data/super-heroes.json')
      .then((res) => res.json())
      .then((data) => {
        data.map((item) => {
          const newItem = {
            id: item.id,
            superHeroName: item.name,
            realName: item.biography['full-name'],
            imageUrl: item.image.url,
            groupAffiliation: item.connections['group-affiliation']
          };
          const splitItems = item.connections['group-affiliation'].split(', ');
          splitItems.forEach((splitItem) => {
            if (!newGroupArray.includes(splitItem)) {
              newGroupArray.push(splitItem);
            }
          });
          return newHeroArray.push(newItem);
        });

        this.setState({
          heroData: newHeroArray,
          dataLoaded: true,
          groupData: newGroupArray
        });
      });
  }

  render() {
    const { dataLoaded, heroData, groupData } = this.state;
    if (!dataLoaded) return <div>Loading...</div>;
    return (
      <div className='App'>
        <Header />
        <TabsComponent heroData={heroData} groupData={groupData} />
      </div>
    );
  }
}

export default App;
