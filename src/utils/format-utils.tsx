export function getCount(count: number) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}

export function getSizeImage(imgUrl: any, size: number) {
  return `${imgUrl}?param=${size}y${size}`;
}

export function formatDate(time: number, fmt: string) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o: { [key: string]: number } = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}

function padLeftZero(str: string) {
  return ("00" + str).substr(str.length);
}

export function formatMonthDay(time: any) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time: any) {
  return formatDate(time, "mm:ss");
}

export function getPlaySong(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}
