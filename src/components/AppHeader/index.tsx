import { memo } from "react";

import { headerLinks } from "../../common/local-data";

import { NavLink } from "react-router-dom";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

export default memo(function ZTAppHeader() {
  // 返回的jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        {/* <Header_Left>
          <a href="#/" className="logo sprite_01"></a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return <div key={item.title}>{showSelectItem(item, index)}</div>;
            })}
          </div>
        </Header_Left> */}
        <HeaderLeft headerLinks={headerLinks} />
        <HeaderRight />
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
