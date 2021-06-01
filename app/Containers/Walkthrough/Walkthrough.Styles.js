import { StyleSheet } from 'react-native'
import { Theme } from 'Theme'

const { colors } = Theme

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'grey',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
  itemContainer: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: colors.background,
  },
  skip: { position: 'absolute', top: 20, right: 20 },
  title: {
    color: colors.primary,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
  },
  description: {
    color: colors.primary,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
})

export default styles
