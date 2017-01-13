import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Start from './Start'
import * as UserActions from '../../actions/user'

class StartContainer extends Component {
  componentWillMount () {
    const { user, getStats } = this.props

    getStats(user.steamid)
  }

  render () {
    const {
      stats,
      user
    } = this.props

    return (
      <Start stats={stats} user={user} />
    )
  }
}

StartContainer.propTypes = {
  getStats: PropTypes.func,
  stats: PropTypes.shape({}),
  user: PropTypes.shape({})
}

function mapState (state) {
  return {
    user: state.user.user,
    stats: state.user.stats
  }
}

function mapDispatch(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapState, mapDispatch)(StartContainer)
