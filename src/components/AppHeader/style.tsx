import styled from "styled-components";
import { SPRITE_01 } from "../../const";

export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  color: #fff;
  background-color: #242424;

  .content {
    height: 70px;

    display: flex;
    /* 两端对齐，项目之间的间隔都相等。 */
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const Header_Left = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    /* text-indent 属性规定文本块中首行文本的缩进。 */
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${SPRITE_01});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      // & 表示嵌套的上一级 ,&:hover a 相当于 .select-item:hover a
      &:hover a,
      a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`;

export const Header_Right = styled.div`
  display: flex;
  // 元素在侧轴居中
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      // 伪元素::placeholder可以选择一个表单元素的占位文本 在使用了::placeholder伪元素的选择器中，仅有小一部分CSS属性可以使用
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
  }
`;
