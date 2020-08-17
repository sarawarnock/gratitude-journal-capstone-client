import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
  saveUserId(userId) {
    return window.sessionStorage.setItem('user_id', userId);
  },
  saveUserName(first_name) {
    return window.sessionStorage.setItem('first_name', first_name)
  },
  getUserId(user_id) {
    return window.sessionStorage.getItem('user_id', user_id)
  }
}

export default TokenService
