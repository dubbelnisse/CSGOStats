import { ERROR_ADD, ERROR_REMOVE, ERROR_RESET } from '../actions/errors'
import { handleActions } from 'redux-actions'
import _ from 'lodash'

const initialState = []

export default handleActions({
  [ERROR_ADD]: (state, { payload }) => {
    if (_.isObject(_.find(state, payload))) {
      return state
    }

    return [
      ...state,
      payload
    ]
  },
  [ERROR_REMOVE]: (state, { payload }) => (
    state.filter(error => error.type !== payload)
  ),
  [ERROR_RESET]: () => initialState
}, initialState)
