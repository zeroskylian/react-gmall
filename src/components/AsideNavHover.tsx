import React from 'react';

export default function AsideNavHover({ visible }: { visible: boolean }) {
  const data: { title: string; content: string[] }[] = [
    {
      title: '电子书刊',
      content: ['电子书', '网络原创', '数字杂志', '多媒体图书']
    },
    { title: '音像', content: ['音乐', '影视', '教育音像'] },
    {
      title: '英文原版',
      content: ['少儿', '商务投资', '英语学习考试', '文学', '传记', '立志']
    },
    { title: '文艺', content: ['小说', '文学', '青春文学', '传记', '艺术'] },
    { title: '少儿', content: ['胎教', '0-2岁', '3-6岁', '7-10岁', '11-14岁'] },
    {
      title: '人文社科',
      content: [
        '历史',
        '哲学',
        '国学',
        '政治/军事',
        '法律',
        '人文社科',
        '心理学',
        '文化',
        '社会科学'
      ]
    },
    {
      title: '经管励志',
      content: ['金融与投资', '管理', '励志与成功', '经济']
    },
    {
      title: '生活',
      content: ['健康与保健', '家庭与育儿', '旅游', '烹饪美食']
    },
    {
      title: '科技',
      content: [
        '工业技术',
        '科普读物',
        '建筑',
        '医学',
        '科学与自然',
        '计算机与互联网',
        '电子通讯'
      ]
    },
    {
      title: '教育',
      content: [
        '中小学教辅',
        '教育与考试',
        '外语学习',
        '大中专教材',
        '科学与自然',
        '字典词典'
      ]
    },
    { title: '艺术与收藏', content: ['文化与艺术', '经济管理'] },
    { title: '其他', content: ['工具书', '杂志期刊', '套装书', '打折图书'] }
  ];
  return (
    <div
      className="aside-hover"
      style={{ visibility: visible ? 'visible' : 'hidden' }}
    >
      {data.map((item) => {
        return (
          <dl key={item.title}>
            <dd className="leftfix">{item.title}</dd>
            {item.content.map((ct) => {
              return (
                <dt className="leftfix" key={ct}>
                  <a href={`#${ct}`}>{ct}</a>
                </dt>
              );
            })}
          </dl>
        );
      })}
    </div>
  );
}
