import React, { PropTypes } from 'react'
import { Text, View } from 'react-native'
import styles from './Error.styles'

export const Error = ({ message }) =>
  <View style={styles.error}>
    <Text style={styles.message}>{message}</Text>
  </View>

Error.propTypes = {
  message: PropTypes.string
}

export default Error
