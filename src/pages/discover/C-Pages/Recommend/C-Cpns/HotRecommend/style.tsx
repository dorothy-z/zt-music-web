import styled from "styled-components";

export const HotRecommendWrapper = styled.div`
  .recommend-list {
    display: flex;
    // 弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行。
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
