import React from 'react';

import { TabsComponent } from './components/tabs/tabs';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      heroData: [],
      dataLoaded: false
    };
  }

  componentDidMount() {
    const newHeroArray = [];
    fetch('https://tppublic.blob.core.windows.net/test-data/super-heroes.json')
      .then((res) => res.json())
      .then((data) => {
        data.map((item) => {
          const newItem = {
            id: item.id,
            superHeroName: item.name,
            realName: item.biography['full-name'],
            imageUrl: item.image.url
          };
          return newHeroArray.push(newItem);
        });
        this.setState({
          heroData: newHeroArray,
          dataLoaded: true
        });
      });
  }

  render() {
    const { dataLoaded, heroData } = this.state;
    if (!dataLoaded) return <div>Loading...</div>;
    return (
      <div className='App'>
        <TabsComponent heroData={heroData} />
      </div>
    );
  }
}

export default App;
