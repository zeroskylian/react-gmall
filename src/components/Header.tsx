import React from 'react';

export default function Header() {
  const navs = [
    '我的订单',
    '我的购物车',
    '我的尚品汇',
    '尚品汇会员',
    '企业采购',
    '关注尚品汇',
    '招商合作',
    '商家后台'
  ];
  return (
    <div className="topbar">
      <div className="container clearfix">
        <div className="left leftfix">
          <span className="hello">尚品汇欢迎您</span>
          <span>请</span>
          <a className="login" href="#login">
            登录
          </a>
          <a className="register" href="#register">
            免费注册
          </a>
        </div>
        <div className="right rightfix">
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
    </div>
  );
}
