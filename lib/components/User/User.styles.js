import { StyleSheet } from 'react-native'
import Dimensions from 'Dimensions'
const { height, width } = Dimensions.get('window')
import colors from '../../constants/colors'
import { center } from '../../styles/mixins'

export default StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  info: {
    paddingHorizontal: 20,
    width: width
  },
  name: {
    fontSize: 35,
    color: colors.white
  },
  id: {
    fontSize: 12,
    color: colors.white
  }
})
