import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TouchableOpacity, View } from 'react-native'
import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk'
import { withTheme } from 'react-native-paper'
import styles from './FacebookButton.Styles'

function FacebookButton({ theme }) {
  const { colors } = theme
  const [t, i18n] = useTranslation()

  const i18 = (key) => {
    return t(key)
  }

  const getUserProfile = (token) => {
    const infoRequest = new GraphRequest(
      '/me',
      {
        parameters: {
          fields: {
            string: 'name,first_name,email,picture.type(large)', // what you want to get
          },
          locale: {
            string: 'en_US',
          },
          access_token: {
            string: token.toString(), // put your accessToken here
          },
        },
      },
      (error, result) => {
        if (error) {
          console.log('Error fetching data: ', error)
        } else {
          console.log('facebook result', result)
          const data = {
            user: {
              name: result.name,
              provider: 'fb',
              email: result.email,
              token,
              image: result.picture.data.url,
            },
          }
          console.log('facebook action', data)
          // dispatch(facebookLoginRequest(data));
          console.log('After action', data)
        }
      },
    )
    new GraphRequestManager().addRequest(infoRequest).start()
  }

  const onPress = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      (result) => {
        console.log('in function', result)
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          console.log('AccessToken')
          AccessToken.getCurrentAccessToken().then((response) => {
            getUserProfile(response.accessToken)
          })
        }
      },
      (error) => {
        console.log(`Login fail with error: ${error}`)
      },
    )
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.button}>
        <Text style={{ color: colors.white }}>{i18('Component.continueWithFacebook')}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default withTheme(FacebookButton)
