import { all, fork } from 'redux-saga/effects'
import AuthSaga from './Auth.Saga'

export default function* rootSaga() {
  yield all([fork(AuthSaga)])
}
