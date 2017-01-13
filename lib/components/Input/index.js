import React, { Component, PropTypes } from 'react'
import {
  Text,
  TextInput,
  View
} from 'react-native'

import styles from './Input.styles'

export default class Input extends Component {
  constructor (props) {
    super(props)

    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange (value) {
    this.props.onChange(this.props.name, value)
  }

  render() {
    return (
      <View style={styles.wrap}>
        <Text style={styles.label}>{this.props.label}</Text>
        <View style={styles.inputWrap}>
          <TextInput
            {...this.props}
            autoCapitalize="none"
            autoCorrect={this.props.autoCorrect}
            onChangeText={this._handleChange}
            placeholderTextColor="white"
            keyboardType={this.props.type || 'default'}
            secureTextEntry={this.props.secureTextEntry}
            style={styles.input}
            underlineColorAndroid="#fff" />
        </View>
      </View>
    )
  }
}

Input.propTypes = {
  autoCorrect: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  secureTextEntry: PropTypes.bool
}
