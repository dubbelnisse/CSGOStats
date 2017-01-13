import React from 'react'
import {
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Bubbles } from 'react-native-loader'

export const Loader = () =>
  <View>
    <Bubbles size={8} color="#FF8A40" />
  </View>

export default Loader
