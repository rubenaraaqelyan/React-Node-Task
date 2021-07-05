import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, LOG_OUT, REGISTER_REQUEST} from "../actions/users";
import Account from '../../helpers/Account'

const initialState = {
  user: Account.get(),
  token: Account.getToken(),
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        token: '',
        user: {},
      }
    }
    case LOG_OUT: {
      Account.delete()
      return {
        ...state,
        token: '',
      }
    }
    case REGISTER_REQUEST: {
      return {
        ...state
      }
    }
    case USER_LOGIN_SUCCESS: {
      const { token, user} = action.payload.data.data;
      Account.set(user);
      Account.setToken(token);
      return {
        ...state,
        token,
        user,
      }
    }
    default: {
      return state;
    }
  }
}
