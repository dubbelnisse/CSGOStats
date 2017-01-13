import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from './Login'
import * as UserActions from '../../actions/user'
import store from 'react-native-simple-store'

class LoginContainer extends Component {
  constructor () {
    super(...arguments)

    this.state = {
      id: ''
    }

    this._handleLogin = this._handleLogin.bind(this)
    this._setLogin = this._setLogin.bind(this)
  }

  componentWillMount () {
    const { login } = this.props

      store
        .get('userId')
        .then(id => {
          if (id !== null) {
            login(id)
          }
        })
        .catch(error => console.log('error', error))
  }

  _setLogin (name, value) {
    this.setState({
      [name]: value
    })
  }

  _handleLogin () {
    const { login } = this.props
    const { id } = this.state

    login(id)
  }

  render () {
    const { isFetching } = this.props

    return (
      <Login
        handleLogin={this._handleLogin}
        isFetching={isFetching}
        setLogin={this._setLogin} />
    )
  }
}

LoginContainer.propTypes = {
  isFetching: PropTypes.bool,
  login: PropTypes.func
}

function mapState (state) {
  return {
    isFetching: state.user.isFetching
  }
}

function mapDispatch(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapState, mapDispatch)(LoginContainer)
