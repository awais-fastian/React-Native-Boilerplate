import React, { Suspense, useEffect } from 'react'
import { Platform, SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { DropDownHolder, PushNotification } from 'Components'
import { Root } from 'native-base'
import AppNavigator from 'Navigation'
import codePush from 'react-native-code-push'
import DropdownAlert from 'react-native-dropdownalert'
import 'react-native-gesture-handler'
import { Provider as PaperProvider } from 'react-native-paper'
import { enableScreens } from 'react-native-screens'
import SplashScreen from 'react-native-splash-screen'
import AppStateProvider from 'Redux/Provider'
import { Theme } from 'Theme'

enableScreens()

const App = () => {
  useEffect(() => {
    console.disableYellowBox = true
    if (Platform.OS === 'android') {
      SplashScreen.hide()
    }
  }, [])

  return (
    <Suspense fallback={null}>
      <Root>
        <SafeAreaView style={styles.container}>
          <PaperProvider>
            <NavigationContainer Theme={Theme}>
              <AppNavigator />
              <PushNotification />
              <DropdownAlert ref={(ref) => DropDownHolder.setDropDown(ref)} />
            </NavigationContainer>
          </PaperProvider>
        </SafeAreaView>
      </Root>
    </Suspense>
  )
}

const codePushOptions = {
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
}

export default codePush(codePushOptions)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
