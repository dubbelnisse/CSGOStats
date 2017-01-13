import { get } from '../utils/httpHelper'
import { createAction } from 'redux-actions'
import store from 'react-native-simple-store'
import { Actions } from 'react-native-router-flux'
import dataParser from '../utils/dataParser'
import * as ErrorActions from './errors'
import config from '../../config'

export const USER_FETCH = 'USER_FETCH'
export const USER_UPDATE = 'USER_UPDATE'
export const USER_ERROR = 'USER_ERROR'

/* ACTIONS
------------------------------------------------- */
const userFetch = createAction(USER_FETCH)
const userUpdate = createAction(USER_UPDATE)
const userError = createAction(USER_ERROR)

/* THUNKS
------------------------------------------------- */
export function login (id) {
  return (dispatch) => {
    dispatch(ErrorActions.remove('login'))

    if (!id.length) {
      return dispatch(ErrorActions.add({
        message: 'ID is missing',
        type: 'login'
      }))
    }

    dispatch(userFetch())

    get(`/ISteamUser/GetPlayerSummaries/v0002/?key=${config.API_KEY}&steamids=${id}`)
    // get(`/user`)
      .then(data => {
        if (data.response.players.length === 0) {
          dispatch(userUpdate())
          return dispatch(ErrorActions.add({
            message: 'No user found',
            type: 'login'
          }))
        }

        dispatch(userUpdate({
          user: data.response.players[0]
        }))
        Actions.start()
        store
          .save('userId', id)
          .catch(err => {
            dispatch(userError(err))
          })
      })
      .catch(err => {
        return dispatch(userError(err))
      })
  }
}

export function getStats (id) {
  return (dispatch) => {
    dispatch(userFetch())

    get(`/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=${config.API_KEY}&steamid=${id}`)
    // get(`/stats`)
      .then(data => {
        dispatch(userUpdate({
          stats: dataParser(data.playerstats.stats)
        }))
      })
      .catch(err => dispatch(userError(err)))
  }
}
