import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Header_Left } from "./style";

interface ILink {
  title: string;
  link: string;
}

interface Iprops {
  headerLinks: ILink[];
}

const HeaderLeft: React.FC<Iprops> = memo(function (props) {
  // 页面代码
  const showSelectItem = (item: ILink, index: number) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };

  //返回的jsx
  return (
    <Header_Left>
      <a href="#/" className="logo sprite_01">
        网易云音乐
      </a>
      <div className="select-list">
        {props.headerLinks.map((item, index) => {
          return (
            <div key={item.title} className="select-item">
              {showSelectItem(item, index)}
            </div>
          );
        })}
      </div>
    </Header_Left>
  );
});

export default HeaderLeft;
