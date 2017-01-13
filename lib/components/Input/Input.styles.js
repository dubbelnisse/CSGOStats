import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'
import { size } from '../../styles/mixins'

export default StyleSheet.create({
  icon: {
    ...size(15),
    marginHorizontal: 10
  },
  wrap: {
    marginBottom: 10
  },
  inputWrap: {
    alignItems: 'center',
    backgroundColor: colors.shark,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    flexDirection: 'row',
    paddingVertical: 10
  },
  label: {
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    color: colors.white,
    height: 40,
    flex: 1,
    paddingRight: 30
  }
})
