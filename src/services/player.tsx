import request from "./request";

export function getSongDetail(ids: number) {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
}

export function getLyric(id: number) {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  });
}
