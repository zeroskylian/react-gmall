import React from 'react';
import tv from '../assets/images/编组.png';
import banner1 from '../assets/images/appliance_banner07.png';
import weibolu from '../assets/images/微波炉.png';
import kongqizhaguo from '../assets/images/空气炸锅.png';
import bingxiang from '../assets/images/冰箱.png';
import dianfanbao1 from '../assets/images/电饭煲.png';
import dianfanbao2 from '../assets/images/电饭煲2.png';

export default function GoodsCategory() {
  return (
    <div className="goods-category container clearfix">
      <GoodsCategoryTopNav />
      <div className="clearfix">
        <GoodsCategoryLeftNav />
        <GoodsCategoryBanner />
      </div>
    </div>
  );
}

function GoodsCategoryTopNav() {
  const data = [
    '热门',
    '大家电',
    '生活电器',
    '厨房电器',
    '应季电器',
    '空气/净水',
    '高端电器'
  ];
  return (
    <div className="goods-category-nav">
      <span>家用电器</span>
      <ul className="rightfix clearfix">
        {data.map((item) => {
          return (
            <li className="leftfix" key={item}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function GoodsCategoryLeftNav() {
  const data = [
    '节能补贴',
    '4K电视',
    '空气净化器',
    'IH电饭煲',
    '滚筒洗衣机',
    '电热水器'
  ];
  return (
    <div className="goods-category-left-nav leftfix">
      <ul className="clearfix" style={{ marginBottom: 30 }}>
        {data.map((item) => {
          return (
            <li key={item}>
              <a key={item} href="#">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
      <a href="#">
        <img src={tv} alt="" />
      </a>
    </div>
  );
}

function GoodsCategoryBanner() {
  return (
    <div className="goods-category-right-nav leftfix">
      <div className="leftfix">
        <img src={banner1} alt="" />
      </div>
      <div className="imgItem">
        <img src={weibolu} alt="" />
        <img src={kongqizhaguo} alt="" />
      </div>
      <div className="imgItem bingxing">
        <img src={bingxiang} alt="" />
      </div>
      <div className="imgItem">
        <img src={dianfanbao1} alt="" />
        <img src={dianfanbao2} alt="" />
      </div>
    </div>
  );
}
