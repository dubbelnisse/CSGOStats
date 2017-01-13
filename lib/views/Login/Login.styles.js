import { StyleSheet } from 'react-native'
import Dimensions from 'Dimensions'
const { height, width } = Dimensions.get('window')
import colors from '../../constants/colors'
import { center } from '../../styles/mixins'

export default StyleSheet.create({
  wrap: {
    ...center(),
    backgroundColor: colors.shark,
    height: height
  },
  inner: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: width
  },
  text: {
    color: colors.white
  },
  help: {
    color: colors.white,
    marginBottom: 30,
    fontSize: 12
  }
})
