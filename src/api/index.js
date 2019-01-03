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

export const board = {
  fetch(id) {
    if (id) {
      return request('get', `/boards/${id}`)
    } else {
      return request('get', '/boards')
    }
  },
  create(title) {
    return request('post', '/boards', {title})
  },
  destroy(id) {
    return request('delete', `/boards/${id}`)
  },
  update(id, payload) {
    return request('PUT', `/boards/${id}`, payload)
  }
}

export const auth = {
  login(email, password) {
    return request('post', '/login', {email, password})
  }
}

export const list = {
  create(payload) {
    return request('post', '/lists', payload)
  }
}

export const card = {
  create(title, listId, pos) {
    return request('post', '/cards', {title, listId, pos})
  },
  fetch(id) {
    return request('get', `/cards/${id}`)
  },
  update(id, payload) {
    return request('put', `/cards/${id}`, payload)
  },
  destroy(id) {
    return request('delete', `/cards/${id}`)
  }
}
