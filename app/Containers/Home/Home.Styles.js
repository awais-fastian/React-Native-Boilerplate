import { StyleSheet } from 'react-native'
import { Theme } from 'Theme'

const { colors } = Theme

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
  buttonContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})

export default styles
