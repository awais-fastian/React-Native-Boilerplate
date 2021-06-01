import { END_POINTS, SERVER_URL } from 'Config'
import { API } from 'Helpers'

export function login(params) {
  return API.fetch({
    method: 'POST',
    url: `${SERVER_URL}${END_POINTS.login}`,
    data: params,
  }).then((response) => response.data)
}

export function signUp(params) {
  return API.fetch({
    method: 'POST',
    url: `${SERVER_URL}${END_POINTS.sign_up}`,
    data: params,
  }).then((response) => response.data)
}
