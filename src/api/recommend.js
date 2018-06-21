import axios from 'axios'
import {HOST} from './config'

export function getBanner() {
  const url = HOST + '/banner';
  return axios.get(url)
}

export function getRecommendMusicList() {
  const url = HOST + '/personalized';
  return axios.get(url)
}

export function getRecommendMusicDetail(id) {
  const url = HOST + `/playlist/detail?id=${id}`
  // console.log(url);
  return axios.get(url)
}