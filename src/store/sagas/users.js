import { takeLatest, put, call } from 'redux-saga/effects';
import {
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,

} from "../actions/users";

import Api from "../../Api";

export default function* watcher() {
  yield takeLatest(USER_LOGIN_REQUEST, handleLogin)
  yield takeLatest(REGISTER_REQUEST, handleRegister)
}

function* handleLogin(action) {
  try {
    const { email, password } = action.payload;
    const { data } = yield call(Api.login, email, password)

    yield put({
      type: USER_LOGIN_SUCCESS,
      payload: { data },
    })
  } catch (e) {
    yield put({
      type: USER_LOGIN_FAIL,
      message: e.message,
    })
  }
}

function* handleRegister(action) {
  try {
    const { formData } = action.payload;
    const  data  = yield call(Api.register, formData)

    yield put({
      type: REGISTER_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    yield put({
      type: REGISTER_FAIL,
      message: e.message,
    })
  }
}

