import axios from 'axios'
import router from '../router'

const URL = 'http://localhost:3000'
const UNAUTHORIZED = 401
const onUnauthorized = () => {
  router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`)
}

const request = (method, url, data) => {
  return axios({
    method,
    url: URL + url,
    data
  }).then(result => result.data)
    .catch(result => {
      const {status} = result.response
      if (status === UNAUTHORIZED) {
        onUnauthorized()
      }
      throw result.response
    })
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

const {token} = localStorage
if (token) setAuthInHeader(token)

export const board = {
  fetch() {
    return request('get', '/boards')
  },
  create(title) {
    return request('post', '/boards', {title})
  }
}

export const auth = {
  login(email, password) {
    return request('post', '/login', {email, password})
  }
}