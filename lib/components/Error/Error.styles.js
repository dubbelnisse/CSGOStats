import EStyleSheet from 'react-native-extended-stylesheet'
import colors from '../../constants/colors'
import { typography } from '../../styles/mixins'

export default EStyleSheet.create({
  error: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginTop: 10
  },
  message: {
    color: colors.white
  }
})
