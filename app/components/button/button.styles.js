import { StyleSheet } from 'react-native'
import { Theme } from 'Theme'

const { colors } = Theme

const styles = StyleSheet.create({
  label: { fontWeight: 'bold', fontSize: 16 },
  container: {
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginVertical: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
