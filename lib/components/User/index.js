import React, { PropTypes } from 'react'
import {
  View,
  Text
} from 'react-native'

import styles from './User.styles'
import UserImage from '../../components/UserImage'

export const User = ({ user }) => {
  return (
    <View style={styles.wrap}>
      <UserImage url={user.avatarfull} />
      <View style={styles.info}>
        <Text style={styles.name}>{user.personaname}</Text>
        <Text style={styles.id}>{user.steamid}</Text>
      </View>
    </View>
  )
}

User.propTypes = {
  user: PropTypes.shape({})
}

export default User
