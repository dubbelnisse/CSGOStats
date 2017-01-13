import config from '../../config'

const standardHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export function get (route) {
  return fetch(`${config.BASE_URL}${route}`)
    .then(response => response.json())
}

export default {
  get
}
