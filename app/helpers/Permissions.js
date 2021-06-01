import { Platform } from 'react-native'
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions'

const cameraPermission = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA

const checkCameraPermission = () => {
  check(cameraPermission)
    .then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log('This feature is not available (on this device / in this context)')
          break
        case RESULTS.DENIED:
          console.log('The permission has not been requested / is denied but requestable')
          break
        case RESULTS.GRANTED:
          console.log('The permission is granted')
          break
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore')
          break
        default:
          console.log('default case')
          break
      }
    })
    .catch(({ message }) => {
      console.log(message)
    })
}

export default {
  checkCameraPermission,
}
