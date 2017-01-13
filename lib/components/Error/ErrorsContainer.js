import { connect } from 'react-redux'
import Errors from './Errors'

function mapStateToProps (state) {
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps)(Errors)
