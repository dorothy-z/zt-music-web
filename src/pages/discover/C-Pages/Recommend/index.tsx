import { memo } from "react";

import ZTTopBanner from "./C-Cpns/TopBanner";
import ZTHotRecommend from "./C-Cpns/HotRecommend";
import ZTNewAlbum from "./C-Cpns/NewAlbum";
import ZTRecommendRanking from "./C-Cpns/RecommendRanking";
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

interface Iprops {
  getBanners: Function;
  topBanners: Array<any>;
}

const ZTRecommend: React.FC<Iprops> = function (props) {
  return (
    <RecommendWrapper>
      <ZTTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <ZTHotRecommend />
          <ZTNewAlbum />
          <ZTRecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
};

export default memo(ZTRecommend);

// const ZTRecommend: React.FC<Iprops> = function (props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);

//   return <div><h2>ZTRecommend: {topBanners.length}</h2></div>;
// };

// interface IState {
//   recommend: any;
// }

// const mapStateToProps = (state: IState) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch: any) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(ZTRecommend));
