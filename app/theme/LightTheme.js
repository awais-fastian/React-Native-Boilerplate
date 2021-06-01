import { Dimensions } from 'react-native'
import LightThemeColors from './LightThemeColors'

const { width, height } = Dimensions.get('screen')

export default {
  button: {
    backgroundColor: LightThemeColors.primary,
  },
  header: {
    backgroundColor: LightThemeColors.primary,
  },
  colors: LightThemeColors,
  screen: {
    width,
    height,
  },
}
