import { StyleSheet } from 'react-native'
import { size } from '../../styles/mixins'
import colors from '../../constants/colors'

export default StyleSheet.create({
  image: {
    ...size(100),
    borderRadius: 50,
    borderWidth: 5,
    borderColor: colors.neonCarrot
  }
})
