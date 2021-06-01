/* eslint-disable no-undef */
import { NativeModules, NativeModules as RNNativeModules } from 'react-native'

NativeModules.RNCNetInfo = {
  getCurrentState: jest.fn(() => Promise.resolve()),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
}

RNNativeModules.UIManager = RNNativeModules.UIManager || {}
RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {}
RNNativeModules.RNGestureHandlerModule = RNNativeModules.RNGestureHandlerModule || {
  State: { BEGAN: 'BEGAN', FAILED: 'FAILED', ACTIVE: 'ACTIVE', END: 'END' },
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
}
RNNativeModules.PlatformConstants = RNNativeModules.PlatformConstants || {
  forceTouchAvailable: false,
}
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')
