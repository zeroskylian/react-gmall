/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import AsideNavHover from './AsideNavHover';

export default function AsideNav() {
  const data = [
    '手机/运营商/数码',
    '电脑/办公',
    '家具/家居/家装/厨具',
    '男装/女装/童装/内衣',
    '美妆/个护清洁/宠物',
    '女鞋/箱包/钟表/珠宝',
    '男鞋/运动/户外',
    '房产/汽车/汽车用品',
    '母婴/玩具乐器',
    '食品/酒类/生鲜/特产',
    '艺术/礼品鲜花/农资绿植',
    '医药保健/计生情趣',
    '图书/文娱/教育/电子书',
    '机票/酒店/旅游/生活',
    '众筹/白条/保险/企业金融',
    '安装/维修/清洗/二手'
  ];
  const [visible, setVisible] = useState(false);
  return (
    <div className="asideNav leftfix">
      <ul
        onMouseEnter={() => {
          setVisible(true);
        }}
        onMouseLeave={() => {
          setVisible(false);
        }}
      >
        {data.map((item) => {
          return (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
      <AsideNavHover visible={visible} />
    </div>
  );
}
