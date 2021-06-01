import AsyncStorage from '@react-native-community/async-storage'
import { all, call, fork, put, take } from 'redux-saga/effects'
import { authActionsCreator } from 'Redux/Actions'
import { login, signUp } from 'Redux/Api'
import { LOGIN_REQUEST, REGISTER_REQUEST } from 'Redux/Types'

function* loginSaga({ payload }) {
  try {
    const response = yield call(login, payload)
    if (response.success) {
      AsyncStorage.setItem('@token', response.success.token)
      const user = {
        ...response.user,
        token: response.success.token,
      }
      yield put(authActionsCreator.loginSuccess({ user }))
    }
  } catch (err) {
    yield put(
      authActionsCreator.loginError({
        error: err || 'User Login Failed!',
      }),
    )
  }
}

function* signupSaga({ payload }) {
  try {
    const response = yield call(signUp, payload)
    if (response.success) {
      AsyncStorage.setItem('@token', response.success.token)
      const user = {
        ...response.success.user,
        token: response.success.token,
      }
      yield put(authActionsCreator.registerSuccess({ user }))
    }
  } catch (error) {
    yield put(
      authActionsCreator.registerError({
        error: error || 'User Signup Failed',
      }),
    )
  }
}

function* watchLogin() {
  while (true) {
    const action = yield take(LOGIN_REQUEST)
    yield* loginSaga(action)
  }
}

function* watchSignup() {
  while (true) {
    const action = yield take(REGISTER_REQUEST)
    yield* signupSaga(action)
  }
}

export default function* () {
  yield all([fork(watchLogin), fork(watchSignup)])
}
