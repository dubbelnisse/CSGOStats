import EStyleSheet from 'react-native-extended-stylesheet'
import colors from '../../constants/colors'
import { center } from '../../styles/mixins'

export default EStyleSheet.create({
  button: {
    ...center(),
    backgroundColor: colors.white,
    borderRadius: 30,
    height: 60
  },
  secondary: {
    backgroundColor: colors.white
  },
  text: {
    color: colors.shark,
    fontSize: 24
  },
  textSecondary: {
    color: colors.black
  },
  active: {
    color: colors.white,
    fontSize: 14
  }
})
