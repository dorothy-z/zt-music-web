import React, { memo } from "react";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Header_Right } from "./style";

const HeaderRight = memo(function () {
  return (
    <Header_Right>
      {/* placeholder 属性提供可描述输入字段预期值的提示信息, prefix 带有前缀图标的 input */}
      <Input
        className="search"
        placeholder="音乐/视频/电台/用户"
        prefix={<SearchOutlined />}
      ></Input>
      <div className="center">创作者中心</div>
      <div>登录</div>
    </Header_Right>
  );
});

export default HeaderRight;
