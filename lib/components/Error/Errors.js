import React, { PropTypes } from 'react'
import { View } from 'react-native'
import Error from './Error'

export const Errors = ({ errors, type }) =>
  <View>
    {errors
      .filter(error => error.type === type)
      .map((error, i) => (
        <Error {...error} key={`error-${i}`} />
      ))}
  </View>

Errors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string
}

export default Errors
