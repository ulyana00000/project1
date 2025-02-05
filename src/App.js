import React from 'react';
import Header from './components/header';
import './styles/reset.css';
import './styles/global.css';
import data from './data/content1.json';
import MainSection from './components/mainsection';
import Experiments from './components/experiments';

function App() {
  const { main, experiments } = data;

  return (
    <div className="App">
      <Header 
        logo={data.header.logo} 
        subtitle={data.header.subtitle} 
        menu={data.header.menu} 
      />
      <MainSection
        title={main.title}
        description={main.description}
        hero={main.heroes[0]}
      />
      <Experiments experiments={experiments} />
    </div>
  );
}

export default App;
