import React, { PropTypes } from 'react'
import {
  Image
} from 'react-native'

import styles from './UserImage.styles'

export const UserImage = ({ url }) =>
  <Image
    source={{ uri: url }}
    style={styles.image} />


UserImage.propTypes = {
  url: PropTypes.string
}

export default UserImage
