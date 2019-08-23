import axios from 'axios'
import Vue from 'vue'
const Axios = axios.create({})


Axios.interceptors.request.use(
  request => {
    console.log(11)
    return request
  },
  error => {
    return error
  }
)
Axios.interceptors.response.use(
  res => {
    console.log(22)
    return res
  },
  error => {
    return error
  }
)
export default Axios
