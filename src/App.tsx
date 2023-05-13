import React from 'react';
import './css/reset.css';
import './css/index.css';
import './css/common.css';
import Header from './components/Header';
import Search from './components/Search';
import GoodsNav from './components/GoodsNav';
import Content from './components/Content';
import Spike from './components/Spike';

function App() {
  return (
    <div>
      <Header />
      <Search />
      <GoodsNav />
      <Content />
      <Spike />
    </div>
  );
}

export default App;
