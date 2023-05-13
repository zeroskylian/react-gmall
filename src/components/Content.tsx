import React from 'react';
import AsideNav from './AsideNav';
import ContentBanner from './ContentBanner';
import ContentNews from './ContentNews';
import ContentRightNav from './ContentRightNav';

export default function Content() {
  return (
    <div>
      <div className="container content clearfix">
        <AsideNav />
        <ContentBanner />
        <ContentNews />
        <ContentRightNav />
      </div>
    </div>
  );
}
