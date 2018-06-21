import axios from 'axios'
import {HOST} from './config'

export function getSingerList() {
    const url = HOST + '/artist/list';
    return axios.get(url)
}