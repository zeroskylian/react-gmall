import React from 'react';

export default function GoodsNav() {
  const navs = [
    '尚品超市',
    '优惠券',
    '买啥',
    '尚品家电',
    '尚品生鲜',
    'PLUS会员',
    '进口好物',
    '品牌闪购',
    '拍卖',
    '五金商店'
  ];
  return (
    <div className="goods-nav">
      <div className="container">
        <span className="logo">全部商品分类</span>
        <ul>
          {navs.map((nav) => {
            return (
              <li key={nav}>
                <a href={`#${nav}`}>{nav}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
