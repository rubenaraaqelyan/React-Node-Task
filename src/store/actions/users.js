export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export function loginRequest(email, password) {
  return {
    type: USER_LOGIN_REQUEST,
    payload: { email, password },
  }
}

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export function registerRequest(formData) {
  return {
    type: REGISTER_REQUEST,
    payload: { formData },
  }
}


export const LOG_OUT = 'LOG_OUT'

export function logOut() {
  return {
    type: LOG_OUT,
    payload: {},
  }
}

