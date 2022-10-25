import React from 'react';
import Presentation from './pages/Presentation';
import './App.css';
import TopShadowYellow from './assets/shadow-yellow-top-page-1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Opinions from './pages/Opinions';

function App() {
  return (
    <div className="App">
      <TopShadowYellow/>
      <Presentation />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Opinions />
    </div>
  );
}

export default App;
