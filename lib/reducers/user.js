import {
  USER_FETCH, USER_UPDATE, USER_ERROR
} from '../actions/user'

import { handleActions } from 'redux-actions'

const initialState = {
  user: {},
  stats: {},
  isFetching: false
}

export default handleActions({
  [USER_FETCH]: (state) => ({
    ...state,
    isFetching: true
  }),
  [USER_UPDATE]: (state, { payload }) => ({
    ...state,
    ...payload,
    isFetching: false
  }),
  [USER_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  })
}, initialState)
