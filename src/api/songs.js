import axios from 'axios'
import {HOST} from './config'

export function getSongs (id) {
    const url = HOST + `/music/url?id=${id}`
    return axios.get(url)
}