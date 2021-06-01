import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { withTheme } from 'react-native-paper'
import { FacebookButton, GoogleButton, MenuHeader } from 'Components'
import styles from './Home.Styles'

const Home = ({ navigation }) => {
  const [t, i18n] = useTranslation()

  const i18 = (key) => {
    return t(key)
  }

  return (
    <View style={styles.container}>
      <MenuHeader title={i18('Home.title')} navigation={navigation} />
      <View style={styles.buttonContainer}>
        <FacebookButton />
        <GoogleButton />
      </View>
    </View>
  )
}

export default withTheme(Home)
