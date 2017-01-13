import React, { Component, PropTypes } from 'react'
import {
  ActivityIndicator,
  Text,
  TouchableOpacity
} from 'react-native'

import styles from './Button.styles'
import Loader from '../../components/Loader'

export default class Button extends Component {
  _renderInnerText () {
    let textStyles = [styles.text]

    if (this.props.secondary) {
      textStyles.push(styles.textSecondary)
    }

    if (this.props.active) {
      textStyles.push(styles.active)
    }

    if (this.props.isLoading) {
      return (
        <Loader />
      )
    }

    return (
      <Text style={textStyles}>{this.props.text}</Text>
    )
  }

  render() {
    const {
      active,
      onPress,
      secondary,
      style
    } = this.props

    let styleNames = [styles.button]

    if (secondary) {
      styleNames.push(styles.secondary)
    }

    if (style) {
      styleNames.push(style)
    }

    return (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onPress}
        style={styleNames}>
        {this._renderInnerText()}
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  active: PropTypes.bool,
  activityIndicatorColor: PropTypes.string,
  isLoading: PropTypes.bool,
  onPress: PropTypes.func,
  secondary: PropTypes.bool,
  style: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number
    ])
  ),
  text: PropTypes.string
}
