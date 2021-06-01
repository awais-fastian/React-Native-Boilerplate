import AsyncStorage from '@react-native-community/async-storage'
import messaging from '@react-native-firebase/messaging'
import React, { useEffect, useRef } from 'react'
import { withTheme } from 'react-native-paper'
import NotificationPopup from 'react-native-push-notification-popup'

const PushNotification = (props) => {
  const popup = useRef(null)

  useEffect(() => {
    checkPermission()

    /*
     * Notification caused app to open from background state:
     * */
    messaging().onNotificationOpenedApp((notificationOpen) => {
      const { title, body, data } = notificationOpen.notification
      console.log(title, body, data)
    })

    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    messaging()
      .getInitialNotification()
      .then((notificationOpen) => {
        if (notificationOpen) {
          const { title, body, data } = notificationOpen.notification
          console.log(title, body, data)
        }
      })

    messaging().onMessage((message) => {
      // process data message
      console.log(message)
    })
  }, [])

  const getToken = async () => {
    const fcm_token = await messaging().getToken()
    await AsyncStorage.setItem('@fcm_token', fcm_token)
  }

  const checkPermission = async () => {
    const enabled = await messaging().hasPermission()
    const fcm_token = await AsyncStorage.getItem('@fcm_token')

    if (enabled && !fcm_token) {
      getToken()
    } else {
      requestPermission()
    }
  }

  const requestPermission = async () => {
    try {
      await messaging().requestPermission()
      getToken()
    } catch ({ message }) {
      console.log(message)
    }
  }

  return <NotificationPopup ref={popup} />
}

export default withTheme(PushNotification)
