import { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopListAction } from "../../store/actionCreators";

import ZTThemeHeaderRCM from "../../../../../../components/ThemeHeaderRem";
import ZTTopRanking from "../../../../../../components/TopRanking";
import { RankingWrapper } from "./style";

interface Istate {
  getIn: any;
}

export default memo(function ZTRecommendRanking() {
  // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(
    (state: Istate) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <ZTThemeHeaderRCM title="榜单" />
      <div className="tops">
        <ZTTopRanking info={upRanking} />
        <ZTTopRanking info={newRanking} />
        <ZTTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  );
});
