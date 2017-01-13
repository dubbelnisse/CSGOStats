import React from 'react'

import {
  Modal,
  Reducer,
  Router,
  Scene
} from 'react-native-router-flux'
import { Provider } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'
import configureStore from './store/configureStore'
const store = configureStore()

import colors from './constants/colors'
import Login from './views/Login'
import Start from './views/Start'

EStyleSheet.build()

const reducerCreate = params => {
  const defaultReducer = Reducer(params)
  return (state, action) => {
    return defaultReducer(state, action)
  }
}

const VimlaApp = () =>
  <Provider store={store}>
    <Router
      createReducer={reducerCreate}
      navigationBarStyle={{
        backgroundColor: colors.black
      }}
      sceneStyle={{
        backgroundColor: 'transparent'
      }}
      titleStyle={{
        color: colors.white
      }}>
      <Scene
        hideNavBar
        hideTabBar
        key="root">
        <Scene
          component={Login}
          initial
          key="login"
          title="Login" />

        <Scene
          component={Start}
          key="start"
          sceneStyle={{ flex:1, backgroundColor:'transparent' }}
          title="Start" />
      </Scene>
    </Router>
  </Provider>

export default VimlaApp
