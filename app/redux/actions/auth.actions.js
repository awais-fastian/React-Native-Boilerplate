import { createAction } from 'redux-actions'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_ERROR,
  FACEBOOK_LOGIN_REQUEST,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_ERROR,
} from 'Redux/Types'

export const authActionsCreator = {
  loginRequest: createAction(LOGIN_REQUEST),
  loginSuccess: createAction(LOGIN_SUCCESS),
  loginError: createAction(LOGIN_ERROR),

  registerRequest: createAction(REGISTER_REQUEST),
  registerSuccess: createAction(REGISTER_SUCCESS),
  registerError: createAction(REGISTER_ERROR),

  googleLoginRequest: createAction(GOOGLE_LOGIN_REQUEST),
  googleLoginSuccess: createAction(GOOGLE_LOGIN_SUCCESS),
  googleLoginError: createAction(GOOGLE_LOGIN_ERROR),

  facebookLoginRequest: createAction(FACEBOOK_LOGIN_REQUEST),
  facebookLoginSuccess: createAction(FACEBOOK_LOGIN_SUCCESS),
  facebookLoginError: createAction(FACEBOOK_LOGIN_ERROR),
}
