import React from 'react';
import logo from '../assets/images/logo.png';

export default function Search() {
  return (
    <div className="top-nav">
      <div className="container clearfix">
        <img src={logo} alt="" />
        <div className="right rightfix">
          <form action="">
            <input className="searchbar" type="text" />
            <button className="searchBtn"></button>
          </form>
        </div>
      </div>
    </div>
  );
}
