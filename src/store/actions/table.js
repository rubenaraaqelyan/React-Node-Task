export const CREATE_TODO_REQUEST = 'CREATE_TODO_REQUEST';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const CREATE_TODO_FAIL = 'CREATE_TODO_FAIL';

export function createTodo(data) {
  return {
    type: CREATE_TODO_REQUEST,
    payload: data,
  }
}

export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAIL = 'GET_TODOS_FAIL';

export function getTodos() {

  return {
    type: GET_TODOS_REQUEST,
    payload: {},
  }
}

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAIL = 'UPDATE_TODO_FAIL';

export function updateTodo({ id, status }) {
  return {
    type: UPDATE_TODO_REQUEST,
    payload: { id, status },
  }
}

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAIL = 'DELETE_TODO_FAIL';

export function deleteTodo(data) {
  return {
    type: DELETE_TODO_REQUEST,
    payload: data,
  }
}