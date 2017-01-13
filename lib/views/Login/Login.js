import React, { PropTypes } from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from './Login.styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

export const Login = ({ setLogin, handleLogin, isFetching }) =>
  <View style={styles.wrap}>
    <View style={styles.inner}>
      <Input
        name="id"
        type="numeric"
        onChange={setLogin}
        onSubmitEditing={handleLogin}
        placeholder="Steam ID" />
      <Text style={styles.help}>ID or Steam profile link</Text>
      <Error type="login" />
      <Button
        isLoading={isFetching}
        onPress={handleLogin}
        text="Login" />
    </View>
  </View>

Login.propTypes = {
  handleLogin: PropTypes.func,
  setLogin: PropTypes.func
}

export default Login
