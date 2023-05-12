import React from 'react';
import './css/reset.css';
import './css/index.css';
import './css/common.css';
import Header from './components/Header';
import Search from './components/Search';
import GoodsNav from './components/GoodsNav';

function App() {
  return (
    <div>
      <Header />
      <Search />
      <GoodsNav />
    </div>
  );
}

export default App;
