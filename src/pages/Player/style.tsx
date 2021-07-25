import styled from "styled-components";

import { WRAP_BG } from "../../const";

export const PlayerWrapper = styled.div`
  .content {
    background: url(${WRAP_BG}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`;

export const PlayerLeft = styled.div`
  width: 710px;
`;

export const PlayerRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`;
