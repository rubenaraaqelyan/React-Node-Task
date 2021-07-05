import { takeLatest, call, put } from 'redux-saga/effects'
import {
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAIL,
  GET_TODOS_REQUEST,
  GET_TODOS_FAIL,
  GET_TODOS_SUCCESS,
  UPDATE_TODO_FAIL,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  DELETE_TODO_REQUEST,
  UPDATE_TODO_REQUEST,
} from '../actions/table';
import Api from '../../Api';

export default function* watcher() {
  yield takeLatest(CREATE_TODO_REQUEST, createTodo)
  yield takeLatest(GET_TODOS_REQUEST, getTodos)
  yield takeLatest(DELETE_TODO_REQUEST, deleteTodo)
  yield takeLatest(UPDATE_TODO_REQUEST, updateTodo)
}

function* createTodo(action) {
  try {
    const { title, description } = action.payload;
    const { data } = yield call(Api.createTodo, title, description)

    yield put({
      type: CREATE_TODO_SUCCESS,
      payload: data.todo,
    });

  } catch (err) {
    yield put({
      type: CREATE_TODO_FAIL,
      message: err.message,
    })
  }
}

function* getTodos() {
  try {

    const { data } = yield call(Api.getTodos)

    yield put({
      type: GET_TODOS_SUCCESS,
      payload: data.todos,
    });

  } catch (err) {
    yield put({
      type: GET_TODOS_FAIL,
      message: err.message,
    })
  }
}

function* deleteTodo(action) {
  try {
    const { id } = action.payload
    const { data } = yield call(Api.deleteTodo, id)

    yield put({
      type: DELETE_TODO_SUCCESS,
      payload: data.id,
    });

  } catch (err) {
    yield put({
      type: DELETE_TODO_FAIL,
      message: err.message,
    })
  }
}

function* updateTodo(action) {
  try {
    const { id, status } = action.payload
    const { data } = yield call(Api.updateTodo, id, status)

    yield put({
      type: UPDATE_TODO_SUCCESS,
      payload: data.todo,
    });

  } catch (err) {
    yield put({
      type: UPDATE_TODO_FAIL,
      message: err.message,
    })
  }
}
