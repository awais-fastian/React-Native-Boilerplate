import { Appearance } from 'react-native'
import DarkTheme from './DarkTheme'
import LightTheme from './LightTheme'

const colorScheme = Appearance.getColorScheme()
const Theme = colorScheme === 'dark' ? DarkTheme : LightTheme

export { Theme }
