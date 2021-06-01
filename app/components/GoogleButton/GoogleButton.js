import { GoogleSignin, statusCodes } from '@react-native-community/google-signin'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TouchableOpacity, View } from 'react-native'
import { withTheme } from 'react-native-paper'
import styles from './GoogleButton.Styles'

// uncomment and provide webClientId
GoogleSignin.configure({})

function GoogleButton({ theme }) {
  const { colors } = theme
  const [t, i18n] = useTranslation()

  const i18 = (key) => {
    return t(key)
  }

  const onPress = async () => {
    try {
      await GoogleSignin.hasPlayServices()

      const userInfo = await GoogleSignin.signIn()
      const token = await GoogleSignin.getTokens()

      console.log('userInfo', userInfo)
      console.log('token', token)

      const data = {
        user: {
          name: userInfo.user.name,
          type: 'google',
          idToken: userInfo.idToken,
          email: userInfo.user.email,
          token: token.accessToken,
          picture: userInfo.user.photo,
        },
      }

      console.log('before dispatch', data)
      // dispatch(googleLoginRequest(data));
      console.log('After dispatch', data)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGN_IN_CANCELLED', error.code)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN_PROGRESS', error.code)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE', error.code)
      } else {
        console.log(error.code)
      }
    }
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.button}>
        <Text style={{ color: colors.white }}>{i18('Component.continueWithGoogle')}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default withTheme(GoogleButton)
