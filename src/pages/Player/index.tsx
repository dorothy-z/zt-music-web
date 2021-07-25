import { memo } from "react";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function ZTPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>ZTPlayerInfo</h2>
          <h2>ZTSongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>ZTSimiPlayList</h2>
          <h2>ZTSimiSong</h2>
          <h2>Downlown</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
