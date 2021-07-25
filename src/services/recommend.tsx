import request from "./request";

export function getTopBanners() {
  return request({
    url: "/banner",
  });
}

export function getHotRecommend(limit: number) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

export function getNewAlbums(limit: number) {
  return request({
    url: "/top/album",
    params: {
      limit,
    },
  });
}

export function getTopList(idx: number) {
  return request({
    url: "/top/list",
    params: {
      idx,
    },
  });
}
