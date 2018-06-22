import {playMode} from "common/js/config"
const state = {
  recommend: {},
  playing: false,//播放状态
  fullScreen: false,//是否全屏
  playList: [],//播放列表
  sequenceList:[],//顺序播放列表
  mode:playMode.sequence,
  currentIndex:-1
}

export default state
