import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from 'Redux/Types'

const initialState = {
  requesting: false,
  error: null,
  success: null,
  data: null,
}

export default function (state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: null,
        success: null,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        requesting: false,
        data: payload.user,
      }
    }
    case LOGOUT_ERROR: {
      return {
        requesting: false,
        error: payload.error,
      }
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: null,
        success: null,
      }
    }
    case REGISTER_SUCCESS: {
      return {
        requesting: false,
        data: payload.user,
      }
    }
    case REGISTER_ERROR: {
      return {
        requesting: false,
        error: payload.error,
      }
    }

    default:
      return state
  }
}
