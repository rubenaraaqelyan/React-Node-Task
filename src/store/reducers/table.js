import {
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  UPDATE_TODO_SUCCESS, DELETE_TODO_SUCCESS,
} from '../actions/table';

const initialState = {
  todos: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO_REQUEST: {
      return {
        ...state,
      }
    }
    case GET_TODOS_REQUEST: {
      return {
        ...state,
        todos: action.payload,
      }
    }
    case CREATE_TODO_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        todos: action.payload,
      }
    }
    case UPDATE_TODO_SUCCESS: {
      let todos = state.todos.filter(t => t.id !== action.payload.id)
      todos.push(action.payload)

      return {
        ...state,
        todos
      }
    }
    case DELETE_TODO_SUCCESS: {
      const todos = state.todos.filter(t => +t.id !== +action.payload)
      return {
        ...state,
        todos
      }
    }
    default: {
      return state
    }
  }
}