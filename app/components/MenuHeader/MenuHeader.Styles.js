import { StyleSheet } from 'react-native'
import { Theme } from 'Theme'

const { colors } = Theme

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderColor: 'black',
    width: '100%',
    padding: 5,
    backgroundColor: colors.primary,
  },
})

export default styles
