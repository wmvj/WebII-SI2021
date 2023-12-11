import axios from 'axios'
import { ArmazenadorToken } from '../utils/ArmazenadorToken'

const http = axios.create({
    baseURL: 'http://localhost:8080'
})

axios.interceptors.request.use(function (config) {
    const token = ArmazenadorToken.accessToken
    if(token){

    }
    return config
}, function(error){
    return Promise.reject(error)
})


export default http