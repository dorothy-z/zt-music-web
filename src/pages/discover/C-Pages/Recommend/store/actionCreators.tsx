import * as actionTypes from "./constants";

import {
  getTopBanners,
  getHotRecommend,
  getNewAlbums,
  getTopList,
} from "../../../../../services/recommend";

const changeTopBannerAction = (res: any) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

const changeHotRecommendAction = (res: any) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});

const changeNewAlbumAction = (res: any) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums,
});

const changeUpRankingAction = (res: any) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
});

const changeNewRankingAction = (res: any) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});

const changeOriginRankingAction = (res: any) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

export const getTopBannerAction = () => {
  return (dispatch: any) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

export const getHotRecommendAction = (limit: number) => {
  return (dispatch: any) => {
    getHotRecommend(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};

export const getNewAlbumAction = (limit: number) => {
  return (dispatch: any) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

export const getTopListAction = (idx: number) => {
  return (dispatch: any) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeNewRankingAction(res));
          break;
        case 2:
          dispatch(changeOriginRankingAction(res));
          break;
        case 3:
          dispatch(changeUpRankingAction(res));
          break;
        default:
      }
    });
  };
};
