import { getSongDetail, getLyric } from "../../../services/player";
import { getRandomNumber } from "../../../utils/math-utils";
import { parseLyric } from "../../../utils/parse-lyric";

import * as actionTypes from "./constants";

const changeCurrentSongAction = (currentSong: any) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

const changePlayListAction = (playList: any) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});

const changeCurrentSongIndexAction = (currentSongIndex: number) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex,
});

const changeLyricListAction = (lyricList: Array<any>) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList,
});

// 对外暴露的action
export const changeSequenceAction = (sequence: number) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence,
});

export const changeCurrentLyricIndexAction = (currentLyricIndex: number) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex,
});

export const changeCurrentIndexAndSong = (tag: number) => {
  return (dispatch: any, getState: Function) => {
    const playList = getState().getIn(["player", "playList"]);
    const sequence = getState().getIn(["player", "sequence"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);

    switch (sequence) {
      case 1: // 随机播放
        let randomIndex = getRandomNumber(playList.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      default:
        // 顺序播放
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
    }

    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));

    // 请求歌词
    dispatch(getLyricAction(currentSong.id));
  };
};

export const getSongDetailAction = (ids: number) => {
  return (dispatch: any, getState: Function) => {
    // 1.根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((song: any) => song.id === ids);

    // 2.判断是否找到歌曲
    let song = null;
    if (songIndex !== -1) {
      // 找到歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));
      song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
      dispatch(getLyricAction(song.id));
    } else {
      // 没有找到歌曲
      // 请求歌曲数据
      getSongDetail(ids).then((res) => {
        song = res.songs && res.songs[0];
        if (!song) return;

        // 1.将最新请求到的歌曲添加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song);

        // 2.更改redux中的值
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));

        // 请求该歌曲的歌词
        dispatch(getLyricAction(song.id));
      });
    }
  };
};

export const getLyricAction = (id: number) => {
  return (dispatch: any) => {
    getLyric(id).then((res: any) => {
      const lyric = res.lrc.lyric;
      const lysicList = parseLyric(lyric);
      dispatch(changeLyricListAction(lysicList));
    });
  };
};
