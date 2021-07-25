import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HOT_RECOMMEND_LIMIT } from "../../../../../../common/constants";

import ZTThemeHeaderRCM from "../../../../../../components/ThemeHeaderRem";
import ZTSongsCover from "../../../../../../components/SongsCover";
import { getHotRecommendAction } from "../../store/actionCreators";
import { HotRecommendWrapper } from "./style";

interface IState {
  getIn: any;
}

export default memo(function ZTHotRecommend() {
  // state

  // redux hooks
  const { hotRecommends } = useSelector(
    (state: IState) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <ZTThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
      />
      <div className="recommend-list">
        {hotRecommends.map((item: any, index: number) => {
          return <ZTSongsCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
