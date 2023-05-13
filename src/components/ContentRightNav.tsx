import React from 'react';
import huafei from '../assets/images/icon_话费_nor.png';
import huochepiao from '../assets/images/icon_huoche.png';
import jiayouka from '../assets/images/icon_加油卡_nor.png';
import baitiao from '../assets/images/icon_白条_nor.png';
import dianyingpiao from '../assets/images/icon_电影票_nor.png';
import jiudian from '../assets/images/icon_酒店_nor.png';
import licai from '../assets/images/icon_理财_nor.png';
import jipiao from '../assets/images/icon_机票_nor.png';
import lipinka from '../assets/images/icon_礼品卡_nor.png';
import caipiao from '../assets/images/icon_彩票_nor.png';
import youxi from '../assets/images/icon_游戏_nor.png';
import zhongchou from '../assets/images/icon_众筹_nor.png';

export default function ContentRightNav() {
  const data = [
    {
      image: huafei,
      title: '话费'
    },
    {
      image: huochepiao,
      title: '火车票'
    },
    {
      image: jiayouka,
      title: '加油卡'
    },
    {
      image: baitiao,
      title: '白条'
    },
    {
      image: dianyingpiao,
      title: '电影票'
    },
    {
      image: jiudian,
      title: '酒店'
    },
    {
      image: licai,
      title: '理财'
    },
    {
      image: jipiao,
      title: '机票'
    },
    {
      image: lipinka,
      title: '礼品卡'
    },
    {
      image: caipiao,
      title: '彩票'
    },
    {
      image: youxi,
      title: '游戏'
    },
    {
      image: zhongchou,
      title: '众筹'
    }
  ];
  return (
    <div className="content-right-nav leftfix">
      {data.map((item) => {
        return (
          <NavItem key={item.title} image={item.image} title={item.title} />
        );
      })}
    </div>
  );
}

function NavItem({ image, title }: { image: string; title: string }) {
  return (
    <div
      style={{
        display: 'inline-block',
        textAlign: 'center',
        width: 72.5,
        height: 72.5,
        marginTop: 16
      }}
    >
      <a href="#">
        <img width={48} src={image} alt="" />
        <br />
        {title}
      </a>
    </div>
  );
}
