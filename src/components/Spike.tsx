import React from 'react';
import seckill from '../assets/images/seckill.png';
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';
import banner3 from '../assets/images/banner3.png';
import banner4 from '../assets/images/banner4.png';

export default function Spike() {
  return (
    <div className="spike container">
      <img src={seckill} alt="" />
      <img src={banner1} alt="" />
      <img src={banner2} alt="" />
      <img src={banner3} alt="" />
      <img src={banner4} alt="" />
    </div>
  );
}
