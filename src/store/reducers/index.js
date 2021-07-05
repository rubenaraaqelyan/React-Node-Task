import { combineReducers } from "redux";
import table from './table'
import users from "./users"

export default combineReducers({
  table,
  users
})

